"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Students trained" },
  { value: 30, suffix: "+", label: "Partner schools" },
  { value: 98, suffix: "%", label: "Satisfaction score" },
  { value: 5, suffix: " yrs", label: "Experience" },
];

function useCountUp(target: number, started: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    const duration = 1200;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target, started]);
  return count;
}

function StatItem({ value, suffix, label }: (typeof stats)[0]) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const count = useCountUp(value, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl font-medium text-white">
        {count}
        <span className="text-[#E8473F]">{suffix}</span>
      </div>
      <div className="text-xs text-gray-400 mt-1">{label}</div>
    </div>
  );
}

const headlineWords = ["Where", "kids", "learn", "to"];
const headlineRedWords = ["think,", "create", "&", "lead."];

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden snap-start"
      style={{ background: "#1A1A1A" }}
    >
      {/* Decorative circles */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #E8473F1A 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
      />
      <div
        className="absolute bottom-0 left-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #E8473F1A 0%, transparent 70%)", transform: "translate(-50%, 40%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-8 pt-32 pb-20 w-full">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#E8473F] text-[11px] font-medium uppercase tracking-[0.08em] mb-6"
        >
          Uplifting young human ability
        </motion.p>

        {/* Headline */}
        <h1 className="text-[40px] lg:text-[56px] font-medium leading-tight mb-6">
          <span className="flex flex-wrap gap-x-3">
            {headlineWords.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                className="text-white"
              >
                {word}
              </motion.span>
            ))}
          </span>
          <span className="flex flex-wrap gap-x-3 mt-1">
            {headlineRedWords.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (headlineWords.length + i) * 0.08, duration: 0.5 }}
                className="text-[#E8473F]"
              >
                {word}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-gray-400 text-base max-w-[560px] mb-10"
        >
          Experiential learning programs for schools, corporates &
          institutions — science-backed, play-driven, designed for the next
          generation.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.5 }}
          className="flex flex-wrap gap-4 mb-16"
        >
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-[#E8473F] text-white text-sm font-medium rounded-full transition-transform active:scale-[0.98] hover:bg-[#D63B34]"
          >
            Partner with us
          </Link>
          <Link
            href="/programs"
            className="inline-flex items-center px-6 py-3 border border-white/30 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-colors"
          >
            Explore programs
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="border-t border-white/10 pt-10 grid grid-cols-2 sm:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
