import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createPaymentLink, disablePaymentLink } from "@/lib/beam";
import { supabaseAdmin } from "@/lib/workshops";
import { site } from "@/data/site";

// Recovery window for an abandoned sign-up: a fresh single-use link valid this long.
const RECOVERY_HOURS = 24;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://innoquest.tech";
// How many sign-ups to process per run, to stay well inside the function timeout.
const BATCH = 25;

/**
 * Scheduled recovery of abandoned workshop sign-ups.
 *
 * A sign-up that got a Beam link but whose 15-minute hold lapsed unpaid is "abandoned":
 * the seat has already freed. This job gives it one more chance with a fresh single-use
 * link valid for 24h — without holding a seat. Paying it runs the normal capacity check
 * (confirm_workshop_payment); if the workshop filled up, the webhook routes it to an admin.
 *
 * Guarded by CRON_SECRET. Vercel Cron sends `Authorization: Bearer <CRON_SECRET>`.
 * If CRON_SECRET is unset, the route is inert (401) — safe before the DB migration lands.
 *
 * DEPENDS ON (see PRD): the additive column `recovery_sent_at` on workshop_signups.
 */
export async function GET(req: NextRequest) {
  const secret = process.env.CRON_SECRET;
  if (!secret || req.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const db = supabaseAdmin();
  const nowIso = new Date().toISOString();

  // Abandoned = had a link, never paid, hold lapsed, not already recovered or terminal.
  const { data: abandoned, error } = await db
    .from("workshop_signups")
    .select("id, amount_satang, email, student_name, locale, beam_payment_link_id, workshops(title_th, title_en)")
    .is("paid_at", null)
    .is("recovery_sent_at", null)
    .not("beam_payment_link_id", "is", null)
    .lt("hold_expires_at", nowIso)
    .not("status", "in", "(paid,refunded,needs_review,cancelled)")
    .limit(BATCH);
  if (error) {
    console.error("Workshop recovery query failed", error);
    return NextResponse.json({ error: "query" }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const expiresAt = new Date(Date.now() + RECOVERY_HOURS * 60 * 60 * 1000);
  let recovered = 0;

  for (const s of abandoned ?? []) {
    // Claim first so a concurrent run or a retry cannot send twice.
    const { data: claimed } = await db
      .from("workshop_signups")
      .update({ recovery_sent_at: new Date().toISOString() })
      .eq("id", s.id)
      .is("recovery_sent_at", null)
      .select("id")
      .maybeSingle();
    if (!claimed) continue;

    try {
      // One live link at a time: retire the old one before issuing the new one.
      if (s.beam_payment_link_id) await disablePaymentLink(s.beam_payment_link_id);

      const workshop = s.workshops as unknown as { title_th: string; title_en: string | null };
      const th = s.locale === "th";
      const title = th ? workshop.title_th : workshop.title_en ?? workshop.title_th;
      const name = s.student_name ?? "";

      const link = await createPaymentLink({
        amountSatang: s.amount_satang,
        description: th ? workshop.title_th : workshop.title_en ?? workshop.title_th,
        referenceId: s.id,
        redirectUrl: `${SITE_URL}/signup/thanks?id=${s.id}`,
        expiresAt,
      });
      await db.from("workshop_signups").update({ beam_payment_link_id: link.id }).eq("id", s.id);

      await resend.emails.send({
        from: "InnoQuest <no-reply@innoquest.tech>",
        to: s.email,
        subject: th ? `ชำระเงินให้เสร็จสิ้น: ${workshop.title_th}` : `Finish your sign-up: ${workshop.title_en ?? workshop.title_th}`,
        html: th
          ? `<p>การลงทะเบียนของ ${name} ใน ${title} ยังไม่เสร็จสมบูรณ์ โปรดชำระเงินภายใน ${RECOVERY_HOURS} ชั่วโมงเพื่อยืนยันที่นั่ง</p><p><a href="${link.url}">ชำระเงินที่นี่</a></p><p>ที่นั่งจะถูกจองเมื่อชำระเงินสำเร็จเท่านั้น หากมีข้อสงสัย โปรดติดต่อ ${site.contact.phone}</p>`
          : `<p>${name}'s sign-up for ${title} isn't finished yet. Pay within ${RECOVERY_HOURS} hours to confirm the seat.</p><p><a href="${link.url}">Pay here</a></p><p>The seat is reserved only once payment is complete. Questions? Contact ${site.contact.phone}.</p>`,
      });
      recovered++;
    } catch (err) {
      console.error("Workshop recovery failed for sign-up", s.id, err);
      // Release the claim so a later run can retry this one.
      await db.from("workshop_signups").update({ recovery_sent_at: null }).eq("id", s.id);
    }
  }

  return NextResponse.json({ received: true, scanned: abandoned?.length ?? 0, recovered });
}
