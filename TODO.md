# InnoQuest Website — Tweak Checklist

Work through this page by page. Check off items as you finalize them.

---

## Global (affects every page)

- [ ] Finalize brand colors and update Tailwind config
- [ ] Set correct fonts (headings vs body) in `app/layout.tsx`
- [ ] Confirm favicon and `<meta>` tags in `app/layout.tsx`
- [ ] Review and tighten Navbar links and logo — `components/layout/Navbar.tsx`
- [ ] Review Footer links, socials, and copyright year — `components/layout/Footer.tsx`
- [ ] Make sure mobile nav is working and looks good
- [ ] Check responsive breakpoints globally (mobile → tablet → desktop)

---

## Home (`app/page.tsx`)

- [ ] **HeroSection** — finalize headline copy, subheadline, and CTA button text/link
- [ ] **AudienceSwitcher** — confirm the audience tabs and their content are accurate
- [ ] **ProgramsSection** — verify program cards match actual offerings
- [ ] **JourneySection** — check steps/timeline copy
- [ ] **MethodologySection** — confirm methodology content
- [ ] **TestimonialsSection** — replace placeholder quotes with real ones
- [ ] **PartnersSection** — swap placeholder logos for real partner logos
- [ ] **CTASection** — finalize CTA copy and destination link

---

## Programs (`app/programs/page.tsx`)

- [ ] Confirm program listing data source (`data/` folder or CMS)
- [ ] Check grid layout and card design
- [ ] Verify filters/categories if any

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

- [ ] Finalize headline and intro copy
- [ ] Check content sections specific to corporate clients
- [ ] Verify CTA links

---

## Custom Programs (`app/custom/page.tsx`)

- [ ] Review copy for custom/bespoke program inquiries
- [ ] Check contact form integration — `components/ui/ContactForm.tsx`
- [ ] Confirm form submission handling (email / API)

---

## About (`app/about/page.tsx`)

- [ ] Write/finalize the organization story and mission
- [ ] Add real photos or illustrations
- [ ] Check section order and spacing

---

## Team (`app/team/page.tsx`)

- [ ] Add real team member names, roles, bios, and photos
- [ ] Decide on card layout (grid vs list)
- [ ] Link to LinkedIn profiles if needed

---

## Blog (`app/blog/page.tsx`)

- [ ] Decide on content source (MDX files, CMS, or static data)
- [ ] Replace placeholder posts with real articles
- [ ] Check post card design and "Read more" links
- [ ] Add individual post page if not yet created (`app/blog/[slug]/page.tsx`)

---

## Contact (`app/contact/page.tsx`)

- [ ] Verify ContactForm fields are correct
- [ ] Hook up form submission (Resend, Nodemailer, etc.)
- [ ] Add office address, email, and phone if needed
- [ ] Add map embed if needed

---

## SEO & Performance (do last)

- [ ] Add `metadata` exports to every page file
- [ ] Add Open Graph images
- [ ] Run Lighthouse audit and fix flagged issues
- [ ] Confirm images use `next/image` with proper `alt` text
- [ ] Check for any console errors or TypeScript warnings (`npm run build`)

---

## Pre-launch

- [ ] Test all navigation links end-to-end
- [ ] Test contact form with a real submission
- [ ] Review on real mobile device
- [ ] Set production environment variables on Vercel
- [ ] Deploy to production and smoke-test
