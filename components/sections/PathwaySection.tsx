import Link from "next/link";
import { pathwayStages, pathwayMeta } from "@/data/pathway";

export function PathwaySection({ locale }: { locale: "en" | "th" }) {
  const meta = pathwayMeta[locale];
  const stages = pathwayStages[locale];

  return (
    <section id="pathway" style={{ background: "#121212", color: "#F5F0EA", padding: "96px 0", scrollMarginTop: 80 }} className="dot-bg">
      <div className="max-w-[1240px] mx-auto px-8">
        <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 18 }}>▸ {meta.badge}</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "end", marginBottom: 48 }} className="pathway-head">
          <h2 className="h-section">
            {meta.heading} <span style={{ color: "#8A0F14", fontStyle: "italic" }}>{meta.headingAccent}</span>
          </h2>
          <div>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(245,240,234,0.7)" }}>{meta.sub}</p>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(245,240,234,0.5)", marginTop: 12 }}>{meta.sidebarBody}</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 2 }} className="pathway-steps">
          {stages.map((stage) => {
            const isLocked = stage.status === "locked";
            const body = (
              <>
                <div style={{ fontSize: 40, fontWeight: 500, color: "#8A0F14", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 20 }}>{stage.step}</div>
                <p className="eyebrow" style={{ color: "rgba(245,240,234,0.5)", marginBottom: 10 }}>{stage.theme}</p>
                <h3 style={{ fontSize: 18, fontWeight: 500, color: "#F5F0EA", marginBottom: 10, lineHeight: 1.25 }}>{stage.name}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.6, color: "rgba(245,240,234,0.6)" }}>{stage.subtitle}</p>
                {isLocked && (
                  <p style={{ fontSize: 12, fontWeight: 600, color: "rgba(245,240,234,0.45)", marginTop: 14 }}>
                    {locale === "en" ? "In development" : "กำลังพัฒนา"}
                  </p>
                )}
              </>
            );
            const style = {
              padding: "28px 22px", display: "block", textDecoration: "none",
              background: "rgba(245,240,234,0.04)", border: "1px solid rgba(245,240,234,0.08)",
              opacity: isLocked ? 0.7 : 1,
            };
            return isLocked ? (
              <div key={stage.step} style={style}>{body}</div>
            ) : (
              <Link key={stage.step} href={`/programs/${stage.slug}`} className="card-lift" style={style}>{body}</Link>
            );
          })}
        </div>
      </div>
      <style>{`
        @media(max-width:1000px){ .pathway-head { grid-template-columns: 1fr !important; gap: 24px !important; } .pathway-steps { grid-template-columns: repeat(2, 1fr) !important; } }
        @media(max-width:540px){ .pathway-steps { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
