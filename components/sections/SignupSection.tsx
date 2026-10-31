"use client";

import { useState } from "react";
import { useLocale } from "@/components/LanguageProvider";
import { SignupForm } from "@/components/ui/SignupForm";
import { signupPage } from "@/data/signup";
import type { Workshop } from "@/lib/workshops";

export function SignupSection({ workshops }: { workshops: Workshop[] }) {
  const { locale } = useLocale();
  const t = signupPage[locale];
  const firstOpen = workshops.find((w) => w.seats_left > 0);
  const [selectedId, setSelectedId] = useState(firstOpen?.id ?? null);
  const selected = workshops.find((w) => w.id === selectedId);

  const when = (iso: string) =>
    new Date(iso).toLocaleDateString(locale === "en" ? "en-GB" : "th-TH", {
      day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Bangkok",
    });

  return (
    <section style={{ background: "#F5F0EA", padding: "140px 0 96px" }}>
      <div className="max-w-[1240px] mx-auto px-8">
        <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 18 }}>{t.eyebrow}</p>
        <h1 className="h-section">{t.heading}</h1>
        <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(18,18,18,0.6)", maxWidth: 580, marginTop: 16, marginBottom: 40 }}>
          {workshops.length > 0 ? t.sub : t.empty}
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {workshops.map((w) => {
            const title = locale === "en" ? w.title_en || w.title_th : w.title_th;
            const description = locale === "en" ? w.description_en || w.description_th : w.description_th;
            const place = locale === "en" ? w.location_en || w.location_th : w.location_th;
            const full = w.seats_left === 0;
            const active = w.id === selectedId;
            return (
              <div key={w.id} className="card-lift" style={{
                background: "#FFFFFF", borderRadius: 14, padding: 28, display: "flex", flexDirection: "column", gap: 10,
                border: active ? "2px solid #8A0F14" : "1px solid rgba(18,18,18,0.08)",
              }}>
                <h2 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em" }}>{title}</h2>
                <p style={{ fontSize: 14, color: "rgba(18,18,18,0.6)" }}>{when(w.starts_at)}{place && ` · ${place}`}</p>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(18,18,18,0.7)", flex: 1 }}>{description}</p>
                <p style={{ fontSize: 17, fontWeight: 500 }}>฿{(w.price_satang / 100).toLocaleString("en-US")}</p>
                <p style={{ fontSize: 13, color: full ? "#8A0F14" : "rgba(18,18,18,0.55)" }}>{t.seatsLeft(w.seats_left)}</p>
                <button
                  type="button"
                  disabled={full}
                  onClick={() => setSelectedId(w.id)}
                  className="px-5 py-2.5 text-sm font-medium rounded-full disabled:opacity-50"
                  style={{ background: active ? "#8A0F14" : "#121212", color: "#F5F0EA" }}
                >
                  {active ? t.selected : t.choose}
                </button>
              </div>
            );
          })}
        </div>

        {selected && (
          <div style={{ background: "#FFFFFF", borderRadius: 14, padding: 32, marginTop: 24 }}>
            <SignupForm key={selected.id} workshop={selected} />
          </div>
        )}
      </div>
    </section>
  );
}
