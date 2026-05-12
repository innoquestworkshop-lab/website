import { site } from "./site";

/** Contact page info cards and social links. */
export const contactPage = {
  hero: {
    eyebrow: "▸ Get in touch",
    heading: "Let's talk.",
    sub: "No commitment, just a conversation. Tell us what you're looking for and we'll figure out the best way to help.",
  },

  infoCards: [
    {
      label: "Phone",
      value: site.contact.phone,
      note: site.contact.phoneHours,
      iconKey: "phone" as const,
    },
    {
      label: "Email",
      value: site.contact.email,
      note: "Replies within 1–2 business days",
      iconKey: "email" as const,
    },
    {
      label: "Location",
      value: site.location.display,
      note: "Programs delivered nationwide",
      iconKey: "location" as const,
    },
  ],

  social: {
    eyebrow: "Follow along",
    platforms: [
      { label: "Instagram", href: site.social.instagram },
      { label: "TikTok",    href: site.social.tiktok    },
      { label: "Line",      href: site.social.line      },
      { label: "Facebook",  href: site.social.facebook  },
    ],
  },

  form: {
    heading: "Send us a message",
  },
} as const;
