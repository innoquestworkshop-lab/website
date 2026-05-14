import type { Metadata } from "next";
import Image from "next/image";
import { BLUR_DATA_URL } from "@/lib/imageBlur";
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
  const featured = programs.find((p) => p.featured) ?? programs[0];
  const rest = programs.filter((p) => !p.featured);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          style={{ background: "#121212", color: "#F5F0EA", paddingTop: 140, paddingBottom: 80 }}
          className="dot-bg"
        >
          <div className="max-w-[1240px] mx-auto px-8">
            <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 24 }}>▸ Experiences</p>
            <h1 style={{ fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.05, maxWidth: 740 }}>
              Short, long, or{" "}
              <span style={{ color: "#8A0F14" }}>fully custom.</span>
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(245,240,234,0.7)", maxWidth: 540, marginTop: 24 }}>
              From a single-day spark to a semester-long transformation — built around your goals.
            </p>
          </div>
        </section>

        {/* Featured program */}
        <section style={{ background: "#F5F0EA", padding: "80px 0 48px" }}>
          <div className="max-w-[1240px] mx-auto px-8">
            <p className="eyebrow" style={{ color: "rgba(18,18,18,0.5)", marginBottom: 24 }}>▸ Featured experience</p>
            <Link
              href={`/programs/${featured.slug}`}
              className="card-lift"
              style={{
                background: "#121212", color: "#F5F0EA",
                borderRadius: 14, padding: 40,
                display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40,
                textDecoration: "none", position: "relative", overflow: "hidden",
              }}
            >
              <div
                className="absolute rounded-full pointer-events-none"
                style={{ top: -80, right: -80, width: 320, height: 320, background: "#8A0F14", opacity: 0.15, filter: "blur(2px)" }}
              />
              <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <span className="pill-tag" style={{ background: "#8A0F14", color: "#F5F0EA", marginBottom: 20, display: "inline-flex" }}>
                    ★ Most popular
                  </span>
                  <h2 style={{ fontSize: "clamp(28px, 3.4vw, 44px)", fontWeight: 500, letterSpacing: "-0.025em", lineHeight: 1.1, marginTop: 16 }}>
                    {featured.name}
                  </h2>
                  <p style={{ fontSize: 16, lineHeight: 1.65, color: "rgba(245,240,234,0.7)", marginTop: 14, maxWidth: 400 }}>
                    {featured.tagline}
                  </p>
                </div>
                <div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
                    <span className="pill-tag" style={{ background: "rgba(245,240,234,0.1)", color: "#F5F0EA" }}>{featured.duration}</span>
                    <span className="pill-tag" style={{ background: "rgba(245,240,234,0.1)", color: "#F5F0EA" }}>Ages {featured.ages}</span>
                    <span className="pill-tag" style={{ background: "rgba(245,240,234,0.1)", color: "#F5F0EA" }}>{featured.groupSize}</span>
                  </div>
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 22px",
                    background: "#8A0F14", color: "#F5F0EA", borderRadius: 999, fontSize: 14, fontWeight: 500,
                  }}>
                    Explore program →
                  </span>
                </div>
              </div>
              <div style={{ position: "relative", zIndex: 1 }}>
                {featured.heroImg ? (
                  <div style={{ height: "100%", minHeight: 280, borderRadius: 10, overflow: "hidden", position: "relative" }}>
                    <Image src={featured.heroImg} alt={featured.name} fill style={{ objectFit: "cover" }} sizes="(max-width: 900px) 100vw, 50vw" placeholder="blur" blurDataURL={BLUR_DATA_URL} />
                  </div>
                ) : (
                  <div className="imgph dark" style={{ height: "100%", minHeight: 280, borderRadius: 10 }}>
                    <div className="imgph-tag">FEATURE</div>
                    <div className="imgph-caption">// hero photo: kids presenting prototype to judges/panel. Wide. Capture energy.</div>
                  </div>
                )}
              </div>
            </Link>
          </div>
          <style>{`@media(max-width:900px){ #feat-grid { grid-template-columns: 1fr !important; } }`}</style>
        </section>

        {/* All programs */}
        <section style={{ background: "#F5F0EA", padding: "0 0 96px" }}>
          <div className="max-w-[1240px] mx-auto px-8">
            <p className="eyebrow" style={{ color: "rgba(18,18,18,0.5)", marginBottom: 24 }}>▸ All experiences</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="all-progs-grid">
              {rest.map((program) => (
                <Link
                  key={program.slug}
                  href={`/programs/${program.slug}`}
                  className="card-lift"
                  style={{
                    background: "#FFFFFF", borderRadius: 14, padding: 28,
                    display: "flex", flexDirection: "column", gap: 16,
                    border: "1px solid rgba(18,18,18,0.06)",
                    textDecoration: "none", color: "inherit", minHeight: 240,
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <h2 style={{ fontSize: 20, fontWeight: 500, letterSpacing: "-0.015em", marginBottom: 10, lineHeight: 1.2 }}>
                      {program.name}
                    </h2>
                    <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(18,18,18,0.6)" }}>
                      {program.tagline}
                    </p>
                  </div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", paddingTop: 16, borderTop: "1px solid rgba(18,18,18,0.06)" }}>
                    <span className="pill-tag" style={{ background: "#F5F0EA", color: "#121212" }}>{program.duration}</span>
                    <span className="pill-tag" style={{ background: "#F5F0EA", color: "#121212" }}>Ages {program.ages}</span>
                  </div>
                </Link>
              ))}

            </div>

            {/* Custom CTA — full width */}
            <Link href="/custom" className="card-lift" style={{
              background: "#121212", color: "#F5F0EA", borderRadius: 14, padding: "32px 40px",
              display: "flex", alignItems: "center", justifyContent: "space-between",
              gap: 24, textDecoration: "none", marginTop: 16,
            }}>
              <div>
                <p className="eyebrow" style={{ color: "rgba(245,240,234,0.55)", marginBottom: 10 }}>Want something personalized?</p>
                <h3 style={{ fontSize: 22, fontWeight: 500, color: "#F5F0EA", letterSpacing: "-0.02em" }}>
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
          <style>{`
            @media(max-width:900px){ .all-progs-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media(max-width:540px){ .all-progs-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        <ContextualTestimonials audience="student" label="▸ What participants say" limit={3} />

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
