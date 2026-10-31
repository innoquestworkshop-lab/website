"use client";

import Link from "next/link";
import { useLocale } from "@/components/LanguageProvider";
import { testimonials, type TestimonialAudience } from "@/data/testimonials";
import { plain, QuoteCard } from "@/components/ui/system";

type Props = {
  /** Filter by one or more audience types */
  audience?: TestimonialAudience | TestimonialAudience[];
  /** Filter by program slug — matched first, then falls back to audience */
  programSlug?: string;
  /** Max cards to show (default 3) */
  limit?: number;
  /** Optional section label above the cards */
  label?: string;
};

export function ContextualTestimonials({ audience, programSlug, limit = 3, label }: Props) {
  const { locale } = useLocale();
  const audiences = audience ? (Array.isArray(audience) ? audience : [audience]) : [];

  // Priority: exact program match first, then audience match; non-Student roles float to top
  const matched = testimonials
    .filter((t) => {
      if (t.personTag) return false;
      if (programSlug && t.programSlug === programSlug) return true;
      if (audiences.length > 0 && audiences.includes(t.audience)) return true;
      return false;
    })
    .sort((a, b) => (a.role === "Student" ? 1 : 0) - (b.role === "Student" ? 1 : 0))
    .slice(0, limit);

  if (matched.length === 0) return null;

  return (
    <section className="sec sec--canvas">
      <div className="wrap">
        <div className="sec-head">
          <div>
            {label && <p className="eyebrow">{plain(label)}</p>}
            <h2 className="h-section">{locale === "en" ? "What people say." : "ความคิดเห็นจากผู้เข้าร่วม"}</h2>
          </div>
          <div className="sec-head-aside">
            <Link href="/testimonials" className="link">
              {locale === "en" ? "Read all testimonials →" : "ดูความคิดเห็นทั้งหมด →"}
            </Link>
          </div>
        </div>
        <div className={matched.length >= 3 ? "grid-3" : "grid-2"} style={{ alignItems: "start" }}>
          {matched.map((t) => (
            <QuoteCard key={t.id} t={t} badge={t.tag} soft />
          ))}
        </div>
      </div>
    </section>
  );
}
