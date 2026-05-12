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

export const team: TeamMember[] = [
  {
    id: "founder",
    name: "Founder & CEO",
    role: "InnoQuest",
    type: "speaker",
    bio: "A youth educator and entrepreneur passionate about bridging the gap between traditional schooling and real-world skills. Built InnoQuest from a single workshop into Thailand's leading youth experiential learning company.",
  },
  {
    id: "learning-design",
    name: "Head of Learning Design",
    role: "Curriculum & Programs",
    type: "facilitator",
    bio: "Former educator with a background in developmental psychology and instructional design. Architects every program with neuroscience-backed principles and measurable learning outcomes.",
  },
  {
    id: "facilitation",
    name: "Lead Facilitator",
    role: "Facilitation & Delivery",
    type: "facilitator",
    bio: "Five years on the ground facilitating hundreds of youth workshops. Known for creating a safe-to-fail environment where even the quietest kids find their voice.",
  },
  {
    id: "partnerships",
    name: "Head of Partnerships",
    role: "Corporates & Schools",
    type: "business-development",
    bio: "Builds long-term relationships with schools, corporates, and institutions. Ensures every partnership is aligned to InnoQuest's mission and the partner's strategic goals.",
  },
];
