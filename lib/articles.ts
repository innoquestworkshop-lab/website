// Resource/blog articles. Stored as typed content blocks (no MDX dependency),
// one entry per language so each locale gets its own indexable URL:
//   English -> /blog/<slug>        Thai -> /th/blog/<slug>

export type ArticleShot = { src: string; alt: string; caption: string; position?: string };
export type ArticleBlock = { h2: string } | { p: string } | { ul: string[] } | { img: ArticleShot };
export type ArticleLocale = "en" | "th";

export type Article = {
  slug: string;
  locale: ArticleLocale;
  title: string;
  description: string;
  /** ISO date, e.g. "2026-11-03" */
  date: string;
  /** Optional hero image under /public */
  heroImg?: string;
  body: ArticleBlock[];
};

// Registered as content lands. Each imported file exports an Article[] holding
// the en + th versions that share a slug.
import { whyTeachEntrepreneurship } from "@/data/articles/why-teach-entrepreneurship";
import { gamificationLiveExperience } from "@/data/articles/gamification-live-experience";

export const articles: Article[] = [
  ...whyTeachEntrepreneurship,
  ...gamificationLiveExperience,
];

export function getArticles(locale: ArticleLocale): Article[] {
  return articles
    .filter((a) => a.locale === locale)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getArticle(locale: ArticleLocale, slug: string): Article | null {
  return articles.find((a) => a.locale === locale && a.slug === slug) ?? null;
}

/** Rough reading time in minutes, for display. */
export function readingMinutes(a: Article): number {
  const words = a.body.reduce((n, b) => {
    if ("p" in b) return n + b.p.trim().split(/\s+/).length;
    if ("h2" in b) return n + b.h2.trim().split(/\s+/).length;
    if ("ul" in b) return n + b.ul.join(" ").trim().split(/\s+/).length;
    return n;
  }, 0);
  return Math.max(2, Math.round(words / 200));
}

/** Spread the article's photos through the body, after paragraphs, so they sit
 *  within the text rather than stacked above it. */
export function interleaveImages(body: ArticleBlock[], shots: ArticleShot[]): ArticleBlock[] {
  if (shots.length === 0) return body;
  const paraCount = body.filter((b) => "p" in b).length;
  const every = Math.max(1, Math.round(paraCount / (shots.length + 1)));
  const out: ArticleBlock[] = [];
  let seenParas = 0;
  let si = 0;
  for (const b of body) {
    out.push(b);
    if ("p" in b) {
      seenParas++;
      if (si < shots.length && seenParas % every === 0 && seenParas !== paraCount) {
        out.push({ img: shots[si++] });
      }
    }
  }
  while (si < shots.length) out.push({ img: shots[si++] });
  return out;
}
