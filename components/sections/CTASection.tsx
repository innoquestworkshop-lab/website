"use client";

import Link from "next/link";
import { ctaSection } from "@/data/cta";
import { useLocale } from "@/components/LanguageProvider";
import { Arrowed, plain } from "@/components/ui/system";

const photos = [
  { src: "/images/events/web/price-war-146.jpg", position: "center" },
  { src: "/images/events/web/entre1-IMG_5408.jpg", position: "center top" },
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
                <Arrowed text={cta.cta.text} />
              </Link>
            </div>
            <p className="t-small" style={{ marginTop: 24, color: "var(--mute)" }}>
              {noteLabel}: <strong style={{ color: "var(--ink)", fontWeight: 600 }}>{noteRest.join(": ")}</strong>
            </p>
          </div>
          <div className="cta-photos" aria-hidden="true">
            {photos.map((p) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={p.src} src={p.src} alt="" style={{ objectPosition: p.position }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
