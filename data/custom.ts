/** Custom Solutions page content. */
export const customPage = {
  hero: {
    eyebrow: "▸ Custom solutions",
    heading: "Built around your goals,",
    headingAccent: "not ours.",
    sub: "Have something specific in mind? We design programs from scratch — custom themes, custom formats, custom outcomes. Tell us what you need.",
    cta: { text: "Start the conversation →", href: "/contact" },
    image: {
      tag: "CUSTOM · HERO",
      caption:
        "// whiteboard planning session: team mapping out a custom program. Shows collaborative design process.",
    },
  },

  process: {
    eyebrow: "▸ How it works",
    heading: "Four steps from idea\nto impact.",
    sub: "Our process is designed to minimize risk and maximize fit. You'll know exactly what you're getting before anything is confirmed.",
    steps: [
      {
        num: "01",
        title: "Discovery call",
        body: "We start with a 30-minute conversation to understand your goals, audience, and constraints. No slides — just a real conversation.",
      },
      {
        num: "02",
        title: "Program design",
        body: "Our learning designers create a bespoke program framework tailored to your needs — themes, format, outcomes, and facilitation plan.",
      },
      {
        num: "03",
        title: "Review & refine",
        body: "You review the proposal, we iterate until it's exactly right — before any commitment. We don't proceed until you're confident.",
      },
      {
        num: "04",
        title: "Delivery & reporting",
        body: "We facilitate the program and deliver a full impact report on completion. Your story, documented.",
      },
    ],
  },

  pastBuilds: {
    eyebrow: "▸ Past custom builds",
    heading: "Things we've",
    headingAccent: "designed from scratch",
    headingSuffix: ".",
    items: [] as { label: string; context: string; tag: string }[],
  },
} as const;

/** Standalone typed exports for direct destructuring. */
export type CustomStep = typeof customPage.process.steps[number];
export type PastBuild = typeof customPage.pastBuilds.items[number];
