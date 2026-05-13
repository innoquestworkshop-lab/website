# Robots.txt Instructions

## Stack
Next.js 16 App Router (`app/` directory). Domain: `https://innoquest-website.vercel.app`

## Task
Create `app/robots.ts` — Next.js will auto-serve it at `/robots.txt`.

## Rules
- Allow all crawlers on all public pages
- Disallow: `/api/` (no public API routes to index)
- Sitemap URL: `https://innoquest-website.vercel.app/sitemap.xml`

## How
Use Next.js built-in robots support. Export a default function from `app/robots.ts` that returns `MetadataRoute.Robots`.

```ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // build and return the object
}
```

Do not create a static `public/robots.txt` file. Use the `app/robots.ts` approach only.
