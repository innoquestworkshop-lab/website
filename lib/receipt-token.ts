// The signed "Request receipt" link: /signup/receipt?id=<sign-up id>&t=<token>.
// token = base64url(HMAC-SHA256(key, "receipt-request:v1:<sign-up id>")). It names one
// sign-up and never expires (the confirmation email keeps working). Server only.
// Env: RECEIPT_REQUEST_SECRET (recommended, 32+ random bytes). Without it the key is
// derived from SUPABASE_SERVICE_ROLE_KEY, so the links still work; with neither, no
// token is made or accepted. Changing the key breaks the links already emailed.

import { createHmac, timingSafeEqual } from "crypto";

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function key(): Buffer | null {
  const own = process.env.RECEIPT_REQUEST_SECRET;
  if (own && own.length >= 16) return Buffer.from(own, "utf8");
  const service = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!service) return null;
  return createHmac("sha256", service).update("innoquest-receipt-request").digest();
}

export function receiptToken(signupId: string): string | null {
  const k = key();
  if (!k || !UUID.test(signupId)) return null;
  return createHmac("sha256", k).update(`receipt-request:v1:${signupId.toLowerCase()}`).digest("base64url");
}

export function verifyReceiptToken(signupId: unknown, token: unknown): boolean {
  if (typeof signupId !== "string" || typeof token !== "string" || !/^[A-Za-z0-9_-]{43}$/.test(token)) return false;
  const expected = receiptToken(signupId);
  if (!expected) return false;
  const a = Buffer.from(token);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

/** The page link, or null when no key is configured. */
export function receiptRequestUrl(origin: string, signupId: string): string | null {
  const t = receiptToken(signupId);
  return t ? `${origin.replace(/\/$/, "")}/signup/receipt?id=${signupId}&t=${t}` : null;
}

export const siteOrigin = () => process.env.NEXT_PUBLIC_SITE_URL || "https://www.innoquest.tech";
