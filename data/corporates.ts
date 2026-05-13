/** Corporates & CSR page content. */
export const corporatesPage = {
  hero: {
    eyebrow: "▸ For corporates & CSR",
    heading: "CSR or Corporate Youth Program\n",
    headingAccent: "with long-lasting impact.",
    sub: "Partner with InnoQuest to deliver meaningful youth development under your CSR strategy. Your team gets a compelling story — the kids get life-changing skills.",
    cta1: { text: "Talk to us →", href: "/contact" },
    cta2: { text: "See programs", href: "/programs" },
    image: {
      tag: "CORPORATES · HERO",
      caption:
        "// photo: corporate leaders + facilitators with kids at workshop. Wide. Genuine smiles. NOT staged handshake.",
    },
  },

  benefits: {
    eyebrow: "▸ What you get",
    heading: "More than a\none-day event.",
    sub: "Every InnoQuest corporate program is designed to deliver real outcomes you can measure, document, and share — not just photos.",
    items: [
      {
        iconKey: "bolt" as const,
        title: "Turnkey delivery",
        body: "We handle everything — design, facilitation, logistics, and documentation. Your team shows up, we take care of the rest.",
      },
      {
        iconKey: "chart" as const,
        title: "Impact report",
        body: "Every program ends with a documented impact report your leadership and comms teams can use to tell the story.",
      },
      {
        iconKey: "refresh" as const,
        title: "Flexible scope",
        body: "Half-day, full-day, multi-day. 30 kids or 300. We scale to your budget and headcount.",
      },
      {
        iconKey: "star" as const,
        title: "Brand alignment",
        body: "Programs are branded and themed around your company values, industries, or CSR priorities.",
      },
    ],
  },

  caseStudy: {
    eyebrow: "▸ Case study",
    heading: "200 kids. One regional bank. Three months of follow-up.",
    body: "We partnered with a regional bank to design a CSR program aligned with their financial literacy mandate. Result: 200 students trained, 87% completion, and a documented impact report that became the bank's flagship CSR story.",
    stats: [
      { v: "200", l: "Students" },
      { v: "87%", l: "Completion" },
      { v: "3 mo.", l: "Follow-up" },
    ],
    image: {
      tag: "CASE STUDY",
      caption:
        "// CASE STUDY photo: candid moment from a real corporate CSR program (e.g. 200-person event). Show scale + energy. Wide.",
    },
  },

  learningPath: {
    eyebrow: "▸ Your learning path",
    heading: "Built around\nyour goals.",
    sub: "We don't hand you a catalog. We design a CSR program from scratch — themed around your brand values, scaled to your budget, and documented for your stakeholders.",
    steps: [
      {
        num: "01",
        title: "Brief",
        body: "You tell us your CSR mandate, target audience, and what a win looks like for your comms team.",
      },
      {
        num: "02",
        title: "Design",
        body: "We theme the program around your brand, align on format, and map activities to your objectives.",
      },
      {
        num: "03",
        title: "Deliver",
        body: "Our facilitators run the day. Your team participates without lifting a finger on logistics.",
      },
      {
        num: "04",
        title: "Document",
        body: "You receive a branded impact report with photos, skill data, and a story your board can share.",
      },
    ],
    cta1: { text: "Start your CSR program →", href: "/contact" },
    cta2: { text: "Custom solutions", href: "/custom" },
  },
} as const;

export const corporatePartners: { name: string; logo?: string }[] = [
  // { name: "Swipe Company", logo: "/images/partners/swipe-company.png" },
  // { name: "Swipe Next Gen", logo: "/images/partners/swipe-next-gen.png" },
];
