export const REF_COOKIE = "iq_ref";
export const REF_MAX_AGE = 60 * 60 * 24 * 7;

/** Trim, uppercase, and accept only 3 to 20 letters or digits. Returns null otherwise. */
export function normalizeAffiliateCode(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  const code = raw.trim().toUpperCase();
  return /^[A-Z0-9]{3,20}$/.test(code) ? code : null;
}
