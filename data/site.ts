/** Single source of truth for company-wide information. */
export const site = {
  name: "InnoQuest",
  tagline: "The skills schools forgot to teach.",
  description:
    "Business simulations and live workshops for ages 10 to 18, run with schools, corporates and institutions across Thailand.",
  founded: 2021,
  location: {
    city: "Bangkok",
    country: "Thailand",
    display: "Bangkok, Thailand",
  },
  contact: {
    phone: "+66 97 097 0797",
    phoneHours: "Mon–Fri, 9:00–18:00",
    email: "admin@innoquest.tech",
  },
  social: {
    instagram: "innoquest_workshop",
    tiktok: "innoquest.labs",
    line: "@900vomzh",
    facebook: "InnoQuest",
  },
  seo: {
    titleSuffix: "| InnoQuest",
    defaultDescription:
      "InnoQuest runs business simulations and live workshops for ages 10 to 18, with schools, corporates and institutions across Thailand.",
  },
} as const;
