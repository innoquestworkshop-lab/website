import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { CTASection } from "@/components/sections/CTASection";
import { whatWeDoPage } from "@/data/whatWeDo";
import { audienceCards } from "@/data/audiences";

export const metadata: Metadata = {
  title: "What We Do | InnoQuest",
  description: "InnoQuest designs custom learning programs and delivers workshops, camps, and innovation events for schools and companies across Thailand.",
};

export default function WhatWeDoPage() {
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
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 64, alignItems: "center" }} className="wwd-hero-grid">
              <div>
                <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 24 }}>{whatWeDoPage.hero.eyebrow}</p>
                <h1 style={{ fontSize: "clamp(36px, 5vw, 68px)", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
                  {whatWeDoPage.hero.heading.replace(whatWeDoPage.hero.headingAccent, "").trimEnd()}{" "}
                  <span style={{ color: "#8A0F14" }}>{whatWeDoPage.hero.headingAccent}</span>
                </h1>
                <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(245,240,234,0.7)", maxWidth: 520, marginTop: 24 }}>
                  {whatWeDoPage.hero.sub}
                </p>
                <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
                  <Link href={whatWeDoPage.hero.cta1.href} className="inline-flex items-center gap-2 px-[22px] py-[13px] text-[14px] font-medium rounded-full" style={{ background: "#8A0F14", color: "#F5F0EA" }}>
                    {whatWeDoPage.hero.cta1.text}
                  </Link>
                  <Link href={whatWeDoPage.hero.cta2.href} className="inline-flex items-center gap-2 px-[22px] py-[13px] text-[14px] font-medium rounded-full border" style={{ color: "#F5F0EA", borderColor: "rgba(245,240,234,0.3)" }}>
                    {whatWeDoPage.hero.cta2.text}
                  </Link>
                </div>
              </div>
              <div style={{ position: "relative" }}>
                <div style={{
                  position: "absolute", top: 12, left: 12,
                  width: "calc(100% - 16px)", height: "calc(100% - 16px)",
                  borderRadius: 14, border: "2px solid #8A0F14", opacity: 0.6,
                }} />
                <div style={{ height: 400, borderRadius: 14, overflow: "hidden", position: "relative" }}>
                  <Image src="/images/events/price-war-154.jpg" alt="InnoQuest in action" fill style={{ objectFit: "contain" }} priority sizes="(max-width: 900px) 100vw, 50vw" />
                </div>
              </div>
            </div>
          </div>
          <style>{`@media(max-width:900px){ .wwd-hero-grid { grid-template-columns: 1fr !important; } }`}</style>
        </section>

        {/* How we work — 3-step process */}
        <section style={{ background: "#F5F0EA", padding: "96px 0" }}>
          <div className="max-w-[1240px] mx-auto px-8">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "end", marginBottom: 48 }} className="process-head">
              <div>
                <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 18 }}>{whatWeDoPage.process.eyebrow}</p>
                <h2 className="h-section">
                  {whatWeDoPage.process.heading.split("\n").map((l, i) => (
                    <span key={i}>{i === 1 ? <><span className="scribble">{l}</span></> : l}{i === 0 && <br />}</span>
                  ))}
                </h2>
              </div>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(18,18,18,0.6)" }}>
                {whatWeDoPage.process.sub}
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="process-grid">
              {whatWeDoPage.process.steps.map((s) => (
                <div key={s.num} className="card-lift" style={{
                  background: "#FFFFFF", borderRadius: 14, padding: 28,
                  minHeight: 280, display: "flex", flexDirection: "column", justifyContent: "space-between",
                  border: "1px solid rgba(18,18,18,0.06)",
                }}>
                  <div style={{ fontSize: 56, fontWeight: 500, color: "#8A0F14", letterSpacing: "-0.04em", lineHeight: 1 }}>
                    {s.num}
                  </div>
                  <div>
                    <h3 style={{ fontSize: 20, fontWeight: 500, letterSpacing: "-0.015em", marginBottom: 10 }}>{s.title}</h3>
                    <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(18,18,18,0.6)" }}>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @media(max-width:900px){ .process-head { grid-template-columns: 1fr !important; gap: 24px !important; } .process-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* Core Services */}
        <section style={{ background: "#FFFFFF", padding: "96px 0" }}>
          <div className="max-w-[1240px] mx-auto px-8">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "end", marginBottom: 48 }} className="services-head">
              <div>
                <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 18 }}>{whatWeDoPage.coreServices.eyebrow}</p>
                <h2 className="h-section">{whatWeDoPage.coreServices.heading.split("\n").map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}</h2>
              </div>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(18,18,18,0.6)" }}>
                {whatWeDoPage.coreServices.sub}
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }} className="services-grid">
              {whatWeDoPage.coreServices.items.map((s) => (
                <div key={s.title} className="card-lift" style={{
                  background: "#F5F0EA", borderRadius: 14, padding: 36,
                  display: "flex", flexDirection: "column", minHeight: 300,
                }}>
                  <span className="pill-tag" style={{ background: "#8A0F14", color: "#F5F0EA", marginBottom: 20, alignSelf: "flex-start" }}>
                    {s.tag}
                  </span>
                  <h3 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 14, lineHeight: 1.2 }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: 15, lineHeight: 1.65, color: "rgba(18,18,18,0.65)", flex: 1 }}>{s.body}</p>
                  {(s as { img?: string }).img && (
                    <div className="relative w-full overflow-hidden rounded-[8px] mt-5" style={{ height: 180 }}>
                      <Image src={(s as { img?: string }).img!} alt={s.title} fill className="object-cover" style={{ objectPosition: 'right center', transform: `scale(${(s as { imgScale?: number }).imgScale ?? 1})` }} />
                    </div>
                  )}
                  <Link href={s.href} style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    marginTop: 24, color: "#8A0F14", fontWeight: 500, fontSize: 14, textDecoration: "none",
                  }}>
                    {s.cta} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @media(max-width:900px){ .services-head { grid-template-columns: 1fr !important; gap: 24px !important; } .services-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* Who we work with */}
        <section style={{ background: "#F5F0EA", padding: "96px 0" }}>
          <div className="max-w-[1240px] mx-auto px-8">
            <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 18 }}>▸ Who we work with</p>
            <h2 className="h-section" style={{ marginBottom: 48, maxWidth: 680 }}>
              Programs for <span className="scribble">every context</span>.
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="audiences-grid">
              {audienceCards.map((a) => (
                <div key={a.label} className="card-lift" style={{
                  background: "#FFFFFF", borderRadius: 14, padding: 28,
                  display: "flex", flexDirection: "column",
                  border: "1px solid rgba(18,18,18,0.06)", minHeight: 220,
                }}>
                  <h3 style={{ fontSize: 17, fontWeight: 500, letterSpacing: "-0.015em", marginBottom: 10 }}>{a.label}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(18,18,18,0.6)", flex: 1 }}>{a.body}</p>
                  <Link href={a.href} style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    marginTop: 20, color: "#8A0F14", fontWeight: 500, fontSize: 13, textDecoration: "none",
                  }}>
                    {a.cta} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @media(max-width:900px){ .audiences-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media(max-width:540px){ .audiences-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* Your org's learning path */}
        <section style={{ background: "#121212", color: "#F5F0EA", padding: "96px 0" }} className="dot-bg">
          <div className="max-w-[1240px] mx-auto px-8">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "end", marginBottom: 56 }} className="path-head">
              <div>
                <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 18 }}>{whatWeDoPage.learningPath.eyebrow}</p>
                <h2 className="h-section">{whatWeDoPage.learningPath.heading.split("\n").map((l, i) => (
                  <span key={i}>{i === 1 ? <span style={{ color: "#8A0F14" }}>{l}</span> : l}{i === 0 && <br />}</span>
                ))}</h2>
              </div>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(245,240,234,0.65)" }}>
                {whatWeDoPage.learningPath.sub}
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }} className="path-steps">
              {whatWeDoPage.learningPath.steps.map((s, i) => (
                <div key={s.num} style={{
                  padding: "32px 28px",
                  background: i % 2 === 0 ? "rgba(245,240,234,0.04)" : "rgba(245,240,234,0.02)",
                  borderLeft: i === 0 ? "1px solid rgba(245,240,234,0.08)" : undefined,
                  borderRight: "1px solid rgba(245,240,234,0.08)",
                  borderTop: "1px solid rgba(245,240,234,0.08)",
                  borderBottom: "1px solid rgba(245,240,234,0.08)",
                }}>
                  <div style={{ fontSize: 48, fontWeight: 500, color: "#8A0F14", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 20 }}>{s.num}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 500, color: "#F5F0EA", marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontSize: 13, lineHeight: 1.7, color: "rgba(245,240,234,0.55)" }}>{s.body}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 48, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href={whatWeDoPage.learningPath.cta1.href} className="inline-flex items-center gap-2 px-[22px] py-[13px] text-[14px] font-medium rounded-full" style={{ background: "#8A0F14", color: "#F5F0EA" }}>
                {whatWeDoPage.learningPath.cta1.text}
              </Link>
              <Link href={whatWeDoPage.learningPath.cta2.href} className="inline-flex items-center gap-2 px-[22px] py-[13px] text-[14px] font-medium rounded-full border" style={{ color: "#F5F0EA", borderColor: "rgba(245,240,234,0.3)" }}>
                {whatWeDoPage.learningPath.cta2.text}
              </Link>
            </div>
          </div>
          <style>{`
            @media(max-width:900px){ .path-head { grid-template-columns: 1fr !important; gap: 24px !important; } .path-steps { grid-template-columns: repeat(2, 1fr) !important; } }
            @media(max-width:540px){ .path-steps { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        <MethodologySection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
