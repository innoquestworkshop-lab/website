import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { disablePaymentLink, findPaidCharge, verifyBeamSignature } from "@/lib/beam";
import { escapeHtml, supabaseAdmin } from "@/lib/workshops";
import { emailFooter } from "@/lib/email-footer";
import { confirmationEmail, type ConfirmationWorkshop } from "@/lib/confirmation-email";
import { site } from "@/data/site";
import { draftReceipt, notifyBillingMoneyIn, notifyWorkshopMoneyIn } from "@/lib/receipts";
import { receiptRequestUrl, siteOrigin } from "@/lib/receipt-token";

async function sendConfirmation(signupId: string) {
  const db = supabaseAdmin();
  // Claim the send first, so a repeated webhook cannot email twice.
  const { data: claimed } = await db
    .from("workshop_signups")
    .update({ confirmation_sent_at: new Date().toISOString() })
    .eq("id", signupId)
    .is("confirmation_sent_at", null)
    .select(
      "email, student_name, locale, status, filled_by, amount_satang, workshops(title_th, title_en, starts_at, ends_at, location_th, location_en, line_group_url, line_qr_path)"
    )
    .maybeSingle();
  if (!claimed) return;

  const workshop = claimed.workshops as unknown as ConfirmationWorkshop;
  const th = claimed.locale === "th";
  const title = escapeHtml(th ? workshop.title_th : workshop.title_en ?? workshop.title_th);
  const name = escapeHtml(claimed.student_name);
  const resend = new Resend(process.env.RESEND_API_KEY);
  const from = "InnoQuest <no-reply@innoquest.tech>";

  await resend.emails.send({
    from,
    to: claimed.email,
    subject: th ? `ยืนยันการลงทะเบียน ${workshop.title_th}` : `Registration confirmed: ${workshop.title_en ?? workshop.title_th}`,
    html: confirmationEmail({
      th,
      filledBy: claimed.filled_by,
      studentName: claimed.student_name,
      amountSatang: claimed.amount_satang,
      workshop,
      receiptUrl: receiptRequestUrl(siteOrigin(), signupId),
    }),
  });
  await resend.emails.send({
    from,
    to: site.contact.email,
    subject: `New paid sign-up: ${workshop.title_en ?? workshop.title_th}`,
    html: `<p>${name} is confirmed for ${title}.</p>`,
  });
}

const REVIEW_SUBJECT: Record<string, string> = {
  paid_over_capacity: "Paid but full",
  paid_workshop_closed: "Paid but closed",
  paid_after_cancel: "Paid after cancelling",
};

/** Money was captured but no seat confirmed: the workshop is full or closed, or the
 *  sign-up was cancelled. Ask an admin to approve a seat or refund, and reassure the
 *  payer without promising a seat. confirm_workshop_payment returns "overflow" only on
 *  the first transition, so this sends once. */
async function handleOverflow(signupId: string) {
  const db = supabaseAdmin();
  const { data: s } = await db
    .from("workshop_signups")
    .select("email, student_name, locale, review_reason, workshops(title_th, title_en)")
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
    subject: `${REVIEW_SUBJECT[s.review_reason ?? ""] ?? "Payment to review"} — approve or refund: ${workshop.title_en ?? workshop.title_th}`,
    html: `<p>${name} paid for ${title}, but no seat could be confirmed (${escapeHtml(s.review_reason ?? "unknown reason")}). Review it in the workshop admin.</p><p>Sign-up id: ${signupId}</p>`,
  });

  const th = s.locale === "th";
  await resend.emails.send({
    from,
    to: s.email,
    subject: th ? `ได้รับการชำระเงินแล้ว: ${workshop.title_th}` : `Payment received: ${workshop.title_en ?? workshop.title_th}`,
    html: th
      ? `<p>InnoQuest ได้รับการชำระเงินของ ${name} สำหรับ ${title} แล้ว เรากำลังยืนยันที่นั่งและจะติดต่อกลับโดยเร็วที่สุด</p>${emailFooter(true)}`
      : `<p>InnoQuest has received your payment for ${name} (${title}). We're confirming the seat and will be in touch shortly.</p>${emailFooter(false)}`,
  });
}

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/** An app billing document paid through its Beam link: mark it paid once and log it.
 *  Mismatches and unknown documents are acknowledged (2xx) so Beam stops retrying. */
