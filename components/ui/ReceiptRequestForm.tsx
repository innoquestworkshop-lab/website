"use client";

// The Request receipt form (/signup/receipt). Prefilled from the registration; the
// confirmation words are fixed (data/signup.ts RECEIPT_REQUESTED). A repeat request
// shows the same words: the server makes it a no-op.

import { useState } from "react";
import { RECEIPT_REQUESTED, receiptRequest } from "@/data/signup";
import type { Locale } from "@/lib/i18n";

export function ReceiptRequested({ locale }: { locale: Locale }) {
  const first = locale === "th" ? RECEIPT_REQUESTED.th : RECEIPT_REQUESTED.en;
  const second = locale === "th" ? RECEIPT_REQUESTED.en : RECEIPT_REQUESTED.th;
  return (
    <div role="status" className="card card--soft" style={{ gap: 8 }}>
      <p className="lede" style={{ color: "var(--ink)", margin: 0 }}>{first}</p>
      <p className="t-small" lang={locale === "th" ? "en" : "th"} style={{ margin: 0 }}>{second}</p>
    </div>
  );
}

export function ReceiptRequestForm({ id, token, locale, defaultName }: { id: string; token: string; locale: Locale; defaultName: string }) {
  const t = receiptRequest[locale];
  const [name, setName] = useState(defaultName);
  const [address, setAddress] = useState("");
  const [taxId, setTaxId] = useState("");
  const [branch, setBranch] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  if (done) return <ReceiptRequested locale={locale} />;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!name.trim()) return setError(t.errorRequired);
    const digits = taxId.replace(/[\s-]/g, "");
    if (digits && !/^\d{13}$/.test(digits)) return setError(t.errorTaxId);
    setBusy(true);
    try {
      const res = await fetch("/api/signup/receipt-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, t: token, name, address, tax_id: digits, branch }),
      });
      if (res.ok) setDone(true);
      else setError(t.errorFailed);
    } catch {
      setError(t.errorFailed);
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-5" noValidate>
      <div>
        <label className="field-label" htmlFor="rr-name">
          {t.name} <span className="field-req">*</span>
        </label>
        <input id="rr-name" className="field" value={name} maxLength={200} onChange={(e) => setName(e.target.value)} autoComplete="name" required aria-describedby="rr-name-hint" />
        <p id="rr-name-hint" className="t-small" style={{ marginTop: 4, color: "var(--mute)" }}>{t.nameHint}</p>
      </div>
      <div>
        <label className="field-label" htmlFor="rr-address">{t.address}</label>
        <textarea id="rr-address" className="field" rows={3} value={address} maxLength={500} onChange={(e) => setAddress(e.target.value)} autoComplete="street-address" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="field-label" htmlFor="rr-tax">{t.taxId}</label>
          <input id="rr-tax" className="field" inputMode="numeric" value={taxId} maxLength={17} onChange={(e) => setTaxId(e.target.value)} aria-describedby="rr-tax-hint" style={{ fontVariantNumeric: "tabular-nums" }} />
          <p id="rr-tax-hint" className="t-small" style={{ marginTop: 4, color: "var(--mute)" }}>{t.taxIdHint}</p>
        </div>
        <div>
          <label className="field-label" htmlFor="rr-branch">{t.branch}</label>
          <input id="rr-branch" className="field" value={branch} maxLength={100} onChange={(e) => setBranch(e.target.value)} aria-describedby="rr-branch-hint" />
          <p id="rr-branch-hint" className="t-small" style={{ marginTop: 4, color: "var(--mute)" }}>{t.branchHint}</p>
        </div>
      </div>
      {error && <p className="field-error" role="alert">{error}</p>}
      <button type="submit" className="btn btn-primary w-full sm:w-auto" disabled={busy}>
        {busy ? t.sending : t.submit}
      </button>
    </form>
  );
}
