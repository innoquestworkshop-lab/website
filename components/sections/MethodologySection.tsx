"use client";

import { useRef, useEffect, useState } from "react";

const pillars = [
  { num: "01", title: "Double-Sided Learning", desc: "Hard skills (like strategy) and soft skills (like confidence) are two sides of the same coin. We never teach them separately because, in the real world, you can't have one without the other." },
  { num: "02", title: "Thinking as a Habit", desc: "Critical thinking isn't a subject on a syllabus; it's a reflex. We train people to pause and analyze the \"why\" before they ever jump into the \"how.\"" },
  { num: "03", title: "Connecting the Dots", desc: "Innovation happens at the edges of different worlds. We teach participants to find the links between business, design, science, and psychology to solve complex problems." },
  { num: "04", title: "Action Over Instruction", desc: "We skip the manuals and the long lectures. Real learning lives in the struggle of a game and the pressure of a challenge—not in a slideshow." },
  { num: "05", title: "Teamwork by Necessity", desc: "The challenges we design are too big for one person to solve alone. In our sessions, collaboration isn't a suggestion; it is a mechanical requirement to succeed." },
  { num: "06", title: "The Insight is in the Debrief", desc: "The game is the hook, but the reflection is the teacher. We spend dedicated time after every activity dissecting what happened so the lesson actually sticks." },
  { num: "07", title: "Real-World Stakes", desc: "We don't do \"busy work.\" Every program is rooted in actual entrepreneurial thinking and real-world strategy, ensuring the experience feels as meaningful as it is educational." },
];

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

export function MethodologySection() {
  const [sectionRef, inView] = useReveal(0.1);

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-24"
      style={{ background: "#FFFFFF" }}
    >
      <div className="max-w-[1240px] mx-auto px-8">
        {/* Header - two columns */}
        <div className="method-head grid gap-16 items-end" style={{ gridTemplateColumns: "1fr 1.4fr" }}>
          <div
            className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
          >
            <p
              className="text-[11px] font-medium uppercase tracking-[0.14em]"
              style={{ color: "#C0392B", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace" }}
            >
              ▸ Our learning framework
            </p>
            <h2
              className="mt-[18px] font-medium leading-[1.05]"
              style={{ fontSize: "clamp(34px, 4.4vw, 56px)", letterSpacing: "-0.03em" }}
            >
              The InnoQuest{" "}
              <span className="scribble">Method</span>
              <sup style={{ fontSize: "0.4em", verticalAlign: "super", marginLeft: 4, color: "#C0392B" }}>©</sup>
            </h2>
          </div>
          <div
            className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
            style={{ transitionDelay: "120ms" }}
          >
            <p className="text-[17px] leading-[1.55]" style={{ color: "rgba(26,26,26,0.6)", maxWidth: 520 }}>
              Seven principles that define how we design every program —
              because the way people learn matters just as much as what they learn.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div
          className="method-grid mt-14 grid gap-4"
          style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
        >
          {pillars.map((p, i) => (
            <div
              key={p.num}
              className={`card-lift rounded-[14px] p-7 flex flex-col justify-between transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
              style={{
                background: "#E8E0D5",
                minHeight: 280,
                border: "1px solid transparent",
                transitionDelay: `${i * 100}ms`,
                cursor: "default",
                ...(i === 6 ? { gridColumn: "span 2" } : {}),
              }}
            >
              <div
                className="font-medium leading-none"
                style={{ fontSize: 56, color: "#C0392B", letterSpacing: "-0.04em" }}
              >
                {p.num}
              </div>
              <div>
                <h3 className="font-medium" style={{ fontSize: 22, letterSpacing: "-0.015em", lineHeight: 1.2 }}>
                  {p.title}
                </h3>
                <p className="mt-[10px] text-[14px] leading-[1.7]" style={{ color: "rgba(26,26,26,0.6)" }}>
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .card-lift { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .card-lift:hover { transform: translateY(-3px); }
        @media (max-width: 900px) {
          .method-head { grid-template-columns: 1fr !important; gap: 24px !important; }
          .method-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .method-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
