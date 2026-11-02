import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createPaymentLink, disablePaymentLink } from "@/lib/beam";
import { escapeHtml, supabaseAdmin } from "@/lib/workshops";
import { site } from "@/data/site";

const RECOVERY_HOURS = 24;
// Soon after the first link expires, while the person is still interested. If they
// were finishing on that link, the webhook keeps the payment and disables this one.
const GRACE_MINUTES = 5;
// A link any shorter would be too little time to act on the email.
const MIN_HOURS_BEFORE_START = 1;
const BATCH = 10;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://innoquest.tech";
const UNPAID = ["held", "expired"];

export const maxDuration = 60;

const dateText = (iso: string, th: boolean, withTime: boolean) =>
  new Date(iso).toLocaleString(th ? "th-TH" : "en-GB", {
    timeZone: "Asia/Bangkok",
    dateStyle: "long",
    ...(withTime ? { timeStyle: "short" as const } : {}),
  });

function recoveryEmail(p: { th: boolean; plainTitle: string; name: string; startsAt: string; payBy: string; url: string }) {
  const title = escapeHtml(p.plainTitle);
  const name = escapeHtml(p.name);
  const starts = escapeHtml(dateText(p.startsAt, p.th, false));
  const payBy = escapeHtml(dateText(p.payBy, p.th, true));
  const url = escapeHtml(p.url);
  const t = p.th
    ? {
        subject: `ยังไม่ได้ชำระเงิน: ${p.plainTitle}`,
        heading: "อีกขั้นเดียวก็ลงทะเบียนเสร็จ",
        body: `เราได้รับใบสมัครของ <strong>${name}</strong> สำหรับ <strong>${title}</strong> (${starts}) แล้ว แต่ยังไม่ได้รับการชำระเงิน`,
        button: "ชำระเงิน",
        deadline: `ลิงก์นี้ใช้ได้ถึง ${payBy} ที่นั่งจะยืนยันเมื่อชำระเงินแล้วเท่านั้น`,
        help: `หากมีข้อสงสัย โทร ${site.contact.phone}`,
      }
    : {
        subject: `Finish signing up for ${p.plainTitle}`,
        heading: "One step left",
        body: `We have <strong>${name}</strong>'s sign-up for <strong>${title}</strong> (${starts}), but the payment hasn't come through yet.`,
        button: "Complete payment",
        deadline: `This link works until ${payBy}. The seat is confirmed once payment goes through.`,
        help: `Questions? Call ${site.contact.phone}.`,
      };
  return {
    subject: t.subject,
    html: `<div style="max-width:520px;margin:0 auto;padding:32px 16px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.6;color:#000000;">
<p style="margin:0 0 24px;font-size:20px;font-weight:bold;">InnoQuest</p>
<h1 style="margin:0 0 12px;font-size:24px;line-height:1.3;">${t.heading}</h1>
<p style="margin:0 0 24px;">${t.body}</p>
<p style="margin:0 0 24px;"><a href="${url}" style="display:inline-block;background:#E63946;color:#ffffff;text-decoration:none;font-weight:bold;padding:12px 24px;border-radius:6px;">${t.button}</a></p>
<p style="margin:0 0 8px;font-size:14px;color:#444444;">${t.deadline}</p>
<p style="margin:0;font-size:14px;color:#444444;">${t.help}</p>
</div>`,
  };
}

const sameName = (a: string, b: string) => a.trim().toLowerCase() === b.trim().toLowerCase();

/**
 * Recovery of abandoned workshop sign-ups, called every 5 minutes by pg_cron (the website's
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
        ...recoveryEmail({
          th,
          plainTitle,
          name: s.student_name,
          startsAt: workshop.starts_at,
          payBy: expiresAt.toISOString(),
          url: link.url,
        }),
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
