"use client";

import { useRef, useEffect, useState } from "react";
import { journeySteps, journeySection } from "@/data/journey";

const iconMap = {
  phone: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  edit: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
    </svg>
  ),
  bolt: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  chart: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
    </svg>
  ),
  growth: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
    </svg>
  ),
} as const;

const steps = journeySteps.map((s) => ({ ...s, Icon: iconMap[s.iconKey] }));

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

export function JourneySection() {
  const [sectionRef, inView] = useReveal(0.1);
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackVisible, setTrackVisible] = useState(false);

  useEffect(() => {
    if (!trackRef.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTrackVisible(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(trackRef.current);
    return () => obs.disconnect();
  }, []);

  const n = steps.length;

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-24"
      style={{ background: "#FFFFFF" }}
    >
      <div className="max-w-[1240px] mx-auto px-8">
        {/* Header */}
        <div className="journey-head grid gap-16 items-end" style={{ gridTemplateColumns: "1fr 1.2fr" }}>
          <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}>
            <p
              className="text-[11px] font-medium uppercase tracking-[0.14em]"
              style={{ color: "#8A0F14", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace" }}
            >
              {journeySection.eyebrow}
            </p>
            <h2
              className="mt-[18px] font-medium leading-[1.05]"
              style={{ fontSize: "clamp(34px, 4.4vw, 56px)", letterSpacing: "-0.03em" }}
            >
              {journeySection.heading.split("\n")[0]}<br />
              <span className="scribble">{journeySection.heading.split("\n")[1].replace(".", "")}</span>.
            </h2>
          </div>
          <div
            className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
            style={{ transitionDelay: "120ms" }}
          >
            <p className="text-[17px] leading-[1.55]" style={{ color: "rgba(18,18,18,0.6)", maxWidth: 480 }}>
              {journeySection.sub}
            </p>
          </div>
        </div>

        {/* Journey track */}
        <div ref={trackRef} className="mt-[72px] relative overflow-x-auto">
          <div
            className="relative"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${n}, minmax(170px, 1fr))`,
              minWidth: 800,
            }}
          >
            {/* Background connector */}
            <div
              className="absolute rounded-sm"
              style={{
                left: `calc(100% / ${n} / 2)`,
                right: `calc(100% / ${n} / 2)`,
                top: 36,
                height: 3,
                background: "#E8E0D5",
                zIndex: 0,
              }}
            />
            {/* Red fill */}
            <div
              className="absolute rounded-sm"
              style={{
                left: `calc(100% / ${n} / 2)`,
                top: 36,
                height: 3,
                background: "#8A0F14",
                zIndex: 1,
                width: trackVisible ? `calc(100% * 2 / ${n})` : "0%",
                transition: "width 1.6s cubic-bezier(0.2, 0.7, 0.2, 1)",
              }}
            />

            {steps.map((s, i) => {
              const isDone = s.state === "done";
              const isActive = s.state === "active";
              return (
                <div
                  key={i}
                  className="flex flex-col items-center text-center gap-4 relative z-10"
                >
                  <div
                    className="w-[72px] h-[72px] rounded-full grid place-items-center transition-transform duration-700"
                    style={{
                      background: isDone ? "#8A0F14" : isActive ? "#121212" : "#E8E0D5",
                      border: isActive ? "3px solid #8A0F14" : "none",
                      color: isDone || isActive ? "#F5F0EA" : "#4A4A4A",
                      boxShadow: isActive ? "0 8px 24px rgba(192,57,43,0.25)" : "none",
                      transform: trackVisible ? "scale(1)" : "scale(0.6)",
                      transitionDelay: `${i * 120}ms`,
                    }}
                  >
                    <s.Icon />
                  </div>
                  <p
                    className="text-[11px] uppercase tracking-[0.08em]"
                    style={{
                      color: "rgba(18,18,18,0.4)",
                      fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
                    }}
                  >
                    Step 0{i + 1}
                  </p>
                  <p
                    className="text-[15px] font-medium"
                    style={{ color: isActive ? "#8A0F14" : "#121212" }}
                  >
                    {s.label}
                  </p>
                  {isActive && (
                    <span
                      className="inline-flex items-center px-[10px] py-[5px] rounded-full text-[10px] font-medium uppercase tracking-[0.06em]"
                      style={{
                        background: "#8A0F14",
                        color: "#F5F0EA",
                        fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
                      }}
                    >
                      You are here
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .journey-head { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </section>
  );
}
