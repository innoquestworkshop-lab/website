/** Single source of truth for company-wide information. */
export const site = {
  name: "InnoQuest",
  tagline: "Empowering Tomorrow’s Innovators",
  description:
    "Experiential learning programs for schools, corporates & institutions — science-backed, play-driven, designed for the next generation.",
  founded: 2021,
  location: {
    city: "Bangkok",
    country: "Thailand",
    display: "Bangkok, Thailand",
  },
  contact: {
    phone: "+66 97 097 0797",
    phoneHours: "Mon–Fri, 9:00–18:00",
    email: "innoquestworkshop@gmail.com",
  },
  social: {
    instagram: "",
    tiktok: "",
    line: "",
    facebook: "",
  },
  seo: {
    titleSuffix: "| InnoQuest",
    defaultDescription:
      "InnoQuest delivers science-backed, play-driven experiential learning programs for schools, corporates, and institutions across Thailand.",
  },
} as const;
