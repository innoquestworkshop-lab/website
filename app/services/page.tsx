import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { ServicesNav } from "@/components/sections/ServicesNav";
import { servicesPage, designServices, deliveryServices } from "@/data/services";

export const metadata: Metadata = {
  title: servicesPage.meta.title,
  description: servicesPage.meta.description,
};

export default function ServicesPage() {
  const { hero, nav, design, delivery } = servicesPage;

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
            <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 24 }}>▸ {hero.eyebrow}</p>
            <h1 style={{ fontSize: "clamp(36px, 5vw, 68px)", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.05, maxWidth: 720 }}>
              Design what you need.{" "}
              <span style={{ color: "#8A0F14" }}>Deliver what you have.</span>
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(245,240,234,0.7)", maxWidth: 520, marginTop: 24 }}>
              {hero.sub}
            </p>
            <div style={{ marginTop: 32 }}>
              <Link href="/contact" className="inline-flex items-center gap-2 px-[22px] py-[13px] text-[14px] font-medium rounded-full" style={{ background: "#8A0F14", color: "#F5F0EA" }}>
                Talk to us →
              </Link>
            </div>
          </div>
        </section>

        <ServicesNav anchors={[
          { label: nav.designAnchor.label, href: nav.designAnchor.href },
          { label: nav.deliveryAnchor.label, href: nav.deliveryAnchor.href },
        ]} />

        {/* Design services */}
        <section id="design" style={{ background: "#F5F0EA", padding: "96px 0" }}>
          <div className="max-w-[1240px] mx-auto px-8">
            <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 18 }}>▸ {design.eyebrow}</p>
            <h2 className="h-section" style={{ maxWidth: 720, marginBottom: 16 }}>{design.heading}</h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(18,18,18,0.6)", maxWidth: 580, marginBottom: 48 }}>
              {design.sub}
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="design-svc-grid">
              {designServices.map((s) => (
                <div key={s.title} className="card-lift" style={{
                  background: "#FFFFFF", borderRadius: 14, padding: 28,
                  minHeight: 220, display: "flex", flexDirection: "column", gap: 14,
                  border: "1px solid rgba(18,18,18,0.06)",
                }}>
                  <h3 style={{ fontSize: 19, fontWeight: 500, letterSpacing: "-0.015em" }}>{s.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(18,18,18,0.6)", flex: 1 }}>{s.body}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 40 }}>
              <Link href={design.cta.href} className="inline-flex items-center gap-2 px-[22px] py-[13px] text-[14px] font-medium rounded-full" style={{ background: "#8A0F14", color: "#F5F0EA" }}>
                {design.cta.text}
              </Link>
            </div>
          </div>
          <style>{`@media(max-width:900px){ .design-svc-grid { grid-template-columns: 1fr !important; } }`}</style>
        </section>

        {/* Delivery services */}
        <section id="delivery" style={{ background: "#FFFFFF", padding: "96px 0" }}>
          <div className="max-w-[1240px] mx-auto px-8">
            <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 18 }}>▸ {delivery.eyebrow}</p>
            <h2 className="h-section" style={{ maxWidth: 720, marginBottom: 16 }}>{delivery.heading}</h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(18,18,18,0.6)", maxWidth: 580, marginBottom: 48 }}>
              {delivery.sub}
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="delivery-svc-grid">
              {deliveryServices.map((s) => (
                <div key={s.title} className="card-lift" style={{
                  background: "#F5F0EA", borderRadius: 14, padding: 28,
                  minHeight: 200, display: "flex", flexDirection: "column", gap: 14,
                }}>
                  <h3 style={{ fontSize: 19, fontWeight: 500, letterSpacing: "-0.015em" }}>{s.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(18,18,18,0.6)", flex: 1 }}>{s.body}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 40 }}>
              <Link href={delivery.cta.href} className="inline-flex items-center gap-2 px-[22px] py-[13px] text-[14px] font-medium rounded-full" style={{ background: "#8A0F14", color: "#F5F0EA" }}>
                {delivery.cta.text}
              </Link>
            </div>
          </div>
          <style>{`
            @media(max-width:900px){ .delivery-svc-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media(max-width:540px){ .delivery-svc-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
