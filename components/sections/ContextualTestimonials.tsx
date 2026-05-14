"use client";

import Image from "next/image";
import { testimonials, type TestimonialAudience } from "@/data/testimonials";

const badgeStyles: Record<TestimonialAudience, { bg: string; ink: string }> = {
  corporate: { bg: "#E6F1FB", ink: "#185FA5" },
  school:    { bg: "#EAF3DE", ink: "#3B6D11" },
  parent:    { bg: "#FFF3CD", ink: "#856404" },
  student:   { bg: "#F3EEFF", ink: "#5B21B6" },
};

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-[3px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill={i < count ? "#F5A623" : "#D1D5DB"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

type Props = {
  /** Filter by one or more audience types */
  audience?: TestimonialAudience | TestimonialAudience[];
  /** Filter by program slug — matched first, then falls back to audience */
  programSlug?: string;
  /** Max cards to show (default 3) */
  limit?: number;
  /** Optional section label above the cards */
  label?: string;
};

export function ContextualTestimonials({ audience, programSlug, limit = 3, label }: Props) {
  const audiences = audience
    ? Array.isArray(audience) ? audience : [audience]
    : [];

  // Priority: exact program match first, then audience match; non-Student roles float to top
  const matched = testimonials
    .filter((t) => {
      if (t.personTag) return false;
      if (programSlug && t.programSlug === programSlug) return true;
      if (audiences.length > 0 && audiences.includes(t.audience)) return true;
      return false;
    })
    .sort((a, b) => (a.role === "Student" ? 1 : 0) - (b.role === "Student" ? 1 : 0))
    .slice(0, limit);

  // Render nothing if no data yet — placeholder stays invisible
  if (matched.length === 0) return null;

  return (
    <section style={{ background: "#F5F0EA", padding: "96px 0" }}>
      <div className="max-w-[1240px] mx-auto px-8">
        {label && (
          <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 18 }}>{label}</p>
        )}
        <h2 className="h-section" style={{ marginBottom: 40 }}>What people say.</h2>
        <div
          className="ctx-testimonials-grid grid gap-4"
          style={{ gridTemplateColumns: `repeat(${Math.min(matched.length, 3)}, 1fr)` }}
        >
          {matched.map((t) => {
            const badge = badgeStyles[t.audience];
            return (
              <div
                key={t.id}
                className="bg-white rounded-[14px] p-6 flex flex-col gap-4"
                style={{ border: "1px solid rgba(18,18,18,0.06)" }}
              >
                {/* Badge + stars */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex gap-[5px] flex-wrap">
                    <span
                      className="inline-flex items-center px-[9px] py-[4px] rounded-full text-[10px] font-medium uppercase tracking-[0.06em]"
                      style={{ background: badge.bg, color: badge.ink, fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace" }}
                    >
                      {t.audience}
                    </span>
                    {t.extraBadge && (() => { const eb = badgeStyles[t.extraBadge]; return (
                      <span
                        className="inline-flex items-center px-[9px] py-[4px] rounded-full text-[10px] font-medium uppercase tracking-[0.06em]"
                        style={{ background: eb.bg, color: eb.ink, fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace" }}
                      >
                        {t.extraBadge}
                      </span>
                    ); })()}
                  </div>
                  {t.stars && <Stars count={t.stars} />}
                </div>

                {/* Quote */}
                <p className="text-[15px] leading-[1.6] flex-1" style={{ color: "#121212", letterSpacing: "-0.01em" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div
                  className="flex gap-3 items-center pt-3"
                  style={{ borderTop: "1px solid rgba(18,18,18,0.08)" }}
                >
                  {t.avatar ? (
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={36}
                      height={36}
                      className="shrink-0 rounded-full object-cover"
                      style={{ width: 36, height: 36 }}
                    />
                  ) : (
                    <div
                      className="shrink-0 rounded-full imgph"
                      style={{ width: 36, height: 36, minHeight: 0 }}
                    />
                  )}
                  <div>
                    <p className="text-[13px] font-medium" style={{ color: "#121212" }}>{t.name}</p>
                    <p className="text-[11px]" style={{ color: "rgba(18,18,18,0.55)" }}>{t.role} · {Array.isArray(t.context) ? t.context.join(" · ") : t.context}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ctx-testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
