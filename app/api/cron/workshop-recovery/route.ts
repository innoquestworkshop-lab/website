import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createPaymentLink, disablePaymentLink } from "@/lib/beam";
import { escapeHtml, supabaseAdmin } from "@/lib/workshops";
import { site } from "@/data/site";

const RECOVERY_HOURS = 24;
// A slow payer may still be finishing on the first link (a scanned QR, say).
const GRACE_MINUTES = 30;
// The job runs hourly, so a link any shorter could arrive too late to use.
const MIN_HOURS_BEFORE_START = 1;
const BATCH = 10;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://innoquest.tech";
const UNPAID = ["held", "expired"];

export const maxDuration = 60;

const sameName = (a: string, b: string) => a.trim().toLowerCase() === b.trim().toLowerCase();

/**
 * Hourly recovery of abandoned workshop sign-ups, called by pg_cron (the website's
 * Vercel plan allows only daily crons): see scripts/60 in the InnoQuest app repo.
 *
 * A sign-up whose hold lapsed unpaid gets one fresh link, valid 24h or until the
 * workshop starts, and no seat is held. It is still sent when the workshop is full,
 * in case a seat frees up. confirm_workshop_payment does the capacity check on
 * payment, and the webhook sends anything it cannot confirm to an admin.
 *
 * Guarded by CRON_SECRET: inert (401) while unset.
 */
export async function GET(req: NextRequest) {
  const secret = process.env.CRON_SECRET;
  if (!secret || req.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const db = supabaseAdmin();
  const now = Date.now();

  const { data: abandoned, error } = await db
    .from("workshop_signups")
    .select("id, workshop_id, amount_satang, email, student_name, locale, beam_payment_link_id, workshops!inner(title_th, title_en, status, starts_at)")
    .is("paid_at", null)
    .is("recovery_sent_at", null)
    .not("beam_payment_link_id", "is", null)
    .in("status", UNPAID)
    .lt("hold_expires_at", new Date(now - GRACE_MINUTES * 60 * 1000).toISOString())
    .eq("workshops.status", "open")
    .gt("workshops.starts_at", new Date(now + MIN_HOURS_BEFORE_START * 60 * 60 * 1000).toISOString())
    .order("created_at", { ascending: false })
    .limit(BATCH);
  if (error) {
    console.error("Workshop recovery query failed", error);
    return NextResponse.json({ error: "query" }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  let recovered = 0;
  let skipped = 0;

  for (const s of abandoned ?? []) {
    // Claim first so a concurrent run or a retry cannot send twice.
    const { data: claimed } = await db
      .from("workshop_signups")
      .update({ recovery_sent_at: new Date().toISOString() })
      .eq("id", s.id)
      .is("recovery_sent_at", null)
      .is("paid_at", null)
      .in("status", UNPAID)
      .select("id")
      .maybeSingle();
    if (!claimed) continue;

    try {
      // The same student already has a seat, a live attempt or a recovery link, so a
      // second link could charge twice. The claim stays: it also takes this row out
      // of the queue, or skipped rows would fill every batch.
      const { data: others } = await db
        .from("workshop_signups")
        .select("id, status, hold_expires_at, student_name, recovery_sent_at")
        .eq("workshop_id", s.workshop_id)
        .in("status", ["paid", "needs_review", ...UNPAID]);
      const duplicate = (others ?? []).some(
        (o) =>
          o.id !== s.id &&
          sameName(o.student_name, s.student_name) &&
          (o.status === "paid" ||
            o.status === "needs_review" ||
            !!o.recovery_sent_at ||
            (o.status === "held" && Date.parse(o.hold_expires_at) > Date.now()))
      );
      if (duplicate) {
        skipped++;
        continue;
      }

      // One live link at a time: retire the old one before issuing the new one.
      await disablePaymentLink(s.beam_payment_link_id);

      const workshop = s.workshops as unknown as { title_th: string; title_en: string | null; starts_at: string };
      const th = s.locale === "th";
      const plainTitle = th ? workshop.title_th : workshop.title_en ?? workshop.title_th;
      const title = escapeHtml(plainTitle);
      const name = escapeHtml(s.student_name);
      const expiresAt = new Date(Math.min(Date.now() + RECOVERY_HOURS * 60 * 60 * 1000, Date.parse(workshop.starts_at)));
      const hours = Math.floor((expiresAt.getTime() - Date.now()) / (60 * 60 * 1000));

      const link = await createPaymentLink({
        amountSatang: s.amount_satang,
        description: plainTitle,
        referenceId: s.id,
        redirectUrl: `${SITE_URL}/signup/thanks?id=${s.id}`,
        expiresAt,
      });

      // Paid or cancelled in the seconds since the claim: withdraw the new link.
      const { data: saved } = await db
        .from("workshop_signups")
        .update({ beam_payment_link_id: link.id })
        .eq("id", s.id)
        .is("paid_at", null)
        .in("status", UNPAID)
        .select("id")
        .maybeSingle();
      if (!saved) {
        await disablePaymentLink(link.id);
        skipped++;
        continue;
      }

      const { error: emailError } = await resend.emails.send({
        from: "InnoQuest <no-reply@innoquest.tech>",
        to: s.email,
        subject: th ? `ชำระเงินให้เสร็จสิ้น: ${plainTitle}` : `Finish your sign-up: ${plainTitle}`,
        html: th
          ? `<p>การลงทะเบียนของ ${name} ใน ${title} ยังไม่เสร็จสมบูรณ์ โปรดชำระเงินภายใน ${hours} ชั่วโมงเพื่อยืนยันที่นั่ง</p><p><a href="${link.url}">ชำระเงินที่นี่</a></p><p>ที่นั่งจะถูกจองเมื่อชำระเงินสำเร็จเท่านั้น หากมีข้อสงสัย โปรดติดต่อ ${site.contact.phone}</p>`
          : `<p>${name}'s sign-up for ${title} isn't finished yet. Pay within ${hours} hours to confirm the seat.</p><p><a href="${link.url}">Pay here</a></p><p>The seat is reserved only once payment is complete. Questions? Contact ${site.contact.phone}.</p>`,
      });
      // Resend reports failures in its return value rather than by throwing.
      if (emailError) throw new Error(`Resend: ${emailError.message}`);
      recovered++;
    } catch (err) {
      console.error("Workshop recovery failed for sign-up", s.id, err);
      // Release the claim so a later run can retry this one.
      await db.from("workshop_signups").update({ recovery_sent_at: null }).eq("id", s.id);
    }
  }

  return NextResponse.json({ received: true, scanned: abandoned?.length ?? 0, recovered, skipped });
}
