import Link from "next/link";
import { customPage } from "@/data/custom";
import { Arrowed, Lines, Masonry, plain, Steps } from "@/components/ui/system";

export function CustomSection({ locale }: { locale: "en" | "th" }) {
  const page = customPage[locale];

  return (
    <>
      {/* Intro */}
      <section id="custom" className="sec sec--line">
        <div className="wrap split">
          <div>
            <p className="eyebrow">{plain(page.hero.eyebrow)}</p>
            <h2 className="h-section" style={{ marginTop: 8, fontSize: "clamp(28px, 3.2vw, 44px)" }}>
              {page.hero.heading} <span className="accent">{page.hero.headingAccent}</span>
            </h2>
            <p className="lede" style={{ marginTop: 16 }}>{page.hero.sub}</p>
            <div className="actions" style={{ marginTop: 32 }}>
              <Link href={page.hero.cta.href} className="btn btn-primary">
                <Arrowed text={page.hero.cta.text} />
              </Link>
            </div>
          </div>
          <div className="mosaic-box" style={{ height: 420 }}>
            <Masonry
              offsets={[-24, -96]}
              columns={[
                [
                  { src: "/images/events/IMG_7900.jpg", alt: "Custom program planning session", ratio: "4 / 5" },
                  { fill: "sand", ratio: "4 / 3" },
                ],
                [
                  { fill: "dark", ratio: "1 / 1" },
                  { src: "/images/events/change-lab-9142.jpg", alt: "Ideas pinned to a glass wall during a design sprint", ratio: "4 / 5" },
                ],
              ]}
            />
          </div>
        </div>
      </section>

      {/* 4-step process */}
      <section className="sec sec--canvas">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <p className="eyebrow">{plain(page.process.eyebrow)}</p>
              <h2 className="h-section"><Lines text={page.process.heading} /></h2>
            </div>
            <p className="lede">{page.process.sub}</p>
          </div>
          <Steps steps={page.process.steps} columns={4} />
        </div>
      </section>

      {/* Past custom builds — only shown when items exist in data */}
      {page.pastBuilds.items.length > 0 && (
        <section className="sec">
          <div className="wrap">
            <p className="eyebrow">{plain(page.pastBuilds.eyebrow)}</p>
            <h2 className="h-section" style={{ marginTop: 8, marginBottom: 32 }}>
              {page.pastBuilds.heading} {page.pastBuilds.headingAccent}{page.pastBuilds.headingSuffix}
            </h2>
            <div className="grid-2">
              {page.pastBuilds.items.map((b, i) => (
                <div key={i} className="card">
                  <span className="pill pill--red" style={{ alignSelf: "flex-start" }}>{b.tag}</span>
                  <h3 className="h-sm" style={{ marginTop: 8 }}>{b.label}</h3>
                  <p className="t-small">{b.context}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
