"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const tabs = [
  {
    id: "corporate",
    label: "For corporates & CSR",
    title: "Corporate & CSR programs",
    body: "Partner with InnoQuest to deliver meaningful youth development under your CSR strategy. We design, facilitate, and produce impact reports. Your team gets a compelling story — the kids get life-changing skills.",
    link: { text: "See corporate programs", href: "/corporates" },
  },
  {
    id: "school",
    label: "For schools",
    title: "School & institution programs",
    body: "From one-day workshops to semester-long journeys. Our learning designers align with your curriculum, teachers, and academic calendar — so programs enhance what you already do.",
    link: { text: "See school programs", href: "/schools" },
  },
  {
    id: "parent",
    label: "For parents",
    title: "Programs for parents & families",
    body: "Give your child skills that school doesn't teach: critical thinking, creativity, and confidence. Designed by child development specialists, in safe and fun environments your kids will love.",
    link: { text: "See parent programs", href: "/programs" },
  },
  {
    id: "student",
    label: "For students",
    title: "Hey, students!",
    body: "Tired of sitting and listening? Us too. Come build, create, and solve real challenges alongside other curious kids. No textbooks. No boring lectures. Just you, your ideas, and your team.",
    link: { text: "See student programs", href: "/programs" },
  },
];

export function AudienceSwitcher() {
  const [active, setActive] = useState(0);
  const current = tabs[active];

  return (
    <section style={{ background: "#F5F0EA" }} className="snap-start min-h-screen flex flex-col justify-center py-[60px] px-8">
      <div className="max-w-7xl mx-auto">
        <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#3D3D3D] mb-6">
          I&apos;m looking for programs…
        </p>

        {/* Tab row */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActive(i)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                active === i
                  ? "bg-[#1A1A1A] text-white"
                  : "bg-white text-[#3D3D3D] hover:bg-[#E8E0D5]"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content card */}
        <div
          key={current.id}
          className="bg-white rounded-[14px] p-8 max-w-2xl animate-fade-in"
          style={{ animation: "fadeIn 0.15s ease" }}
        >
          <h3 className="text-xl font-medium text-[#1A1A1A] mb-3">{current.title}</h3>
          <p className="text-sm text-[#3D3D3D] leading-relaxed mb-5">{current.body}</p>
          <Link
            href={current.link.href}
            className="text-sm font-medium text-[#E8473F] hover:underline"
          >
            {current.link.text} →
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
