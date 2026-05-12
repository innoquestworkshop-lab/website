"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const tabs = [
  {
    id: "corp",
    tab: "For corporates & CSR",
    title: "Corporate & CSR programs",
    body: "Partner with InnoQuest to deliver meaningful youth development under your CSR strategy. We design, facilitate, and produce impact reports. Your team gets a compelling story — the kids get life-changing skills.",
    link: { text: "Explore Possibilities", href: "/corporates" },
    bullets: ["Impact reports", "Branded outcomes", "Custom CSR design"],
    imgCaption: "// photo: corporate team observing kids workshop, two CSR leads smiling. Wide. Daylight.",
  },
  {
    id: "school",
    tab: "For schools",
    title: "School & institution programs",
    body: "From one-day workshops to semester-long journeys. Our learning designers align with your curriculum, teachers, and academic calendar — so programs enhance what you already do.",
    link: { text: "Explore Possibilities", href: "/schools" },
    bullets: ["Curriculum-aligned", "Teacher onboarding", "Semester-friendly"],
    imgCaption: "// photo: classroom shot — teacher + facilitator working with students at desks arranged in clusters.",
  },
  {
    id: "parent",
    tab: "For parents",
    title: "Programs for parents & families",
    body: "Give your child skills that school doesn't teach: critical thinking, creativity, and confidence. Designed by child development specialists, in safe and fun environments your kids will love.",
    link: { text: "See InnoQuest's Programs", href: "/programs" },
    bullets: ["Safe environments", "Specialist-designed", "Holiday camps"],
    imgCaption: "// photo: parent dropping off child at workshop, child smiling running to friends.",
  },
  {
    id: "student",
    tab: "For students",
    title: "Hey, students!",
    body: "Tired of sitting and listening? Us too. Come build, create, and solve real challenges alongside other curious kids. No textbooks. No boring lectures. Just you, your ideas, and your team.",
    link: { text: "See student programs", href: "/programs" },
    bullets: ["Real challenges", "Team-based", "No textbooks"],
    imgCaption: "// photo: students high-fiving over prototype on table, sticky notes everywhere.",
  },
];

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
  const cur = tabs[active];

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
          style={{ color: "#C0392B", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace" }}
        >
          ▸ Find your fit
        </p>
        <h2
          className={`mt-[18px] font-medium leading-[1.05] max-w-[760px] transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
          style={{ fontSize: "clamp(34px, 4.4vw, 56px)", letterSpacing: "-0.03em", transitionDelay: "80ms" }}
        >
          I&apos;m looking for programs<span style={{ color: "#C0392B" }}>…</span>
        </h2>

        {/* Tabs */}
        <div
          className={`mt-9 flex flex-wrap transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
          style={{ borderBottom: "1px solid rgba(26,26,26,0.12)", transitionDelay: "160ms" }}
        >
          {tabs.map((t, i) => (
            <button
              key={t.id}
              onClick={() => switchTo(i)}
              className={cn(
                "relative py-3 text-[14px] font-medium transition-colors mr-[22px] px-1",
                i === active ? "text-[#1A1A1A]" : "text-[rgba(26,26,26,0.6)] hover:text-[#1A1A1A]"
              )}
              style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}
            >
              {t.tab}
              <span
                className="absolute left-1 right-1 bottom-1 h-[2px] rounded-sm transition-transform duration-300 origin-left"
                style={{
                  background: "#C0392B",
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
            className="audience-card grid overflow-hidden rounded-[14px]"
            style={{
              gridTemplateColumns: "1.05fr 1fr",
              background: "#FFFFFF",
              border: "1px solid rgba(26,26,26,0.06)",
              boxShadow: "0 1px 0 rgba(26,26,26,0.04)",
              minHeight: 360,
              opacity: fading ? 0 : 1,
              transition: "opacity 0.15s ease",
            }}
          >
            <div style={{ padding: "44px 44px 36px" }}>
              <p
                className="text-[11px] font-medium uppercase tracking-[0.14em]"
                style={{ color: "rgba(26,26,26,0.6)", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace" }}
              >
                {cur.tab}
              </p>
              <h3
                className="mt-[14px] font-medium leading-[1.15]"
                style={{ fontSize: 32, letterSpacing: "-0.02em" }}
              >
                {cur.title}
              </h3>
              <p className="mt-[18px] text-[16px] leading-[1.65]" style={{ color: "rgba(26,26,26,0.6)" }}>
                {cur.body}
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {cur.bullets.map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center gap-[6px] px-[10px] py-[5px] rounded-full text-[11px] font-medium uppercase tracking-[0.06em]"
                    style={{
                      background: "#F5F0EA",
                      color: "#1A1A1A",
                      fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
                    }}
                  >
                    <span style={{ color: "#C0392B" }}><CheckIcon /></span>
                    {b}
                  </span>
                ))}
              </div>
              <Link
                href={cur.link.href}
                className="mt-8 inline-flex items-center gap-2 text-[14px] font-medium transition-opacity hover:opacity-80"
                style={{ color: "#C0392B" }}
              >
                {cur.link.text} <span style={{ color: "#C0392B" }}><ArrowIcon /></span>
              </Link>
            </div>
            <div style={{ padding: 16 }}>
              <div className="imgph w-full h-full" style={{ minHeight: 320 }}>
                <div className="imgph-tag">PERSONA · {cur.tab.toUpperCase()}</div>
                <div className="imgph-caption">{cur.imgCaption}</div>
              </div>
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
