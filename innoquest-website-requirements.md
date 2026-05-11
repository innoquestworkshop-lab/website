# InnoQuest — Website Requirements Document
**Version:** 1.0  
**Date:** May 2026  
**Project:** InnoQuest Corporate Website  
**Prepared for:** Development in Claude Code

---

## 1. Project overview

InnoQuest is a youth experiential learning company based in Bangkok, Thailand. The website serves as the primary B2B marketing and lead-generation platform, targeting corporates, schools, institutions, parents, and students.

The site is modelled conceptually after BASE Playhouse (baseplayhouse.co) but repositioned for youth audiences. Design inspiration is drawn from BASE Playhouse, Duolingo, Monday.com, Mailchimp, Nike, and HireLevel.

---

## 2. Brand identity

### 2.1 Color palette

| Token | Hex | Usage |
|---|---|---|
| `--red` | `#C0392B` | CTAs, accents, key data points, logo accent, final CTA section |
| `--black` | `#1A1A1A` | Hero background, dark sections, dark cards |
| `--dark-gray` | `#3D3D3D` | Secondary dark surfaces |
| `--warm-white` | `#F5F0EA` | Light section backgrounds |
| `--sand` | `#E8E0D5` | Methodology section, card backgrounds |
| `--white` | `#FFFFFF` | Cards, content surfaces |

**Rules:**
- Red is used sparingly — CTAs, numbers, accents, and the final CTA section only
- Never fill full content sections with red
- Alternate `--black` and `--warm-white` sections down the page for scroll rhythm
- The final CTA section is the only full-red section on the page

### 2.2 Typography

| Role | Spec |
|---|---|
| Primary font | Inter (Google Fonts) |
| Display / hero | Inter 500, 32–40px |
| Section headings | Inter 500, 22–24px |
| Body | Inter 400, 14px, line-height 1.7 |
| Labels / eyebrows | Inter 500, 11px, uppercase, letter-spacing 0.08em |
| Minimum font size | 11px |

### 2.3 Logo

- Wordmark: **Inno** in `--black`, **Quest** in `--red`
- Font: Inter 500
- No icon/symbol required at launch

### 2.4 Spacing & radius

| Token | Value |
|---|---|
| `--radius-sm` | 8px |
| `--radius-md` | 12px |
| `--radius-lg` | 14px |
| `--radius-pill` | 24px |
| Section padding | 60px top/bottom, 32px left/right |
| Card padding | 20px |

---

## 3. Site architecture

### 3.1 Pages

| Page | Path | Priority |
|---|---|---|
| Homepage | `/` | P0 |
| Programs overview | `/programs` | P0 |
| For corporates | `/corporates` | P0 |
| For schools | `/schools` | P0 |
| Custom solutions | `/custom` | P1 |
| About us | `/about` | P1 |
| Our team | `/team` | P1 |
| Blog | `/blog` | P2 |
| Contact | `/contact` | P0 |
| Individual program page | `/programs/[slug]` | P1 |

### 3.2 Navigation

```
Logo (InnoQuest)
├── Programs ▾
│   ├── Innovation Hackathon
│   ├── Leadership Program
│   ├── Creative Thinking Workshop
│   ├── Young Founders Series
│   └── Corporate CSR Camp
├── For corporates
├── For schools
├── Custom solutions
├── About ▾
│   ├── About us
│   ├── Our team
│   └── Blog
└── [CTA Button] Talk to us  →  /contact
```

**Nav behavior:**
- Sticky on scroll (background becomes opaque white after hero)
- Mobile: hamburger menu, full-screen overlay
- Active state: `--red` underline on current page link
- CTA button: `--red` background, white text, pill shape

---

## 4. Homepage sections

The homepage follows a strict scroll rhythm:

