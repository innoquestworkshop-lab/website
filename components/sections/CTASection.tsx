"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0392B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
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

export function CTASection() {
  const [sectionRef, inView] = useReveal(0.2);

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="text-center"
      style={{ background: "#C0392B", color: "#F5F0EA", padding: "120px 0" }}
    >
      <div className="max-w-[1240px] mx-auto px-8">
        <p
          className={`text-[11px] font-medium uppercase tracking-[0.14em] transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
          style={{
            color: "rgba(245,240,234,0.7)",
            fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
          }}
        >
          ▸ Let&apos;s build something
        </p>
        <h2
          className={`mt-[18px] font-medium leading-[1.05] mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
          style={{
            fontSize: "clamp(34px, 4.4vw, 56px)",
            letterSpacing: "-0.03em",
            maxWidth: 880,
            transitionDelay: "80ms",
          }}
        >
          Ready to uplift your next generation?
        </h2>
        <p
          className={`mt-6 text-[17px] leading-[1.55] mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
          style={{
            color: "rgba(245,240,234,0.85)",
            maxWidth: 640,
            transitionDelay: "160ms",
          }}
        >
          Talk to the InnoQuest team — no commitment, just a conversation.
          We&apos;ll design something that fits your goals, budget, and timeline.
        </p>
        <div
          className={`mt-9 flex justify-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
          style={{ transitionDelay: "240ms" }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-[22px] py-[13px] text-[14px] font-medium rounded-full transition-all active:scale-[0.97] hover:bg-white/90"
            style={{ background: "#F5F0EA", color: "#C0392B" }}
          >
            See how we can help <ArrowIcon />
          </Link>
        </div>
        <p
          className={`mt-7 text-[12px] tracking-[0.04em] transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
          style={{
            color: "rgba(245,240,234,0.75)",
            fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
            transitionDelay: "320ms",
          }}
        >
          Or call us directly:{" "}
          <strong style={{ color: "#F5F0EA" }}>+66 97 097 0797</strong> · Mon–Fri 9:00–18:00
        </p>
      </div>
    </section>
  );
}
