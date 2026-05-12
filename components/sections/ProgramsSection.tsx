"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";

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

function CountUp({ to, suffix }: { to: number; suffix: string }) {
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
  const val = useCountUp(to, active);
  return <div ref={ref} className="tabular-nums">{val}{suffix}</div>;
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

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function HackathonIcon({ color }: { color: string }) {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7c.7.6 1 1.4 1 2.3v1h6v-1c0-.9.3-1.7 1-2.3A7 7 0 0 0 12 2z"/></svg>;
}

function LeadershipIcon({ color }: { color: string }) {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M21 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
}

function CreativeIcon({ color }: { color: string }) {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2v3"/><path d="M4.93 6.93l2.12 2.12"/><path d="M19.07 6.93l-2.12 2.12"/><path d="M2 12h3"/><path d="M19 12h3"/><circle cx="12" cy="12" r="4"/></svg>;
}

function CSRIcon({ color }: { color: string }) {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>;
}

function FoundersIcon({ color }: { color: string }) {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>;
}

const programs = [
  { name: "Innovation Hackathon for Schools", dur: "1–3 days", ages: "10–18", Icon: HackathonIcon, href: "/programs/the-change-lab" },
  { name: "Leadership Program", dur: "Long-term", ages: "13–18", Icon: LeadershipIcon, href: "/programs/entrepreneur-in-innovation" },
  { name: "Creative Thinking Workshop", dur: "1 day", ages: "8–14", Icon: CreativeIcon, href: "/programs/break-the-market" },
  { name: "Corporate CSR Camp", dur: "Custom", ages: "All ages", Icon: CSRIcon, href: "/corporates" },
  { name: "Young Founders Series", dur: "Semester", ages: "14–18", Icon: FoundersIcon, href: "/programs/capital-minds" },
];

function PillTag({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <span
      className="inline-flex items-center gap-[6px] px-[10px] py-[5px] rounded-full text-[11px] font-medium uppercase tracking-[0.06em]"
      style={{ fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace", ...style }}
    >
      {children}
    </span>
  );
}

export function ProgramsSection() {
  const [sectionRef, inView] = useReveal(0.1);

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-24"
      style={{ background: "#F5F0EA" }}
    >
      <div className="max-w-[1240px] mx-auto px-8">
        {/* Header */}
        <div className="prog-head grid gap-16 items-end" style={{ gridTemplateColumns: "1fr 1.2fr" }}>
          <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}>
            <p
              className="text-[11px] font-medium uppercase tracking-[0.14em]"
              style={{ color: "#C0392B", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace" }}
            >
              ▸ Programs
            </p>
            <h2
              className="mt-[18px] font-medium leading-[1.05]"
              style={{ fontSize: "clamp(34px, 4.4vw, 56px)", letterSpacing: "-0.03em" }}
            >
              Short, long, or{" "}
              <span className="scribble">fully custom</span>.
            </h2>
          </div>
          <div
            className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
            style={{ transitionDelay: "120ms" }}
          >
            <p className="text-[17px] leading-[1.55]" style={{ color: "rgba(26,26,26,0.6)", maxWidth: 480 }}>
              From a single-day spark to a semester-long transformation —
              built around your goals.
            </p>
          </div>
        </div>

        {/* Bento grid */}
        <div
          className="bento mt-12 grid gap-4"
          style={{ gridTemplateColumns: "1.7fr 1fr", gridTemplateRows: "auto auto" }}
        >
          {/* Featured card - spans 2 rows */}
          <div
            className={`card-lift rounded-[14px] relative overflow-hidden transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
            style={{
              background: "#1A1A1A",
              color: "#F5F0EA",
              gridRow: "1 / span 2",
              padding: 36,
              minHeight: 460,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* Red glow circle */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{ top: -100, right: -100, width: 320, height: 320, background: "#C0392B", opacity: 0.18, filter: "blur(2px)" }}
            />
            <div className="relative z-10">
              <PillTag style={{ background: "#C0392B", color: "#F5F0EA" }}>★ Most popular</PillTag>
              <h3
                className="mt-5 font-medium leading-[1.1]"
                style={{ fontSize: "clamp(28px, 3.4vw, 44px)", letterSpacing: "-0.025em", maxWidth: 460 }}
              >
                Innovation <span style={{ color: "#C0392B" }}>Hackathon</span> for Schools
              </h3>
              <p className="mt-[14px] text-[14px] leading-[1.7]" style={{ color: "rgba(245,240,234,0.7)", maxWidth: 440 }}>
                Real-world challenges. Mixed-grade teams. Two to three days that students
                remember years later — and a portfolio piece they actually want to show.
              </p>
            </div>
            <div className="relative z-10 mt-6">
              <div className="imgph dark" style={{ height: 180, marginBottom: 22 }}>
                <div className="imgph-tag">FEATURE</div>
                <div className="imgph-caption">// hero photo: kids presenting prototype at finale, judges clapping. Wide composition. Capture energy.</div>
              </div>
              <div className="flex gap-2 flex-wrap">
                <PillTag style={{ background: "rgba(245,240,234,0.1)", color: "#F5F0EA" }}>1–3 DAYS</PillTag>
                <PillTag style={{ background: "rgba(245,240,234,0.1)", color: "#F5F0EA" }}>AGES 10–18</PillTag>
                <PillTag style={{ background: "rgba(245,240,234,0.1)", color: "#F5F0EA" }}>30–120 STUDENTS</PillTag>
              </div>
              <Link
                href="/programs/the-change-lab"
                className="mt-[22px] inline-flex items-center gap-2 px-[22px] py-[13px] text-[14px] font-medium rounded-full transition-all active:scale-[0.97]"
                style={{ background: "#C0392B", color: "#F5F0EA" }}
              >
                Explore program <ArrowIcon />
              </Link>
            </div>
          </div>

          {/* 98% stat tile */}
          <div
            className={`card-lift rounded-[14px] relative flex flex-col justify-between transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
            style={{ background: "#E8E0D5", padding: 28, minHeight: 222, transitionDelay: "120ms" }}
          >
            <p
              className="text-[11px] uppercase tracking-[0.14em]"
              style={{ color: "rgba(26,26,26,0.6)", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace" }}
            >
              Satisfaction score
            </p>
            <div
              className="font-medium leading-none tabular-nums"
              style={{ fontSize: "clamp(64px, 7vw, 104px)", color: "#C0392B", letterSpacing: "-0.04em" }}
            >
              <CountUp to={96} suffix="%" />
            </div>
            <p className="text-[14px] leading-[1.7]" style={{ color: "rgba(26,26,26,0.6)", maxWidth: 280 }}>
              of teachers say students returned to class more engaged.
            </p>
            {/* Spinning badge */}
            <svg
              className="animate-spin-slow absolute"
              width="86" height="86" viewBox="0 0 86 86"
              style={{ top: 18, right: 18 }}
            >
              <defs>
                <path id="circ" d="M 43, 43 m -32, 0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0" />
              </defs>
              <text
                fontSize="9"
                fill="#1A1A1A"
                letterSpacing="2"
                style={{ fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace" }}
              >
                <textPath href="#circ">★ KIDS LOVE IT · KIDS LOVE IT · </textPath>
              </text>
            </svg>
          </div>

          {/* 500+ stat tile */}
          <div
            className={`card-lift rounded-[14px] flex flex-col justify-between transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
            style={{
              background: "#FFFFFF",
              padding: 28,
              minHeight: 222,
              border: "1px solid rgba(26,26,26,0.06)",
              transitionDelay: "200ms",
            }}
          >
            <p
              className="text-[11px] uppercase tracking-[0.14em]"
              style={{ color: "rgba(26,26,26,0.6)", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace" }}
            >
              Students trained
            </p>
            <div
              className="font-medium leading-none"
              style={{ fontSize: "clamp(64px, 7vw, 104px)", color: "#C0392B", letterSpacing: "-0.04em" }}
            >
              <CountUp to={400} suffix="+" />
            </div>
            <p className="text-[14px] leading-[1.7]" style={{ color: "rgba(26,26,26,0.6)", maxWidth: 280 }}>
              across Thailand since 2021. From Bangkok to Chiang Mai.
            </p>
          </div>
        </div>

        {/* Program list */}
        <div
          className="prog-list mt-4 grid gap-4"
          style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
        >
          {programs.map((p, i) => (
            <Link
              key={p.name}
              href={p.href}
              className={`card-lift rounded-[14px] flex flex-col gap-[18px] transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
              style={{
                background: "#FFFFFF",
                padding: 22,
                border: "1px solid rgba(26,26,26,0.06)",
                minHeight: 200,
                textDecoration: "none",
                color: "inherit",
                transitionDelay: `${i * 60}ms`,
              }}
            >
              <div
                className="w-11 h-11 rounded-[10px] grid place-items-center"
                style={{ background: "#1A1A1A" }}
              >
                <p.Icon color="#C0392B" />
              </div>
              <div className="flex-1">
                <h4
                  className="font-medium"
                  style={{ fontSize: 17, letterSpacing: "-0.015em", lineHeight: 1.2 }}
                >
                  {p.name}
                </h4>
              </div>
              <div className="flex gap-[6px] flex-wrap">
                <PillTag style={{ background: "#F5F0EA", color: "#1A1A1A" }}>{p.dur}</PillTag>
                <PillTag style={{ background: "#F5F0EA", color: "#1A1A1A" }}>Ages {p.ages}</PillTag>
              </div>
            </Link>
          ))}
          {/* Custom CTA tile */}
          <Link
            href="/custom"
            className={`card-lift rounded-[14px] flex flex-col justify-between transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
            style={{
              background: "#1A1A1A",
              color: "#F5F0EA",
              padding: 22,
              minHeight: 200,
              textDecoration: "none",
              transitionDelay: `${programs.length * 60}ms`,
            }}
          >
            <p
              className="text-[11px] uppercase tracking-[0.14em]"
              style={{ color: "rgba(245,240,234,0.6)", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace" }}
            >
              Don&apos;t see a fit?
            </p>
            <div>
              <h4
                className="font-medium mb-[14px]"
                style={{ fontSize: 17, color: "#F5F0EA" }}
              >
                Design something custom with us.
              </h4>
              <span
                className="text-[13px] font-medium inline-flex items-center gap-[6px]"
                style={{ color: "#C0392B" }}
              >
                Start a custom brief <ArrowIcon />
              </span>
            </div>
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .prog-head { grid-template-columns: 1fr !important; gap: 24px !important; }
          .bento { grid-template-columns: 1fr !important; }
          .bento > *:first-child { grid-row: auto !important; }
          .prog-list { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .prog-list { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
