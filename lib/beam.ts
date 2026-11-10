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

/** How a charge was paid, as the app's payment method pick list words it (lib/billing/options.ts). */
const METHOD_LABEL: Record<string, string> = {
  CARD: "บัตรเครดิต (Credit card)",
  CARD_INSTALLMENTS: "ผ่อนชำระบัตรเครดิต (Credit card installment)",
  QR_PROMPT_PAY: "พร้อมเพย์ (PromptPay)",
  MOBILE_BANKING: "โมบายแบงก์กิ้ง (Mobile banking)",
};
const WALLET_LABEL: Record<string, string> = {
  TRUE_MONEY: "ทรูมันนี่ วอลเล็ท (TrueMoney Wallet)",
  LINE_PAY: "LINE Pay",
  SHOPEE_PAY: "ShopeePay",
  ALIPAY: "Alipay",
  WECHAT_PAY: "WeChat Pay",
};
export const BEAM_LINK_METHOD = "ชำระผ่านลิงก์ Beam (Beam payment link)";

/** The method of a Beam charge object, read defensively (unknown shapes fall back to the Beam link). */
export function chargeMethod(charge: Record<string, unknown> | null | undefined): string {
  if (!charge) return BEAM_LINK_METHOD;
  const pm = (charge.paymentMethod ?? {}) as Record<string, unknown>;
  const type = String(pm.paymentMethodType ?? charge.paymentMethodType ?? "").toUpperCase();
  if (type === "E_WALLET") {
    const w = (pm.eWallet ?? {}) as Record<string, unknown>;
    return WALLET_LABEL[String(w.provider ?? w.walletProvider ?? "").toUpperCase()] ?? BEAM_LINK_METHOD;
  }
  return METHOD_LABEL[type] ?? BEAM_LINK_METHOD;
}

/** payment_link.paid carries no charge id, and refunds need one. Also how it was paid. */
export async function findPaidCharge(paymentLinkId: string): Promise<{ chargeId: string | null; method: string }> {
  const query = new URLSearchParams({ source_in: "PAYMENT_LINK", sourceId: paymentLinkId });
  const res = await fetch(`${base()}/api/v1/charges?${query}`, { headers: headers() });
  if (!res.ok) throw new Error(`Beam charge lookup failed: ${res.status}`);
  const data = await res.json();
  const charges: ({ chargeId: string; status: string } & Record<string, unknown>)[] = data.charges ?? data.data ?? data;
  const paid = Array.isArray(charges) ? charges.find((c) => c.status === "SUCCEEDED") : undefined;
  return { chargeId: paid?.chargeId ?? null, method: chargeMethod(paid) };
}

export async function findPaidChargeId(paymentLinkId: string): Promise<string | null> {
  return (await findPaidCharge(paymentLinkId)).chargeId;
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
