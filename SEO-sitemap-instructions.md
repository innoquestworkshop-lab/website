# Sitemap Instructions

## Stack
Next.js 16 App Router (`app/` directory). Domain: `https://innoquest-website.vercel.app`

## Task
Create `app/sitemap.ts` — Next.js will auto-serve it at `/sitemap.xml`.

## Pages to include
Static pages (changefreq: weekly, priority as noted):
- `/` — priority 1.0
- `/what-we-do` — priority 0.9
- `/programs` — priority 0.9
- `/schools` — priority 0.8
- `/corporates` — priority 0.8
- `/parents` — priority 0.8
- `/custom` — priority 0.8
- `/about` — priority 0.7
- `/team` — priority 0.6
- `/testimonials` — priority 0.6
- `/contact` — priority 0.7

Dynamic program pages — read slugs from `data/programs.ts` (import `programs` array, map `p.slug`):
- `/programs/[slug]` — priority 0.7, changefreq: monthly

## How
Use Next.js built-in sitemap support. Export a default function from `app/sitemap.ts` that returns `MetadataRoute.Sitemap`.

```ts
import { MetadataRoute } from "next";
import { programs } from "@/data/programs";

export default function sitemap(): MetadataRoute.Sitemap {
  // build and return the array
}
```

Do not create a static XML file. Use the `app/sitemap.ts` approach only.
