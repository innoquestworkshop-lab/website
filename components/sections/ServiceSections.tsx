import Link from "next/link";
import { ServicesNav } from "@/components/sections/ServicesNav";
import { servicesPage, designServices, deliveryServices } from "@/data/services";
import { Arrowed, Photo } from "@/components/ui/system";

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

      {/* Design services: a sticky photo on the left, the list on the right */}
      <section id="design" className="sec">
        <div className="wrap split split--top">
          <div className="sticky-col">
            <p className="eyebrow">{design.eyebrow}</p>
            <h2 className="h-section" style={{ marginTop: 8 }}>{design.heading}</h2>
            <p className="lede" style={{ marginTop: 16 }}>{design.sub}</p>
            <Photo src="/images/events/break-the-market-5446.jpg" alt="Students testing a learning game at Break the Market" ratio="4 / 3" sizes="(max-width: 900px) 100vw, 45vw" style={{ marginTop: 32 }} />
          </div>
          <div>
            <div className="rows rows--single">
              {designSvcs.map((s) => (
                <div key={s.title}>
                  <h3 className="h-sm">{s.title}</h3>
                  <p className="t-small">{s.body}</p>
                </div>
              ))}
            </div>
            <Link href={design.cta.href} className="btn btn-primary" style={{ marginTop: 32 }}>
              {design.cta.text}
            </Link>
          </div>
        </div>
      </section>

      {/* Delivery services: photo on the right */}
      <section id="delivery" className="sec sec--canvas">
        <div className="wrap split split--top split--flip">
          <div>
            <p className="eyebrow">{delivery.eyebrow}</p>
            <h2 className="h-section" style={{ marginTop: 8 }}>{delivery.heading}</h2>
            <p className="lede" style={{ marginTop: 16 }}>{delivery.sub}</p>
            <div className="grid-2" style={{ marginTop: 32 }}>
              {deliverySvcs.map((s) => (
                <div key={s.title} className="card card--soft">
                  <h3 className="h-sm">{s.title}</h3>
                  <p className="t-small">{s.body}</p>
                </div>
              ))}
            </div>
            <Link href={delivery.cta.href} className="btn btn-primary" style={{ marginTop: 32 }}>
              <Arrowed text={delivery.cta.text} />
            </Link>
          </div>
          <div className="sticky-col">
            <Photo src="/images/events/price-war-011.jpg" alt="A full room running the Price War simulation" ratio="4 / 5" sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
        </div>
      </section>
    </>
  );
}
