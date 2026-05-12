"use client";

import { useRef, useEffect, useState } from "react";

const partners = [
  "Assumption College", "Assumption Sriracha", "CSII",
  "Assumption College", "Assumption Sriracha", "CSII",
];

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

export function PartnersSection() {
  const [sectionRef, inView] = useReveal(0.1);
  const items = [...partners, ...partners];

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="dot-bg py-[72px] overflow-hidden"
      style={{ background: "#1A1A1A", color: "#F5F0EA" }}
    >
      <div className="max-w-[1240px] mx-auto px-8">
        <p
          className={`text-[11px] font-medium uppercase tracking-[0.14em] text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
          style={{
            color: "rgba(245,240,234,0.55)",
            fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
          }}
        >
          ▸ Our Ecosystem
        </p>
      </div>

      <div
        className={`mt-9 marquee-mask transition-all duration-700 ${inView ? "opacity-100" : "opacity-0"}`}
        style={{ transitionDelay: "160ms" }}
      >
        <div className="flex gap-14 w-max animate-marquee">
          {items.map((p, i) => (
            <div
              key={i}
              className="flex items-center gap-[10px] whitespace-nowrap"
              style={{
                padding: "14px 22px",
                border: "1px solid rgba(245,240,234,0.18)",
                borderRadius: 999,
                fontSize: 15,
                fontWeight: 500,
                color: "rgba(245,240,234,0.85)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: i % 3 === 0 ? "#C0392B" : "rgba(245,240,234,0.4)" }}
              />
              {p}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-8 mt-7 text-center">
        <p
          className="text-[11px]"
          style={{
            color: "rgba(245,240,234,0.35)",
            fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
          }}
        >
          // PLACEHOLDER · replace pill name tags with real partner logos (SVG, white/light variants)
        </p>
      </div>
    </section>
  );
}