```
Nav        → white / sticky
Section 01 → #1A1A1A  (Hero)
Section 02 → #F5F0EA  (Audience switcher)
Section 03 → #FFFFFF  (Methodology)
Section 04 → #F5F0EA  (Programs bento)
Section 05 → #1A1A1A  (Partner logos)
Section 06 → #FFFFFF  (Journey / How it works)
Section 07 → #F5F0EA  (Testimonials)
Section 08 → #C0392B  (CTA)
Footer     → #111111
```

---

### Section 01 — Hero

**Background:** `#1A1A1A`  
**Decorative elements:** Two large circles, `#C0392B` at 10–12% opacity, positioned top-right and bottom-center

**Content:**
- Eyebrow label: `"Uplifting young human ability"` — red, uppercase, 11px
- H1: `"Where kids learn to"` (white) + `"think, create & lead."` (red, new line)
- Subheadline: `"Experiential learning programs for schools, corporates & institutions — science-backed, play-driven, designed for the next generation."`
- **CTA buttons (row):**
  - Primary: `"Partner with us"` → `/contact` — red fill, white text, pill
  - Secondary: `"Explore programs"` → `/programs` — transparent, white border, pill
- **Stats row** (below buttons, separated by faint border):
  - `500+` Students trained
  - `30+` Partner schools
  - `98%` Satisfaction score
  - `5 yrs` Experience

**Animations:**
- H1 words fade + slide up on load (staggered, 80ms delay each word)
- Stats count up when scrolled into view

---

### Section 02 — Audience switcher

**Background:** `#F5F0EA`  
**Inspired by:** Monday.com persona tabs

**Content:**
- Label: `"I'm looking for programs…"`
- Tab row (4 tabs):
  - `For corporates & CSR` (default active)
  - `For schools`
  - `For parents`
  - `For students`
- Content card below tabs (white, rounded):
  - Title (changes per tab)
  - Body copy (changes per tab)
  - Link: `"See [audience] programs →"` in red

**Tab content:**

| Tab | Title | Body |
|---|---|---|
| Corporates | Corporate & CSR programs | Partner with InnoQuest to deliver meaningful youth development under your CSR strategy. We design, facilitate, and produce impact reports. Your team gets a compelling story — the kids get life-changing skills. |
| Schools | School & institution programs | From one-day workshops to semester-long journeys. Our learning designers align with your curriculum, teachers, and academic calendar — so programs enhance what you already do. |
| Parents | Programs for parents & families | Give your child skills that school doesn't teach: critical thinking, creativity, and confidence. Designed by child development specialists, in safe and fun environments your kids will love. |
| Students | Hey, students! | Tired of sitting and listening? Us too. Come build, create, and solve real challenges alongside other curious kids. No textbooks. No boring lectures. Just you, your ideas, and your team. |

**Behavior:** Tab click swaps title + body + link with a 150ms fade transition. No page navigation.

---

### Section 03 — Methodology

**Background:** `#FFFFFF`  
**Inspired by:** BASE Playhouse "Right Way of Learning©"

**Content:**
- Eyebrow: `"Our learning framework"`
- H2: `"THE INNOQUEST METHOD©"`
- Subheadline: `"Every program is built on four science-backed principles — because how kids learn matters as much as what they learn."`
- 4-column card grid (2×2 on mobile):

| # | Title | Description |
|---|---|---|
| 01 | Play-based | Learning through doing, building, and creating — not sitting and watching |
| 02 | Science-backed | Rooted in neuroscience and developmental psychology |
| 03 | Outcome-driven | Measurable skills and behavioral shifts, not just memorable days |
| 04 | Age-relevant | Designed for how kids and teens actually think, feel, and engage |

**Card style:** `--sand` background, `--red` number, black title, gray description.

---

### Section 04 — Programs

**Background:** `#F5F0EA`  
**Inspired by:** Monday.com bento grid layout

**Content:**
- Eyebrow: `"Programs"`
- H2: `"Short, long, or fully custom"`
- Subheadline: `"From a single-day spark to a semester-long transformation — built around your goals."`

