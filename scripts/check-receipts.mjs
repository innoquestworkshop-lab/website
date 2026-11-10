// Check: auto billing on the website. The Beam webhook's money-in alerts and draft
// receipts, the Request receipt route, and the signed link. Real route modules
// (loaded with jiti), an in-memory database (scripts/_fake-db.mjs) in place of
// Supabase, and fetch mocked for Beam, LINE and Resend. No network.
//
// Covers: a paid workshop makes the draft receipt with the Beam method and one
// money_in alert (amount, payer, workshop, affiliate and code or Organic, seats,
// link to the sign-ups) with LINE and email once; a Beam retry sends nothing new;
// a payment with no seat alerts with "Needs review" and makes no receipt; a
// failing receipt never fails the webhook; an invoice paid by Beam alerts with its
// IV number once; the confirmation email carries the signed Request receipt link;
// the token (names one sign-up, tampering refused, secret or derived key); the
// request route (bad link, not paid, tax ID, first request stores, alerts once,
// a second click alerts nobody).
// The SQL behind the rpc calls is checked in the app: scripts/checks/migration-72-db.mjs.
//
// Run: node scripts/check-receipts.mjs

import { createHmac, randomBytes } from "node:crypto";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createJiti } from "jiti";
import { FakeDb } from "./_fake-db.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");
const jiti = createJiti(import.meta.url, {
  alias: { "@/lib/workshops": resolve(here, "_fake-workshops.mjs"), "@": root },
  moduleCache: false,
});

const WEBHOOK_KEY = randomBytes(32).toString("base64");
Object.assign(process.env, {
  BEAM_WEBHOOK_KEY: WEBHOOK_KEY,
  BEAM_MERCHANT_ID: "m",
  BEAM_API_KEY: "k",
  RESEND_API_KEY: "re_test",
  LINE_CHANNEL_ACCESS_TOKEN: "line-token",
  LINE_APPROVER_USER_IDS: `U${"a".repeat(32)}`,
  NEXT_PUBLIC_APP_URL: "https://app.test",
  NEXT_PUBLIC_SITE_URL: "https://site.test",
  SUPABASE_SERVICE_ROLE_KEY: "service-role-test",
  RECEIPT_REQUEST_SECRET: "receipt-secret-for-the-check-only",
});

let passes = 0;
let failures = 0;
const check = (name, ok) => {
  if (ok) { passes++; console.log(`  ok    ${name}`); } else { failures++; console.log(`  FAIL  ${name}`); }
};
const quiet = async (fn) => {
  const e = console.error;
  console.error = () => {};
  try { return await fn(); } finally { console.error = e; }
};

const token = await jiti.import(resolve(root, "lib/receipt-token.ts"));
const beam = await jiti.import(resolve(root, "lib/beam.ts"));
const notifyLib = await jiti.import(resolve(root, "lib/notify.ts"));
const webhook = await jiti.import(resolve(root, "app/api/beam/webhook/route.ts"));
const request = await jiti.import(resolve(root, "app/api/signup/receipt-request/route.ts"));
const { NextRequest } = await import("next/server.js");

// ── fetch: Beam charges, LINE, Resend ───────────────────────────────────────
let sent;
let charge;
globalThis.fetch = async (url, init = {}) => {
  const u = String(url);
  const body = init.body ? JSON.parse(init.body) : null;
  sent.push({ url: u, body });
  if (u.includes("/api/v1/charges")) return new Response(JSON.stringify({ charges: [charge] }), { status: 200 });
  if (u.startsWith("https://api.line.me/")) return new Response("{}", { status: 200 });
  if (u.startsWith("https://api.resend.com/")) return new Response(JSON.stringify({ id: "email-1" }), { status: 200 });
  throw new Error(`unexpected fetch ${u}`);
};
const lineCalls = () => sent.filter((s) => s.url.startsWith("https://api.line.me/"));
const mails = () => sent.filter((s) => s.url.startsWith("https://api.resend.com/"));

