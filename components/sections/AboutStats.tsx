"use client";

import { useRef, useEffect, useState } from "react";
import { stats } from "@/data/stats";
import { useLocale } from "@/components/LanguageProvider";

function useCountUp(to: number, active: boolean, duration = 1500) {
  // Starts at the real value so no-JS and reduced-motion visitors see the true number.
  const [val, setVal] = useState(to);
  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setVal(to); return; }
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
      <div className="num">{display}{suf}</div>
      <p className="t-small" style={{ marginTop: 4, color: "var(--mute)" }}>{label}</p>
    </div>
  );
}


export function AboutStats() {
  const { locale } = useLocale();
  return (
    <section className="sec sec--canvas" style={{ paddingBlock: 48 }}>
      <div className="wrap stat-row">
        {stats[locale].map((s) => (
          <StatItem key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}
