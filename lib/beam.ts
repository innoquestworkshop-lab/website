import { createHmac, timingSafeEqual } from "crypto";

const base = () => process.env.BEAM_API_BASE ?? "https://playground.api.beamcheckout.com";

function headers() {
  const auth = Buffer.from(`${process.env.BEAM_MERCHANT_ID}:${process.env.BEAM_API_KEY}`).toString("base64");
  return { "Content-Type": "application/json", Authorization: `Basic ${auth}` };
}

export async function createPaymentLink(input: {
  amountSatang: number;
  description: string;
  referenceId: string;
  redirectUrl: string;
  expiresAt: Date;
}): Promise<{ id: string; url: string }> {
  const res = await fetch(`${base()}/api/v1/payment-links`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      order: {
        currency: "THB",
        description: input.description,
        netAmount: input.amountSatang,
        referenceId: input.referenceId,
      },
      linkSettings: {
        card: { isEnabled: true },
        qrPromptPay: { isEnabled: true },
        eWallets: { isEnabled: true },
        mobileBanking: { isEnabled: true },
      },
      collectDeliveryAddress: false,
      redirectUrl: input.redirectUrl,
      expiresAt: input.expiresAt.toISOString(),
    }),
  });
  if (!res.ok) throw new Error(`Beam payment link failed: ${res.status}`);
  return res.json();
}

/** payment_link.paid carries no charge id, and refunds need one. */
export async function findPaidChargeId(paymentLinkId: string): Promise<string | null> {
  const query = new URLSearchParams({ source_in: "PAYMENT_LINK", sourceId: paymentLinkId });
  const res = await fetch(`${base()}/api/v1/charges?${query}`, { headers: headers() });
  if (!res.ok) throw new Error(`Beam charge lookup failed: ${res.status}`);
  const data = await res.json();
  const charges: { chargeId: string; status: string }[] = data.charges ?? data.data ?? data;
  return charges.find((c) => c.status === "SUCCEEDED")?.chargeId ?? null;
}

/** HMAC-SHA256 of the raw body, with the base64-decoded key, compared as base64. */
export function verifyBeamSignature(rawBody: string, signature: string | null): boolean {
  const key = process.env.BEAM_WEBHOOK_KEY;
  if (!key || !signature) return false;
  const expected = createHmac("sha256", Buffer.from(key, "base64")).update(rawBody, "utf8").digest();
  const given = Buffer.from(signature, "base64");
  return given.length === expected.length && timingSafeEqual(given, expected);
}

/** Disable a payment link so it can no longer be paid. Used to retire the old
 *  link before issuing a recovery link, so a sign-up never has two live links. */
export async function disablePaymentLink(paymentLinkId: string): Promise<void> {
  const res = await fetch(`${base()}/api/v1/payment-links/${paymentLinkId}/disable`, {
    method: "PATCH",
    headers: headers(),
  });
  // A 4xx means the link is already disabled, expired, or unknown — fine to ignore.
  // Only a server-side failure is worth surfacing to the caller.
  if (res.status >= 500) throw new Error(`Beam disable link failed: ${res.status}`);
}
