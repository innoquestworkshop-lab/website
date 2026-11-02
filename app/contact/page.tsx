import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/ui/ContactForm";
import { contactPage } from "@/data/contact";
import { getLocale } from "@/lib/i18n";
import { PageHero, plain } from "@/components/ui/system";

export const metadata: Metadata = {
  title: "Contact Us — Bangkok, Thailand",
  description: "Ask about InnoQuest's entrepreneurship workshops and camps in Bangkok for ages 10–18. Send a message and we'll reply within 1–2 business days.",
  alternates: { canonical: "/contact" },
  keywords: [
    "contact InnoQuest",
    "InnoQuest Bangkok",
    "youth learning Bangkok",
    "innovation workshop inquiry",
    "entrepreneurship camp Thailand",
    "school program Bangkok",
    "CSR youth program",
    "student workshop contact",
  ],
  openGraph: {
    images: [{ url: "/images/events/break-the-market-008.jpg", width: 1200, height: 630, alt: "InnoQuest students collaborating at a Bangkok innovation workshop" }],
  },
  twitter: { card: "summary_large_image" },
};

const icon = (d: React.ReactNode) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
);

const iconMap = {
  phone: icon(<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />),
  email: icon(<><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></>),
  location: icon(<><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>),
};

export default async function ContactPage() {
  const locale = await getLocale();
  const page = contactPage[locale];
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          compact
          eyebrow={plain(page.hero.eyebrow)}
          title={page.hero.heading}
          sub={page.hero.sub}
          columns={[
            [
              { src: "/images/events/break-the-market-008.jpg", alt: "Sticky notes on a workshop table", ratio: "4 / 5" },
              { fill: "sand", ratio: "1 / 1" },
            ],
            [
              { fill: "red", ratio: "4 / 3" },
              { src: "/images/events/IMG_7900.jpg", alt: "Students in conversation", ratio: "3 / 4" },
            ],
            [
              { mark: true, ratio: "1 / 1" },
              { src: "/images/events/price-war-153.jpg", alt: "A team at their table", ratio: "4 / 5" },
            ],
          ]}
          offsets={[-32, -88, 0]}
        />

        <section className="sec sec--line">
          <div className="wrap contact-grid">
            <div className="card card--lg">
              <h2 className="h-card" style={{ marginBottom: 24 }}>{page.form.heading}</h2>
              <ContactForm />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {page.infoCards.map((card) => (
                <div key={card.label} className="card" style={{ flexDirection: "row", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "var(--surface-card)", color: "var(--red-ink)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                    {iconMap[card.iconKey]}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <p className="caption">{card.label}</p>
                    <p className="t-small" style={{ fontWeight: 500, color: "var(--ink)", marginTop: 2, overflowWrap: "anywhere" }}>{card.value}</p>
                    <p className="caption" style={{ marginTop: 2 }}>{card.note}</p>
                  </div>
                </div>
              ))}

              <div className="card card--soft">
                <p className="caption" style={{ marginBottom: 8 }}>{page.social.eyebrow}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {page.social.platforms.map((s) => {
                    const hrefs: Record<string, string> = {
                      Instagram: `https://www.instagram.com/${s.href}`,
                      TikTok: `https://www.tiktok.com/@${s.href}`,
                      Line: `https://line.me/R/ti/p/${s.href}`,
                      Facebook: s.href.startsWith("http") ? s.href : `https://www.facebook.com/${s.href}`,
                    };
                    return (
                      <a key={s.label} href={hrefs[s.label]} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ minHeight: 36, paddingInline: 16 }}>
                        {s.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
