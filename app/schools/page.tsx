import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { ContextualTestimonials } from "@/components/sections/ContextualTestimonials";
import { schoolsPage } from "@/data/schools";

export const metadata: Metadata = {
  title: "For Schools & Institutions",
  description: "From one-day workshops to semester-long journeys — InnoQuest programs that align with your curriculum and calendar.",
};

export default function SchoolsPage() {
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
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 64, alignItems: "center" }} className="schools-hero-grid">
              <div>
                <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 24 }}>{schoolsPage.hero.eyebrow}</p>
                <h1 style={{ fontSize: "clamp(36px, 5vw, 68px)", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
                  {schoolsPage.hero.heading.replace(schoolsPage.hero.headingAccent, "").trimEnd()}{" "}
                  <span style={{ color: "#8A0F14" }}>{schoolsPage.hero.headingAccent}</span>
                </h1>
                <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(245,240,234,0.7)", maxWidth: 520, marginTop: 24 }}>
                  {schoolsPage.hero.sub}
                </p>
                <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
                  <Link href={schoolsPage.hero.cta1.href} className="inline-flex items-center gap-2 px-[22px] py-[13px] text-[14px] font-medium rounded-full" style={{ background: "#8A0F14", color: "#F5F0EA" }}>
                    {schoolsPage.hero.cta1.text}
                  </Link>
                  <Link href={schoolsPage.hero.cta2.href} className="inline-flex items-center gap-2 px-[22px] py-[13px] text-[14px] font-medium rounded-full border" style={{ color: "#F5F0EA", borderColor: "rgba(245,240,234,0.3)" }}>
                    {schoolsPage.hero.cta2.text}
                  </Link>
                </div>
              </div>
              <div>
                <div className="imgph dark" style={{ height: 380, borderRadius: 14 }}>
                  <div className="imgph-tag">{schoolsPage.hero.image.tag}</div>
                  <div className="imgph-caption">{schoolsPage.hero.image.caption}</div>
                </div>
              </div>
            </div>
          </div>
          <style>{`@media(max-width:900px){ .schools-hero-grid { grid-template-columns: 1fr !important; } }`}</style>
        </section>

        {/* Three modes */}
        <section style={{ background: "#FFFFFF", padding: "96px 0" }}>
          <div className="max-w-[1240px] mx-auto px-8">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "end", marginBottom: 48 }} className="modes-head">
              <div>
                <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 18 }}>{schoolsPage.modes.eyebrow}</p>
                <h2 className="h-section">{schoolsPage.modes.heading.split("\n").map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}</h2>
              </div>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(18,18,18,0.6)" }}>
                {schoolsPage.modes.sub}
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="modes-grid">
              {schoolsPage.modes.items.map((m) => (
                <div key={m.tag} className="card-lift" style={{
                  background: m.bg, borderRadius: 14, padding: 32,
                  minHeight: 380, display: "flex", flexDirection: "column", justifyContent: "space-between",
                  border: m.bg === "#FFFFFF" ? "1px solid rgba(18,18,18,0.06)" : undefined,
                }}>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
                      <span className="pill-tag" style={{ background: "#8A0F14", color: "#F5F0EA" }}>{m.tag}</span>
                      <span className="eyebrow" style={{ color: m.ink === "#F5F0EA" ? "rgba(245,240,234,0.55)" : "rgba(18,18,18,0.4)" }}>
                        {m.duration}
                      </span>
                    </div>
                    <h3 style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em", color: m.ink }}>{m.title}</h3>
                    <p style={{ fontSize: 15, lineHeight: 1.65, color: m.ink === "#F5F0EA" ? "rgba(245,240,234,0.7)" : "rgba(18,18,18,0.6)", marginTop: 14 }}>
                      {m.desc}
                    </p>
                  </div>
                  <div style={{ marginTop: 24 }}>
                    {m.outcomes.map((o) => (
                      <div key={o} style={{
                        display: "flex", alignItems: "center", gap: 8, padding: "8px 0",
                        borderTop: `1px solid ${m.ink === "#F5F0EA" ? "rgba(245,240,234,0.12)" : "rgba(18,18,18,0.08)"}`,
                        fontSize: 13, color: m.ink === "#F5F0EA" ? "rgba(245,240,234,0.8)" : "rgba(18,18,18,0.7)",
                      }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8A0F14" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {o}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @media(max-width:900px){ .modes-head { grid-template-columns: 1fr !important; gap: 24px !important; } .modes-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* Teacher collaboration callout */}
        <section style={{ background: "#F5F0EA", padding: "96px 0" }}>
          <div className="max-w-[1240px] mx-auto px-8">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 64, alignItems: "center" }} className="teacher-grid">
              <div>
                <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 18 }}>{schoolsPage.teacherCollab.eyebrow}</p>
                <h2 className="h-section">
                  {schoolsPage.teacherCollab.heading.split("\n").map((l, i) => (
                    <span key={i}>{i === 1 ? <><span className="scribble">with</span>{l.replace("with ", "")}</> : l}{i < 1 && <br />}</span>
                  ))}
                </h2>
                <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(18,18,18,0.6)", marginTop: 24, maxWidth: 460 }}>
                  {schoolsPage.teacherCollab.body}
                </p>
                <Link href={schoolsPage.teacherCollab.cta.href} style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 28, color: "#8A0F14", fontWeight: 500, fontSize: 14, textDecoration: "none" }}>
                  {schoolsPage.teacherCollab.cta.text}
                </Link>
              </div>
              <div>
                <div className="imgph" style={{ height: 400, borderRadius: 14 }}>
                  <div className="imgph-tag">{schoolsPage.teacherCollab.image.tag}</div>
                  <div className="imgph-caption">{schoolsPage.teacherCollab.image.caption}</div>
                </div>
              </div>
            </div>
          </div>
          <style>{`@media(max-width:900px){ .teacher-grid { grid-template-columns: 1fr !important; } }`}</style>
        </section>

        {/* Your school's learning path */}
        <section style={{ background: "#FFFFFF", padding: "96px 0" }}>
          <div className="max-w-[1240px] mx-auto px-8">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "end", marginBottom: 56 }} className="school-path-head">
              <div>
                <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 18 }}>{schoolsPage.learningPath.eyebrow}</p>
                <h2 className="h-section">{schoolsPage.learningPath.heading.split("\n").map((l, i) => (
                  <span key={i}>{i === 1 ? <><span className="scribble">{l}</span></> : l}{i === 0 && <br />}</span>
                ))}</h2>
              </div>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(18,18,18,0.6)" }}>
                {schoolsPage.learningPath.sub}
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="school-path-grid">
              {schoolsPage.learningPath.steps.map((s) => (
                <div key={s.num} className="card-lift" style={{
                  background: "#F5F0EA", borderRadius: 14, padding: 28,
                  minHeight: 240, display: "flex", flexDirection: "column", justifyContent: "space-between",
                }}>
                  <div style={{ fontSize: 48, fontWeight: 500, color: "#8A0F14", letterSpacing: "-0.04em", lineHeight: 1 }}>{s.num}</div>
                  <div>
                    <h3 style={{ fontSize: 18, fontWeight: 500, marginBottom: 8 }}>{s.title}</h3>
                    <p style={{ fontSize: 13, lineHeight: 1.7, color: "rgba(18,18,18,0.6)" }}>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 48, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href={schoolsPage.learningPath.cta1.href} className="inline-flex items-center gap-2 px-[22px] py-[13px] text-[14px] font-medium rounded-full" style={{ background: "#8A0F14", color: "#F5F0EA" }}>
                {schoolsPage.learningPath.cta1.text}
              </Link>
              <Link href={schoolsPage.learningPath.cta2.href} className="inline-flex items-center gap-2 px-[22px] py-[13px] text-[14px] font-medium rounded-full border" style={{ color: "#121212", borderColor: "rgba(18,18,18,0.25)" }}>
                {schoolsPage.learningPath.cta2.text}
              </Link>
            </div>
          </div>
          <style>{`
            @media(max-width:900px){ .school-path-head { grid-template-columns: 1fr !important; gap: 24px !important; } .school-path-grid { grid-template-columns: repeat(2,1fr) !important; } }
            @media(max-width:540px){ .school-path-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        <ContextualTestimonials audience="school" label="▸ What schools say" />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