// ── database ────────────────────────────────────────────────────────────────
let db;
let receiptMode;
function reset() {
  db = new FakeDb();
  globalThis.__db = db;
  sent = [];
  receiptMode = "ok";
  charge = { chargeId: "chrg_1", status: "SUCCEEDED", paymentMethod: { paymentMethodType: "CARD" } };
  const acct = db.seed("iq_accounts", { email: "owner@iq.test", status: "active" });
  db.seed("iq_account_roles", { account_id: acct.id, role: "super_admin", iq_accounts: { email: "owner@iq.test", status: "active" } });
  db.rpcs.confirm_workshop_payment = (d, { p_payment_link_id, p_charge_id }) => {
    const s = d.rows("workshop_signups").find((x) => x.beam_payment_link_id === p_payment_link_id);
    if (!["held", "expired"].includes(s.status)) return s.status;
    if (s.full) { Object.assign(s, { status: "needs_review", paid_at: new Date().toISOString(), beam_charge_id: p_charge_id }); return "overflow"; }
    Object.assign(s, { status: "paid", paid_at: new Date().toISOString(), beam_charge_id: p_charge_id });
    return "paid";
  };
  db.rpcs.workshop_seats_taken = () => 12;
  db.rpcs.billing_receipt_for_signup = (d, { p_signup_id }) => {
    if (receiptMode === "fail") throw new Error("function billing_receipt_for_signup does not exist");
    const have = d.rows("billing_documents").find((x) => x.workshop_signup_id === p_signup_id);
    if (have) return { ok: true, created: false, id: have.id };
    const s = d.rows("workshop_signups").find((x) => x.id === p_signup_id);
    if (!s || s.status !== "paid") return { ok: false, reason: "not_paid" };
    return { ok: true, created: true, id: d.seed("billing_documents", { doc_type: "receipt", status: "draft", workshop_signup_id: p_signup_id }).id };
  };
  db.rpcs.billing_receipt_request = (d, { p_signup_id, p_details }) => {
    const s = d.rows("workshop_signups").find((x) => x.id === p_signup_id);
    if (!s) return { ok: false, reason: "not_found" };
    if (s.status !== "paid") return { ok: false, reason: "not_paid" };
    const doc = d.rows("billing_documents").find((x) => x.workshop_signup_id === p_signup_id) ?? d.seed("billing_documents", { doc_type: "receipt", status: "draft", workshop_signup_id: p_signup_id });
    if (s.receipt_requested_at) return { ok: true, first: false, document_id: doc.id };
    Object.assign(s, { receipt_requested_at: new Date().toISOString(), receipt_request: p_details });
    return { ok: true, first: true, document_id: doc.id, bill_to_updated: true };
  };
}
const WORKSHOP = { title_th: "เวิร์กช็อปผู้ประกอบการ", title_en: "Founder Workshop", capacity: 20, starts_at: "2026-11-21T02:00:00Z", ends_at: null, location_th: "", location_en: null, line_group_url: null, line_qr_path: null };
function signup(extra = {}) {
  const w = db.rows("workshops")[0] ?? db.seed("workshops", WORKSHOP);
  return db.seed("workshop_signups", {
    workshop_id: w.id, workshops: { ...WORKSHOP }, status: "held", filled_by: "parent", student_name: "Nok", parent_name: "Mali", email: "mali@example.com",
    locale: "en", amount_satang: 225000, affiliate_id: null, affiliate_code: null, beam_payment_link_id: `pl_${randomBytes(3).toString("hex")}`,
    confirmation_sent_at: null, receipt_requested_at: null, ...extra,
  });
}
function hook(payload, event = "payment_link.paid") {
  const raw = JSON.stringify(payload);
  const sig = createHmac("sha256", Buffer.from(WEBHOOK_KEY, "base64")).update(raw, "utf8").digest("base64");
  return webhook.POST(new NextRequest("https://site.test/api/beam/webhook", { method: "POST", body: raw, headers: { "x-beam-signature": sig, "x-beam-event": event } }));
}
const paid = (s) => hook({ paymentLinkId: s.beam_payment_link_id, order: { netAmount: s.amount_satang, referenceId: s.id } });
const notes = (kind) => db.rows("staff_notifications").filter((n) => !kind || n.kind === kind);

