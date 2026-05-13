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
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill={i < stars ? "#8A0F14" : "rgba(18,18,18,0.15)"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
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
                  {audienceGroups.map((g) => (
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
          const items = testimonials.filter((t) => t.audience === key);
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

                {items.length === 0 ? (
                  <div style={{
                    borderRadius: 14, border: "2px dashed rgba(18,18,18,0.12)",
                    minHeight: 160, display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <p className="mono" style={{ fontSize: 12, color: "rgba(18,18,18,0.3)", letterSpacing: "0.08em" }}>
                      // {label} testimonials coming soon
                    </p>
                  </div>
                ) : (
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="test-grid">
                    {items.map((t) => (
                      <div key={t.id} className="card-lift" style={{
                        background: bg === "#F5F0EA" ? "#FFFFFF" : "#F5F0EA",
                        borderRadius: 14, padding: 28,
                        display: "flex", flexDirection: "column", gap: 16,
                        border: "1px solid rgba(18,18,18,0.06)",
                      }}>
                        {t.stars && <StarRating stars={t.stars} />}

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

                    {/* Empty placeholder card if odd number */}
                    {items.length % 3 === 1 && (
                      <div style={{
                        borderRadius: 14, border: "2px dashed rgba(18,18,18,0.1)",
                        minHeight: 200, display: "flex", alignItems: "center", justifyContent: "center",
                        gridColumn: "span 2",
                      }}>
                        <p className="mono" style={{ fontSize: 11, color: "rgba(18,18,18,0.25)", letterSpacing: "0.08em" }}>
                          // More {label.toLowerCase()} stories coming
                        </p>
                      </div>
                    )}
                  </div>
                )}
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
