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
    body: "We build tailored simulations according to your needs and requirements, where every mechanic teaches real-world skills through lived experience.",
  },
  {
    title: "In-House Product IP Licensing",
    body: "You can license our battle-tested game formats and IP to run sessions in-house with your own team. These tools are proven across hundreds of participants to ensure they deliver high-impact results every time.",
  },
  {
    title: "Learning Journey Development",
    body: "We architect full paths that take students from their first introduction to complete mastery. Whether we are building from a blank canvas or integrating with your existing curriculum, we create a journey that truly sticks.",
  },
];

/** Cards rendered inside the Delivery, Coordination & Talent section. */
export const deliveryServices: ServiceItem[] = [
  {
    title: "Camps & Workshops",
    body: "We facilitate everything from one day workshops to week long residential camps including all design and logistics.",
  },
  {
    title: "Competitions & Hackathons",
    body: "We handle the full experience from initial problem design to the final awards ceremony.",
  },
  {
    title: "Innovation Challenges",
    body: "We run structured programs for schools and companies over days or full semesters to solve real world problems.",
  },
  {
    title: "Mentors & Speakers",
    body: "We find and brief industry experts and speakers who perfectly fit your theme and audience.",
  },
  {
    title: "Event Management",
    body: "We take care of venue sourcing and on site coordination so you can just show up while we run the show.",
  },
  {
    title: "Curriculum & Course Hours",
    body: "We design custom course hours for your goals delivered by our facilitators or your own team.",
  },
];
