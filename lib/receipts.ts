// Auto billing from the website: the draft receipt of a paid workshop sign-up, the
// money-in alerts and the receipt-request alert. The receipt itself is made in the
// shared database by billing_receipt_for_signup (InnoQuest-app scripts/72_workshop_receipts.sql),
// the same function the app's backfill uses. Server only. Nothing here throws: a payment
// is confirmed even when a receipt or an alert fails (the log is the signal, and the app's
// "Create receipts for paid sign-ups" catches up).

import type { SupabaseClient } from "@supabase/supabase-js";
import { billingPath, moneyInMessage, notify, signupsPath } from "@/lib/notify";

/** The draft receipt (never issued or sent here). Returns its id, or null. */
export async function draftReceipt(db: SupabaseClient, signupId: string, paidMethod: string | null): Promise<string | null> {
  try {
    const { data, error } = await db.rpc("billing_receipt_for_signup", { p_signup_id: signupId, p_paid_method: paidMethod });
    if (error) throw new Error(error.message);
    const r = (data ?? {}) as { ok?: boolean; id?: string; reason?: string };
    if (!r.ok) console.error("Workshop receipt not made", signupId, r.reason);
    return r.id ?? null;
  } catch (err) {
    console.error("Workshop receipt failed", signupId, err instanceof Error ? err.message : err);
    return null;
  }
}

type SignupForAlert = {
  id: string;
  workshop_id: string;
  filled_by: string | null;
  student_name: string | null;
  parent_name: string | null;
  email: string | null;
  amount_satang: number;
  affiliate_id: string | null;
  affiliate_code: string | null;
  workshops: { title_th: string; title_en: string | null; capacity: number } | { title_th: string; title_en: string | null; capacity: number }[] | null;
};

const payerOf = (s: Pick<SignupForAlert, "filled_by" | "parent_name" | "student_name">) =>
  (s.filled_by === "parent" && s.parent_name?.trim() ? s.parent_name : s.student_name)?.trim() ?? "";

async function loadSignup(db: SupabaseClient, signupId: string): Promise<SignupForAlert | null> {
  const { data } = await db
    .from("workshop_signups")
    .select("id, workshop_id, filled_by, student_name, parent_name, email, amount_satang, affiliate_id, affiliate_code, workshops(title_th, title_en, capacity)")
    .eq("id", signupId)
    .maybeSingle();
  return (data as SignupForAlert | null) ?? null;
}

const workshopOf = (s: SignupForAlert) => (Array.isArray(s.workshops) ? s.workshops[0] : s.workshops) ?? null;

/** A workshop paid through Beam: amount, payer, workshop, affiliate or Organic, seats. Once per payment link. */
export async function notifyWorkshopMoneyIn(
  db: SupabaseClient,
  p: { signupId: string; paymentLinkId: string; method: string | null; status: string }
): Promise<void> {
  try {
    const s = await loadSignup(db, p.signupId);
    if (!s) return;
    const w = workshopOf(s);
    let affiliate: { name: string; code: string } | null = null;
    if (s.affiliate_id) {
      const { data: a } = await db.from("affiliates").select("name, code").eq("id", s.affiliate_id).maybeSingle();
      const row = a as { name?: string; code?: string } | null;
      affiliate = { name: row?.name ?? "Affiliate", code: row?.code ?? s.affiliate_code ?? "" };
    }
    const { data: taken } = await db.rpc("workshop_seats_taken", { p_workshop_id: s.workshop_id });
    const review = p.status === "overflow" || p.status === "needs_review";
    await notify(db, {
      audience: "super_admin",
      kind: "money_in",
      ...moneyInMessage({
        amountSatang: s.amount_satang,
        payer: payerOf(s),
        what: w ? w.title_en || w.title_th : "Workshop",
        affiliate,
        seats: w ? { taken: Number(taken ?? 0), total: w.capacity } : null,
        method: p.method,
        note: review ? "Needs review: paid, but no seat confirmed yet. Approve or refund it in the workshop admin." : null,
      }),
      link: signupsPath(s.workshop_id),
      entityType: "workshop_signup",
      entityId: s.id,
      dedupeKey: `beam:${p.paymentLinkId}`,
    });
  } catch (err) {
    console.error("Money-in alert failed for sign-up", p.signupId, err instanceof Error ? err.message : err);
  }
}

/** An app invoice paid through its Beam link. Once per payment link. */
export async function notifyBillingMoneyIn(
  db: SupabaseClient,
  p: { documentId: string; number: string | null; payer: string; amountSatang: number; paymentLinkId: string; method: string | null }
): Promise<void> {
  await notify(db, {
    audience: "super_admin",
    kind: "money_in",
    ...moneyInMessage({ amountSatang: p.amountSatang, payer: p.payer, what: p.number ?? "Billing document", method: p.method }),
    link: billingPath(p.documentId),
    entityType: "billing_document",
    entityId: p.documentId,
    dedupeKey: `beam:${p.paymentLinkId}`,
  });
}

/** The client pressed Request receipt (first time only). Once per sign-up. */
export async function notifyReceiptRequest(
  db: SupabaseClient,
  p: { signupId: string; documentId: string | null; details: { name: string; address: string; tax_id: string; branch: string } }
): Promise<void> {
  try {
    const s = await loadSignup(db, p.signupId);
    const w = s ? workshopOf(s) : null;
    const lines = [
      `Workshop: ${w ? w.title_en || w.title_th : "Workshop"}`,
      `Name on the receipt: ${p.details.name}`,
      ...(p.details.address ? [`Address: ${p.details.address}`] : []),
      ...(p.details.tax_id ? [`Tax ID: ${p.details.tax_id}${p.details.branch ? ` (${p.details.branch})` : ""}`] : []),
      ...(s?.email ? [`Email: ${s.email}`] : []),
      "Promised: by email within 3 business days. Issue the receipt, then Email to client.",
    ];
    await notify(db, {
      audience: "super_admin",
      kind: "receipt_request",
      title: `Receipt requested: ${p.details.name}`,
      body: lines.join("\n"),
      link: p.documentId ? billingPath(p.documentId) : s ? signupsPath(s.workshop_id) : null,
      entityType: p.documentId ? "billing_document" : "workshop_signup",
      entityId: p.documentId ?? p.signupId,
      dedupeKey: `receipt_request:${p.signupId}`,
    });
  } catch (err) {
    console.error("Receipt request alert failed", p.signupId, err instanceof Error ? err.message : err);
  }
}
