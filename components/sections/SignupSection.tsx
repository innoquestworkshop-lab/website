"use client";

import { useState } from "react";
import { useLocale } from "@/components/LanguageProvider";
import { SignupForm } from "@/components/ui/SignupForm";
import { signupPage } from "@/data/signup";
import type { Workshop } from "@/lib/workshops";
import { CheckIcon, PageHero, plain, type Tile } from "@/components/ui/system";

const columns: Tile[][] = [
  [
    { src: "/images/events/price-war-048.jpg", alt: "Students at work during an InnoQuest workshop", ratio: "4 / 5" },
    { fill: "red", ratio: "1 / 1" },
    { src: "/images/events/entre-1-052.jpg", alt: "A full cohort of InnoQuest workshop participants", ratio: "4 / 3" },
  ],
  [
    { fill: "sand", ratio: "4 / 3" },
    { src: "/images/events/price-war-154.jpg", alt: "A student reading the round results", ratio: "3 / 4" },
    { fill: "dark", ratio: "1 / 1" },
  ],
  [
    { src: "/images/events/IMG_8695.jpg", alt: "Students planning a pitch together", ratio: "3 / 4" },
    { mark: true, ratio: "1 / 1" },
    { src: "/images/events/price-war-058.jpg", alt: "A team talking through their strategy", ratio: "4 / 5" },
  ],
];

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
    <>
      <PageHero
        compact
        eyebrow={plain(t.eyebrow)}
        title={t.heading}
        sub={workshops.length > 0 ? t.sub : t.empty}
        columns={columns}
      />

      {workshops.length > 0 && (
        <section id="workshops" className="sec sec--line">
          <div className="wrap">
            <div className="workshops">
              {workshops.map((w) => {
                const title = locale === "en" ? w.title_en || w.title_th : w.title_th;
                const description = locale === "en" ? w.description_en || w.description_th : w.description_th;
                const place = locale === "en" ? w.location_en || w.location_th : w.location_th;
                const full = w.seats_left === 0;
                const active = w.id === selectedId;
                return (
                  <div key={w.id} className="card workshop" data-active={active || undefined}>
                    <p className="caption">{when(w.starts_at)}{place && ` · ${place}`}</p>
                    <h2 className="h-card">{title}</h2>
                    <p className="t-small" style={{ flex: 1 }}>{description}</p>
                    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
                      <span className="num-sm" style={{ color: "var(--ink)" }}>฿{(w.price_satang / 100).toLocaleString("en-US")}</span>
                      <span className={full ? "pill pill--red" : "pill"}>{t.seatsLeft(w.seats_left)}</span>
                    </div>
                    <button
                      type="button"
                      disabled={full}
                      aria-pressed={active}
                      onClick={() => setSelectedId(w.id)}
                      className={`btn ${active ? "btn-primary" : "btn-secondary"} btn-block`}
                      style={{ marginTop: 8 }}
                    >
                      {active && <CheckIcon />}
                      {active ? t.selected : t.choose}
                    </button>
                  </div>
                );
              })}
            </div>

            {selected && (
              <div className="signup-form-card">
                <SignupForm key={selected.id} workshop={selected} />
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
}
