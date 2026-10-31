"use client";

import { useState } from "react";
import Link from "next/link";
import { audienceTabs, audienceSwitcherHeading } from "@/data/audiences";
import { useLocale } from "@/components/LanguageProvider";
import { Arrowed, CheckIcon, Photo, plain } from "@/components/ui/system";

export function AudienceSwitcher() {
  const { locale } = useLocale();
  const tabs = audienceTabs[locale];
  const heading = audienceSwitcherHeading[locale];
  const [active, setActive] = useState(0);
  const cur = tabs[active];

  return (
    <section className="sec">
      <div className="wrap">
        <p className="eyebrow">{plain(heading.eyebrow)}</p>
        <h2 className="h-section" style={{ marginTop: 8 }}>
          {heading.heading}<span className="accent">…</span>
        </h2>

        <div className="tabs" role="tablist" style={{ marginTop: 24 }}>
          {tabs.map((t, i) => (
            <button
              key={t.id}
              role="tab"
              id={`aud-tab-${t.id}`}
              aria-selected={i === active}
              aria-controls="aud-panel"
              className="tab"
              onClick={() => setActive(i)}
            >
              {t.tab}
            </button>
          ))}
        </div>

        <div id="aud-panel" role="tabpanel" aria-labelledby={`aud-tab-${cur.id}`} className="split" style={{ marginTop: 32 }}>
          <div key={cur.id}>
            <h3 className="h-card" style={{ fontSize: 28, fontWeight: 700 }}>{cur.title}</h3>
            <p className="lede" style={{ marginTop: 16 }}>{cur.body}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 24 }}>
              {cur.bullets.map((b) => (
                <span key={b} className="pill" style={{ background: "var(--canvas)", border: "1px solid var(--hairline)" }}>
                  <span style={{ color: "var(--red-ink)", display: "inline-flex" }}><CheckIcon size={12} /></span>
                  {b}
                </span>
              ))}
            </div>
            <Link href={cur.link.href} className="btn btn-secondary" style={{ marginTop: 32 }}>
              <Arrowed text={cur.link.text} size={14} />
            </Link>
          </div>
          {cur.img ? (
            <Photo key={cur.img} src={cur.img} alt={cur.title} ratio="4 / 3" sizes="(max-width: 900px) 100vw, 50vw" />
          ) : (
            <div className="imgph" style={{ aspectRatio: "4 / 3" }}>
              <div className="imgph-caption">{cur.imgCaption}</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
