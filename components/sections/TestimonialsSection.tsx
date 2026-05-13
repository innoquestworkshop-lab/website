"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { testimonials as allTestimonials } from "@/data/testimonials";

const badgeStyles: Record<string, { badgeBg: string; badgeInk: string; badge: string }> = {
  student:   { badge: "Student",   badgeBg: "#F3EEFF", badgeInk: "#5B21B6" },
  school:    { badge: "School",    badgeBg: "#E6F1FB", badgeInk: "#185FA5" },
  parent:    { badge: "Parent",    badgeBg: "#EAF3DE", badgeInk: "#3B6D11" },
  corporate: { badge: "Corporate", badgeBg: "#FEF3E2", badgeInk: "#92400E" },
};

const testimonials = allTestimonials.slice(0, 3).map((t) => ({
  ...t,
  ...badgeStyles[t.audience],
  stars: t.stars ?? 5,
  avatar: t.avatar ?? "",
  role: `${t.role} · ${t.context}`,
}));

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-[3px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < count ? "#F5A623" : "#D1D5DB"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
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

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-24"
      style={{ background: "#F5F0EA" }}
    >
      <div className="max-w-[1240px] mx-auto px-8">
        <p
          className={`text-[11px] font-medium uppercase tracking-[0.14em] transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
          style={{ color: "#8A0F14", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace" }}
        >
          ▸ Testimonials
        </p>
        <h2
          className={`mt-[18px] font-medium leading-[1.05] max-w-[700px] transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
          style={{ fontSize: "clamp(34px, 4.4vw, 56px)", letterSpacing: "-0.03em", transitionDelay: "80ms" }}
        >
          What people are <span className="scribble">saying</span>.
        </h2>

        <div
          className="testimonial-grid mt-14 grid gap-4"
          style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`card-lift rounded-[14px] flex flex-col gap-[22px] transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
              style={{
                background: "#FFFFFF",
                padding: 28,
                border: "1px solid rgba(18,18,18,0.06)",
                minHeight: 380,
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div className="flex justify-between items-center">
                <span
                  className="inline-flex items-center px-[10px] py-[5px] rounded-full text-[11px] font-medium uppercase tracking-[0.06em]"
                  style={{
                    background: t.badgeBg,
                    color: t.badgeInk,
                    fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
                  }}
                >
                  {t.badge}
                </span>
                <QuoteIcon />
              </div>
              {t.stars && <Stars count={t.stars} />}
              <p className="text-[17px] leading-[1.5] flex-1" style={{ letterSpacing: "-0.01em" }}>
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
                  <p className="text-[12px]" style={{ color: "rgba(18,18,18,0.6)" }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p
          className="mt-4 text-[11px]"
          style={{
            color: "rgba(18,18,18,0.4)",
            fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
          }}
        >
          // PORTRAITS · 44×44 round headshots — informal, smiling, real people (not corporate stock)
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonial-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
