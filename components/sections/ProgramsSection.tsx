"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { programs } from "@/data/programs";
import { stats, satisfactionNote, studentsNote } from "@/data/stats";
import { useLocale } from "@/components/LanguageProvider";
import { ArrowIcon, Photo } from "@/components/ui/system";

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(to);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / 1500);
        setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => { obs.disconnect(); cancelAnimationFrame(raf); };
  }, [to]);
  return <span ref={ref} className="tabular">{val}{suffix}</span>;
}

export function ProgramsSection() {
  const { locale } = useLocale();
  const allPrograms = programs[locale];
  const featured = allPrograms.find((p) => p.featured) ?? allPrograms[0];
  const rest = allPrograms.filter((p) => p.slug !== featured.slug);
  const sat = stats.en.find((s) => s.label === "Participants Satisfaction")?.n ?? 96;
  const students = stats.en.find((s) => s.label === "Students trained")?.n ?? 400;

  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="eyebrow">{locale === "en" ? "Programs" : "โปรแกรม"}</p>
            <h2 className="h-section">
              {locale === "en" ? <>Short, long, or fully custom.</> : <>ระยะสั้น ระยะยาว หรือออกแบบเฉพาะ</>}
            </h2>
          </div>
          <p className="lede">
            {locale === "en"
              ? "From a single-day spark to a full semester, built around your goals."
              : "ตั้งแต่กิจกรรมหนึ่งวันไปจนถึงโปรแกรมตลอดภาคเรียน ออกแบบให้สอดคล้องกับเป้าหมายของแต่ละโรงเรียนและองค์กร"}
          </p>
        </div>

        <div className="prog-feature">
          <Link href={`/programs/${featured.slug}`} className="pin prog-feature-main">
            <Photo src="/images/events/entre-1-173.jpg" alt={featured.name} ratio="16 / 10" position="50% 61%" sizes="(max-width: 900px) 100vw, 60vw" />
            <div className="pin-body">
              <span className="pill pill--red">{locale === "en" ? "Most popular" : "ยอดนิยม"}</span>
              <h3 className="h-card" style={{ marginTop: 12, fontSize: 28, fontWeight: 700 }}>{featured.name}</h3>
              <p className="lede" style={{ marginTop: 8 }}>{featured.tagline}</p>
              <span className="link" style={{ marginTop: 16 }}>
                {locale === "en" ? "Explore program" : "ดูรายละเอียดโปรแกรม"} <ArrowIcon size={14} />
              </span>
            </div>
          </Link>

          <div className="prog-feature-side">
            <div className="card card--sand card--lg" style={{ justifyContent: "space-between", flex: 1 }}>
              <p className="eyebrow" style={{ color: "var(--body)" }}>{locale === "en" ? "Satisfaction score" : "คะแนนความพึงพอใจ"}</p>
              <div className="num" style={{ fontSize: "clamp(56px, 6vw, 88px)", fontFamily: "var(--font-display)" }}>
                <CountUp to={sat} suffix="%" />
              </div>
              <p className="t-small">{satisfactionNote[locale]}</p>
            </div>
            <div className="card card--lg" style={{ justifyContent: "space-between", flex: 1 }}>
              <p className="eyebrow">{locale === "en" ? "Students trained" : "นักเรียนที่ผ่านการอบรม"}</p>
              <div className="num" style={{ fontSize: "clamp(56px, 6vw, 88px)", fontFamily: "var(--font-display)" }}>
                <CountUp to={students} suffix="+" />
              </div>
              <p className="t-small">{studentsNote[locale]}</p>
            </div>
          </div>
        </div>

        <div className="grid-4" style={{ marginTop: 32 }}>
          {rest.map((p) => (
            <Link key={p.slug} href={`/programs/${p.slug}`} className="pin">
              {p.heroImg ? (
                <Photo src={p.heroImg} alt={p.name} ratio="4 / 3" position={p.heroImgPosition} scale={p.heroImgScale} blur={p.heroImgBlur} />
              ) : (
                <div className="tile tile--sand" style={{ aspectRatio: "4 / 3" }} />
              )}
              <div className="pin-body">
                <h3 className="h-sm">{p.name}</h3>
                <p className="caption" style={{ marginTop: 4 }}>{[p.duration, p.ages].filter(Boolean).join(" · ")}</p>
                {p.comingSoon && (
                  <span className="pill" style={{ marginTop: 8 }}>{locale === "en" ? "Coming soon" : "เตรียมเปิดตัว"}</span>
                )}
              </div>
            </Link>
          ))}
          <Link href="/what-we-do#custom" className="card card--soft" style={{ textDecoration: "none", justifyContent: "space-between", minHeight: 240 }}>
            <p className="eyebrow">{locale === "en" ? "Want something personalized?" : "โปรแกรมที่ออกแบบเฉพาะ"}</p>
            <div>
              <h3 className="h-sm" style={{ marginBottom: 16 }}>
                {locale === "en" ? "Design something custom with us." : "InnoQuest ยินดีร่วมออกแบบโปรแกรมให้สอดคล้องกับความต้องการของท่าน"}
              </h3>
              <span className="link">
                {locale === "en" ? "Start a custom brief" : "สอบถามข้อมูล"} <ArrowIcon size={14} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
