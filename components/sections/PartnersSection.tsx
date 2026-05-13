"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { ecosystem, type EcosystemPartner } from "@/data/ecosystem";

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

function PartnerPill({ partner }: { partner: EcosystemPartner }) {
  return (
    <div
      className="flex items-center gap-3 whitespace-nowrap"
      style={{
        padding: "10px 20px",
        border: "1px solid rgba(245,240,234,0.18)",
        borderRadius: 999,
        color: "rgba(245,240,234,0.85)",
      }}
    >
      {/* Logo slot — 40×24 px reserved */}
      <div
        style={{
          width: 40, height: 24, flexShrink: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
      >
        {partner.logo ? (
          <Image
            src={partner.logo}
            alt={partner.name}
            width={40}
            height={24}
            style={{ objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.85 }}
          />
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
        )}
      </div>

      <span style={{ fontSize: 14, fontWeight: 500 }}>{partner.name}</span>
    </div>
  );
}

export function PartnersSection() {
  const [sectionRef, inView] = useReveal(0.1);
  const items = [...ecosystem, ...ecosystem];

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="dot-bg py-[72px] overflow-hidden"
      style={{ background: "#121212", color: "#F5F0EA" }}
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
        <div className="flex gap-6 w-max animate-marquee">
          {items.map((partner, i) => (
            <PartnerPill key={`${partner.id}-${i}`} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
