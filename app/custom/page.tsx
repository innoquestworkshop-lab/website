import type { Metadata } from "next";
import Image from "next/image";
import { BLUR_DATA_URL } from "@/lib/imageBlur";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { customPage } from "@/data/custom";

export const metadata: Metadata = {
  title: "Custom-Built Programs | InnoQuest Thailand",
  description: "Need something bespoke? InnoQuest designs experiential learning programs from scratch — your goals, your audience, your format. Trusted by schools and corporates across Bangkok.",
  openGraph: {
    images: [{ url: "/images/events/IMG_7900.jpg", width: 1200, height: 630, alt: "Custom program planning session" }],
  },
};

export default function CustomPage() {
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
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 64, alignItems: "center" }} className="custom-hero-grid">
              <div>
                <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 24 }}>▸ Custom solutions</p>
                <h1 style={{ fontSize: "clamp(36px, 5vw, 68px)", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
                  Built around your goals,{" "}
                  <span style={{ color: "#8A0F14" }}>not ours.</span>
                </h1>
                <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(245,240,234,0.7)", maxWidth: 520, marginTop: 24 }}>
                  Have something specific in mind? We design programs from scratch — custom themes,
                  custom formats, custom outcomes. Tell us what you need.
                </p>
                <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
                  <Link href="/contact" className="inline-flex items-center gap-2 px-[22px] py-[13px] text-[14px] font-medium rounded-full" style={{ background: "#8A0F14", color: "#F5F0EA" }}>
                    Start the conversation →
                  </Link>
                </div>
              </div>
              <div style={{ position: "relative" }}>
                <div style={{
                  position: "absolute", top: 12, left: 12,
                  width: "calc(100% - 16px)", height: "calc(100% - 16px)",
                  borderRadius: 14, border: "2px solid #8A0F14", opacity: 0.6,
                }} />
                <div style={{ height: 380, borderRadius: 14, overflow: "hidden", position: "relative" }}>
                  <Image src="/images/events/IMG_7900.jpg" alt="Custom program planning session" fill style={{ objectFit: "cover" }} priority sizes="(max-width: 900px) 100vw, 50vw" placeholder="blur" blurDataURL={BLUR_DATA_URL} />
                </div>
              </div>
            </div>
          </div>
          <style>{`@media(max-width:900px){ .custom-hero-grid { grid-template-columns: 1fr !important; } }`}</style>
        </section>

        {/* 4-step process */}
        <section style={{ background: "#F5F0EA", padding: "96px 0" }}>
          <div className="max-w-[1240px] mx-auto px-8">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "end", marginBottom: 48 }} className="process-head">
              <div>
                <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 18 }}>▸ How it works</p>
                <h2 className="h-section">Four steps from idea to impact.</h2>
              </div>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(18,18,18,0.6)" }}>
                Our process is designed to minimize risk and maximize fit.
                You&apos;ll know exactly what you&apos;re getting before anything is confirmed.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="steps-grid">
              {customPage.process.steps.map((s) => (
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
            @media(max-width:900px){ .process-head { grid-template-columns: 1fr !important; gap: 24px !important; } .steps-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media(max-width:540px){ .steps-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* Past custom builds — only shown when items exist in data */}
        {customPage.pastBuilds.items.length > 0 && (
        <section style={{ background: "#FFFFFF", padding: "96px 0" }}>
          <div className="max-w-[1240px] mx-auto px-8">
            <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 18 }}>▸ Past custom builds</p>
            <h2 className="h-section" style={{ marginBottom: 48 }}>
              Things we&apos;ve <span className="scribble">designed from scratch</span>.
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }} className="builds-grid">
              {customPage.pastBuilds.items.map((b, i) => (
                <div key={i} className="card-lift" style={{
                  background: "#F5F0EA", borderRadius: 14,
                  display: "grid", gridTemplateColumns: "1fr 1.2fr", overflow: "hidden",
                  minHeight: 200,
                }}>
                  <div className="imgph" style={{ borderRadius: 0, minHeight: 200 }}>
                    <div className="imgph-tag">{b.tag}</div>
                  </div>
                  <div style={{ padding: 28, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <span className="pill-tag" style={{ background: "#8A0F14", color: "#F5F0EA", marginBottom: 14, display: "inline-flex" }}>{b.tag}</span>
                      <h3 style={{ fontSize: 20, fontWeight: 500, letterSpacing: "-0.015em", marginTop: 8 }}>{b.label}</h3>
                      <p style={{ fontSize: 13, lineHeight: 1.6, color: "rgba(18,18,18,0.6)", marginTop: 8 }}>{b.context}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @media(max-width:900px){ .builds-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>
        )}

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
