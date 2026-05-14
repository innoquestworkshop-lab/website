"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { testimonials as allTestimonials } from "@/data/testimonials";

const testimonials = allTestimonials
  .filter((t) => !t.personTag)
  .sort((a, b) => (a.role === "Student" ? 1 : 0) - (b.role === "Student" ? 1 : 0))
  .map((t) => ({
    ...t,
    stars: t.stars ?? 5,
    avatar: t.avatar ?? "",
    roleLabel: `${t.role} · ${Array.isArray(t.context) ? t.context.join(" · ") : t.context}`,
  }));

const VISIBLE = 3;
const maxStart = Math.max(0, testimonials.length - VISIBLE);

function Stars({ count }: { count: number }) {
  const isBeyond = count > 5;
  const total = isBeyond ? 6 : 5;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
      <div className="flex gap-[3px]">
        {Array.from({ length: total }).map((_, i) => {
          const fillPct = Math.round(Math.min(1, Math.max(0, count - i)) * 100);
          return (
            <div key={i} style={{ position: "relative", width: 14, height: 14, flexShrink: 0 }}>
              <svg width="14" height="14" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#D1D5DB" />
              </svg>
              {fillPct > 0 && (
                <div style={{ position: "absolute", top: 0, left: 0, width: `${fillPct}%`, height: "100%", overflow: "hidden" }}>
                  <svg
                    width="14" height="14" viewBox="0 0 24 24"
                    style={i === 5 ? { filter: "drop-shadow(0 0 3px #F5A62399)" } : undefined}
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#F5A623" />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {isBeyond && (
        <span style={{
          fontSize: 10, fontWeight: 700, letterSpacing: "0.04em",
          color: "#F5A623", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
          background: "rgba(245,166,35,0.12)", borderRadius: 4, padding: "1px 5px",
        }}>
          6/5
        </span>
      )}
    </div>
  );
}



function QuoteIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="#8A0F14">
      <path d="M9.41 6c-3.25 0-5.91 2.66-5.91 5.91V18h6.09v-6.09H6.5c0-1.6 1.31-2.91 2.91-2.91V6zm10 0c-3.25 0-5.91 2.66-5.91 5.91V18h6.09v-6.09H16.5c0-1.6 1.31-2.91 2.91-2.91V6z"/>
    </svg>
  );
}

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

export function TestimonialsSection() {
  const [sectionRef, inView] = useReveal(0.1);
  const [start, setStart] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = (next: number) => {
    const clamped = Math.max(0, Math.min(next, maxStart));
    if (clamped === start) return;
    setFading(true);
    setTimeout(() => { setStart(clamped); setFading(false); }, 160);
  };

  const visible = testimonials.slice(start, start + VISIBLE);

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-24"
      style={{ background: "#F5F0EA" }}
    >
      <div className="max-w-[1240px] mx-auto px-8">

        {/* Header row */}
        <div className="flex items-end justify-between gap-8 flex-wrap">
          <div>
            <p
              className={`text-[11px] font-medium uppercase tracking-[0.14em] transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
              style={{ color: "#8A0F14", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace" }}
            >
              ▸ Testimonials
            </p>
            <h2
              className={`mt-[18px] font-medium leading-[1.05] transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
              style={{ fontSize: "clamp(34px, 4.4vw, 56px)", letterSpacing: "-0.03em", transitionDelay: "80ms" }}
            >
              What people are <span className="scribble">saying</span>.
            </h2>
          </div>

          {/* Nav */}
          {testimonials.length > VISIBLE && (
            <div
              className={`flex items-center gap-3 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
              style={{ transitionDelay: "160ms" }}
            >
              <button
                onClick={() => goTo(start - 1)}
                disabled={start === 0}
                aria-label="Previous"
                style={{
                  width: 44, height: 44, borderRadius: "50%",
                  border: "1.5px solid rgba(18,18,18,0.18)",
                  background: "transparent", cursor: start === 0 ? "default" : "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  opacity: start === 0 ? 0.3 : 1,
                  transition: "opacity 0.2s",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
                </svg>
              </button>

              {/* Dots — one per testimonial, active window highlighted */}
              <div className="flex gap-[5px] items-center">
                {testimonials.map((_, i) => {
                  const active = i >= start && i < start + VISIBLE;
                  return (
                    <button
                      key={i}
                      onClick={() => goTo(Math.min(i, maxStart))}
                      aria-label={`Go to ${i + 1}`}
                      style={{
                        width: active ? 14 : 7,
                        height: 7,
                        borderRadius: 999,
                        background: active ? "#8A0F14" : "rgba(18,18,18,0.2)",
                        border: "none", cursor: "pointer", padding: 0,
                        transition: "width 0.2s, background 0.2s",
                      }}
                    />
                  );
                })}
              </div>

              <button
                onClick={() => goTo(start + 1)}
                disabled={start >= maxStart}
                aria-label="Next"
                style={{
                  width: 44, height: 44, borderRadius: "50%",
                  border: "1.5px solid rgba(18,18,18,0.18)",
                  background: "transparent", cursor: start >= maxStart ? "default" : "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  opacity: start >= maxStart ? 0.3 : 1,
                  transition: "opacity 0.2s",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Cards */}
        <div
          className="testimonial-grid mt-10 grid gap-4"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            opacity: fading ? 0 : 1,
            transition: "opacity 0.16s ease",
          }}
        >
          {visible.map((t, i) => (
            <div
              key={`${start}-${i}`}
              className="card-lift rounded-[14px] flex flex-col gap-[22px]"
              style={{
                background: "#FFFFFF",
                padding: 28,
                border: "1px solid rgba(18,18,18,0.06)",
                minHeight: 360,
              }}
            >
              <div className="flex justify-between items-center">
                <div className="flex gap-[6px] flex-wrap">
                  {t.tag && (
                    <span
                      className="inline-flex items-center px-[10px] py-[5px] rounded-full text-[11px] font-medium uppercase tracking-[0.06em]"
                      style={{ background: "#E6F1FB", color: "#185FA5", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace" }}
                    >
                      {t.tag}
                    </span>
                  )}
                </div>
                <QuoteIcon />
              </div>
              {t.stars && <Stars count={t.stars} />}
              <p className="text-[15px] leading-[1.65] flex-1" style={{ letterSpacing: "-0.01em", color: "#121212" }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div
                className="flex gap-[14px] items-center pt-4"
                style={{ borderTop: "1px solid rgba(18,18,18,0.08)" }}
              >
                {t.avatar ? (
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="shrink-0 rounded-full object-cover"
                    style={{ width: 44, height: 44 }}
                  />
                ) : (
                  <div
                    className="imgph shrink-0"
                    style={{ width: 44, height: 44, borderRadius: "50%", minHeight: 0 }}
                  />
                )}
                <div>
                  <p className="text-[14px] font-medium">{t.name}</p>
                  <p className="text-[12px]" style={{ color: "rgba(18,18,18,0.6)" }}>{t.roleLabel}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonial-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
