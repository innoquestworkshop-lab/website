  Content
  - Corporates case study section — add content + image (imgph still showing) → app/corporates/page.tsx
  - Partner logos — add real logos to data/ecosystem.ts (logo: "/images/partners/...")
  - Team photos — add headshots → data/team.ts (photo field per member), shows on /team page
  - Team bios — fill in data/team.ts (role, bio fields per member)
  - Social links — fill in data/site.ts (Instagram, TikTok, Line OA, Facebook)
  - Corporate partner logos — replace placeholders on corporates page
  - Real testimonials — fill in data/testimonials.ts (quote, name, role, photo fields)
  - Past custom builds — add entries to data/custom.ts → pastBuilds.items (section hidden until filled)

  Experiences Page
  - Recheck event details (duration, ages, group size, taglines) → data/programs.ts

  Photos still needed (imgph showing):
  - /corporates — case study section image
  - /team — each team member headshot (data/team.ts → photo field)
  - data/testimonials.ts — testimonial author photos (if using avatar style)
  - data/custom.ts → pastBuilds.items — each past build cover image

  Polish
  - Navbar logo sizing
  - Contact form — connect to backend (email / Formspree / etc.) → app/contact/page.tsx
  - Analytics — add Google Analytics or Vercel Analytics

  SEO ✅ Done today (14/5)
  - [x] All page metadata (title + description) — all 10 pages
  - [x] metadataBase set in app/layout.tsx → https://innoquest-website.vercel.app
  - [ ] sitemap.xml — instructions in SEO-sitemap-instructions.md (delegated)
  - [ ] robots.txt — instructions in SEO-robots-instructions.md (delegated)
  - [ ] OG image + Twitter cards — instructions in SEO-og-twitter-instructions.md (delegated)
