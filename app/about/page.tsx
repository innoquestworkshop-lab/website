import type { Metadata } from "next";
import Image from "next/image";
import { BLUR_DATA_URL } from "@/lib/imageBlur";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { AboutStats } from "@/components/sections/AboutStats";
import { aboutPage } from "@/data/about";

export const metadata: Metadata = {
  title: "About InnoQuest | Youth Innovation Learning in Thailand",
  description: "InnoQuest empowers students aged 10–18 across Thailand through hands-on innovation workshops, business simulations, and entrepreneurship camps. Discover our mission.",
  openGraph: {
    images: [{ url: "/images/events/price-war-048.jpg", width: 1200, height: 630, alt: "InnoQuest team" }],
  },
};

export default function AboutPage() {
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
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 64, alignItems: "center" }} className="about-hero-grid">
              <div>
                <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 24 }}>{aboutPage.hero.eyebrow}</p>
                <h1 style={{ fontSize: "clamp(36px, 5vw, 68px)", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
                  {aboutPage.hero.heading.replace(aboutPage.hero.headingAccent, "").trimEnd()}{" "}
                  <span style={{ color: "#8A0F14" }}>{aboutPage.hero.headingAccent}</span>
                </h1>
                <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(245,240,234,0.7)", maxWidth: 520, marginTop: 24 }}>
                  {aboutPage.hero.sub}
                </p>
                <div style={{ marginTop: 32 }}>
                  <Link href={aboutPage.hero.cta.href} style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    color: "#8A0F14", textDecoration: "none", fontWeight: 500, fontSize: 14,
                  }}>
                    {aboutPage.hero.cta.text}
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
                  <Image src="/images/events/price-war-048.jpg" alt="InnoQuest team" fill style={{ objectFit: "cover" }} priority sizes="(max-width: 900px) 100vw, 50vw" placeholder="blur" blurDataURL={BLUR_DATA_URL} />
                </div>
              </div>
            </div>
          </div>
          <style>{`@media(max-width:900px){ .about-hero-grid { grid-template-columns: 1fr !important; } }`}</style>
        </section>

        {/* Our story */}
        <section style={{ background: "#F5F0EA", padding: "96px 0" }}>
          <div className="max-w-[1240px] mx-auto px-8">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "start" }} className="story-grid">
              <div>
                <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 18 }}>{aboutPage.story.eyebrow}</p>
                <h2 className="h-section">
                  {aboutPage.story.heading.split("\n").map((line, i) => (
                    <span key={i}>{line}{i === 0 && <br />}</span>
                  ))}
                </h2>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {aboutPage.story.paragraphs.map((p, i) => (
                  <p key={i} style={{ fontSize: 17, lineHeight: 1.65, color: i === 0 ? undefined : "rgba(18,18,18,0.6)" }}>
                    {p}
                  </p>
                ))}
                <div style={{ marginTop: 8 }}>
                  <Link href={aboutPage.story.cta.href} style={{
                    display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 22px",
                    border: "1px solid rgba(18,18,18,0.25)", borderRadius: 999,
                    color: "#121212", textDecoration: "none", fontWeight: 500, fontSize: 14,
                  }}>
                    {aboutPage.story.cta.text}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <style>{`@media(max-width:900px){ .story-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }`}</style>
        </section>

        {/* Stats band */}
        <AboutStats />

        {/* Values */}
        <section style={{ background: "#F5F0EA", padding: "96px 0" }}>
          <div className="max-w-[1240px] mx-auto px-8">
            <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 18 }}>{aboutPage.values.eyebrow}</p>
            <h2 className="h-section" style={{ maxWidth: 780, marginBottom: 48 }}>{aboutPage.values.heading}</h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }} className="values-grid">
              {aboutPage.values.items.map((v) => (
                <div key={v.n} className="card-lift" style={{
                  background: "#FFFFFF", borderRadius: 14, padding: 32,
                  display: "flex", gap: 24, alignItems: "flex-start",
                  border: "1px solid rgba(18,18,18,0.06)", minHeight: 200,
                }}>
                  <span style={{
                    fontSize: 32, fontWeight: 500, color: "#8A0F14",
                    letterSpacing: "-0.03em", lineHeight: 1, flexShrink: 0,
                  }}>{v.n}</span>
                  <div>
                    <h3 style={{ fontSize: 19, fontWeight: 500, letterSpacing: "-0.015em", lineHeight: 1.3 }}>{v.title}</h3>
                    <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(18,18,18,0.6)", marginTop: 10 }}>{v.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:900px){ .values-grid { grid-template-columns: 1fr !important; } }`}</style>
        </section>

        <MethodologySection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