async function markBillingPaid(paymentLinkId: string, order: { netAmount: number; referenceId: string }) {
  const id = order.referenceId.slice("billing:".length);
  if (!UUID.test(id)) {
    console.error("Beam webhook with a malformed billing reference", order.referenceId);
    return NextResponse.json({ received: true, ignored: "bad reference" });
  }
  const db = supabaseAdmin();
  const { data: doc } = await db
    .from("billing_documents")
    .select("id, status, number, bill_to, net_payable_satang, beam_link_id")
    .eq("id", id)
    .maybeSingle();
  if (!doc) {
    console.error("Beam webhook for unknown billing document", id);
    return NextResponse.json({ received: true, ignored: "unknown document" });
  }
  if (Number(doc.net_payable_satang) !== order.netAmount) {
    console.error("Beam webhook amount mismatch for billing document", id);
    return NextResponse.json({ received: true, ignored: "mismatch" });
  }
  if (doc.status === "paid") return NextResponse.json({ received: true, status: "already paid" });

  const charge = await findPaidCharge(paymentLinkId).catch(() => null);
  const chargeId = charge?.chargeId ?? null;
  // Only an issued document moves to paid; the status filter makes a repeat webhook a no-op.
  const { data: updated, error } = await db
    .from("billing_documents")
    .update({
      status: "paid",
      paid_at: new Date().toISOString(),
      paid_method: "Beam",
      paid_reference: chargeId ?? paymentLinkId,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .eq("status", "issued")
    .select("id")
    .maybeSingle();
  if (error) return NextResponse.json({ error: "failed" }, { status: 500 });
  if (!updated) {
    console.error("Beam payment for a billing document that is not issued", id, doc.status);
    return NextResponse.json({ received: true, ignored: `status ${doc.status}` });
  }
  await db.from("billing_document_events").insert({
    document_id: id,
    action: "paid_beam",
    done_by: null,
    changes: { status: { from: "issued", to: "paid" } },
  });
  await notifyBillingMoneyIn(db, {
    documentId: id,
    number: doc.number ?? null,
    payer: (doc.bill_to as { name?: string } | null)?.name ?? "",
    amountSatang: Number(doc.net_payable_satang),
    paymentLinkId,
    method: charge?.method ?? null,
  });
  return NextResponse.json({ received: true, status: "paid" });
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
      .update({ status: "needs_review", review_reason: "refund_failed", refunded_at: null, refunded_by: null })
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

  // Billing documents (invoices issued from the app) use referenceId "billing:<uuid>".
  if (order.referenceId?.startsWith("billing:")) {
    return markBillingPaid(paymentLinkId, order);
  }

  // The recovery job replaces beam_payment_link_id, so a late payment on the old
  // link no longer matches it. The signed referenceId still names the sign-up.
  const columns = "id, amount_satang, beam_payment_link_id";
  const { data: byLink } = await db.from("workshop_signups").select(columns).eq("beam_payment_link_id", paymentLinkId).maybeSingle();
  const { data: byReference } =
    !byLink && UUID.test(order.referenceId ?? "")
      ? await db.from("workshop_signups").select(columns).eq("id", order.referenceId).maybeSingle()
      : { data: null };
  const signup = byLink ?? byReference;
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

  const charge = await findPaidCharge(paymentLinkId);
  const { data: status, error } = await db.rpc("confirm_workshop_payment", {
    p_payment_link_id: signup.beam_payment_link_id,
    p_charge_id: charge.chargeId,
  });
  if (error) return NextResponse.json({ error: "failed" }, { status: 500 });

  if (status === "paid") await sendConfirmation(signup.id);
  else if (status === "overflow") await handleOverflow(signup.id);

  // Auto billing (app migration 72): a paid seat gets its draft receipt, and every
  // payment that came in alerts the super admins. Both are once only, so a retry is
  // safe, and neither failing stops the webhook.
  if (status === "paid") await draftReceipt(db, signup.id, charge.method);
  if (status === "paid" || status === "overflow" || status === "needs_review") {
    await notifyWorkshopMoneyIn(db, { signupId: signup.id, paymentLinkId, method: charge.method, status });
  }

  // Paid on an older link: the newer one must not stay payable. A retry is safe,
  // since the RPC and the emails above do not repeat.
  if (paymentLinkId !== signup.beam_payment_link_id) {
    try {
      await disablePaymentLink(signup.beam_payment_link_id);
    } catch (err) {
      console.error("Could not disable the newer link for sign-up", signup.id, err);
      return NextResponse.json({ error: "failed" }, { status: 500 });
    }
  }
  return NextResponse.json({ received: true, status });
}
