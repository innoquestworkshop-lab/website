import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/ui/ContactForm";
import { contactPage } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact InnoQuest | Bangkok, Thailand",
  description: "Have a question about InnoQuest's workshops or camps in Bangkok? Drop us a message — no pressure, just a friendly chat to see how we can help.",
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

const iconMap = {
  phone: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8A0F14" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  email: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8A0F14" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
  location: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8A0F14" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
};

export default function ContactPage() {
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
            style={{ top: -100, right: -80, width: 400, height: 400, background: "#8A0F14", opacity: 0.11, filter: "blur(2px)" }}
          />
          <div className="max-w-[1240px] mx-auto px-8 relative z-10">
            <p className="eyebrow" style={{ color: "#8A0F14", marginBottom: 24 }}>▸ Get in touch</p>
            <h1 style={{ fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
              Let&apos;s talk.
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(245,240,234,0.7)", maxWidth: 480, marginTop: 20 }}>
              No commitment, just a conversation. Tell us what you&apos;re looking for
              and we&apos;ll figure out the best way to help.
            </p>
          </div>
        </section>

        {/* Contact content */}
        <section style={{ background: "#F5F0EA", padding: "96px 0" }}>
          <div className="max-w-[1240px] mx-auto px-8">
            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 48 }} className="contact-grid">
              {/* Form */}
              <div style={{ background: "#FFFFFF", borderRadius: 14, padding: 40, border: "1px solid rgba(18,18,18,0.06)" }}>
                <h2 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 32 }}>
                  Send us a message
                </h2>
                <ContactForm />
              </div>

              {/* Info cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {contactPage.infoCards.map((card) => (
                  <div key={card.label} className="card-lift" style={{
                    background: "#FFFFFF", borderRadius: 14, padding: 24,
                    display: "flex", gap: 16, alignItems: "flex-start",
                    border: "1px solid rgba(18,18,18,0.06)",
                  }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 10, background: "#F5F0EA",
                      display: "grid", placeItems: "center", flexShrink: 0,
                    }}>
                      {iconMap[card.iconKey]}
                    </div>
                    <div>
                      <p className="eyebrow" style={{ color: "rgba(18,18,18,0.5)", marginBottom: 6 }}>{card.label}</p>
                      <p style={{ fontSize: 15, fontWeight: 500 }}>{card.value}</p>
                      <p style={{ fontSize: 13, color: "rgba(18,18,18,0.55)", marginTop: 4 }}>{card.note}</p>
                    </div>
                  </div>
                ))}

                {/* Social placeholder */}
                <div style={{ background: "#121212", color: "#F5F0EA", borderRadius: 14, padding: 24 }}>
                  <p className="eyebrow" style={{ color: "rgba(245,240,234,0.5)", marginBottom: 16 }}>Follow along</p>
                  <div style={{ display: "flex", gap: 12 }}>
                    {contactPage.social.platforms.map((s) => (
                      <span key={s.label} className="pill-tag" style={{ background: "rgba(245,240,234,0.1)", color: "rgba(245,240,234,0.7)" }}>
                        {s.label}
                      </span>
                    ))}
                  </div>
                  <p className="mono" style={{ fontSize: 10, color: "rgba(245,240,234,0.3)", marginTop: 16 }}>
                    // Add social links: Instagram, TikTok, Line OA, Facebook
                  </p>
                </div>
              </div>
            </div>
          </div>
          <style>{`@media(max-width:900px){ .contact-grid { grid-template-columns: 1fr !important; } }`}</style>
        </section>
      </main>
      <Footer />
    </>
  );
}
