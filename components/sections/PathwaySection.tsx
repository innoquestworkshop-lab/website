import Link from "next/link";
import { pathwayStages, pathwayMeta } from "@/data/pathway";

export function PathwaySection({ locale }: { locale: "en" | "th" }) {
  const meta = pathwayMeta[locale];
  const stages = pathwayStages[locale];

  return (
    <section id="pathway" className="sec sec--canvas sec--line">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="eyebrow">{meta.badge}</p>
            <h2 className="h-section">
              {meta.heading} <span style={{ color: "var(--red-ink)" }}>{meta.headingAccent}</span>
            </h2>
          </div>
          <div>
            <p className="lede">{meta.sub}</p>
            <p className="t-small" style={{ marginTop: 12, color: "var(--mute)" }}>{meta.sidebarBody}</p>
          </div>
        </div>

        <ol className="pathway">
          {stages.map((stage) => {
            const isLocked = stage.status === "locked";
            const body = (
              <>
                <div className="num">{stage.step}</div>
                <p className="caption" style={{ marginTop: 16 }}>{stage.theme}</p>
                <h3 className="h-sm" style={{ marginTop: 4 }}>{stage.name}</h3>
                <p className="t-small" style={{ marginTop: 8 }}>{stage.subtitle}</p>
                {isLocked && (
                  <span className="pill" style={{ marginTop: 16, alignSelf: "flex-start" }}>
                    {locale === "en" ? "In development" : "กำลังพัฒนา"}
                  </span>
                )}
              </>
            );
            return (
              <li key={stage.step}>
                {isLocked ? (
                  <div className="card card--soft" style={{ height: "100%" }}>{body}</div>
                ) : (
                  <Link href={`/programs/${stage.slug}`} className="card pathway-link" style={{ height: "100%", textDecoration: "none" }}>{body}</Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
