"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLocale } from "@/components/LanguageProvider";
import { contactForm } from "@/data/contact";

const buildSchema = (errors: Record<"name" | "organisation" | "email" | "message", string>) =>
  z.object({
    name: z.string().min(2, errors.name),
    organisation: z.string().min(1, errors.organisation),
    role: z.string().optional(),
    email: z.string().email(errors.email),
    phone: z.string().optional(),
    audience: z.enum(["Corporate", "School", "Parent", "Student", "Other"]),
    message: z.string().min(10, errors.message),
    source: z.string().optional(),
  });

type FormData = z.infer<ReturnType<typeof buildSchema>>;

export function ContactForm() {
  const { locale } = useLocale();
  const t = contactForm[locale];
  const schema = useMemo(() => buildSchema(t.errors), [t]);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
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
    return () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      if (widgetId.current && w.turnstile) w.turnstile.remove(widgetId.current);
      widgetId.current = null;
    };
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    if (!turnstileToken) {
      setError(t.errors.verify);
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, turnstileToken }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError(t.errors.failed);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (widgetId.current && (window as any).turnstile) (window as any).turnstile.reset(widgetId.current);
      setTurnstileToken(null);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        style={{
          padding: "48px 40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 0,
          animation: "iq-fadein 0.4s ease both",
        }}
      >
        <style>{`
          @keyframes iq-fadein { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
          @keyframes iq-draw { from { stroke-dashoffset: 60; } to { stroke-dashoffset: 0; } }
          @keyframes iq-circle { from { stroke-dashoffset: 150; } to { stroke-dashoffset: 0; } }
        `}</style>

        {/* Icon */}
        <div style={{ marginBottom: 28 }}>
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="26" cy="26" r="23"
              stroke="#8A0F14" strokeWidth="1.8"
              strokeDasharray="150" strokeDashoffset="150"
              style={{ animation: "iq-circle 0.6s ease forwards" }}
            />
            <polyline
              points="16,27 22,34 36,19"
              stroke="#8A0F14" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
              strokeDasharray="60" strokeDashoffset="60"
              style={{ animation: "iq-draw 0.4s ease 0.5s forwards" }}
            />
          </svg>
        </div>

        {/* Heading */}
        <p
          className="eyebrow"
          style={{ color: "#8A0F14", marginBottom: 10, letterSpacing: "0.1em" }}
        >
          {t.success.eyebrow}
        </p>
        <h3 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em", color: "#121212", marginBottom: 12, lineHeight: 1.2 }}>
          {t.success.heading}
        </h3>
        <p style={{ fontSize: 14, color: "rgba(18,18,18,0.55)", lineHeight: 1.65, maxWidth: 340 }}>
          {t.success.body}
        </p>

        {/* Divider + contact fallback */}
        <div style={{ marginTop: 28, paddingTop: 24, borderTop: "1px solid rgba(18,18,18,0.08)", width: "100%" }}>
          <p style={{ fontSize: 12, color: "rgba(18,18,18,0.4)", marginBottom: 8 }}>{t.success.faster}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <a href="tel:+66970970797" style={{ fontSize: 13, color: "#8A0F14", textDecoration: "none", fontWeight: 500 }}>
              +66 97 097 0797
            </a>
            <a href="mailto:admin@innoquest.tech" style={{ fontSize: 13, color: "rgba(18,18,18,0.5)", textDecoration: "none" }}>
              admin@innoquest.tech
            </a>
          </div>
        </div>
      </div>
    );
  }

  const inputClass =
    "w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#121212] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8A0F14]/30 focus:border-[#8A0F14] transition-colors";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-medium text-[#121212] mb-1.5">
            {t.labels.name} <span className="text-[#8A0F14]">*</span>
          </label>
          <input {...register("name")} placeholder={t.placeholders.name} className={inputClass} />
          {errors.name && <p className="text-xs text-[#8A0F14] mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-xs font-medium text-[#121212] mb-1.5">
            {t.labels.organisation} <span className="text-[#8A0F14]">*</span>
          </label>
          <input {...register("organisation")} placeholder={t.placeholders.organisation} className={inputClass} />
          {errors.organisation && <p className="text-xs text-[#8A0F14] mt-1">{errors.organisation.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-medium text-[#121212] mb-1.5">{t.labels.role}</label>
          <input {...register("role")} placeholder={t.placeholders.role} className={inputClass} />
        </div>
        <div>
          <label className="block text-xs font-medium text-[#121212] mb-1.5">
            {t.labels.email} <span className="text-[#8A0F14]">*</span>
          </label>
          <input {...register("email")} type="email" placeholder="you@company.com" className={inputClass} />
          {errors.email && <p className="text-xs text-[#8A0F14] mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-medium text-[#121212] mb-1.5">{t.labels.phone}</label>
          <input {...register("phone")} placeholder="+66 XX-XXXX-XXXX" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs font-medium text-[#121212] mb-1.5">
            {t.labels.audience} <span className="text-[#8A0F14]">*</span>
          </label>
          <select {...register("audience")} className={inputClass}>
            <option value="Corporate">{t.audiences.Corporate}</option>
            <option value="School">{t.audiences.School}</option>
            <option value="Parent">{t.audiences.Parent}</option>
            <option value="Student">{t.audiences.Student}</option>
            <option value="Other">{t.audiences.Other}</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-[#121212] mb-1.5">
          {t.labels.message} <span className="text-[#8A0F14]">*</span>
        </label>
        <textarea
          {...register("message")}
          rows={4}
          placeholder={t.placeholders.message}
          className={inputClass}
        />
        {errors.message && <p className="text-xs text-[#8A0F14] mt-1">{errors.message.message}</p>}
      </div>

      <div>
        <label className="block text-xs font-medium text-[#121212] mb-1.5">
          {t.labels.source}
        </label>
        <select {...register("source")} className={inputClass}>
          <option value="">{t.sources.select}</option>
          <option value="Google">{t.sources.google}</option>
          <option value="Social media">{t.sources.social}</option>
          <option value="Referral">{t.sources.referral}</option>
          <option value="Event">{t.sources.event}</option>
          <option value="Other">{t.sources.other}</option>
        </select>
      </div>

      <div ref={turnstileRef} />

      {error && <p className="text-sm text-[#8A0F14]">{error}</p>}

      <button
        type="submit"
        disabled={submitting || !turnstileToken}
        className="w-full sm:w-auto px-8 py-3 bg-[#8A0F14] text-white text-sm font-medium rounded-full disabled:opacity-60 transition-transform active:scale-[0.98] hover:bg-[#D63B34]"
      >
        {submitting ? t.sending : t.send}
      </button>
    </form>
  );
}