// ── Beam method ─────────────────────────────────────────────────────────────
console.log("Beam payment method");
check("card, installments, PromptPay, mobile banking", beam.chargeMethod({ paymentMethod: { paymentMethodType: "CARD" } }) === "บัตรเครดิต (Credit card)" &&
  beam.chargeMethod({ paymentMethodType: "CARD_INSTALLMENTS" }) === "ผ่อนชำระบัตรเครดิต (Credit card installment)" &&
  beam.chargeMethod({ paymentMethod: { paymentMethodType: "QR_PROMPT_PAY" } }) === "พร้อมเพย์ (PromptPay)" &&
  beam.chargeMethod({ paymentMethod: { paymentMethodType: "MOBILE_BANKING" } }) === "โมบายแบงก์กิ้ง (Mobile banking)");
check("e-wallets by provider; unknown falls back to the Beam link", beam.chargeMethod({ paymentMethod: { paymentMethodType: "E_WALLET", eWallet: { provider: "TRUE_MONEY" } } }) === "ทรูมันนี่ วอลเล็ท (TrueMoney Wallet)" &&
  beam.chargeMethod({ paymentMethod: { paymentMethodType: "E_WALLET" } }) === beam.BEAM_LINK_METHOD && beam.chargeMethod(null) === beam.BEAM_LINK_METHOD && beam.chargeMethod({}) === beam.BEAM_LINK_METHOD);

// ── Token ───────────────────────────────────────────────────────────────────
console.log("\nSigned Request receipt link");
{
  const id = "3f2c9a6e-1b7d-4c1e-9a55-0f5e7b2d1c11";
  const other = "3f2c9a6e-1b7d-4c1e-9a55-0f5e7b2d1c12";
  const t = token.receiptToken(id);
  check("a 43-character token that verifies for its sign-up", /^[A-Za-z0-9_-]{43}$/.test(t) && token.verifyReceiptToken(id, t));
  check("not for another sign-up, not tampered, not missing", !token.verifyReceiptToken(other, t) && !token.verifyReceiptToken(id, t.slice(0, -1) + (t.endsWith("A") ? "B" : "A")) && !token.verifyReceiptToken(id, "") && !token.verifyReceiptToken(id, undefined));
  check("upper-case id gives the same token", token.receiptToken(id.toUpperCase()) === t);
  check("the URL names the page, id and token", token.receiptRequestUrl("https://site.test/", id) === `https://site.test/signup/receipt?id=${id}&t=${t}`);
  const saved = process.env.RECEIPT_REQUEST_SECRET;
  delete process.env.RECEIPT_REQUEST_SECRET;
  const derived = token.receiptToken(id);
  check("without RECEIPT_REQUEST_SECRET: a different key, derived from the service role key", derived && derived !== t && token.verifyReceiptToken(id, derived) && !token.verifyReceiptToken(id, t));
  const svc = process.env.SUPABASE_SERVICE_ROLE_KEY;
  delete process.env.SUPABASE_SERVICE_ROLE_KEY;
  check("with no key at all: no token, nothing verifies", token.receiptToken(id) === null && !token.verifyReceiptToken(id, derived) && token.receiptRequestUrl("https://x", id) === null);
  process.env.SUPABASE_SERVICE_ROLE_KEY = svc;
  process.env.RECEIPT_REQUEST_SECRET = saved;
  check("not a uuid: no token", token.receiptToken("abc") === null);
}

