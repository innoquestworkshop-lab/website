import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import type { Testimonial } from "@/data/testimonials";

/** Originals are up to 8 MB. Every event photo has a 1200px copy in /web. */
export const web = (src: string) => src.replace("/images/events/", "/images/events/web/");

/** Drops the decorative "▸ " marker some data strings carry. The words stay as written. */
export const plain = (s: string) => s.replace(/^▸\s*/, "");

export function ArrowIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

/** Link text plus an arrow icon, unless the copy already carries its own "→". */
export function Arrowed({ text, size = 16 }: { text: string; size?: number }) {
  return <>{text}{!text.includes("→") && <> <ArrowIcon size={size} /></>}</>;
}

export function CheckIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/** Splits on data-file newlines. The text itself is untouched. */
export function Lines({ text, accentLine }: { text: string; accentLine?: number }) {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((l, i) => (
        <span key={i}>
          {i === accentLine ? <span className="accent">{l}</span> : l}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
    </>
  );
}

/** Colours the accent substring of a heading in innoquest red. Display sizes only. */
export function AccentHeading({ heading, accent }: { heading: string; accent: string }) {
  return (
    <>
      {heading.replace(accent, "").trimEnd()} <span className="accent">{accent}</span>
    </>
  );
}

/* ---- Photos and tiles ---- */

type PhotoProps = {
  src: string;
  alt: string;
  ratio?: string;
  position?: string;
  scale?: number;
  blur?: number;
  priority?: boolean;
  sizes?: string;
  style?: CSSProperties;
};

export function Photo({ src, alt, ratio = "4 / 3", position, scale, blur, priority, sizes, style }: PhotoProps) {
  return (
    <figure className="tile" style={{ aspectRatio: ratio, ...style }}>
      <Image
        src={web(src)}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes ?? "(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"}
        style={{
          objectFit: "cover",
          objectPosition: position,
          scale: scale && scale !== 1 ? String(scale) : undefined,
          filter: blur ? `blur(${blur}px)` : undefined,
        }}
      />
    </figure>
  );
}

export type Tile =
  | { src: string; alt: string; ratio: string; position?: string }
  | { fill: "red" | "dark" | "sand"; ratio: string }
  | { mark: true; ratio: string };

export function Masonry({ columns, enter, priority, offsets }: {
  columns: Tile[][];
  /** The one authored entrance on a page: the hero masonry settling in. */
  enter?: boolean;
  priority?: boolean;
  /** Top offset per column, so the wall starts above the frame and bleeds. */
  offsets?: number[];
}) {
  let i = 0;
  return (
    <div className={`masonry${enter ? " masonry--enter" : ""}`}>
      {columns.map((col, c) => (
        <div key={c} className="masonry-col" style={{ marginTop: offsets?.[c] ?? 0 }}>
          {col.map((t, n) => {
            const delay = { "--i": i++ } as CSSProperties;
            if ("src" in t) {
              return <Photo key={n} src={t.src} alt={t.alt} ratio={t.ratio} position={t.position} priority={priority} sizes="(max-width: 640px) 50vw, 20vw" style={delay} />;
            }
            if ("mark" in t) {
              return (
                <div key={n} className="tile tile--mark" style={{ aspectRatio: t.ratio, ...delay }} aria-hidden="true">
                  <Image src="/logos/InnoQuest Icon.png" alt="" width={72} height={72} style={{ width: "36%", height: "auto" }} />
                </div>
              );
            }
            return <div key={n} className={`tile tile--${t.fill}`} style={{ aspectRatio: t.ratio, ...delay }} aria-hidden="true" />;
          })}
        </div>
      ))}
    </div>
  );
}

/* ---- Page structure ---- */

export function PageHero({ eyebrow, title, sub, sub2, actions, columns, offsets, compact, after }: {
  eyebrow?: ReactNode;
  title: ReactNode;
  sub?: ReactNode;
  sub2?: ReactNode;
  actions?: ReactNode;
  columns: Tile[][];
  offsets?: number[];
  compact?: boolean;
  after?: ReactNode;
}) {
  return (
    <section className={`hero${compact ? " hero--compact" : ""}`}>
      <div className="hero-grid">
        <div className="hero-copy">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="t-display">{title}</h1>
          {sub && <p className="lede">{sub}</p>}
          {sub2 && <p className="lede">{sub2}</p>}
          {actions && <div className="actions">{actions}</div>}
          {after}
        </div>
        <div className="hero-mosaic">
          <Masonry columns={columns} offsets={offsets ?? [-48, -112, -16]} enter priority />
        </div>
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, sub, stack }: {
  eyebrow?: ReactNode;
  title: ReactNode;
  sub?: ReactNode;
  stack?: boolean;
}) {
  return (
    <div className={`sec-head${stack || !sub ? " sec-head--stack" : ""}`}>
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="h-section">{title}</h2>
      </div>
      {sub && <p className="lede">{sub}</p>}
    </div>
  );
}

export function Steps({ steps, columns = 4 }: {
  steps: readonly { num: string | number; title: string; body: string }[];
  columns?: number;
}) {
  return (
    <div className="steps" style={{ "--steps": columns } as CSSProperties}>
      {steps.map((s) => (
        <div key={s.num} className="step">
          <div className="num">{s.num}</div>
          <h3 className="h-sm">{s.title}</h3>
          <p className="t-small">{s.body}</p>
        </div>
      ))}
    </div>
  );
}

/* ---- Testimonials ---- */

const STAR = "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z";

export function Stars({ count, size = 14 }: { count: number; size?: number }) {
  const beyond = count > 5;
  const total = beyond ? 6 : 5;
  return (
    <div className="stars" role="img" aria-label={`${count} / 5`}>
      {Array.from({ length: total }).map((_, i) => {
        const pct = Math.round(Math.min(1, Math.max(0, count - i)) * 100);
        return (
          <span key={i} style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
            <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: "block" }} aria-hidden="true">
              <path d={STAR} fill="var(--hairline)" />
            </svg>
            {pct > 0 && (
              <span style={{ position: "absolute", top: 0, left: 0, width: `${pct}%`, height: "100%", overflow: "hidden" }}>
                <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: "block" }} aria-hidden="true">
                  <path d={STAR} fill="currentColor" />
                </svg>
              </span>
            )}
          </span>
        );
      })}
      {beyond && <span className="caption" style={{ marginLeft: 4, color: "var(--red-ink)" }}>6/5</span>}
    </div>
  );
}

export function QuoteCard({ t, badge, soft }: { t: Testimonial; badge?: string; soft?: boolean }) {
  return (
    <div className={`card quote${soft ? " card--soft" : ""}`}>
      {(t.stars || badge) && (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, flexWrap: "wrap" }}>
          {t.stars ? <Stars count={t.stars} /> : <span />}
          {badge && <span className="pill">{badge}</span>}
        </div>
      )}
      <p className="quote-text">&ldquo;{t.quote}&rdquo;</p>
      <div className="quote-by">
        {t.avatar ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={t.avatar} alt={t.name} loading="lazy" />
        ) : (
          <span className="avatar-empty" />
        )}
        <div style={{ minWidth: 0 }}>
          <p className="t-small" style={{ fontWeight: 500, color: "var(--ink)" }}>{t.name}</p>
          <p className="caption">{t.role} · {Array.isArray(t.context) ? t.context.join(" · ") : t.context}</p>
        </div>
      </div>
    </div>
  );
}
