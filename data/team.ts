export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo?: string;
};

export const team: TeamMember[] = [
  {
    id: "founder",
    name: "Founder & CEO",
    role: "InnoQuest",
    bio: "A youth educator and entrepreneur passionate about bridging the gap between traditional schooling and real-world skills. Built InnoQuest from a single workshop into Thailand's leading youth experiential learning company.",
  },
  {
    id: "learning-design",
    name: "Head of Learning Design",
    role: "Curriculum & Programs",
    bio: "Former educator with a background in developmental psychology and instructional design. Architects every program with neuroscience-backed principles and measurable learning outcomes.",
  },
  {
    id: "facilitation",
    name: "Lead Facilitator",
    role: "Facilitation & Delivery",
    bio: "Five years on the ground facilitating hundreds of youth workshops. Known for creating a safe-to-fail environment where even the quietest kids find their voice.",
  },
  {
    id: "partnerships",
    name: "Head of Partnerships",
    role: "Corporates & Schools",
    bio: "Builds long-term relationships with schools, corporates, and institutions. Ensures every partnership is aligned to InnoQuest's mission and the partner's strategic goals.",
  },
];
