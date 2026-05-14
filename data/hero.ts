/** Full-screen cinematic intro — shown before the hero. */
export const cinematicIntro = {
  eyebrow: "Welcome to InnoQuest",
  line1: "The Future",
  line2: "Of Human",
  line3: "Ability.",
  sub: "Transcend traditional learning. Immerse in experiences that forge real-world mastery.",
  scrollLabel: "Scroll to discover",
} as const;

/** Home page hero section content. */
export const heroSection = {
  eyebrow: "▸ Uplifting young human ability",
  headingLine1: "The skills schools",
  headingLine2: "forgot to teach.",
  sub: "Where learning looks like playing — and the skills are completely real.",
  body: "InnoQuest turns business into a game students love to play. We offer gamified products and live workshops that make tough topics easy for ages 10 to 18. By breaking down big ideas into simple challenges, we help young innovators across Thailand learn through doing. We make mastering innovation fun and approachable for everyone.",
  cta1: { text: "Grow with us", href: "/contact" },
  cta2: { text: "Explore programs", href: "/programs" },
  images: [
    {
      tag: "HERO · WIDE",
      caption:
        "// candid wide shot: 4–6 kids (age 10–14) mid-build at a workshop table, daylight, real expressions of focus + joy. Horizontal.",
    },
    {
      tag: "HERO · DETAIL",
      caption:
        "// hands close-up: kid sketching on whiteboard / sticking post-its. Tight crop. Vertical.",
    },
    {
      tag: "HERO · ENERGY",
      caption: "// teen pitching to peers, mic in hand, smiling. Vertical.",
    },
  ],
} as const;
