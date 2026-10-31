import Link from "next/link";
import { ServicesNav } from "@/components/sections/ServicesNav";
import { servicesPage, designServices, deliveryServices } from "@/data/services";

export function ServiceSections({ locale }: { locale: "en" | "th" }) {
  const { nav, design, delivery } = servicesPage[locale];
  const designSvcs = designServices[locale];
  const deliverySvcs = deliveryServices[locale];

  return (
    <>
      <ServicesNav anchors={[
        { label: nav.designAnchor.label, href: nav.designAnchor.href },
        { label: nav.deliveryAnchor.label, href: nav.deliveryAnchor.href },
        { label: locale === "en" ? "Custom Programs" : "โปรแกรมออกแบบเฉพาะ", href: "#custom" },
      ]} />

      {/* Design services */}
      <section id="design" style={{ background: "#F5F0EA", padding: "96px 0", scrollMarginTop: 80 }}>
        <div className="max-w-[1240px] mx-auto px-8">
          <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 18 }}>▸ {design.eyebrow}</p>
          <h2 className="h-section" style={{ maxWidth: 720, marginBottom: 16 }}>{design.heading}</h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(18,18,18,0.6)", maxWidth: 580, marginBottom: 48 }}>
            {design.sub}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="design-svc-grid">
            {designSvcs.map((s) => (
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
      <section id="delivery" style={{ background: "#FFFFFF", padding: "96px 0", scrollMarginTop: 80 }}>
        <div className="max-w-[1240px] mx-auto px-8">
          <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 18 }}>▸ {delivery.eyebrow}</p>
          <h2 className="h-section" style={{ maxWidth: 720, marginBottom: 16 }}>{delivery.heading}</h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(18,18,18,0.6)", maxWidth: 580, marginBottom: 48 }}>
            {delivery.sub}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="delivery-svc-grid">
            {deliverySvcs.map((s) => (
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
    </>
  );
}
