"use client";

import Link from "next/link";
import { ctaSection } from "@/data/cta";
import { useLocale } from "@/components/LanguageProvider";
import { ArrowIcon, Masonry, plain, type Tile } from "@/components/ui/system";

const columns: Tile[][] = [
  [
    { fill: "sand", ratio: "3 / 4" },
    { src: "/images/events/price-war-146.jpg", alt: "Students laughing together during a simulation round", ratio: "4 / 5" },
    { fill: "dark", ratio: "1 / 1" },
  ],
  [
    { src: "/images/events/entre1-IMG_5408.jpg", alt: "Students and facilitators at an InnoQuest programme", ratio: "4 / 5" },
    { fill: "red", ratio: "3 / 4" },
    { src: "/images/events/price-war-105.jpg", alt: "A full room at the InnoQuest summer camp", ratio: "1 / 1" },
  ],
];

export function CTASection() {
  const { locale } = useLocale();
  const cta = ctaSection[locale];
  const [noteLabel, ...noteRest] = cta.phoneNote.split(": ");

  return (
    <section className="sec">
      <div className="wrap">
        <div className="cta-card">
          <div className="cta-copy">
            <p className="eyebrow">{plain(cta.eyebrow)}</p>
            <h2 className="cta-title">{cta.heading}</h2>
            <p className="lede" style={{ marginTop: 16 }}>{cta.sub}</p>
            <div className="actions" style={{ marginTop: 32 }}>
              <Link href={cta.cta.href} className="btn btn-primary">
                {cta.cta.text} <ArrowIcon />
              </Link>
            </div>
            <p className="t-small" style={{ marginTop: 24, color: "var(--mute)" }}>
              {noteLabel}: <strong style={{ color: "var(--ink)", fontWeight: 600 }}>{noteRest.join(": ")}</strong>
            </p>
          </div>
          <div className="cta-mosaic" aria-hidden="true">
            <Masonry columns={columns} offsets={[-40, -120]} />
          </div>
        </div>
      </div>
    </section>
  );
}