// ── Webhook: a workshop paid ────────────────────────────────────────────────
console.log("\nWebhook: workshop paid");
reset();
{
  const aff = db.seed("affiliates", { name: "Big Four Tutor", code: "BIG4" });
  const s = signup({ affiliate_id: aff.id, affiliate_code: "BIG4" });
  const r = await paid(s);
  const body = await r.json();
  check("200 paid", r.status === 200 && body.status === "paid");
  const rc = db.rpcCalls.filter((c) => c.name === "billing_receipt_for_signup");
  check("the draft receipt is asked for once, with the method from the Beam charge", rc.length === 1 && rc[0].args.p_signup_id === s.id && rc[0].args.p_paid_method === "บัตรเครดิต (Credit card)" && db.rows("billing_documents").length === 1);
  const n = notes("money_in");
  check("one money_in alert, super admins, deduped on the payment link", n.length === 1 && n[0].audience === "super_admin" && n[0].dedupe_key === `beam:${s.beam_payment_link_id}` && n[0].entity_type === "workshop_signup" && n[0].entity_id === s.id);
  check("text: amount, payer, workshop, affiliate and code, seats, method",
    n[0].title === "Money in: THB 2,250.00 from Mali" && n[0].body.includes("Paid: Founder Workshop") && n[0].body.includes("Source: Big Four Tutor (code BIG4)") && n[0].body.includes("Seats: 12/20") && n[0].body.includes("Method: บัตรเครดิต (Credit card)"));
  check("link: the sign-ups page in the new URL scheme", n[0].link === `/super-admin/workshops/${s.workshop_id}/signups`);
  check("LINE pushed once, with the absolute link", lineCalls().length === 1 && lineCalls()[0].body.to === `U${"a".repeat(32)}` && lineCalls()[0].body.messages[0].text.includes(`https://app.test/super-admin/workshops/${s.workshop_id}/signups`));
  const staffMail = mails().filter((m) => m.body.to === "owner@iq.test" || (Array.isArray(m.body.to) && m.body.to.includes("owner@iq.test")));
  check("staff email to the super admin, once", staffMail.length === 1 && staffMail[0].body.subject === "InnoQuest: Money in: THB 2,250.00 from Mali" && staffMail[0].body.html.includes("Open in the portal"));
  const conf = mails().find((m) => (Array.isArray(m.body.to) ? m.body.to : [m.body.to]).includes("mali@example.com"));
  const link = conf && /href="([^"]*\/signup\/receipt\?[^"]*)"/.exec(conf.body.html);
  const url = link && new URL(link[1].replace(/&amp;/g, "&"));
  check("confirmation email has Request receipt / ขอใบเสร็จรับเงิน with a signed link", !!url && conf.body.html.includes("Request receipt / ขอใบเสร็จรับเงิน") && url.origin === "https://site.test" && url.searchParams.get("id") === s.id && token.verifyReceiptToken(s.id, url.searchParams.get("t")));

  const before = sent.length;
  const again = await paid(s);
  check("Beam retry: 200, no new alert, LINE or email, still one receipt", again.status === 200 && notes("money_in").length === 1 && lineCalls().length === 1 &&
    sent.slice(before).every((x) => x.url.includes("/api/v1/charges")) && db.rows("billing_documents").length === 1);
}

reset();
{
  const s = signup();
  await paid(s);
  check("organic sign-up: Source: Organic", notes("money_in")[0].body.includes("Source: Organic"));
}

reset();
{
  const s = signup({ full: true });
  const r = await paid(s);
  check("paid but no seat: money_in with Needs review, no receipt", r.status === 200 && notes("money_in").length === 1 && notes("money_in")[0].body.includes("Needs review") &&
    !db.rpcCalls.some((c) => c.name === "billing_receipt_for_signup") && db.rows("billing_documents").length === 0);
}

reset();
{
  receiptMode = "fail";
  const s = signup();
  const r = await quiet(() => paid(s));
  check("receipt rpc failing (migration not run): the webhook still answers 200 and alerts", r.status === 200 && notes("money_in").length === 1 && db.rows("workshop_signups")[0].status === "paid");
}

// ── Webhook: an invoice paid ────────────────────────────────────────────────
console.log("\nWebhook: invoice paid");
reset();
{
  charge = { chargeId: "chrg_9", status: "SUCCEEDED", paymentMethod: { paymentMethodType: "QR_PROMPT_PAY" } };
  const doc = db.seed("billing_documents", { status: "issued", number: "IV 26-3001", bill_to: { name: "XJTLU" }, net_payable_satang: 535000, beam_link_id: "pl_doc" });
  const pay = () => hook({ paymentLinkId: "pl_doc", order: { netAmount: 535000, referenceId: `billing:${doc.id}` } });
  const r = await pay();
  const n = notes("money_in");
  check("marked paid and one money_in alert with the IV number", r.status === 200 && db.rows("billing_documents")[0].status === "paid" && n.length === 1 &&
    n[0].title === "Money in: THB 5,350.00 from XJTLU" && n[0].body.includes("Paid: IV 26-3001") && n[0].body.includes("Method: พร้อมเพย์ (PromptPay)") && !n[0].body.includes("Source:"));
  check("link to the document, deduped on the payment link", n[0].link === `/super-admin/billing/${doc.id}` && n[0].dedupe_key === "beam:pl_doc" && n[0].entity_type === "billing_document");
  const r2 = await pay();
  check("retry: already paid, nothing new", (await r2.json()).status === "already paid" && notes("money_in").length === 1 && lineCalls().length === 1);
  const dup = await quiet(() => notifyLib.notify(db, { audience: "super_admin", kind: "money_in", title: "x", dedupeKey: "beam:pl_doc" }));
  check("notify with a used dedupe key: null, no push", dup === null && lineCalls().length === 1);
}

