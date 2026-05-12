"use client";

import { useRef, useEffect, useState } from "react";
import { stats } from "@/data/stats";

function useCountUp(to: number, active: boolean, duration = 1500) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    let raf: number;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, to, duration]);
  return val;
}

function StatItem({ n, suf, label, decimals = 0 }: { n: number; suf: string; label: string; decimals?: number }) {
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
  const display = decimals ? val.toFixed(decimals) : Math.round(val);
  return (
    <div ref={ref}>
      <div
        className="font-medium leading-none tabular-nums"
        style={{ fontSize: "clamp(40px, 4.4vw, 64px)", color: "#8A0F14", letterSpacing: "-0.03em" }}
      >
        {display}{suf}
      </div>
      <div
        className="mt-[10px] uppercase tracking-[0.1em] text-[11px]"
        style={{ color: "rgba(18,18,18,0.6)", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace" }}
      >
        {label}
      </div>
    </div>
  );
}


export function AboutStats() {
  return (
    <section style={{ background: "#FFFFFF", padding: "64px 0" }}>
      <div className="max-w-[1240px] mx-auto px-8">
        <div
          className="about-stats"
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}
        >
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .about-stats { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  );
}
