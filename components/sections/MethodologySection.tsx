"use client";

import { useRef, useEffect, useState } from "react";

import { methodPillars, methodologySection } from "@/data/methodology";

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

export function MethodologySection() {
  const [sectionRef, inView] = useReveal(0.1);

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-24"
      style={{ background: "#FFFFFF" }}
    >
      <div className="max-w-[1240px] mx-auto px-8">
        {/* Header - two columns */}
        <div className="method-head grid gap-16 items-end" style={{ gridTemplateColumns: "1fr 1.4fr" }}>
          <div
            className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
          >
            <p
              className="text-[11px] font-medium uppercase tracking-[0.14em]"
              style={{ color: "#8A0F14", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace" }}
            >
              {methodologySection.eyebrow}
            </p>
            <h2
              className="mt-[18px] font-medium leading-[1.05]"
              style={{ fontSize: "clamp(34px, 4.4vw, 56px)", letterSpacing: "-0.03em" }}
            >
              {(() => {
                const scribble = methodologySection.headingScribble;
                const full = methodologySection.heading;
                const idx = full.lastIndexOf(scribble);
                if (idx === -1) return <>{full}<sup style={{ fontSize: "0.4em", verticalAlign: "super", marginLeft: 4, color: "#8A0F14" }}>©</sup></>;
                const before = full.slice(0, idx);
                const after = full.slice(idx + scribble.length);
                return (
                  <>
                    {before}
                    <span className="scribble">{scribble}</span>
                    {after}
                    <sup style={{ fontSize: "0.4em", verticalAlign: "super", marginLeft: 4, color: "#8A0F14" }}>©</sup>
                  </>
                );
              })()}
            </h2>
          </div>
          <div
            className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
            style={{ transitionDelay: "120ms" }}
          >
            <p className="text-[17px] leading-[1.55]" style={{ color: "rgba(18,18,18,0.6)", maxWidth: 520 }}>
              {methodologySection.sub}
            </p>
          </div>
        </div>

        {/* Cards */}
        <div
          className="method-grid mt-14 grid gap-4"
          style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
        >
          {methodPillars.map((p, i) => (
            <div
              key={p.num}
              className={`card-lift rounded-[14px] p-7 flex flex-col justify-between transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
              style={{
                background: "#E8E0D5",
                minHeight: 280,
                border: "1px solid transparent",
                transitionDelay: `${i * 100}ms`,
                cursor: "default",
                ...(i === 6 ? { gridColumn: "span 2" } : {}),
              }}
            >
              <div
                className="font-medium leading-none"
                style={{ fontSize: 56, color: "#8A0F14", letterSpacing: "-0.04em" }}
              >
                {p.num}
              </div>
              <div>
                <h3 className="font-medium" style={{ fontSize: 22, letterSpacing: "-0.015em", lineHeight: 1.2 }}>
                  {p.title}
                </h3>
                <p className="mt-[10px] text-[14px] leading-[1.7]" style={{ color: "rgba(18,18,18,0.6)" }}>
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .card-lift { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .card-lift:hover { transform: translateY(-3px); }
        @media (max-width: 900px) {
          .method-head { grid-template-columns: 1fr !important; gap: 24px !important; }
          .method-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .method-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
