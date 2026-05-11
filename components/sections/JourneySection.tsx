"use client";

import { useEffect, useRef, useState } from "react";
import {
  IconPhone,
  IconPencil,
  IconBolt,
  IconChartBar,
  IconArrowUp,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const steps = [
  { label: "Discovery call", Icon: IconPhone, state: "done" as const },
  { label: "Custom design", Icon: IconPencil, state: "done" as const },
  { label: "Program delivery", Icon: IconBolt, state: "active" as const },
  { label: "Impact report", Icon: IconChartBar, state: "upcoming" as const },
  { label: "Long-term program", Icon: IconArrowUp, state: "upcoming" as const },
];

export function JourneySection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="snap-start min-h-screen flex flex-col justify-center bg-white py-[60px] px-8">
      <div className="max-w-7xl mx-auto">
        <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#3D3D3D] mb-3">
          How it works
        </p>
        <h2 className="text-2xl font-medium text-[#1A1A1A] mb-3">
          Your organization&apos;s learning path
        </h2>
        <p className="text-sm text-[#3D3D3D] max-w-[520px] mb-14">
          From first conversation to long-term partnership — InnoQuest guides every step.
        </p>

        {/* Step track */}
        <div ref={ref} className="overflow-x-auto pb-4">
          <div className="flex items-start gap-0 min-w-[600px]">
            {steps.map((step, i) => {
              const isDone = step.state === "done";
              const isActive = step.state === "active";
              const isLast = i === steps.length - 1;

              return (
                <div key={step.label} className="flex items-start">
                  {/* Step node */}
                  <div className="flex flex-col items-center gap-3">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-700",
                        isDone && "bg-[#E8473F]",
                        isActive && "bg-[#1A1A1A] ring-2 ring-[#E8473F] ring-offset-2",
                        !isDone && !isActive && "bg-[#E8E0D5]"
                      )}
                      style={visible ? { transitionDelay: `${i * 150}ms` } : { opacity: 0 }}
                    >
                      <step.Icon
                        size={20}
                        className={cn(
                          isDone && "text-white",
                          isActive && "text-[#E8473F]",
                          !isDone && !isActive && "text-[#3D3D3D]"
                        )}
                      />
                    </div>
                    <span
                      className={cn(
                        "text-xs font-medium text-center max-w-[80px]",
                        isActive ? "text-[#E8473F]" : "text-[#3D3D3D]"
                      )}
                    >
                      {step.label}
                    </span>
                  </div>

                  {/* Connector */}
                  {!isLast && (
                    <div className="relative w-20 h-0.5 mt-6 mx-1 overflow-hidden bg-[#E8E0D5] rounded-full">
                      {isDone && (
                        <div
                          className="absolute inset-0 bg-[#E8473F] rounded-full transition-all duration-700"
                          style={visible ? { width: "100%", transitionDelay: `${i * 150 + 200}ms` } : { width: 0 }}
                        />
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