**Bento grid (top):**
- Large left cell (spans 2 rows): Featured program card — dark background, `"Most popular"` tag, program name with red accent, meta info (duration, ages), CTA button
- Top-right cell: Stat — `98%` Satisfaction score
- Bottom-right cell: Stat — `500+` Students trained

**Program list grid (below bento, 2×2):**
Each card: dark icon square (red icon), program name, tag (duration + age range)

| Program | Duration | Ages |
|---|---|---|
| Innovation Hackathon for Schools | 1–3 days | 10–18 |
| Leadership Program | Long-term | 13–18 |
| Creative Thinking Workshop | 1 day | 8–14 |
| Corporate CSR Camp | Custom | All ages |
| Young Founders Series | Semester | 14–18 |

**Behavior:** Each card links to `/programs/[slug]`

---

### Section 05 — Partner logos

**Background:** `#1A1A1A`  
**Content:**
- Label: `"Trusted by schools, corporates & institutions across Thailand"` — faint white uppercase
- Logo row: partner logos displayed as light/white marks on dark background
- Logos scroll marquee on mobile

**Notes:** Placeholder pill-shaped name tags until real logo assets are provided. Replace with actual SVG/PNG logos.

---

### Section 06 — Journey / How it works

**Background:** `#FFFFFF`  
**Inspired by:** Duolingo progress path

**Content:**
- Eyebrow: `"How it works"`
- H2: `"Your organization's learning path"`
- Subheadline: `"From first conversation to long-term partnership — InnoQuest guides every step."`

**Step track (horizontal, scrollable on mobile):**

| Step | Icon | State | Label |
|---|---|---|---|
| 1 | phone | Done (red fill) | Discovery call |
| 2 | pencil | Done (red fill) | Custom design |
| 3 | bolt | Active (black + red outline) | Program delivery |
| 4 | chart-bar | Upcoming (sand) | Impact report |
| 5 | arrow-up | Upcoming (sand) | Long-term program |

**Connector lines:** Red between done steps, sand/gray between upcoming steps.  
**Active step label:** Red, bold.

---

### Section 07 — Testimonials

**Background:** `#F5F0EA`  
**Inspired by:** BASE Playhouse + HireLevel dual-register copy

**Content:**
- Eyebrow: `"Testimonials"`
- H2: `"What people are saying"`
- 3-column card grid (1 col on mobile):

| Audience badge | Quote | Name | Role |
|---|---|---|---|
| Corporate (red badge) | "The kids came back energized and our CSR team had a story worth telling. ROI was immediate and the impact report made it easy to share with leadership." | Head of HR | MNC Thailand · 200-person CSR program |
| School (blue badge) | "Students who hadn't spoken up all year were pitching ideas on day two. Something genuinely shifted — we saw it in the classroom for weeks after." | Principal | Bangkok International School · Semester program |
| Parent (green badge) | "She came home asking to solve problems. I didn't know a camp could do that. She's been different ever since — more curious, more confident." | Parent of participant, age 12 | Summer workshop · 5 days |

**Badge colors:**
- Corporate: `#FAECE7` background, `#993C1D` text
- School: `#E6F1FB` background, `#185FA5` text
- Parent: `#EAF3DE` background, `#3B6D11` text

---

### Section 08 — CTA

**Background:** `#C0392B` (only full-red section on the page)

**Content:**
- H2: `"Ready to uplift your next generation?"`
- Subheadline: `"Talk to the InnoQuest team — no commitment, just a conversation. We'll design something that fits your goals, budget, and timeline."`
- CTA button: `"Let's talk"` → `/contact` — white background, red text, pill
- Phone line: `"Or call us directly: +66 XX-XXXX-XXXX · Mon–Fri 9:00–18:00"`

---

## 5. Footer

**Background:** `#111111`

**Layout:** 4-column grid

| Column | Content |
|---|---|
| Brand | InnoQuest logo + tagline: "Uplifting young human ability through play-based, science-backed learning experiences." |
| Programs | Workshops, Long-term, Custom, CSR camps |
| Audiences | Corporates, Schools, Parents, Students |
| Company | About us, Our team, Blog, Contact |