// ── Request receipt ─────────────────────────────────────────────────────────
console.log("\nRequest receipt");
reset();
{
  const s = signup({ status: "paid" });
  const t = token.receiptToken(s.id);
  const ask = (body) => request.POST(new NextRequest("https://site.test/api/signup/receipt-request", { method: "POST", body: JSON.stringify(body), headers: { "content-type": "application/json" } }));
  const good = { id: s.id, t, name: "Mali Co., Ltd.", address: "1 Sukhumvit, Bangkok", tax_id: "0105-56999-9999", branch: "Head Office" };

  check("bad link: 403, nothing stored", (await ask({ ...good, t: token.receiptToken(signup().id) })).status === 403 && !db.rpcCalls.some((c) => c.name === "billing_receipt_request"));
  check("no name: 400", (await ask({ ...good, name: " " })).status === 400);
  check("tax ID not 13 digits: 400", (await ask({ ...good, tax_id: "12345" })).status === 400);
  const held = signup({ status: "held" });
  check("not paid: 409", (await ask({ ...good, id: held.id, t: token.receiptToken(held.id) })).status === 409 && notes().length === 0);

  const r1 = await ask(good);
  const b1 = await r1.json();
  const call = db.rpcCalls.filter((c) => c.name === "billing_receipt_request").at(-1);
  check("first request: 200 first, details sent with the tax ID as digits", r1.status === 200 && b1.ok && b1.first === true &&
    JSON.stringify(call.args.p_details) === JSON.stringify({ name: "Mali Co., Ltd.", address: "1 Sukhumvit, Bangkok", tax_id: "0105569999999", branch: "Head Office" }));
  const n = notes("receipt_request");
  const doc = db.rows("billing_documents").find((d) => d.workshop_signup_id === s.id);
  check("one receipt_request alert: name, address, tax ID, email, the 3 business days, link to the receipt",
    n.length === 1 && n[0].title === "Receipt requested: Mali Co., Ltd." && n[0].body.includes("Tax ID: 0105569999999 (Head Office)") && n[0].body.includes("Email: mali@example.com") &&
    n[0].body.includes("3 business days") && n[0].link === `/super-admin/billing/${doc.id}` && n[0].dedupe_key === `receipt_request:${s.id}`);
  check("LINE once and the staff email once", lineCalls().length === 1 && mails().length === 1);
  const r2 = await ask({ ...good, name: "Someone else" });
  const b2 = await r2.json();
  check("second click: 200, first false, no new alert, nothing changed", r2.status === 200 && b2.ok && b2.first === false && notes("receipt_request").length === 1 && lineCalls().length === 1 &&
    db.rows("workshop_signups").find((x) => x.id === s.id).receipt_request.name === "Mali Co., Ltd.");
}

// ── Words ───────────────────────────────────────────────────────────────────
console.log("\nWords");
{
  const data = await jiti.import(resolve(root, "data/signup.ts"));
  check("the confirmation, exactly", data.RECEIPT_REQUESTED.en === "We have received your request and we will email you the receipt within 3 business days." &&
    data.RECEIPT_REQUESTED.th === "เราได้รับคำขอของท่านแล้ว และจะส่งใบเสร็จรับเงินทางอีเมลภายใน 3 วันทำการ");
  check("the button label", data.REQUEST_RECEIPT_LABEL === "Request receipt / ขอใบเสร็จรับเงิน");
  const all = JSON.stringify([data.receiptRequest, data.RECEIPT_REQUESTED]) + notifyLib.moneyInMessage({ amountSatang: 1, payer: "a", what: "b", affiliate: null, seats: { taken: 1, total: 2 } }).body;
  check("no middle dot", !all.includes("·"));
}

console.log(`\n${passes} passed, ${failures} failed`);
if (failures) process.exit(1);
