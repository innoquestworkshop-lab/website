import type { Metadata } from "next";
import Image from "next/image";
import { BLUR_DATA_URL } from "@/lib/imageBlur";
import Link from "next/link";
/* eslint-disable @next/next/no-img-element */
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { ContextualTestimonials } from "@/components/sections/ContextualTestimonials";
import { corporatesPage, corporatePartners } from "@/data/corporates";

export const metadata: Metadata = {
  title: "CSR Youth Innovation Programs Bangkok | InnoQuest",
  description: "Partner with InnoQuest for CSR that counts — Bangkok-based youth innovation workshops delivering measurable impact for Thai students, schools, and your brand.",
  keywords: [
    "CSR Thailand",
    "corporate social responsibility Bangkok",
    "youth innovation program",
    "corporate CSR education",
    "InnoQuest corporate",
    "student innovation workshop Bangkok",
    "CSR impact measurement",
    "youth entrepreneurship Thailand",
    "corporate workshop Bangkok",
    "school CSR program",
  ],
  openGraph: {
    images: [{ url: "/images/events/price-war-071.jpg", width: 1200, height: 630, alt: "Students participating in InnoQuest corporate CSR innovation workshop in Bangkok" }],
  },
  twitter: { card: "summary_large_image" },
};

const iconMap = {
  bolt: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8A0F14" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  chart: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8A0F14" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
    </svg>
  ),
  refresh: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8A0F14" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>
    </svg>
  ),
  star: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8A0F14" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
} as const;

