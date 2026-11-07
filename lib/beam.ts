import { createHmac, timingSafeEqual } from "crypto";

const base = () => process.env.BEAM_API_BASE ?? "https://playground.api.beamcheckout.com";

function headers() {
  const auth = Buffer.from(`${process.env.BEAM_MERCHANT_ID}:${process.env.BEAM_API_KEY}`).toString("base64");
  return { "Content-Type": "application/json", Authorization: `Basic ${auth}` };
}

/**
 * Methods a link offers: Beam's linkSettings groups, comma separated, such as
 * BEAM_LINK_METHODS=card,cardInstallments,qrPromptPay. Beam refuses the whole link
 * if one is not approved on this account, so only list approved ones.
 * cardInstallments offers the periods in BEAM_INSTALLMENT_MONTHS (default 3,4).
 */
function linkSettings(withInstallments = true) {
  const listed = (process.env.BEAM_LINK_METHODS ?? "").split(",").map((m) => m.trim()).filter(Boolean);
  const methods = (listed.length ? listed : ["qrPromptPay"]).filter((m) => withInstallments || m !== "cardInstallments");
  const months = (process.env.BEAM_INSTALLMENT_MONTHS ?? "3,4").split(",").map((m) => m.trim()).filter((m) => /^(3|4|6|10)$/.test(m));
  return Object.fromEntries(
    methods.map((m) =>
      m === "cardInstallments"
        ? [m, { isEnabled: true, ...Object.fromEntries(months.map((n) => [`installments${n}m`, { isEnabled: true }])) }]
        : [m, { isEnabled: true }]
    )
  );
}

const offersInstallments = () => (process.env.BEAM_LINK_METHODS ?? "").split(",").some((m) => m.trim() === "cardInstallments");

export async function createPaymentLink(input: {
  amountSatang: number;
  description: string;
  referenceId: string;
  redirectUrl: string;
  expiresAt: Date;
}): Promise<{ id: string; url: string }> {
  const send = (withInstallments: boolean) =>
    fetch(`${base()}/api/v1/payment-links`, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify({
        order: {
          currency: "THB",
          description: input.description,
          netAmount: input.amountSatang,
          referenceId: input.referenceId,
        },
        linkSettings: linkSettings(withInstallments),
        collectDeliveryAddress: false,
        redirectUrl: input.redirectUrl,
        expiresAt: input.expiresAt.toISOString(),
      }),
    });
  let res = await send(true);
  // Installment periods have a minimum price per period; a cheaper workshop gets a
  // 400 for the whole link. Offer every other method rather than none.
  if (res.status === 400 && offersInstallments()) res = await send(false);
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
  // Beam refuses a link that is no longer ACTIVE (paid, expired, disabled), which
  // is fine. Bad credentials, a rate limit or a server error leave it payable.
  if (res.status >= 500 || [401, 403, 429].includes(res.status)) {
    throw new Error(`Beam disable link failed: ${res.status}`);
  }
}
