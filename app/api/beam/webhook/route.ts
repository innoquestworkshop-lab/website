import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { findPaidChargeId, verifyBeamSignature } from "@/lib/beam";
import { supabaseAdmin } from "@/lib/workshops";
import { site } from "@/data/site";

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

async function sendConfirmation(signupId: string) {
  const db = supabaseAdmin();
  // Claim the send first, so a repeated webhook cannot email twice.
  const { data: claimed } = await db
    .from("workshop_signups")
    .update({ confirmation_sent_at: new Date().toISOString() })
    .eq("id", signupId)
    .is("confirmation_sent_at", null)
    .select("email, student_name, locale, status, workshops(title_th, title_en)")
    .maybeSingle();
  if (!claimed) return;

  const workshop = claimed.workshops as unknown as { title_th: string; title_en: string | null };
  const th = claimed.locale === "th";
  const title = escapeHtml(th ? workshop.title_th : workshop.title_en ?? workshop.title_th);
  const name = escapeHtml(claimed.student_name);
  const resend = new Resend(process.env.RESEND_API_KEY);
  const from = "InnoQuest <no-reply@innoquest.tech>";

  await resend.emails.send({
    from,
    to: claimed.email,
    subject: th ? `ยืนยันการลงทะเบียน ${workshop.title_th}` : `Registration confirmed: ${workshop.title_en ?? workshop.title_th}`,
    html: th
      ? `<p>InnoQuest ได้รับการชำระเงินเรียบร้อยแล้ว และขอยืนยันการลงทะเบียนของ ${name} ใน ${title}</p><p>หากมีข้อสงสัย โปรดติดต่อ ${site.contact.phone} หรือ ${site.contact.email}</p>`
      : `<p>InnoQuest has received your payment and confirmed ${name}'s place in ${title}.</p><p>Questions? Contact ${site.contact.phone} or ${site.contact.email}.</p>`,
  });
  await resend.emails.send({
    from,
    to: site.contact.email,
    subject: `New paid sign-up: ${workshop.title_en ?? workshop.title_th}`,
    html: `<p>${name} is confirmed for ${title}.</p>`,
  });
}

/** A recovery payer paid, but the workshop filled up in the meantime (no seat was
 *  held during the 24h window). The money is captured — don't refund. Ask an admin
 *  to approve an extra seat or refund, and reassure the payer without promising a seat.
 *  Relies on confirm_workshop_payment returning "overflow" only on the first transition,
 *  so this sends exactly once. */
async function handleOverflow(signupId: string) {
  const db = supabaseAdmin();
  const { data: s } = await db
    .from("workshop_signups")
    .select("email, student_name, locale, workshops(title_th, title_en)")
    .eq("id", signupId)
    .maybeSingle();
  if (!s) return;

  const workshop = s.workshops as unknown as { title_th: string; title_en: string | null };
  const title = escapeHtml(workshop.title_en ?? workshop.title_th);
  const name = escapeHtml(s.student_name ?? "");
  const resend = new Resend(process.env.RESEND_API_KEY);
  const from = "InnoQuest <no-reply@innoquest.tech>";

  await resend.emails.send({
    from,
    to: site.contact.email,
    subject: `Paid but full — approve or refund: ${workshop.title_en ?? workshop.title_th}`,
    html: `<p>${name} paid for ${title}, but it is now full. Approve an extra seat or refund in the workshop admin.</p><p>Sign-up id: ${signupId}</p>`,
  });

  const th = s.locale === "th";
  await resend.emails.send({
    from,
    to: s.email,
    subject: th ? `ได้รับการชำระเงินแล้ว: ${workshop.title_th}` : `Payment received: ${workshop.title_en ?? workshop.title_th}`,
    html: th
      ? `<p>InnoQuest ได้รับการชำระเงินของ ${name} สำหรับ ${title} แล้ว เรากำลังยืนยันที่นั่งและจะติดต่อกลับโดยเร็วที่สุด</p>`
      : `<p>InnoQuest has received your payment for ${name} (${title}). We're confirming the seat and will be in touch shortly.</p>`,
  });
}

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  if (!verifyBeamSignature(rawBody, req.headers.get("x-beam-signature"))) {
    return NextResponse.json({ error: "invalid signature" }, { status: 401 });
  }
  const event = req.headers.get("x-beam-event");

  // A refund Beam accepted can still fail. Put the sign-up back in front of an
  // admin instead of leaving it marked refunded.
  if (event === "refund.failed") {
    const { refundId } = JSON.parse(rawBody) as { refundId: string };
    await supabaseAdmin()
      .from("workshop_signups")
      .update({ status: "needs_review", refunded_at: null, refunded_by: null })
      .eq("beam_refund_id", refundId)
      .eq("status", "refunded");
    return NextResponse.json({ received: true });
  }

  // A refund Beam confirms as succeeded: let an admin know it completed.
  if (event === "refund.succeeded") {
    const { refundId } = JSON.parse(rawBody) as { refundId: string };
    const { data: refunded } = await supabaseAdmin()
      .from("workshop_signups")
      .select("student_name, workshops(title_th, title_en)")
      .eq("beam_refund_id", refundId)
      .maybeSingle();
    if (refunded) {
      const workshop = refunded.workshops as unknown as { title_th: string; title_en: string | null };
      const title = escapeHtml(workshop.title_en ?? workshop.title_th);
      const name = escapeHtml(refunded.student_name ?? "");
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "InnoQuest <no-reply@innoquest.tech>",
        to: site.contact.email,
        subject: `Refund completed: ${workshop.title_en ?? workshop.title_th}`,
        html: `<p>The refund for ${name} (${title}) has completed successfully.</p>`,
      });
    }
    return NextResponse.json({ received: true });
  }

  if (event !== "payment_link.paid") {
    return NextResponse.json({ received: true });
  }

  const { paymentLinkId, order } = JSON.parse(rawBody) as {
    paymentLinkId: string;
    order: { netAmount: number; referenceId: string };
  };

  const db = supabaseAdmin();
  const { data: signup } = await db
    .from("workshop_signups")
    .select("id, amount_satang")
    .eq("beam_payment_link_id", paymentLinkId)
    .maybeSingle();
  // Beam retries any non-2xx up to 10x with backoff. The two cases below can
  // never succeed on a retry, so acknowledge (2xx) to stop the retries; the
  // error log is the signal. Neither path confirms payment or emails anyone.
  if (!signup) {
    console.error("Beam webhook for unknown payment link", paymentLinkId);
    return NextResponse.json({ received: true, ignored: "unknown link" });
  }
  if (order.netAmount !== signup.amount_satang || order.referenceId !== signup.id) {
    console.error("Beam webhook mismatch for sign-up", signup.id);
    return NextResponse.json({ received: true, ignored: "mismatch" });
  }

  const chargeId = await findPaidChargeId(paymentLinkId);
  const { data: status, error } = await db.rpc("confirm_workshop_payment", {
    p_payment_link_id: paymentLinkId,
    p_charge_id: chargeId,
  });
  if (error) return NextResponse.json({ error: "failed" }, { status: 500 });

  if (status === "paid") await sendConfirmation(signup.id);
  else if (status === "overflow") await handleOverflow(signup.id);
  return NextResponse.json({ received: true, status });
}
