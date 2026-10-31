"use client";

import { journeySteps, journeySection } from "@/data/journey";
import { useLocale } from "@/components/LanguageProvider";
import { Lines, plain } from "@/components/ui/system";

const icon = (d: React.ReactNode) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
);

const iconMap = {
  phone: () => icon(<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />),
  edit: () => icon(<><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></>),
  bolt: () => icon(<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />),
  chart: () => icon(<><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></>),
  growth: () => icon(<><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></>),
} as const;

export function JourneySection() {
  const { locale } = useLocale();
  const js = journeySection[locale];
  const steps = journeySteps[locale].map((s) => ({ ...s, Icon: iconMap[s.iconKey] }));

  return (
    <section className="sec sec--canvas">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="eyebrow">{plain(js.eyebrow)}</p>
            <h2 className="h-section"><Lines text={js.heading} /></h2>
          </div>
          <p className="lede">{js.sub}</p>
        </div>

        <ol className="journey">
          {steps.map((s, i) => {
            const isActive = s.state === "active";
            const isDone = s.state === "done";
            return (
              <li key={i} className="journey-step" data-state={s.state}>
                <div
                  className="journey-icon"
                  style={{
                    background: isActive ? "var(--innoquest-red)" : isDone ? "var(--secondary-bg)" : "var(--canvas)",
                    color: isActive ? "var(--canvas)" : isDone ? "var(--ink)" : "var(--mute)",
                    border: isActive || isDone ? "1px solid transparent" : "1px solid var(--hairline)",
                  }}
                >
                  <s.Icon />
                </div>
                <p className="caption" style={{ marginTop: 16 }}>{js.stepLabel} 0{i + 1}</p>
                <p className="h-sm" style={{ fontSize: 16, marginTop: 4, color: isActive ? "var(--red-ink)" : "var(--ink)" }}>{s.label}</p>
                {isActive && <span className="pill pill--red" style={{ marginTop: 8 }}>{js.currentLabel}</span>}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
