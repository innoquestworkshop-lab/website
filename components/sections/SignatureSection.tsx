"use client";

import { signatureSection } from "@/data/signature";
import { capitalMindsYearsStat, capitalMindsStudentsStat } from "@/data/stats";
import { useLocale } from "@/components/LanguageProvider";
import { Photo } from "@/components/ui/system";

/** The home page's one inverse strip. No logo sits on it. */
export function SignatureSection() {
  const { locale } = useLocale();
  const ss = signatureSection[locale];
  return (
    <section className="sec sec--dark">
      <div className="wrap">
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
          <span className="eyebrow">{ss.label}</span>
          <span className="eyebrow">{ss.eyebrow}</span>
        </div>

        <div className="split split--top">
          <div>
            <p className="h-card" style={{ color: "var(--on-dark-mute)", fontWeight: 400 }}>{ss.headingLine1}</p>
            <h2 style={{ fontSize: "clamp(28px, 3.4vw, 44px)", fontWeight: 700, lineHeight: 1.25, marginTop: 8 }}>
              {ss.headingLine2}
              <br />
              <span className="accent">{ss.headingLine3}</span>
            </h2>
            <p className="lede" style={{ marginTop: 32, color: "var(--on-dark)" }}>&ldquo;{ss.sub}&rdquo;</p>
            <p className="lede" style={{ marginTop: 16 }}>{ss.body}</p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 32 }}>
              {[ss.pill1, ss.pill2, ss.pill3].map((p) => (
                <span key={p} className="pill pill--line">{p}</span>
              ))}
            </div>
            {(capitalMindsYearsStat || capitalMindsStudentsStat) && (
              <div style={{ display: "flex", gap: 40, marginTop: 32 }}>
                {[capitalMindsYearsStat, capitalMindsStudentsStat].filter(Boolean).map((s) => (
                  <div key={s!.label}>
                    <div className="num-sm">{s!.n}{s!.suf}</div>
                    <div className="caption">{s!.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <Photo src={ss.img} alt="Capital Minds simulation" ratio="4 / 3" sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
      </div>
    </section>
  );
}
