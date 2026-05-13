/** Services page content. */

export type ServiceItem = {
  title: string;
  body: string;
};

export const servicesPage = {
  /** <head> metadata */
  meta: {
    title: "Services | InnoQuest — Design, Delivery & Talent",
    description:
      "InnoQuest offers two core service pillars: Content, Game Design & Licensing, and Delivery, Coordination & Talent.",
  },

  /** Dark hero band at the top of the page. */
  hero: {
    eyebrow: "Our Services",
    heading: "Two ways to transform learning.",
    sub: "Whether you want to build your own learning ecosystem or hand it to us to run — we have the service model to match.",
  },

  /** Sticky sub-navigation anchor labels. */
  nav: {
    designAnchor: { label: "Content, Game Design & Licensing", href: "#design" },
    deliveryAnchor: { label: "Delivery, Coordination & Talent", href: "#delivery" },
  },

  /** Service 01 — Content, Game Design & Licensing */
  design: {
    eyebrow: "Service 01",
    heading: "Content, Game Design & Licensing",
    sub: "Build your own ecosystem using our battle-tested IP. We help you architect a curriculum from scratch that integrates innovation directly into your organisation's DNA.",
    cta: { text: "Enquire about design services →", href: "/contact" },
  },

  /** Service 02 — Delivery, Coordination & Talent */
  delivery: {
    eyebrow: "Service 02",
    heading: "Delivery, Coordination & Talent",
    sub: "Professional execution for any scale. If it relates to innovation and learning, we can deliver it.",
    cta: { text: "Enquire about event services →", href: "/contact" },
  },
} as const;

/** Cards rendered inside the Design & Licensing section. */
export const designServices: ServiceItem[] = [
  {
    title: "Custom Game Design",
    body: "We build learning games and simulations from scratch — tailored to your objectives, industry, and audience. Every mechanic is designed to teach, not just entertain.",
  },
  {
    title: "In-House Product Licensing",
    body: "License our proven game formats and program IP directly for your facilitators to run in-house. Battle-tested across hundreds of participants.",
  },
  {
    title: "Learning Journey Development",
    body: "We architect multi-touchpoint learning journeys — from awareness to mastery — integrating your existing curriculum or starting from a blank canvas.",
  },
];

/** Cards rendered inside the Delivery, Coordination & Talent section. */
export const deliveryServices: ServiceItem[] = [
  {
    title: "Camps & Workshops",
    body: "Full-service facilitation for single-day workshops up to week-long residential camps. We handle design, logistics, facilitation, and post-program reporting.",
  },
  {
    title: "Competitions & Hackathons",
    body: "End-to-end competition organising — problem design, judging frameworks, event production, and participant experience from registration to awards.",
  },
  {
    title: "Innovation Challenges",
    body: "Structured challenge programs for schools and corporates that run over days, weeks, or a full semester. Real problems, real stakes, real outcomes.",
  },
  {
    title: "Mentor & Speaker Services",
    body: "We source and brief domain experts, industry practitioners, and keynote speakers matched to your program's theme and participant level.",
  },
  {
    title: "Event Organising",
    body: "Full production management — venue sourcing, logistics, AV, catering, branding, and on-the-day coordination. You show up, we run it.",
  },
  {
    title: "Course Hours & Curriculum",
    body: "Accredited or non-accredited course hours designed around your learning objectives, delivered by our trained facilitators or prepared for your own team.",
  },
];
