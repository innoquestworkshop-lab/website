"use client";

import Link from "next/link";
import { testimonials as allTestimonials } from "@/data/testimonials";
import { useLocale } from "@/components/LanguageProvider";
import { Photo, QuoteCard } from "@/components/ui/system";

const testimonials = allTestimonials
  .filter((t) => !t.personTag)
  .sort((a, b) => (a.role === "Student" ? 1 : 0) - (b.role === "Student" ? 1 : 0));

const SHOWN = 6;

const photos = [
  { src: "/images/events/price-war-033.jpg", alt: "Students at their laptops during the Price War simulation", ratio: "4 / 5" },
  { src: "/images/events/break-the-market-008.jpg", alt: "Sticky notes and sketches on a Break the Market table", ratio: "3 / 4" },
  { src: "/images/events/price-war-153.jpg", alt: "A team huddled around their table", ratio: "1 / 1" },
];

export function TestimonialsSection() {
  const { locale } = useLocale();
  const shown = testimonials.slice(0, SHOWN);

  // Photos interleave with quotes: pinned at positions 1, 4 and 7.
  const pins: React.ReactNode[] = [];
  let p = 0;
  shown.forEach((t, i) => {
    if (i % 3 === 1 && p < photos.length) {
      const ph = photos[p++];
      pins.push(<Photo key={ph.src} {...ph} />);
    }
    pins.push(<QuoteCard key={t.id} t={t} badge={t.tag} />);
  });
  if (p < photos.length) pins.push(<Photo key={photos[p].src} {...photos[p]} />);

  return (
    <section className="sec sec--canvas">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="eyebrow">{locale === "en" ? "Testimonials" : "ความคิดเห็น"}</p>
            <h2 className="h-section">
              {locale === "en" ? <>What people are saying.</> : <>เสียงจากผู้เข้าร่วม</>}
            </h2>
          </div>
          <div className="sec-head-aside">
            <Link href="/testimonials" className="btn btn-secondary">
              {locale === "en" ? "Read all testimonials →" : "ดูความคิดเห็นทั้งหมด →"}
            </Link>
          </div>
        </div>

        <div className="pins">{pins}</div>
      </div>
    </section>
  );
}
