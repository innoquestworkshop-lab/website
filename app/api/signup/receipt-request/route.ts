// POST /api/signup/receipt-request: the client's "Request receipt / ขอใบเสร็จรับเงิน".
// Body { id, t, name, address?, tax_id?, branch? }: t is the signed token of the
// sign-up (lib/receipt-token.ts), so only the link from the success page or the
// confirmation email works. Paid sign-ups only.
// The first request stores the details on the sign-up and in the draft receipt's
// bill-to (billing_receipt_request, app migration 72) and alerts the super admins
// (kind 'receipt_request', LINE and email, once per sign-up). A second request
// changes nothing and alerts nobody; both answer { ok: true }, and the page shows
// the same confirmation.
// Errors: 400 invalid, 403 bad link, 404 unknown, 409 not paid, 500.

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { supabaseAdmin } from "@/lib/workshops";
import { verifyReceiptToken } from "@/lib/receipt-token";
import { notifyReceiptRequest } from "@/lib/receipts";

const schema = z.object({
  id: z.string().uuid(),
  t: z.string().min(1).max(100),
  name: z.string().trim().min(1).max(200),
  address: z.string().trim().max(500).default(""),
  tax_id: z
    .string()
    .trim()
    .max(40)
    .default("")
    .transform((v) => v.replace(/[\s-]/g, ""))
    .refine((v) => v === "" || /^\d{13}$/.test(v), "tax_id"),
  branch: z.string().trim().max(100).default(""),
});

export async function POST(req: NextRequest) {
  const parsed = schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "invalid" }, { status: 400 });
  const { id, t, ...details } = parsed.data;
  if (!verifyReceiptToken(id, t)) return NextResponse.json({ error: "link" }, { status: 403 });

  const db = supabaseAdmin();
  const { data, error } = await db.rpc("billing_receipt_request", { p_signup_id: id, p_details: details });
  if (error) {
    console.error("Receipt request failed", id, error.message);
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
  const r = (data ?? {}) as { ok?: boolean; first?: boolean; document_id?: string | null; reason?: string };
  if (!r.ok) {
    const status = r.reason === "not_paid" ? 409 : r.reason === "not_found" ? 404 : 400;
    return NextResponse.json({ error: r.reason ?? "invalid" }, { status });
  }
  if (r.first) await notifyReceiptRequest(db, { signupId: id, documentId: r.document_id ?? null, details });
  return NextResponse.json({ ok: true, first: r.first === true });
}
