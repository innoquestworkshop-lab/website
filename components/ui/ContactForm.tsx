"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-[#F5F0EA] rounded-[14px] p-10 text-center">
        <div className="text-4xl mb-4">🎉</div>
        <h3 className="text-xl font-medium text-[#1A1A1A] mb-2">Message received!</h3>
        <p className="text-sm text-[#3D3D3D]">
          The InnoQuest team will be in touch within 1–2 business days.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E8473F]/30 focus:border-[#E8473F] transition-colors";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-medium text-[#1A1A1A] mb-1.5">
            Name <span className="text-[#E8473F]">*</span>
          </label>
          <input {...register("name")} placeholder="Your name" className={inputClass} />
          {errors.name && <p className="text-xs text-[#E8473F] mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-xs font-medium text-[#1A1A1A] mb-1.5">
            Organisation <span className="text-[#E8473F]">*</span>
          </label>
          <input {...register("organisation")} placeholder="Company or school name" className={inputClass} />
          {errors.organisation && <p className="text-xs text-[#E8473F] mt-1">{errors.organisation.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-medium text-[#1A1A1A] mb-1.5">Role / Title</label>
          <input {...register("role")} placeholder="e.g. Head of HR" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs font-medium text-[#1A1A1A] mb-1.5">
            Email <span className="text-[#E8473F]">*</span>
          </label>
          <input {...register("email")} type="email" placeholder="you@company.com" className={inputClass} />
          {errors.email && <p className="text-xs text-[#E8473F] mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-medium text-[#1A1A1A] mb-1.5">Phone</label>
          <input {...register("phone")} placeholder="+66 XX-XXXX-XXXX" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs font-medium text-[#1A1A1A] mb-1.5">
            I am a… <span className="text-[#E8473F]">*</span>
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
        <label className="block text-xs font-medium text-[#1A1A1A] mb-1.5">
          What are you looking for? <span className="text-[#E8473F]">*</span>
        </label>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Tell us about your goals, timeline, or the program you have in mind…"
          className={inputClass}
        />
        {errors.message && <p className="text-xs text-[#E8473F] mt-1">{errors.message.message}</p>}
      </div>

      <div>
        <label className="block text-xs font-medium text-[#1A1A1A] mb-1.5">
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

      {error && <p className="text-sm text-[#E8473F]">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="w-full sm:w-auto px-8 py-3 bg-[#E8473F] text-white text-sm font-medium rounded-full disabled:opacity-60 transition-transform active:scale-[0.98] hover:bg-[#D63B34]"
      >
        {submitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
