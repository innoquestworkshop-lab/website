import Link from "next/link";
import Image from "next/image";
import { footerCols } from "@/data/navigation";
import { audienceCards } from "@/data/audiences";
import { site } from "@/data/site";

const cols = [
  {
    h: "Explore",
    items: [
      { label: "What We Do", href: "/what-we-do" },
      { label: "Services", href: "/services" },
      { label: "Programs", href: "/programs" },
      { label: "The Pathway", href: "/programs/pathway" },
    ],
  },
  {
    h: "Audiences",
    items: audienceCards.map((a) => ({ label: a.label, href: a.href })),
  },
  footerCols[1],
];

export function Footer() {
  return (
    <footer style={{ background: "#111111", color: "#F5F0EA", padding: "0 0 32px" }}>
      <div className="max-w-[1240px] mx-auto px-8" style={{ paddingTop: 72 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: 48, alignItems: "start" }} className="footer-grid">
          {/* Brand */}
          <div>
            <Link href="/">
              <Image
                src="/logos/logo-transparent-trimmed.png"
                alt="InnoQuest"
                width={130}
                height={38}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p style={{ marginTop: 18, fontSize: 14, lineHeight: 1.6, color: "rgba(245,240,234,0.6)", maxWidth: 300 }}>
              Uplifting young human ability through play-based, science-backed learning experiences.
            </p>
            <div style={{ marginTop: 24, display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span className="pill-tag" style={{ background: "rgba(245,240,234,0.06)", color: "rgba(245,240,234,0.7)" }}>
                BKK · Thailand
              </span>
            </div>
          </div>

          {/* Link columns */}
          {cols.map((c) => (
            <div key={c.h}>
              <div className="eyebrow" style={{ color: "rgba(245,240,234,0.5)", marginBottom: 16 }}>{c.h}</div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {c.items.map((it) => (
                  <Link key={it.label} href={it.href} className="footer-link">
                    {it.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 56, paddingTop: 24,
          borderTop: "1px solid rgba(245,240,234,0.1)",
          display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12,
          fontSize: 12, color: "rgba(245,240,234,0.5)",
        }}>
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span>{site.location.display} · {site.contact.email}</span>
        </div>
      </div>
      <style>{`
        @media(max-width:900px){ .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media(max-width:540px){ .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
