# OG Image & Twitter Card Instructions

## Stack
Next.js 16 App Router (`app/` directory). Domain: `https://innoquest-website.vercel.app`

## Part 1 — Default OG Image

Create a static fallback OG image at `public/og-default.jpg`:
- Size: 1200×630px
- This is the image shown when links are shared on Facebook, Line, Instagram, WhatsApp etc.
- Content suggestion: InnoQuest logo + tagline on dark background (#121212) with red accent (#8A0F14)
- If you can generate it programmatically, use `app/opengraph-image.tsx` (Next.js auto-serves at `/opengraph-image`)

Then add to the `metadata` object in `app/layout.tsx`:

```ts
openGraph: {
  siteName: "InnoQuest",
  locale: "en_US",
  type: "website",
  images: [
    {
      url: "/og-default.jpg",
      width: 1200,
      height: 630,
      alt: "InnoQuest",
    },
  ],
},
twitter: {
  card: "summary_large_image",
  images: ["/og-default.jpg"],
},
```

## Part 2 — Per-page OG (optional but recommended)

For pages that already have a hero image, add `openGraph.images` to their `metadata` export. Example for `app/programs/page.tsx`:

```ts
export const metadata: Metadata = {
  title: "...",
  description: "...",
  openGraph: {
    images: [{ url: "/images/events/entre-1-173.jpg", width: 1200, height: 630 }],
  },
};
```

Pages with real hero images to prioritise:
- `/programs` — `entre-1-173.jpg`
- `/what-we-do` — `price-war-154.jpg`
- `/custom` — `IMG_7900.jpg`
- `/about` — `price-war-048.jpg`
- `/parents` — `price-war-058.jpg`
- `/schools` — check `app/schools/page.tsx` for current hero image
- `/corporates` — check `app/corporates/page.tsx` for current hero image

## Notes
- `metadataBase` is already set in `app/layout.tsx` — relative image URLs will resolve correctly
- Do not remove any existing metadata fields, only add to them
- Twitter card `summary_large_image` requires image to be at least 300×157px (our images are all larger)