export default function CorporatesPage() {
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
            style={{ top: -120, right: -80, width: 480, height: 480, background: "#8A0F14", opacity: 0.11, filter: "blur(2px)" }}
          />
          <div className="max-w-[1240px] mx-auto px-8 relative z-10">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 64, alignItems: "center" }} className="corp-hero-grid">
              <div>
                <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 24 }}>{corporatesPage.hero.eyebrow}</p>
                <h1 style={{ fontSize: "clamp(36px, 5vw, 68px)", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.05, color: "#F5F0EA" }}>
                  {corporatesPage.hero.heading.replace(corporatesPage.hero.headingAccent, "").trimEnd()}{" "}
                  <span style={{ color: "#8A0F14" }}>{corporatesPage.hero.headingAccent}</span>
                </h1>
                <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(245,240,234,0.7)", maxWidth: 520, marginTop: 24 }}>
                  {corporatesPage.hero.sub}
                </p>
                <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
                  <Link href={corporatesPage.hero.cta1.href} className="inline-flex items-center gap-2 px-[22px] py-[13px] text-[14px] font-medium rounded-full" style={{ background: "#8A0F14", color: "#F5F0EA" }}>
                    {corporatesPage.hero.cta1.text}
                  </Link>
                  <Link href={corporatesPage.hero.cta2.href} className="inline-flex items-center gap-2 px-[22px] py-[13px] text-[14px] font-medium rounded-full border" style={{ color: "#F5F0EA", borderColor: "rgba(245,240,234,0.3)" }}>
                    {corporatesPage.hero.cta2.text}
                  </Link>
                </div>
              </div>
              <div style={{ position: "relative", padding: "16px 0 0 16px" }}>
                {/* offset frame accent */}
                <div style={{
                  position: "absolute", top: 0, left: 0,
                  width: "calc(100% - 16px)", height: "calc(100% - 16px)",
                  borderRadius: 14, border: "2px solid #8A0F14", opacity: 0.6,
                }} />
                <div style={{ height: 520, borderRadius: 14, overflow: "hidden", position: "relative" }}>
                  <Image
                    src="/images/events/price-war-067.jpg"
                    alt="Price War Workshop"
                    fill
                    style={{ objectFit: "cover", transform: "scale(1.22)" }}
                    sizes="(max-width: 900px) 100vw, 50vw"
                    priority
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                  />
                </div>
              </div>
            </div>
          </div>
          <style>{`@media(max-width:900px){ .corp-hero-grid { grid-template-columns: 1fr !important; } }`}</style>
        </section>

        {/* Partner logos strip */}
        {corporatePartners.length > 0 && <section style={{ background: "#121212", color: "#F5F0EA", padding: "48px 0" }}>
          <div className="max-w-[1240px] mx-auto px-8">
            <p className="eyebrow" style={{ color: "rgba(245,240,234,0.45)", textAlign: "center", marginBottom: 28 }}>
              ▸ Corporate partners
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 12 }} className="corp-logos">
              {corporatePartners.map((p) => (
                <div key={p.name} style={{
                  border: "1px solid rgba(245,240,234,0.15)", borderRadius: 8,
                  padding: "16px 20px",
                  display: "flex", flexDirection: "row", alignItems: "center", gap: 14,
                }}>
                  {p.logo ? (
                    <img
                      src={p.logo}
                      alt={p.name}
                      style={{ height: 64, width: "auto", maxWidth: 120, objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.7, flexShrink: 0 }}
                    />
                  ) : (
                    <div style={{ width: 120, height: 64, borderRadius: 6, background: "rgba(245,240,234,0.1)", flexShrink: 0 }} />
                  )}
                  <span style={{ fontSize: 13, color: "rgba(245,240,234,0.6)", letterSpacing: "0.04em" }}>{p.name}</span>
                </div>
              ))}
            </div>
            <p className="mono" style={{ fontSize: 11, color: "rgba(245,240,234,0.3)", textAlign: "center", marginTop: 20 }}>
              // LOGOS · replace with real corporate partner logos (SVG, white/light variants)
            </p>
          </div>
          <style>{`@media(max-width:900px){ .corp-logos { grid-template-columns: repeat(3,1fr) !important; } } @media(max-width:540px){ .corp-logos { grid-template-columns: repeat(2,1fr) !important; } }`}</style>
        </section>}

        {/* What you get */}
        <section style={{ background: "#F5F0EA", padding: "96px 0" }}>
          <div className="max-w-[1240px] mx-auto px-8">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "end", marginBottom: 48 }} className="corp-head">
              <div>
                <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 18 }}>{corporatesPage.benefits.eyebrow}</p>
                <h2 className="h-section">{corporatesPage.benefits.heading.split("\n").map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}</h2>
              </div>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(18,18,18,0.6)", maxWidth: 520 }}>
                {corporatesPage.benefits.sub}
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }} className="benefits-grid">
              {corporatesPage.benefits.items.map((b) => (
                <div key={b.title} className="card-lift" style={{
                  background: "#FFFFFF", borderRadius: 14, padding: 32,
                  display: "flex", gap: 20, alignItems: "flex-start",
                  border: "1px solid rgba(18,18,18,0.06)", minHeight: 180,
                }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: "#E8E0D5", display: "grid", placeItems: "center", flexShrink: 0 }}>
                    {iconMap[b.iconKey]}
                  </div>
                  <div>
                    <h3 style={{ fontSize: 19, fontWeight: 500, letterSpacing: "-0.015em" }}>{b.title}</h3>
                    <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(18,18,18,0.6)", marginTop: 8 }}>{b.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @media(max-width:900px){ .corp-head { grid-template-columns: 1fr !important; gap: 24px !important; } .benefits-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* Case study */}
        <section style={{ background: "#FFFFFF", padding: "96px 0" }}>
          <div className="max-w-[1240px] mx-auto px-8">
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 48, alignItems: "center" }} className="case-grid">
              <div style={{ height: 420, borderRadius: 14, overflow: "hidden", position: "relative" }}>
                <Image src="/images/events/price-war-071.jpg" alt="Corporate case study" fill style={{ objectFit: "cover", transform: "scale(1.05)" }} sizes="(max-width: 900px) 100vw, 55vw" placeholder="blur" blurDataURL={BLUR_DATA_URL} />
              </div>
              <div>
                <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 16 }}>{corporatesPage.caseStudy.eyebrow}</p>
                <h3 style={{ fontSize: 28, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.2, whiteSpace: "pre-line" }}>
                  {corporatesPage.caseStudy.heading}
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: "rgba(18,18,18,0.6)", marginTop: 18 }}>
                  {corporatesPage.caseStudy.body}
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, marginTop: 28 }}>
                  {corporatesPage.caseStudy.stats.map((s) => (
                    <div key={s.l} style={{ paddingTop: 18, borderTop: "2px solid #8A0F14" }}>
                      <div style={{ fontSize: 32, fontWeight: 500, color: "#8A0F14", letterSpacing: "-0.02em" }}>{s.v}</div>
                      <div className="eyebrow" style={{ color: "rgba(18,18,18,0.6)", marginTop: 4 }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <style>{`@media(max-width:900px){ .case-grid { grid-template-columns: 1fr !important; } }`}</style>
        </section>

        {/* Your CSR learning path */}
        <section style={{ background: "#F5F0EA", padding: "96px 0" }}>
          <div className="max-w-[1240px] mx-auto px-8">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "end", marginBottom: 56 }} className="corp-path-head">
              <div>
                <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 18 }}>{corporatesPage.learningPath.eyebrow}</p>
                <h2 className="h-section">{corporatesPage.learningPath.heading.split("\n").map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}</h2>
              </div>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(18,18,18,0.6)" }}>
                {corporatesPage.learningPath.sub}
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="corp-path-grid">
              {corporatesPage.learningPath.steps.map((s) => (
                <div key={s.num} className="card-lift" style={{
                  background: "#FFFFFF", borderRadius: 14, padding: 28,
                  minHeight: 240, display: "flex", flexDirection: "column", justifyContent: "space-between",
                  border: "1px solid rgba(18,18,18,0.06)",
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
              <Link href={corporatesPage.learningPath.cta1.href} className="inline-flex items-center gap-2 px-[22px] py-[13px] text-[14px] font-medium rounded-full" style={{ background: "#8A0F14", color: "#F5F0EA" }}>
                {corporatesPage.learningPath.cta1.text}
              </Link>
              <Link href={corporatesPage.learningPath.cta2.href} className="inline-flex items-center gap-2 px-[22px] py-[13px] text-[14px] font-medium rounded-full border" style={{ color: "#121212", borderColor: "rgba(18,18,18,0.25)" }}>
                {corporatesPage.learningPath.cta2.text}
              </Link>
            </div>
          </div>
          <style>{`
            @media(max-width:900px){ .corp-path-head { grid-template-columns: 1fr !important; gap: 24px !important; } .corp-path-grid { grid-template-columns: repeat(2,1fr) !important; } }
            @media(max-width:540px){ .corp-path-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        <ContextualTestimonials audience="corporate" label="▸ What corporates say" />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
