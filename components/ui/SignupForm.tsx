"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/components/LanguageProvider";
import { signupPage } from "@/data/signup";
import type { FormField, Workshop } from "@/lib/workshops";

const baht = (satang: number) => (satang / 100).toLocaleString("en-US");

type Answer = string | string[];

function CustomField({ field, value, onChange, label, selectText, fileNote }: {
  field: FormField;
  value: Answer | undefined;
  onChange: (v: Answer) => void;
  label: string;
  selectText: string;
  fileNote: string;
}) {
  const inputClass = "field";
  const text = typeof value === "string" ? value : "";
  const picked = Array.isArray(value) ? value : [];

  return (
    <div>
      <label className="field-label">
        {label} {field.required && <span className="field-req">*</span>}
      </label>
      {field.type === "short" && <input className={inputClass} value={text} onChange={(e) => onChange(e.target.value)} />}
      {field.type === "paragraph" && <textarea className={inputClass} rows={3} value={text} onChange={(e) => onChange(e.target.value)} />}
      {field.type === "date" && <input type="date" className={inputClass} value={text} onChange={(e) => onChange(e.target.value)} />}
      {field.type === "file" && <p className="t-small">{fileNote}</p>}
      {field.type === "dropdown" && (
        <select className={inputClass} value={text} onChange={(e) => onChange(e.target.value)}>
          <option value="">{selectText}</option>
          {field.options?.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      )}
      {field.type === "multiple_choice" && field.options?.map((o) => (
        <label key={o} className="flex items-center gap-2 text-sm py-1 text-body">
          <input type="radio" name={field.id} checked={text === o} onChange={() => onChange(o)} /> {o}
        </label>
      ))}
      {field.type === "checkboxes" && field.options?.map((o) => (
        <label key={o} className="flex items-center gap-2 text-sm py-1 text-body">
          <input
            type="checkbox"
            checked={picked.includes(o)}
            onChange={(e) => onChange(e.target.checked ? [...picked, o] : picked.filter((p) => p !== o))}
          /> {o}
        </label>
      ))}
    </div>
  );
}

export function SignupForm({ workshop }: { workshop: Workshop }) {
  const { locale } = useLocale();
  const t = signupPage[locale];
  const [form, setForm] = useState({ filled_by: "parent", student_name: "", student_age: "", school: "", parent_name: "", phone: "", email: "", line_id: "" });
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [consent, setConsent] = useState(false);
  const [parentConsent, setParentConsent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);

  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "1x00000000000000000000AA";
    const load = () => {
      if (!turnstileRef.current || widgetId.current) return;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      if (w.turnstile) {
        widgetId.current = w.turnstile.render(turnstileRef.current, {
          sitekey: siteKey,
          theme: "light",
          callback: (token: string) => setTurnstileToken(token),
          "expired-callback": () => setTurnstileToken(null),
        });
      }
    };
    if (document.getElementById("cf-turnstile-script")) { load(); return; }
    const script = document.createElement("script");
    script.id = "cf-turnstile-script";
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    script.onload = load;
    document.head.appendChild(script);
  }, []);

  const isStudent = form.filled_by === "student";
  const needsParentConsent = isStudent && Number(form.student_age) < 20;
  const inputClass = "field";
  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!turnstileToken) { setError(t.errors.verification); return; }
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          workshopId: workshop.id,
          answers,
          consent,
          parent_consent: parentConsent,
          locale,
          turnstileToken,
        }),
      });
      const data = await res.json();
      if (res.ok && data.url) { window.location.href = data.url; return; }
      const code = data.error as keyof typeof t.errors;
      setError(t.errors[code] ?? t.errors.failed);
    } catch {
      setError(t.errors.failed);
    }
    setSubmitting(false);
  };

  const label = (text: string, required = true) => (
    <label className="field-label">
      {text} {required && <span className="field-req">*</span>}
    </label>
  );

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <h3 className="h-card">{t.formHeading}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          {label(t.filledBy)}
          <select className={inputClass} value={form.filled_by} onChange={set("filled_by")}>
            <option value="parent">{t.parent}</option>
            <option value="student">{t.student}</option>
          </select>
        </div>
        <div>
          {label(t.parentName, !isStudent)}
          <input className={inputClass} value={form.parent_name} onChange={set("parent_name")} required={!isStudent} />
        </div>
        <div>
          {label(t.studentName)}
          <input className={inputClass} value={form.student_name} onChange={set("student_name")} required />
        </div>
        <div>
          {label(t.studentAge)}
          <input type="number" min={5} max={99} className={inputClass} value={form.student_age} onChange={set("student_age")} required />
        </div>
        <div>
          {label(t.school, false)}
          <input className={inputClass} value={form.school} onChange={set("school")} />
        </div>
        <div>
          {label(t.phone)}
          <input type="tel" className={inputClass} value={form.phone} onChange={set("phone")} required />
        </div>
        <div>
          {label(t.email)}
          <input type="email" className={inputClass} value={form.email} onChange={set("email")} required />
        </div>
        <div>
          {label(t.lineId, false)}
          <input className={inputClass} value={form.line_id} onChange={set("line_id")} />
        </div>
      </div>

      {workshop.form_fields.map((f) => (
        <CustomField
          key={f.id}
          field={f}
          value={answers[f.id]}
          onChange={(v) => setAnswers((a) => ({ ...a, [f.id]: v }))}
          label={locale === "en" ? f.label_en || f.label_th : f.label_th}
          selectText={t.select}
          fileNote={t.fileNote}
        />
      ))}

      <p className="t-small">{t.refundPolicy}</p>
      <label className="flex items-start gap-2 text-sm text-body">
        <input type="checkbox" className="mt-1" checked={consent} onChange={(e) => setConsent(e.target.checked)} required />
        <span>{t.consent}</span>
      </label>
      {needsParentConsent && (
        <label className="flex items-start gap-2 text-sm text-body">
          <input type="checkbox" className="mt-1" checked={parentConsent} onChange={(e) => setParentConsent(e.target.checked)} required />
          <span>{t.parentConsent}</span>
        </label>
      )}

      <div ref={turnstileRef} />
      {error && <p className="text-sm field-error" role="alert">{error}</p>}
      <p className="caption">{t.holdNote}</p>
      <button
        type="submit"
        disabled={submitting || !turnstileToken || !consent}
        className="btn btn-primary w-full sm:w-auto"
      >
        {submitting ? t.submitting : `${t.submit} ฿${baht(workshop.price_satang)}`}
      </button>
    </form>
  );
}
