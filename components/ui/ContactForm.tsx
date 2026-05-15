"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Turnstile } from "@marsidev/react-turnstile";
import type { TurnstileInstance } from "@marsidev/react-turnstile";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  organisation: z.string().min(1, "Organisation is required"),
  role: z.string().optional(),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  audience: z.enum(["Corporate", "School", "Parent", "Student", "Other"]),
  message: z.string().min(10, "Please tell us a bit more"),
  source: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    if (!turnstileToken) {
      setError("Please complete the verification.");
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
      setError("Something went wrong. Please try again or email us directly.");
      turnstileRef.current?.reset();
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
          Enquiry received
        </p>
        <h3 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em", color: "#121212", marginBottom: 12, lineHeight: 1.2 }}>
          We&apos;ll be in touch shortly.
        </h3>
        <p style={{ fontSize: 14, color: "rgba(18,18,18,0.55)", lineHeight: 1.65, maxWidth: 340 }}>
          The InnoQuest team reviews all enquiries within 1–2 business days.
          Expect a response at the email address you provided.
        </p>

        {/* Divider + contact fallback */}
        <div style={{ marginTop: 28, paddingTop: 24, borderTop: "1px solid rgba(18,18,18,0.08)", width: "100%" }}>
          <p style={{ fontSize: 12, color: "rgba(18,18,18,0.4)", marginBottom: 8 }}>Need a faster response?</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <a href="tel:+66970970797" style={{ fontSize: 13, color: "#8A0F14", textDecoration: "none", fontWeight: 500 }}>
              +66 97 097 0797
            </a>
            <a href="mailto:innoquestworkshop@gmail.com" style={{ fontSize: 13, color: "rgba(18,18,18,0.5)", textDecoration: "none" }}>
              innoquestworkshop@gmail.com
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
            Name <span className="text-[#8A0F14]">*</span>
          </label>
          <input {...register("name")} placeholder="Your name" className={inputClass} />
          {errors.name && <p className="text-xs text-[#8A0F14] mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-xs font-medium text-[#121212] mb-1.5">
            Organisation <span className="text-[#8A0F14]">*</span>
          </label>
          <input {...register("organisation")} placeholder="Company or school name" className={inputClass} />
          {errors.organisation && <p className="text-xs text-[#8A0F14] mt-1">{errors.organisation.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-medium text-[#121212] mb-1.5">Role / Title</label>
          <input {...register("role")} placeholder="e.g. Head of HR" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs font-medium text-[#121212] mb-1.5">
            Email <span className="text-[#8A0F14]">*</span>
          </label>
          <input {...register("email")} type="email" placeholder="you@company.com" className={inputClass} />
          {errors.email && <p className="text-xs text-[#8A0F14] mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-medium text-[#121212] mb-1.5">Phone</label>
          <input {...register("phone")} placeholder="+66 XX-XXXX-XXXX" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs font-medium text-[#121212] mb-1.5">
            I am a… <span className="text-[#8A0F14]">*</span>
          </label>
          <select {...register("audience")} className={inputClass}>
            <option value="Corporate">Corporate</option>
            <option value="School">School</option>
            <option value="Parent">Parent</option>
            <option value="Student">Student</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-[#121212] mb-1.5">
          What are you looking for? <span className="text-[#8A0F14]">*</span>
        </label>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Tell us about your goals, timeline, or the program you have in mind…"
          className={inputClass}
        />
        {errors.message && <p className="text-xs text-[#8A0F14] mt-1">{errors.message.message}</p>}
      </div>

      <div>
        <label className="block text-xs font-medium text-[#121212] mb-1.5">
          How did you hear about us?
        </label>
        <select {...register("source")} className={inputClass}>
          <option value="">Select…</option>
          <option value="Google">Google</option>
          <option value="Social media">Social media</option>
          <option value="Referral">Referral</option>
          <option value="Event">Event</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <Turnstile
        ref={turnstileRef}
        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "1x00000000000000000000AA"}
        onSuccess={setTurnstileToken}
        onExpire={() => setTurnstileToken(null)}
        options={{ theme: "light", size: "normal" }}
      />

      {error && <p className="text-sm text-[#8A0F14]">{error}</p>}

      <button
        type="submit"
        disabled={submitting || !turnstileToken}
        className="w-full sm:w-auto px-8 py-3 bg-[#8A0F14] text-white text-sm font-medium rounded-full disabled:opacity-60 transition-transform active:scale-[0.98] hover:bg-[#D63B34]"
      >
        {submitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
