"use client";

import { methodPillars, methodologySection } from "@/data/methodology";
import { useLocale } from "@/components/LanguageProvider";
import { plain } from "@/components/ui/system";

export function MethodologySection() {
  const { locale } = useLocale();
  const ms = methodologySection[locale];
  const pillars = methodPillars[locale];

  return (
    <section className="sec sec--canvas">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="eyebrow">{plain(ms.eyebrow)}</p>
            <h2 className="h-section">
              {ms.heading}
              <sup style={{ fontSize: "0.5em", marginLeft: 4, color: "var(--red-ink)" }}>©</sup>
            </h2>
          </div>
          <p className="lede">{ms.sub}</p>
        </div>

        <div className="steps" style={{ "--steps": 4, rowGap: 40 } as React.CSSProperties}>
          {pillars.map((p) => (
            <div key={p.num} className="step">
              <div className="num">{p.num}</div>
              <h3 className="h-sm">{p.title}</h3>
              <p className="t-small">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
