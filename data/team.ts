export type TeamMemberType = "facilitator" | "speaker" | "business-development" | "art";

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  type: TeamMemberType;
  photo?: string;
};

export const typeConfig: Record<TeamMemberType, { label: string; color: string; bg: string }> = {
  facilitator: { label: "Facilitator", color: "#8A0F14", bg: "#8A0F1415" },
  speaker: { label: "Speaker", color: "#121212", bg: "#12121212" },
  "business-development": { label: "Business Development", color: "#4A4A4A", bg: "#4A4A4A10" },
  art: { label: "Art", color: "#7C5C3E", bg: "#7C5C3E12" },
};

export const teamPage = {
  hero: {
    eyebrow: "▸ Our people",
    heading: "The people behind InnoQuest.",
    sub: "Facilitators, speakers, designers, and builders who care deeply about the next generation.",
  },
  joinUs: {
    heading: "Want to facilitate\nwith us?",
    body: "We're always looking for passionate facilitators, speakers, and designers who believe in the power of learning through doing.",
    cta: { text: "Get in touch →", href: "/contact" },
  },
} as const;

export const team: TeamMember[] = [
  /*{
    id: "founder",
    name: "Founder & CEO",
    role: "InnoQuest",
    type: "speaker",
    bio: "A youth educator and entrepreneur passionate about bridging the gap between traditional schooling and real-world skills. Built InnoQuest from a single workshop into Thailand's leading youth experiential learning company.",
  },*/
];
