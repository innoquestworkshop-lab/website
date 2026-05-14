import { site } from "./site";

/** Content for the site-wide CTA section at the bottom of most pages. */
export const ctaSection = {
  eyebrow: "▸ Let's build something",
  heading: "Ready to uplift your next generation?",
  sub: "Talk to the InnoQuest team — no commitment, just a conversation. We'll design something that fits your goals, budget, and timeline.",
  cta: { text: "See how we can help", href: "/contact" },
  phoneNote: "Or call us directly: " + site.contact.phone,
} as const;
