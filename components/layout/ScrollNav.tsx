"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const sections = [
  { id: "section-our-edge", label: "Our Edge" },
  { id: "section-who-we-serve", label: "Who we serve" },
  { id: "section-method", label: "Our method" },
  { id: "section-experiences", label: "Experiences" },
  { id: "section-partners", label: "Partners" },
  { id: "section-journey", label: "How it works" },
  { id: "section-reviews", label: "Reviews" },
  { id: "section-cta", label: "Get started" },
];

export function ScrollNav() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const container = document.querySelector("main") as HTMLElement | null;
    const target = container ?? window;

    const onScroll = () => {
      const scrollY = container ? container.scrollTop : window.scrollY;
      const triggerLine = scrollY + window.innerHeight * 0.35;

      // Show nav after hero
      setVisible(scrollY > window.innerHeight * 0.8);

      // Active = last section whose top is above the trigger line
      let next = "";
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= triggerLine) next = id;
      }
      setActive(next);
    };

    target.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // set initial state
    return () => target.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      )}
      style={{ background: "#111111", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="max-w-7xl mx-auto px-8 h-12 flex items-center justify-between gap-4">
        {/* Mini logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logos/logo-transparent-trimmed.png"
            alt="InnoQuest"
            width={100}
            height={28}
            className="h-6 w-auto object-contain"
          />
        </Link>

        {/* Section pills — scrollable on mobile */}
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={cn(
                "shrink-0 px-3 py-1 rounded-full text-[11px] font-medium transition-all whitespace-nowrap",
                active === s.id
                  ? "bg-[#8A0F14] text-white"
                  : "text-white/40 hover:text-white/80"
              )}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden sm:inline-flex shrink-0 items-center px-4 py-1.5 bg-[#8A0F14] text-white text-xs font-medium rounded-full hover:bg-[#D63B34] transition-colors"
        >
          Talk to us →
        </Link>
      </div>
    </div>
  );
}
