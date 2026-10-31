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
    eyebrow: "▸ ร่วมงานกับ InnoQuest",
    heading: "ร่วมส่งเสริมศักยภาพคนรุ่นใหม่กับ InnoQuest",
    sub: "ทีมงาน InnoQuest ยินดีให้คำปรึกษาโดยไม่มีข้อผูกมัด และออกแบบโปรแกรมให้สอดคล้องกับเป้าหมาย งบประมาณ และกำหนดการของท่าน",
    cta: { text: "สอบถามข้อมูล", href: "/contact" },
    phoneNote: "หรือติดต่อทางโทรศัพท์: " + site.contact.phone,
  },
} as const;
