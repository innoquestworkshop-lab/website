import type { Metadata } from "next";
import Image from "next/image";
import { BLUR_DATA_URL } from "@/lib/imageBlur";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { ContextualTestimonials } from "@/components/sections/ContextualTestimonials";
import { parentsPage } from "@/data/parents";

export const metadata: Metadata = {
  title: "InnoQuest for Parents | Kids Programs Bangkok",
  description: "Give your child ages 10–18 real entrepreneurship & innovation skills. InnoQuest camps, workshops & simulations in Bangkok build creativity, teamwork, and business thinking.",
  keywords: [
    "youth programs Bangkok",
    "kids entrepreneurship camp Thailand",
    "innovation workshops for children",
    "family learning programs Bangkok",
    "business simulation kids",
    "youth camps Bangkok",
    "children entrepreneurship Thailand",
    "InnoQuest parents",
  ],
  openGraph: {
    images: [{ url: "/images/events/price-war-058.jpg", width: 1200, height: 630, alt: "Students collaborating at an InnoQuest innovation workshop in Bangkok" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function ParentsPage() {
  const { hero, whyItMatters } = parentsPage;

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
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 64, alignItems: "center" }} className="parents-hero-grid">
              <div>
                <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 24 }}>{hero.eyebrow}</p>
                <h1 style={{ fontSize: "clamp(36px, 5vw, 68px)", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
                  Give them the skills{" "}
                  <span style={{ color: "#8A0F14" }}>school doesn&apos;t teach.</span>
                </h1>
                <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(245,240,234,0.7)", maxWidth: 520, marginTop: 24 }}>
                  {hero.sub}
                </p>
                <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
                  <Link href={hero.cta.href} className="inline-flex items-center gap-2 px-[22px] py-[13px] text-[14px] font-medium rounded-full" style={{ background: "#8A0F14", color: "#F5F0EA" }}>
                    {hero.cta.text}
                  </Link>
                  <Link href="/programs" className="inline-flex items-center gap-2 px-[22px] py-[13px] text-[14px] font-medium rounded-full border" style={{ color: "#F5F0EA", borderColor: "rgba(245,240,234,0.3)" }}>
                    See all programs
                  </Link>
                </div>
              </div>
              <div style={{ position: "relative", padding: "16px 0 0 16px" }}>
                <div style={{
                  position: "absolute", top: 0, left: 0,
                  width: "calc(100% - 16px)", height: "calc(100% - 16px)",
                  borderRadius: 14, border: "2px solid #8A0F14", opacity: 0.6,
                }} />
                <div style={{ height: 520, borderRadius: 14, overflow: "hidden", position: "relative" }}>
                  <Image src="/images/events/price-war-058.jpg" alt="Parents at InnoQuest" fill style={{ objectFit: "cover" }} priority sizes="(max-width: 900px) 100vw, 50vw" placeholder="blur" blurDataURL={BLUR_DATA_URL} />
                </div>
              </div>
            </div>
          </div>
          <style>{`@media(max-width:900px){ .parents-hero-grid { grid-template-columns: 1fr !important; } }`}</style>
        </section>

        {/* Why it matters */}
        <section style={{ background: "#FFFFFF", padding: "96px 0" }}>
          <div className="max-w-[1240px] mx-auto px-8">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "end", marginBottom: 48 }} className="parents-why-head">
              <div>
                <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 18 }}>▸ Why it matters</p>
                <h2 className="h-section">{whyItMatters.heading}</h2>
              </div>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(18,18,18,0.6)" }}>
                Every InnoQuest program is designed to develop skills that schools don&apos;t prioritise — creativity, resilience, and the confidence to back your own ideas.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }} className="parents-why-grid">
              {whyItMatters.items.map((item, i) => (
                <div key={item.title} className="card-lift" style={{
                  background: i === 0 ? "#121212" : "#F5F0EA",
                  borderRadius: 14, padding: 36,
                  minHeight: 240, display: "flex", flexDirection: "column", justifyContent: "space-between",
                  border: i !== 0 ? "1px solid rgba(18,18,18,0.06)" : undefined,
                }}>
                  <div style={{ fontSize: 36, fontWeight: 500, color: "#8A0F14", letterSpacing: "-0.04em", lineHeight: 1 }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 style={{ fontSize: 20, fontWeight: 500, letterSpacing: "-0.015em", marginBottom: 10, color: i === 0 ? "#F5F0EA" : "#121212" }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: 15, lineHeight: 1.65, color: i === 0 ? "rgba(245,240,234,0.65)" : "rgba(18,18,18,0.6)" }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @media(max-width:900px){ .parents-why-head { grid-template-columns: 1fr !important; gap: 24px !important; } .parents-why-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        <ContextualTestimonials audience={["parent", "student"]} label="▸ What parents & students say" />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
