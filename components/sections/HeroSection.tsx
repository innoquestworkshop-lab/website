"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/stats";
import { heroSection } from "@/data/hero";

function useCountUp(to: number, active: boolean, duration = 1500) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    let raf: number;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, to, duration]);
  return val;
}

function StatItem({ n, suf, label }: { n: number; suf: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setActive(true); obs.disconnect(); } },
      { threshold: 0.4 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const val = useCountUp(n, active);
  return (
    <div ref={ref}>
      <div
        className="font-medium leading-none tabular-nums"
        style={{ fontSize: "clamp(40px, 4.4vw, 64px)", color: "#8A0F14", letterSpacing: "-0.03em" }}
      >
        {val}{suf}
      </div>
      <div
        className="mt-[10px] uppercase tracking-[0.1em] text-[11px]"
        style={{ color: "rgba(245,240,234,0.65)", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace" }}
      >
        {label}
      </div>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}


export function HeroSection() {
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="top"
      className="relative overflow-hidden dot-bg"
      style={{
        background: "#121212",
        color: "#F5F0EA",
        paddingTop: 140,
        paddingBottom: 96,
      }}
    >
      {/* Decorative circles */}
      <div
        className="absolute pointer-events-none rounded-full animate-float-slow"
        style={{
          top: -160, right: -120, width: 560, height: 560,
          background: "#8A0F14", opacity: 0.11, filter: "blur(2px)",
        }}
      />
      <div
        className="absolute pointer-events-none rounded-full animate-float-slower"
        style={{
          bottom: -260, left: "40%", width: 640, height: 640,
          background: "#8A0F14", opacity: 0.07,
        }}
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-8">
        {/* Eyebrow */}
        <p
          className={`text-[11px] font-medium uppercase tracking-[0.14em] mb-7 transition-all duration-500 ${started ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ color: "#8A0F14", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace" }}
        >
          {heroSection.eyebrow}
        </p>

        {/* Headline */}
        <h1
          className="font-medium leading-[0.98] tracking-[-0.035em]"
          style={{ fontSize: "clamp(44px, 7.2vw, 96px)" }}
        >
          <span
            className={`block text-[#F5F0EA] transition-all duration-700 ${started ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
            style={{ transitionDelay: "80ms" }}
          >
            {heroSection.headingLine1}
          </span>
          <span
            className={`block transition-all duration-700 ${started ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
            style={{ color: "#8A0F14", transitionDelay: "240ms" }}
          >
            {heroSection.headingLine2}
          </span>
        </h1>

        {/* Sub */}
        <p
          className={`mt-8 text-[18px] leading-[1.55] max-w-[640px] transition-all duration-500 ${started ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ color: "rgba(245,240,234,0.7)", transitionDelay: "500ms" }}
        >
          {heroSection.sub}
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-wrap gap-3 mt-9 transition-all duration-500 ${started ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "650ms" }}
        >
          <Link
            href={heroSection.cta1.href}
            className="inline-flex items-center gap-2 px-[22px] py-[13px] text-[14px] font-medium rounded-full transition-all active:scale-[0.97]"
            style={{ background: "#8A0F14", color: "#F5F0EA" }}
          >
            {heroSection.cta1.text} <ArrowIcon />
          </Link>
          <Link
            href={heroSection.cta2.href}
            className="inline-flex items-center gap-2 px-[22px] py-[13px] text-[14px] font-medium rounded-full border transition-colors"
            style={{ color: "#F5F0EA", borderColor: "rgba(245,240,234,0.5)" }}
          >
            {heroSection.cta2.text}
          </Link>
        </div>

        {/* Hero image grid */}
        <div
          className={`mt-16 transition-all duration-700 ${started ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="grid gap-4" style={{ gridTemplateColumns: "1.4fr 1fr 1fr" }}>
            <div className="imgph dark" style={{ height: 320 }}>
              <div className="imgph-tag">HERO · WIDE</div>
              <div className="imgph-caption">// candid wide shot: 4–6 kids (age 10–14) mid-build at a workshop table, daylight, real expressions of focus + joy. Horizontal.</div>
            </div>
            <div className="imgph dark" style={{ height: 320 }}>
              <div className="imgph-tag">HERO · DETAIL</div>
              <div className="imgph-caption">// hands close-up: kid sketching on whiteboard / sticking post-its. Tight crop. Vertical.</div>
            </div>
            <div className="imgph dark" style={{ height: 320 }}>
              <div className="imgph-tag">HERO · ENERGY</div>
              <div className="imgph-caption">// teen pitching to peers, mic in hand, smiling. Vertical.</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className="mt-16 pt-8 grid"
          style={{
            borderTop: "1px solid rgba(245,240,234,0.15)",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
          }}
        >
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #top .hero-img-grid { grid-template-columns: 1fr !important; }
          #top .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