**Footer bottom bar:** `© 2025 InnoQuest. All rights reserved.` · `Bangkok, Thailand`

---

## 6. Individual program page template

**Path:** `/programs/[slug]`

**Sections:**
1. **Hero** — Program name, tagline, age range + duration badges, primary CTA (`"Enquire now"`)
2. **Overview** — 2-column: description left, key details right (ages, duration, group size, delivery format)
3. **What students gain** — 3–4 outcome cards (icon + title + description)
4. **The INNOQUEST METHOD in this program** — which of the 4 pillars applies and how
5. **Who it's for** — audience tags (corporate / school / parent) with copy per audience
6. **Testimonials** — 2 relevant quotes
7. **Related programs** — 3 program cards
8. **CTA** — full-width enquiry form or link to `/contact`

---

## 7. Contact page

**Path:** `/contact`

**Form fields:**
- Name (required)
- Organisation name (required)
- Role / title
- Email (required)
- Phone
- I am a… (dropdown: Corporate, School, Parent, Student, Other)
- What are you looking for? (textarea)
- How did you hear about us? (dropdown)

**After submission:** Thank you message inline (no page redirect). Email notification to InnoQuest team.

**Also display:**
- Phone number
- Email address
- Office address (Bangkok)
- Line/social icons

---

## 8. Responsive behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (≥1024px) | Full layout as designed |
| Tablet (768–1023px) | 2-col grids, nav collapses dropdowns |
| Mobile (≤767px) | Single column, hamburger nav, horizontal scroll on journey track, logo marquee |

---

## 9. Interactions & animations

| Element | Behavior |
|---|---|
| Hero headline | Words fade + slide up on load, 80ms stagger |
| Stats counters | Count up animation on scroll-into-view |
| Audience tabs | 150ms fade transition on tab switch |
| Program cards | Slight lift on hover (`translateY(-3px)`) |
| CTA buttons | Subtle scale on hover (`scale(0.98)`) on click |
| Journey track | Animate connector fill from left to right on scroll-into-view |
| Nav | Background transitions from transparent to white after hero scroll |

---

## 10. Tech stack recommendations

| Layer | Recommendation | Notes |
|---|---|---|
| Framework | Next.js 14 (App Router) | SEO, routing, image optimization |
| Styling | Tailwind CSS | Fast to build, easy to maintain |
| Animations | Framer Motion | Clean scroll + entrance animations |
| CMS | Sanity.io or Contentful | For programs, blog, team members |
| Form handling | React Hook Form + Resend | Contact form + email notifications |
| Deployment | Vercel | Native Next.js support |
| Fonts | Google Fonts — Inter | Self-host for performance |
| Icons | Tabler Icons (React) | Consistent with design mockup |

---

## 11. SEO & meta

- Thai + English language support (bilingual copy, start with English)
- `<title>` pattern: `[Page Name] — InnoQuest | Youth Learning Programs Thailand`
- OG image: dark hero graphic with InnoQuest logo + tagline
- Sitemap auto-generated
- Structured data: `Organization`, `LocalBusiness`, `Course` schema for program pages

---

## 12. Content to prepare before development

- [ ] Final logo files (SVG, PNG — light and dark versions)
- [ ] Partner logo assets (SVG preferred)
- [ ] Real program names, descriptions, and details
- [ ] Team photos and bios
- [ ] Real testimonial quotes with permission
- [ ] Office address and contact details
- [ ] Photography: real kids in program settings (hero + program pages)
- [ ] Thai translations of key copy (optional at launch)

---

## 13. Out of scope (v1)

- Student login / portal
- Online booking / payment
- E-commerce / merchandise
- Mobile app
- Thai-language full site (copy only in English at launch)
- Blog CMS (static placeholder posts acceptable at launch)

---

*End of requirements document — InnoQuest v1.0*
