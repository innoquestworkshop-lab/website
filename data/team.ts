export type TeamMemberType = "facilitator" | "speaker" | "business-development" | "art";

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  type: TeamMemberType;
  photo?: string;
};

export const typeConfig: Record<TeamMemberType, { label: string; labelTh: string; color: string; bg: string }> = {
  facilitator:          { label: "Facilitator",          labelTh: "วิทยากร",         color: "#8A0F14", bg: "#8A0F1415" },
  speaker:              { label: "Speaker",               labelTh: "วิทยากรรับเชิญ", color: "#121212", bg: "#12121212" },
  "business-development": { label: "Business Development", labelTh: "พัฒนาธุรกิจ",    color: "#4A4A4A", bg: "#4A4A4A10" },
  art:                  { label: "Art",                   labelTh: "ศิลปะ",           color: "#7C5C3E", bg: "#7C5C3E12" },
};

export const teamPage = {
  en: {
    hero: {
      eyebrow: "▸ Our people",
      heading: "The people behind InnoQuest.",
      sub: "Facilitators, speakers, designers, and builders who care about the next generation.",
    },
    joinUs: {
      heading: "Want to facilitate\nwith us?",
      body: "We're always looking for facilitators, speakers, and designers who believe kids learn by doing.",
      cta: { text: "Get in touch →", href: "/contact" },
    },
  },
  th: {
    hero: {
      eyebrow: "▸ ทีมของเรา",
      heading: "คนเบื้องหลัง InnoQuest",
      sub: "วิทยากร วิทยากรรับเชิญ นักออกแบบ และคนลงมือสร้าง ที่ใส่ใจคนรุ่นต่อไป",
    },
    joinUs: {
      heading: "อยากเป็นวิทยากร\nกับเราไหม?",
      body: "เราเปิดรับวิทยากร วิทยากรรับเชิญ และนักออกแบบอยู่เสมอ ถ้าคุณเชื่อว่าเด็กเรียนรู้จากการลงมือทำ",
      cta: { text: "ติดต่อเรา →", href: "/contact" },
    },
  },
} as const;

export const team: TeamMember[] = [
  {
    id: "founder",
    name: "Founder & CEO",
    role: "InnoQuest",
    type: "speaker",
    bio: "A youth educator and entrepreneur closing the gap between traditional schooling and real-world skills. Built InnoQuest from a single workshop into Thailand's leading youth experiential learning company.",
  },
];
