import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { ContextualTestimonials } from "@/components/sections/ContextualTestimonials";
import { pathwayStages, pathwayMeta } from "@/data/pathway";

export const metadata: Metadata = {
  title: "Entrepreneurial Pathway Program | InnoQuest Thailand",
  description: "Step through every stage of building a business — ideation to pitch — via InnoQuest's exclusive digital simulation engine. A structured entrepreneurship journey for students aged 10–18.",
  keywords: [
    "entrepreneurship program Thailand",
    "business simulation for students",
    "youth entrepreneurship journey",
    "innovation pathway Bangkok",
    "student business program",
    "entrepreneurship camp Thailand",
    "InnoQuest pathway",
    "digital business simulation",
  ],
  openGraph: {
    images: [{ url: "/images/events/entre2-team.jpg", width: 1200, height: 630, alt: "InnoQuest students working through the Entrepreneurial Pathway program" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function PathwayPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F5F0EA] selection:bg-[#8A0F14] selection:text-white">

        {/* Hero Section */}
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
              {pathwayMeta.badge}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "end" }} className="hero-grid">
              <div>
                <h1 style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
                  {pathwayMeta.heading} <span style={{ color: "#8A0F14", fontStyle: "italic" }}>{pathwayMeta.headingAccent}</span>
                </h1>
              </div>
              <div style={{ paddingBottom: 8 }}>
                <p style={{ fontSize: 18, lineHeight: 1.65, color: "rgba(245,240,234,0.7)", maxWidth: 480 }}>
                  {pathwayMeta.sub}
                </p>
              </div>
            </div>
          </div>
          <style>{`@media(max-width:900px){ .hero-grid { grid-template-columns: 1fr !important; gap: 24px !important; } }`}</style>
        </section>

        {/* Curriculum Stack */}
        <section style={{ padding: "96px 0" }}>
          <div className="max-w-[1240px] mx-auto px-8">
            <div style={{ display: "flex", gap: 48 }} className="stack-container">

              {/* Left Column: Sticky Context */}
              <div style={{ width: "25%" }} className="hidden md:block">
                <div className="sticky top-32">
                  <h2 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 16 }}>{pathwayMeta.sidebarHeading}</h2>
                  <p style={{ fontSize: 14, color: "rgba(18,18,18,0.6)", lineHeight: 1.6, marginBottom: 32 }}>
                    {pathwayMeta.sidebarBody}
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
                </div>
              </div>

              {/* Right Column: The Solid Stack */}
              <div style={{ width: "75%", position: "relative" }} className="stack-main">

                {/* The structural spine */}
                <div className="absolute top-8 bottom-0 bg-gray-200 hidden md:block" style={{ left: 27, width: 4 }} />

                <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
                  {pathwayStages.map((stage) => {
                    const isLocked = stage.status === "locked";

                    return (
                      <div key={stage.step} className="relative md:pl-24">

                        {/* Number Node */}
                        <div
                          className="absolute left-0 top-6 hidden md:flex items-center justify-center rounded-xl z-10"
                          style={{ width: 56, height: 56, background: "#121212", color: "#F5F0EA", fontSize: 20, fontWeight: 700, border: "4px solid #F5F0EA" }}
                        >
                          {stage.step}
                        </div>

                        {/* Monolithic Card */}
                        <div className="card-lift" style={{
                          display: "flex", flexDirection: "column", background: isLocked ? "#F9F8F6" : "#FFFFFF",
                          borderRadius: 16, overflow: "hidden", border: "1px solid rgba(18,18,18,0.08)",
                          opacity: isLocked ? 0.7 : 1
                        }}>

                          {/* Image Placeholder Pane */}
                          <div style={{ height: 260, background: "#121212", position: "relative", overflow: "hidden" }}>
                            {stage.heroImg ? (
                              <Image src={stage.heroImg} alt={stage.name} fill style={{ objectFit: "cover", objectPosition: stage.heroImgPosition ?? "center", transform: `scale(${stage.heroImgScale ?? 1})`, filter: stage.heroImgBlur ? `blur(${stage.heroImgBlur}px)` : undefined }} sizes="(max-width: 900px) 100vw, 75vw" />
                            ) : (
                              <div className="imgph dark" style={{ height: "100%", borderRadius: 0 }}>
                                <div className="imgph-tag">STAGE {stage.step} // {stage.engineFeature.toUpperCase()}</div>
                                <div className="imgph-caption">{stage.imgCaption}</div>
                              </div>
                            )}
                            {isLocked && (
                              <div style={{ position: "absolute", top: 12, right: 12, background: "rgba(18,18,18,0.75)", borderRadius: 8, padding: "6px 10px", display: "flex", alignItems: "center", gap: 6, backdropFilter: "blur(4px)" }}>
                                <span style={{ fontSize: 13 }}>🔒</span>
                                <span style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: 1, color: "rgba(245,240,234,0.7)" }}>IN DEVELOPMENT</span>
                              </div>
                            )}
                          </div>

                          {/* Content Pane */}
                          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                            <div style={{ padding: 32, flex: 1 }}>
                              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                                <span className="eyebrow" style={{ color: "#8A0F14", margin: 0 }}>
                                  {stage.theme}
                                </span>
                                <div style={{ width: 8, height: 8, borderRadius: "50%", background: isLocked ? "#D1D5DB" : "#10B981" }} />
                              </div>

                              <h3 style={{ fontSize: 28, fontWeight: 500, letterSpacing: "-0.02em", color: "#121212", marginBottom: 8 }}>{stage.name}</h3>
                              <p style={{ fontSize: 16, fontWeight: 500, color: "rgba(18,18,18,0.8)", marginBottom: 16 }}>{stage.subtitle}</p>

                              <p style={{ fontSize: 15, lineHeight: 1.65, color: "rgba(18,18,18,0.6)", marginBottom: 24 }}>
                                {stage.description}
                              </p>


                            </div>

                            {isLocked && (
                              <div style={{ padding: "16px 32px", background: "rgba(18,18,18,0.02)", borderTop: "1px solid rgba(18,18,18,0.06)" }}>
                                <span style={{ fontSize: 14, fontWeight: 600, color: "rgba(18,18,18,0.4)" }}>
                                  Currently in development
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
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

        <ContextualTestimonials audience="school" label="▸ Trusted by educators" limit={3} />

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
