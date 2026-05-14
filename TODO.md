# InnoQuest Website — Tweak Checklist

Work through this page by page. Check off items as you finalize them.

---

## SEO

- [x] All page metadata (title + description) — all 10 pages
- [x] metadataBase → https://innoquest-website.vercel.app
- [x] sitemap.xml — `app/sitemap.ts`
- [x] robots.txt — `app/robots.ts`
- [x] OG image + Twitter cards — `app/opengraph-image.tsx`
- [x] Deployed to production
- [ ] Add Open Graph images per page
- [ ] Run Lighthouse audit and fix flagged issues
- [ ] Confirm images use `next/image` with proper `alt` text
- [ ] Check for any console errors or TypeScript warnings (`npm run build`)

---

## Global (affects every page)

- [ ] Finalize brand colors and update Tailwind config
- [ ] Set correct fonts (headings vs body) in `app/layout.tsx`
- [ ] Confirm favicon and `<meta>` tags in `app/layout.tsx`
- [ ] Navbar logo sizing — `components/layout/Navbar.tsx`
- [ ] Review Footer links, socials, and copyright year — `components/layout/Footer.tsx`
- [ ] Social links — `data/site.ts` (Instagram, TikTok, Line OA, Facebook)
- [ ] Make sure mobile nav is working and looks good
- [ ] Check responsive breakpoints globally (mobile → tablet → desktop)

---

## Home (`app/page.tsx`)

- [ ] **HeroSection** — finalize headline copy, subheadline, and CTA button text/link
- [ ] **HeroSection body text** — rewrite the body paragraph in `data/hero.ts` (`heroSection.body`)
- [ ] **Our Edge section copy** — rewrite sub, body, pills, and methodology text in `data/whatWeDo.ts` (`whatWeDoPage.signature`)
- [ ] **AudienceSwitcher** — confirm the audience tabs and their content are accurate
- [ ] **ProgramsSection** — verify program cards match actual offerings
- [ ] **JourneySection** — check steps/timeline copy
- [ ] **MethodologySection** — confirm methodology content
- [ ] **TestimonialsSection** — replace placeholder quotes with real ones
- [ ] **PartnersSection** — swap placeholder logos for real partner logos → `data/ecosystem.ts`
- [ ] **CTASection** — finalize CTA copy and destination link

---

## Programs (`app/programs/page.tsx`)

- [ ] Recheck event details (duration, ages, group size, taglines) → `data/programs.ts`
- [ ] Check grid layout and card design

## Program Detail (`app/programs/[slug]/page.tsx`)

- [ ] Confirm dynamic route works for all slugs
- [ ] Check program detail layout: hero, description, schedule, CTA
- [ ] Handle 404 for unknown slugs

---

## Parents (`app/parents/page.tsx`)

- [ ] Finalize headline and intro copy
- [ ] Refine the "Why it matters" cards — confirm these 4 points match the brand message
- [ ] Check programs filtered by `parent` audience — add `"parent"` to more programs in `data/programs.ts` if needed
- [ ] Verify CTA links to contact

---

## Schools (`app/schools/page.tsx`)

- [ ] Finalize headline and intro copy
- [ ] Check content sections specific to school clients
- [ ] Verify CTA links to contact or custom inquiry

---

## Corporates (`app/corporates/page.tsx`)

- [ ] Corporates case study — add content + image
- [ ] Corporate partner logos — replace placeholders
- [ ] Finalize headline and intro copy
- [ ] Verify CTA links

---

## Custom Programs (`app/custom/page.tsx`)

- [ ] Past custom builds — `data/custom.ts` → `pastBuilds.items` (section auto-shows when filled)
- [ ] Cover image per past build
- [ ] Review copy for custom/bespoke program inquiries
- [ ] Confirm form submission handling (email / API)

---

## About (`app/about/page.tsx`)

- [ ] Write/finalize the organization story and mission
- [ ] Add real photos or illustrations
- [ ] Check section order and spacing

---

## Team (`app/team/page.tsx`)

- [ ] Team photos — `data/team.ts` (headshot per member)
- [ ] Team bios — `data/team.ts` (role + bio per member)
- [ ] Decide on card layout (grid vs list)
- [ ] Link to LinkedIn profiles if needed

---

## Contact (`app/contact/page.tsx`)

- [ ] Contact form backend — Formspree or email (Resend / Nodemailer)
- [ ] Verify ContactForm fields are correct
- [ ] Add office address, email, and phone if needed

---

## Blog (`app/blog/page.tsx`)

- [ ] Decide on content source (MDX files, CMS, or static data)
- [ ] Replace placeholder posts with real articles
- [ ] Add individual post page if not yet created (`app/blog/[slug]/page.tsx`)

---

## Analytics & Polish

- [ ] Analytics — Vercel Analytics or Google Analytics
- [ ] Test all navigation links end-to-end
- [ ] Test contact form with a real submission
- [ ] Review on real mobile device

---

## Pre-launch

- [ ] Set production environment variables on Vercel
- [ ] Deploy to production and smoke-test
