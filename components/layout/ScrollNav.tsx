"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useLocale } from "@/components/LanguageProvider";

const sections = [
  { id: "section-reviews", label: { en: "Reviews", th: "เสียงจากผู้เข้าร่วม" } },
  { id: "section-our-edge", label: { en: "Our edge", th: "จุดเด่น" } },
  { id: "section-method", label: { en: "Our method", th: "วิธีการของเรา" } },
  { id: "section-who-we-serve", label: { en: "Who we serve", th: "ผู้รับบริการ" } },
  { id: "section-experiences", label: { en: "Experiences", th: "โปรแกรม" } },
  { id: "section-journey", label: { en: "How it works", th: "ขั้นตอน" } },
  { id: "section-cta", label: { en: "Get started", th: "เริ่มต้น" } },
];

export function ScrollNav() {
  const { locale } = useLocale();
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
        "fixed top-0 left-0 right-0 z-50 bg-canvas border-b border-hairline transition-all duration-300",
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      )}
    >
      <div className="wrap h-16 flex items-center justify-between gap-4">
        {/* Mini logo */}
        <Link href="/" className="shrink-0 hidden sm:block">
          <Image
            src="/logos/logo-transparent-trimmed.png"
            alt="InnoQuest"
            width={100}
            height={28}
            className="h-6 w-auto object-contain"
          />
        </Link>

        {/* Section pills, scrollable on mobile */}
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide min-w-0">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              aria-current={active === s.id ? "true" : undefined}
              className={cn(
                "shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap",
                active === s.id ? "bg-secondary-bg text-ink" : "text-mute hover:text-ink"
              )}
            >
              {s.label[locale]}
            </button>
          ))}
        </div>

        {/* CTA */}
        <Link href="/contact" className="btn btn-primary hidden sm:inline-flex shrink-0 whitespace-nowrap" style={{ minHeight: 40, paddingInline: 16 }}>
          {locale === "en" ? "Talk to us →" : "ติดต่อเรา →"}
        </Link>
      </div>
    </div>
  );
}
