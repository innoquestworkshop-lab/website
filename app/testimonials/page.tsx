import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { testimonials, audienceGroups, testimonialsPageMeta } from "@/data/testimonials";
import { stats, schoolsStat, yearsRunningStat } from "@/data/stats";

export const metadata: Metadata = {
  title: "Testimonials | InnoQuest — What People Are Saying",
  description: "From students who discovered what they're capable of, to schools that saw their classrooms transform, to corporates who finally ran a CSR program worth talking about.",
};

function StarRating({ stars }: { stars: number }) {
  const isBeyond = stars > 5;
  const total = isBeyond ? 6 : 5;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
      <div style={{ display: "flex", gap: 3 }}>
        {Array.from({ length: total }).map((_, i) => {
          const fillPct = Math.round(Math.min(1, Math.max(0, stars - i)) * 100);
          return (
            <div key={i} style={{ position: "relative", width: 13, height: 13, flexShrink: 0 }}>
              <svg width="13" height="13" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="rgba(18,18,18,0.15)" />
              </svg>
              {fillPct > 0 && (
                <div style={{ position: "absolute", top: 0, left: 0, width: `${fillPct}%`, height: "100%", overflow: "hidden" }}>
                  <svg
                    width="13" height="13" viewBox="0 0 24 24"
                    style={i === 5 ? { filter: "drop-shadow(0 0 3px #8A0F1480)" } : undefined}
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#8A0F14" />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {isBeyond && (
        <span style={{
          fontSize: 10, fontWeight: 700, letterSpacing: "0.04em",
          color: "#8A0F14", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
          background: "rgba(138,15,20,0.08)", borderRadius: 4, padding: "1px 5px",
        }}>
          6/5
        </span>
      )}
    </div>
  );
}



export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          style={{ background: "#121212", color: "#F5F0EA", paddingTop: 140, paddingBottom: 80 }}
          className="relative overflow-hidden dot-bg"
        >
          <div
            className="absolute rounded-full pointer-events-none"
            style={{ top: -100, right: -80, width: 420, height: 420, background: "#8A0F14", opacity: 0.11, filter: "blur(2px)" }}
          />
          <div className="max-w-[1240px] mx-auto px-8 relative z-10">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="test-hero-grid">
              <div>
                <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 24 }}>{testimonialsPageMeta.eyebrow}</p>
                <h1 style={{ fontSize: "clamp(36px, 5vw, 68px)", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
                  {testimonialsPageMeta.heading}
                </h1>
                <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(245,240,234,0.7)", maxWidth: 480, marginTop: 24 }}>
                  From students who discovered what they&apos;re capable of, to schools that saw their
                  classrooms transform, to corporates who finally ran a CSR program worth talking about.
                </p>
                <div style={{ display: "flex", gap: 8, marginTop: 32, flexWrap: "wrap" }}>
                  {audienceGroups.filter((g) => testimonials.some((t) => t.audience === g.key && !t.personTag)).map((g) => (
                    <span key={g.key} className="pill-tag" style={{ background: "rgba(245,240,234,0.08)", color: "rgba(245,240,234,0.7)" }}>
                      {g.tag}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  {(() => {
                    const studentsStat = stats.find((s) => s.label === "Students trained")!;
                    const satisfactionStat = stats.find((s) => s.label === "Participants Satisfaction")!;
                    return [
                      { num: `${studentsStat.n}${studentsStat.suf}`, label: studentsStat.label },
                      { num: `${schoolsStat.n}${schoolsStat.suf}`,   label: schoolsStat.label },
                      { num: `${satisfactionStat.n}${satisfactionStat.suf}`, label: satisfactionStat.label },
                      { num: `${yearsRunningStat.n}${yearsRunningStat.suf}`, label: yearsRunningStat.label },
                    ];
                  })().map((s) => (
                    <div key={s.label} style={{
                      background: "rgba(245,240,234,0.05)",
                      border: "1px solid rgba(245,240,234,0.1)",
                      borderRadius: 12, padding: 24,
                    }}>
                      <div style={{ fontSize: 32, fontWeight: 500, color: "#8A0F14", letterSpacing: "-0.03em" }}>{s.num}</div>
                      <div style={{ fontSize: 12, color: "rgba(245,240,234,0.55)", marginTop: 6, letterSpacing: "0.04em" }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <style>{`@media(max-width:900px){ .test-hero-grid { grid-template-columns: 1fr !important; } }`}</style>
        </section>

        {/* Testimonial groups */}
        {audienceGroups.map(({ key, label, tag }, gi) => {
          const items = testimonials
            .filter((t) => t.audience === key && !t.personTag)
            .sort((a, b) => (a.role === "Student" ? 1 : 0) - (b.role === "Student" ? 1 : 0));
          if (items.length === 0) return null;
          const bg = gi % 2 === 0 ? "#F5F0EA" : "#FFFFFF";
          return (
            <section key={key} style={{ background: bg, padding: "96px 0" }}>
              <div className="max-w-[1240px] mx-auto px-8">
                <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
                  <div>
                    <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 18 }}>▸ {label}</p>
                    <h2 className="h-section">{label}.</h2>
                  </div>
                  <span className="pill-tag" style={{ background: "#8A0F14", color: "#F5F0EA" }}>{tag}</span>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="test-grid">
                  {items.map((t) => (
                    <div key={t.id} className="card-lift" style={{
                      background: bg === "#F5F0EA" ? "#FFFFFF" : "#F5F0EA",
                      borderRadius: 14, padding: 28,
                      display: "flex", flexDirection: "column", gap: 16,
                      border: "1px solid rgba(18,18,18,0.06)",
                    }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        {t.stars && <StarRating stars={t.stars} />}
                        {t.extraBadge && (
                          <span style={{
                            display: "inline-flex", alignItems: "center",
                            padding: "3px 9px", borderRadius: 999,
                            fontSize: 10, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em",
                            fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
                            background: ({ corporate: "#E6F1FB", school: "#EAF3DE", parent: "#FFF3CD", student: "#F3EEFF" } as Record<string, string>)[t.extraBadge],
                            color: ({ corporate: "#185FA5", school: "#3B6D11", parent: "#856404", student: "#5B21B6" } as Record<string, string>)[t.extraBadge],
                          }}>
                            {t.extraBadge}
                          </span>
                        )}
                      </div>

                      <p style={{ fontSize: 15, lineHeight: 1.7, color: "#121212", flex: 1 }}>
                        &ldquo;{t.quote}&rdquo;
                      </p>

                      <div style={{ paddingTop: 16, borderTop: "1px solid rgba(18,18,18,0.08)", display: "flex", gap: 12, alignItems: "center" }}>
                        {t.avatar ? (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img
                            src={t.avatar}
                            alt={t.name}
                            style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
                          />
                        ) : (
                          <div style={{
                            width: 40, height: 40, borderRadius: "50%", flexShrink: 0,
                            background: "repeating-linear-gradient(135deg, #E8E0D5 0 8px, #D9CFC0 8px 16px)",
                            border: "1.5px dashed rgba(18,18,18,0.2)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                          }}>
                            <span style={{ fontSize: 9, color: "rgba(18,18,18,0.4)", fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace" }}>PIC</span>
                          </div>
                        )}
                        <div>
                          <p style={{ fontSize: 13, fontWeight: 500, color: "#121212" }}>{t.name}</p>
                          <p style={{ fontSize: 11, color: "rgba(18,18,18,0.5)", marginTop: 2 }}>
                            {t.role} · {t.context}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <style>{`
                @media(max-width:900px){ .test-grid { grid-template-columns: repeat(2, 1fr) !important; } }
                @media(max-width:540px){ .test-grid { grid-template-columns: 1fr !important; } }
              `}</style>
            </section>
          );
        })}

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
