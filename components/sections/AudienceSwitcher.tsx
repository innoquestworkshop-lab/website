"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BLUR_DATA_URL } from "@/lib/imageBlur";
import { cn } from "@/lib/utils";
import { audienceTabs } from "@/data/audiences";

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

export function AudienceSwitcher() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const [sectionRef, inView] = useReveal(0.1);
  const cur = audienceTabs[active];

  const switchTo = (i: number) => {
    if (i === active) return;
    setFading(true);
    setTimeout(() => { setActive(i); setFading(false); }, 150);
  };

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
          ▸ Find your fit
        </p>
        <h2
          className={`mt-[18px] font-medium leading-[1.05] max-w-[760px] transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
          style={{ fontSize: "clamp(34px, 4.4vw, 56px)", letterSpacing: "-0.03em", transitionDelay: "80ms" }}
        >
          I&apos;m looking for programs<span style={{ color: "#8A0F14" }}>…</span>
        </h2>

        {/* Tabs */}
        <div
          className={`mt-9 flex flex-wrap transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
          style={{ borderBottom: "1px solid rgba(18,18,18,0.12)", transitionDelay: "160ms" }}
        >
          {audienceTabs.map((t, i) => (
            <button
              key={t.id}
              onClick={() => switchTo(i)}
              className={cn(
                "relative py-3 text-[14px] font-medium transition-colors mr-[22px] px-1",
                i === active ? "text-[#121212]" : "text-[rgba(18,18,18,0.6)] hover:text-[#121212]"
              )}
              style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}
            >
              {t.tab}
              <span
                className="absolute left-1 right-1 bottom-1 h-[2px] rounded-sm transition-transform duration-300 origin-left"
                style={{
                  background: "#8A0F14",
                  transform: i === active ? "scaleX(1)" : "scaleX(0)",
                }}
              />
            </button>
          ))}
        </div>

        {/* Card */}
        <div
          className={`mt-8 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
          style={{ transitionDelay: "240ms" }}
        >
          <div
            className="audience-card grid overflow-hidden rounded-[18px]"
            style={{
              gridTemplateColumns: "1.05fr 1fr",
              background: "#FFFFFF",
              border: "1px solid rgba(18,18,18,0.06)",
              boxShadow: "0 2px 16px rgba(18,18,18,0.06)",
              minHeight: 480,
              opacity: fading ? 0 : 1,
              transition: "opacity 0.15s ease",
            }}
          >
            <div style={{ padding: "56px 56px 48px" }}>
              <p
                className="text-[12px] font-medium uppercase tracking-[0.14em]"
                style={{ color: "rgba(18,18,18,0.6)", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace" }}
              >
                {cur.tab}
              </p>
              <h3
                className="mt-[16px] font-medium leading-[1.15]"
                style={{ fontSize: 40, letterSpacing: "-0.02em" }}
              >
                {cur.title}
              </h3>
              <p className="mt-[20px] text-[18px] leading-[1.65]" style={{ color: "rgba(18,18,18,0.6)" }}>
                {cur.body}
              </p>
              <div className="flex flex-wrap gap-2 mt-7">
                {cur.bullets.map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center gap-[6px] px-[12px] py-[6px] rounded-full text-[12px] font-medium uppercase tracking-[0.06em]"
                    style={{
                      background: "#F5F0EA",
                      color: "#121212",
                      fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
                    }}
                  >
                    <span style={{ color: "#8A0F14" }}><CheckIcon /></span>
                    {b}
                  </span>
                ))}
              </div>
              <Link
                href={cur.link.href}
                className="mt-10 inline-flex items-center gap-2 text-[15px] font-medium transition-opacity hover:opacity-80"
                style={{ color: "#8A0F14" }}
              >
                {cur.link.text} <span style={{ color: "#8A0F14" }}><ArrowIcon /></span>
              </Link>
            </div>
            <div style={{ padding: 20 }}>
              {cur.img ? (
                <div
                  className="relative w-full h-full overflow-hidden rounded-[10px]"
                  style={{ minHeight: 420, border: "2px solid rgba(18,18,18,0.12)", boxShadow: "0 2px 12px rgba(18,18,18,0.08)" }}
                >
                  <Image
                    key={cur.img}
                    src={cur.img}
                    alt={cur.title}
                    fill
                    className="object-cover scale-[1.05]"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                  />
                </div>
              ) : (
                <div
                  className="imgph w-full h-full"
                  style={{ minHeight: 420, border: "2px solid rgba(18,18,18,0.12)", boxShadow: "0 2px 12px rgba(18,18,18,0.08)", borderRadius: 10 }}
                >
                  <div className="imgph-tag">PERSONA · {cur.tab.toUpperCase()}</div>
                  <div className="imgph-caption">{cur.imgCaption}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .audience-card { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
