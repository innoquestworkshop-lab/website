import { site } from "./site";

export const ctaSection = {
  en: {
    eyebrow: "▸ Let's build something",
    heading: "Ready to uplift your next generation?",
    sub: "Talk to the InnoQuest team — no commitment, just a conversation. We'll design something that fits your goals, budget, and timeline.",
    cta: { text: "See how we can help", href: "/contact" },
    phoneNote: "Or call us directly: " + site.contact.phone,
  },
  th: {
    eyebrow: "▸ มาสร้างสิ่งดีๆ กัน",
    heading: "พร้อมยกระดับคนรุ่นต่อไปของคุณหรือยัง?",
    sub: "คุยกับทีม InnoQuest — ไม่มีข้อผูกมัด แค่พูดคุยกัน เราจะออกแบบสิ่งที่เหมาะกับเป้าหมาย งบประมาณ และตารางของคุณ",
    cta: { text: "ดูว่าเราช่วยได้อย่างไร", href: "/contact" },
    phoneNote: "หรือโทรหาเราได้เลย: " + site.contact.phone,
  },
} as const;
