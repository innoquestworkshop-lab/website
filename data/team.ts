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
  facilitator:          { label: "Facilitator",          labelTh: "วิทยากร",         color: "var(--red-ink)", bg: "var(--surface-card)" },
  speaker:              { label: "Speaker",               labelTh: "วิทยากรรับเชิญ", color: "var(--ink)", bg: "var(--surface-card)" },
  "business-development": { label: "Business Development", labelTh: "พัฒนาธุรกิจ",    color: "var(--body)", bg: "var(--surface-card)" },
  art:                  { label: "Art",                   labelTh: "ศิลปะ",           color: "var(--mute)", bg: "var(--surface-card)" },
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
      eyebrow: "▸ ทีมงาน",
      heading: "ทีมงาน InnoQuest",
      sub: "วิทยากร วิทยากรรับเชิญ นักออกแบบ และผู้พัฒนาผลิตภัณฑ์ ผู้ให้ความสำคัญกับคนรุ่นใหม่",
    },
    joinUs: {
      heading: "ร่วมเป็นวิทยากร\nกับ InnoQuest",
      body: "InnoQuest เปิดรับวิทยากร วิทยากรรับเชิญ และนักออกแบบอยู่เสมอ สำหรับผู้ที่เชื่อว่าเยาวชนเรียนรู้จากการปฏิบัติจริง",
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
