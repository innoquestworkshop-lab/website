"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/stats";
import { heroSection } from "@/data/hero";
import { useLocale } from "@/components/LanguageProvider";
import { ArrowIcon, Masonry, type Tile } from "@/components/ui/system";

function useCountUp(to: number, active: boolean, duration = 1500) {
  const [val, setVal] = useState(to);
  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setVal(to); return; }
    const start = performance.now();
    let raf: number;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
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
      <div className="num">{val}{suf}</div>
      <p className="t-small">{label}</p>
    </div>
  );
}

const columns: Tile[][] = [
  [
    { src: "/images/events/IMG_8856.jpg", alt: "Students working through a challenge at an InnoQuest workshop", ratio: "3 / 4" },
    { fill: "red", ratio: "1 / 1" },
    { src: "/images/events/price-war-030.jpg", alt: "Students celebrating during the Price War simulation", ratio: "4 / 5" },
    { fill: "sand", ratio: "3 / 4" },
  ],
  [
    { fill: "sand", ratio: "4 / 3" },
    { src: "/images/events/price-war-026.jpg", alt: "A facilitator leading the Price War simulation", ratio: "3 / 4" },
    { mark: true, ratio: "1 / 1" },
    { src: "/images/events/IMG_7900.jpg", alt: "Students talking through ideas in a small group", ratio: "4 / 5" },
  ],
  [
    { src: "/images/events/price-war-062.jpg", alt: "Teams at their tables during a live simulation", ratio: "4 / 5" },
    { fill: "dark", ratio: "3 / 4" },
    { src: "/images/events/break-the-market-5760.jpg", alt: "Students planning at Break the Market", ratio: "1 / 1" },
    { fill: "sand", ratio: "4 / 5" },
    { src: "/images/events/price-war-141.jpg", alt: "A student reading results on a laptop", ratio: "3 / 4" },
  ],
];

export function HeroSection() {
  const { locale } = useLocale();
  const hs = heroSection[locale];

  return (
    <section id="top" className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{hs.eyebrow.replace(/^▸\s*/, "")}</p>
          <h1 className="t-display">
            <span style={{ display: "block" }}>{hs.headingLine1}</span>
            <span className="accent" style={{ display: "block" }}>{hs.headingLine2}</span>
          </h1>
          <p className="lede" style={{ fontSize: 18, color: "var(--ink)" }}>{hs.sub}</p>
          <p className="lede">{hs.body}</p>
          <div className="actions">
            <Link href={hs.cta1.href} className="btn btn-primary">
              {hs.cta1.text} <ArrowIcon />
            </Link>
            <Link href={hs.cta2.href} className="btn btn-secondary">
              {hs.cta2.text}
            </Link>
          </div>
        </div>
        <div className="hero-mosaic">
          <Masonry columns={columns} offsets={[-64, -160, -24]} enter priority />
        </div>
      </div>

      <div className="wrap" style={{ paddingBlock: "32px 64px" }}>
        <div className="stat-row" style={{ paddingTop: 32, borderTop: "1px solid var(--hairline)" }}>
          {stats[locale].map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
