import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { ContextualTestimonials } from "@/components/sections/ContextualTestimonials";
import { programs, programsPageMeta } from "@/data/programs";

export const metadata: Metadata = {
  title: "Programs & Experiences | InnoQuest Thailand",
  description: "Explore InnoQuest programs for students ages 10–18 in Bangkok & Thailand — from 1-day innovation workshops to semester-long entrepreneurship journeys. For schools, families & corporates.",
  openGraph: {
    images: [{ url: "/images/events/entre-1-173.jpg", width: 1200, height: 630, alt: "InnoQuest Programs & Experiences" }],
  },
};

export default function ProgramsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F5F0EA] selection:bg-[#8A0F14] selection:text-white">

        {/* Hero */}
        <section
          className="relative overflow-hidden dot-bg"
          style={{ borderBottom: "8px solid #8A0F14", background: "#121212", color: "#F5F0EA", paddingTop: 140, paddingBottom: 96 }}
        >
          <div
            className="absolute rounded-full pointer-events-none"
            style={{ top: -80, right: -80, width: 400, height: 400, background: "#8A0F14", opacity: 0.15, filter: "blur(40px)" }}
          />
          <div className="max-w-[1240px] mx-auto px-8 relative z-10">
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 999, fontSize: 14, fontWeight: 500, color: "rgba(245,240,234,0.8)", marginBottom: 32 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#8A0F14" }} className="animate-pulse" />
              Experiences &amp; Programs
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "end" }} className="hero-grid">
              <div>
                <h1 style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
                  {programsPageMeta.heading}
                </h1>
                <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(245,240,234,0.7)", maxWidth: 480, marginTop: 24, marginBottom: 32 }}>
                  {programsPageMeta.sub}
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <Link href="/contact" className="inline-flex items-center gap-2 px-[22px] py-[13px] text-[14px] font-medium rounded-full" style={{ background: "#8A0F14", color: "#F5F0EA" }}>
                    Enquire now →
                  </Link>
                  <Link href="/programs/pathway" className="inline-flex items-center gap-2 px-[22px] py-[13px] text-[14px] font-medium rounded-full border" style={{ color: "#F5F0EA", borderColor: "rgba(245,240,234,0.3)" }}>
                    View full pathway →
                  </Link>
                </div>
              </div>
              <div style={{ position: "relative", padding: "16px 0 0 16px" }}>
                <div style={{
                  position: "absolute", top: 0, left: 0,
                  width: "calc(100% - 16px)", height: "calc(100% - 16px)",
                  borderRadius: 14, border: "2px solid #8A0F14", opacity: 0.6,
                }} />
                <div style={{ height: 380, borderRadius: 14, overflow: "hidden", position: "relative" }}>
                  <Image src="/images/events/price-war-080.jpg" alt="InnoQuest Programs" fill style={{ objectFit: "cover", transform: "scale(1.15)" }} priority sizes="(max-width: 900px) 100vw, 50vw" />
                </div>
              </div>
            </div>
          </div>
          <style>{`@media(max-width:900px){ .hero-grid { grid-template-columns: 1fr !important; gap: 24px !important; } }`}</style>
        </section>

        {/* Program Stack */}
        <section style={{ padding: "96px 0" }}>
          <div className="max-w-[1240px] mx-auto px-8">
            <div style={{ display: "flex", gap: 48 }} className="stack-container">

              {/* Left Column: Sticky Context */}
              <div style={{ width: "25%" }} className="hidden md:block">
                <div className="sticky top-32">
                  <h2 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 16 }}>Our programs</h2>
                  <p style={{ fontSize: 14, color: "rgba(18,18,18,0.6)", lineHeight: 1.6, marginBottom: 32 }}>
                    Each program runs as a standalone sprint or links into a full entrepreneurial pathway. Every experience is powered by our live simulation engine.
                  </p>

                  <div style={{ borderLeft: "2px solid rgba(18,18,18,0.1)", paddingLeft: 16, display: "flex", flexDirection: "column", gap: 16 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, fontWeight: 500, color: "#121212" }}>
                      <span style={{ color: "#8A0F14", fontSize: 16 }}>◈</span>
                      Powered by Tech
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, fontWeight: 500, color: "rgba(18,18,18,0.5)" }}>
                      <span style={{ fontSize: 16 }}>◎</span>
                      Expert Facilitation
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, fontWeight: 500, color: "rgba(18,18,18,0.5)" }}>
                      <span style={{ fontSize: 16 }}>◷</span>
                      Real-time Competition
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, fontWeight: 500, color: "rgba(18,18,18,0.5)" }}>
                      <span style={{ fontSize: 16 }}>◉</span>
                      Post-workshop Analysis
                    </div>
                  </div>

                  <div style={{ marginTop: 40 }}>
                    <Link href="/programs/pathway" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 600, color: "#8A0F14", textDecoration: "none" }}>
                      See the full pathway →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column: Program Stack */}
              <div style={{ width: "75%", position: "relative" }} className="stack-main">

                {/* Structural spine */}
                <div className="absolute top-8 bottom-0 bg-gray-200 hidden md:block" style={{ left: 27, width: 4 }} />

                <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
                  {programs.map((program, i) => (
                    <div key={program.slug} className="relative md:pl-24">

                      {/* Number Node */}
                      <div
                        className="absolute left-0 top-6 hidden md:flex items-center justify-center rounded-xl z-10"
                        style={{ width: 56, height: 56, background: "#121212", color: "#F5F0EA", fontSize: 18, fontWeight: 700, border: "4px solid #F5F0EA" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </div>

                      {/* Card */}
                      <div className="card-lift" style={{
                        display: "flex", flexDirection: "column", background: "#FFFFFF",
                        borderRadius: 16, overflow: "hidden", border: "1px solid rgba(18,18,18,0.08)",
                      }}>

                        {/* Image Pane */}
                        <div style={{ height: 260, background: "#121212", position: "relative", overflow: "hidden" }}>
                          {program.heroImg ? (
                            <Image src={program.heroImg} alt={program.name} fill style={{ objectFit: "cover", objectPosition: program.heroImgPosition ?? "center", transform: `scale(${program.heroImgScale ?? 1})`, filter: program.heroImgBlur ? `blur(${program.heroImgBlur}px)` : undefined }} sizes="(max-width: 900px) 100vw, 75vw" />
                          ) : (
                            <div className="imgph dark" style={{ height: "100%", borderRadius: 0 }}>
                              <div className="imgph-tag">{program.name.toUpperCase()}</div>
                              <div className="imgph-caption">// program photo needed</div>
                            </div>
                          )}
                        </div>

                        {/* Content Pane */}
                        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                          <div style={{ padding: 32, flex: 1 }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                                {program.featured && <span className="pill-tag" style={{ background: "#8A0F14", color: "#F5F0EA" }}>★ Most popular</span>}
                                {program.comingSoon && <span className="pill-tag" style={{ background: "rgba(18,18,18,0.08)", color: "rgba(18,18,18,0.5)" }}>Coming soon</span>}
                              </div>
                              <div style={{ width: 8, height: 8, borderRadius: "50%", background: program.comingSoon ? "#D1D5DB" : "#10B981", flexShrink: 0 }} />
                            </div>

                            <h3 style={{ fontSize: 28, fontWeight: 500, letterSpacing: "-0.02em", color: "#121212", marginBottom: 8 }}>{program.name}</h3>
                            <p style={{ fontSize: 16, fontWeight: 500, color: "rgba(18,18,18,0.8)", marginBottom: 16 }}>{program.tagline}</p>

                            <p style={{ fontSize: 15, lineHeight: 1.65, color: "rgba(18,18,18,0.6)", marginBottom: 24 }}>
                              {program.description}
                            </p>


                          </div>


                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Custom CTA at bottom of stack */}
                  <div className="relative md:pl-24">
                    <div
                      className="absolute left-0 top-6 hidden md:flex items-center justify-center rounded-xl z-10"
                      style={{ width: 56, height: 56, background: "#8A0F14", color: "#F5F0EA", fontSize: 22, fontWeight: 700, border: "4px solid #F5F0EA" }}
                    >
                      +
                    </div>
                    <Link href="/custom" className="card-lift" style={{
                      background: "#121212", color: "#F5F0EA", borderRadius: 16, padding: "40px 32px",
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      gap: 24, textDecoration: "none",
                    }}>
                      <div>
                        <p className="eyebrow" style={{ color: "rgba(245,240,234,0.55)", marginBottom: 10 }}>Want something personalized?</p>
                        <h3 style={{ fontSize: 24, fontWeight: 500, color: "#F5F0EA", letterSpacing: "-0.02em" }}>
                          Design something custom with us.
                        </h3>
                      </div>
                      <span style={{
                        display: "inline-flex", alignItems: "center", gap: 8,
                        padding: "13px 22px", background: "#8A0F14", color: "#F5F0EA",
                        borderRadius: 999, fontSize: 14, fontWeight: 500, whiteSpace: "nowrap", flexShrink: 0,
                      }}>
                        Start a custom brief →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <style>{`
            @media(max-width:900px){
              .stack-container { flex-direction: column !important; }
              .stack-main { width: 100% !important; }
            }
          `}</style>
        </section>

        <ContextualTestimonials audience="student" label="▸ What participants say" limit={3} />

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
