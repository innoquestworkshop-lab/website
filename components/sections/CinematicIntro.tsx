"use client";

import { useEffect, useState, useRef } from "react";
import { cinematicIntro } from "@/data/hero";

export function CinematicIntro() {
  const [started, setStarted] = useState(false);
  const [progress, setProgress] = useState(0); // 0 → 1 as user scrolls through
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const scroller = document.querySelector("main") ?? window;
    const onScroll = () => {
      const scrollTop =
        scroller instanceof Window ? window.scrollY : (scroller as Element).scrollTop;
      const vh = window.innerHeight;
      setProgress(Math.min(1, Math.max(0, scrollTop / vh)));
    };
    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => scroller.removeEventListener("scroll", onScroll);
  }, []);

  // Drives the exit animation
  const scale = 1 + progress * 0.18;
  const opacity = 1 - progress * 1.4;
  const eyebrowOpacity = Math.max(0, 1 - progress * 2.5);

  return (
    // Outer wrapper is 200vh so there's scroll room while content stays sticky
    <div ref={wrapperRef} style={{ height: "200vh" }}>
      <div
        className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden"
        style={{ background: "#0a0a0a" }}
      >
        {/* Radial depth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(139,0,0,0.18) 0%, rgba(10,10,10,0) 70%)",
          }}
        />

        {/* Animated content block */}
        <div
          className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center will-change-transform"
          style={{
            transform: `scale(${scale})`,
            opacity: Math.max(0, opacity),
            transition: "opacity 0.05s linear, transform 0.05s linear",
          }}
        >
          {/* Eyebrow */}
          <p
            className={`text-[11px] font-bold tracking-[0.3em] uppercase mb-8 transition-all duration-500 ${started ? "translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{
              color: "#8A0F14",
              opacity: started ? eyebrowOpacity : 0,
              fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
            }}
          >
            {cinematicIntro.eyebrow}
          </p>

          {/* Headline */}
          <h1
            className="font-black tracking-tighter leading-none uppercase"
            style={{ fontSize: "clamp(64px, 13vw, 180px)" }}
          >
            <span
              className={`block text-white transition-all duration-700 ${started ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: "100ms" }}
            >
              {cinematicIntro.line1}
            </span>
            <span
              className={`block transition-all duration-700 ${started ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                transitionDelay: "220ms",
                background: "linear-gradient(to right, #ffffff, #c8c6c6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {cinematicIntro.line2}
            </span>
            <span
              className={`block transition-all duration-700 ${started ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ color: "#8A0F14", transitionDelay: "360ms" }}
            >
              {cinematicIntro.line3}
            </span>
          </h1>

          {/* Sub */}
          <p
            className={`mt-8 text-lg md:text-xl font-light max-w-2xl leading-relaxed transition-all duration-500 ${started ? "translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{
              color: "#c8c6c6",
              opacity: started ? eyebrowOpacity : 0,
              transitionDelay: "520ms",
            }}
          >
            {cinematicIntro.sub}
          </p>
        </div>

        {/* Scroll indicator — fades out first */}
        <div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 ${started ? "translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{
            opacity: started ? Math.max(0, (1 - progress * 3) * 0.6) : 0,
            transitionDelay: "800ms",
          }}
        >
          <span
            className="text-[10px] tracking-widest uppercase animate-bounce"
            style={{ color: "#c8c6c6", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace" }}
          >
            {cinematicIntro.scrollLabel}
          </span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c8c6c6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
