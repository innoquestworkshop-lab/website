"use client";

import Link from "next/link";
import Image from "next/image";
import { footerCols } from "@/data/navigation";
import { site } from "@/data/site";
import { useLocale } from "@/components/LanguageProvider";

export function Footer() {
  const { locale } = useLocale();
  const cols = footerCols[locale];

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "inline-block" }}>
              <Image
                src="/logos/logo-transparent-trimmed.png"
                alt="InnoQuest"
                width={130}
                height={38}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="t-small" style={{ marginTop: 16, maxWidth: 320 }}>
              {locale === "en"
                ? "We build young people's abilities through play-based, science-backed learning."
                : "InnoQuest พัฒนาศักยภาพของเยาวชนด้วยการเรียนรู้ผ่านการเล่นที่มีหลักวิทยาศาสตร์รองรับ"}
            </p>
            <div style={{ marginTop: 16 }}>
              <span className="pill">BKK · Thailand</span>
            </div>
          </div>

          {/* Link columns */}
          {cols.map((c) => (
            <div key={c.h}>
              <h2 className="eyebrow" style={{ marginBottom: 8, color: "var(--ink)" }}>{c.h}</h2>
              {c.items.map((it) => (
                <Link key={it.label} href={it.href} className="footer-link">
                  {it.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="footer-base caption">
          <span>© {new Date().getFullYear()} {site.name}. {locale === "en" ? "All rights reserved." : "สงวนลิขสิทธิ์"}</span>
          <span style={{ overflowWrap: "anywhere" }}>{site.location.display} · {site.contact.email}</span>
        </div>
      </div>
    </footer>
  );
}
