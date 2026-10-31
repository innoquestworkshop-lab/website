export const customPage = {
  en: {
    hero: {
      eyebrow: "▸ Custom solutions",
      heading: "Built around your goals,",
      headingAccent: "not ours.",
      sub: "Have something specific in mind? We design programs from scratch, with your theme, your format, and your outcomes. Tell us what you need.",
      cta: { text: "Start the conversation →", href: "/contact" },
      image: { tag: "CUSTOM · HERO", caption: "// whiteboard planning session: team mapping out a custom program. Shows collaborative design process." },
    },
    process: {
      eyebrow: "▸ How it works",
      heading: "Four steps from idea\nto impact.",
      sub: "You'll know exactly what you're getting before anything is confirmed.",
      steps: [
        { num: "01", title: "Discovery call", body: "We start with a 30-minute conversation to understand your goals, audience, and constraints. No slides." },
        { num: "02", title: "Program design", body: "Our learning designers draft a program framework for you, covering themes, format, outcomes, and facilitation plan." },
        { num: "03", title: "Review & refine", body: "You review the proposal and we revise it until it's right, before any commitment. We don't proceed until you're confident." },
        { num: "04", title: "Delivery & reporting", body: "We run the program and send you a full impact report when it ends." },
      ],
    },
    pastBuilds: {
      eyebrow: "▸ Past custom builds",
      heading: "Things we've",
      headingAccent: "designed from scratch",
      headingSuffix: ".",
      items: [] as { label: string; context: string; tag: string }[],
    },
  },
  th: {
    hero: {
      eyebrow: "▸ โปรแกรมออกแบบเฉพาะ",
      heading: "ออกแบบโดยยึดเป้าหมายของลูกค้า",
      headingAccent: "เป็นสำคัญ",
      sub: "InnoQuest ออกแบบโปรแกรมตั้งแต่เริ่มต้น ตามหัวข้อ รูปแบบ และผลลัพธ์การเรียนรู้ที่ลูกค้ากำหนด ลูกค้าสามารถแจ้งความต้องการผ่านช่องทางการติดต่อ",
      cta: { text: "ติดต่อเรา →", href: "/contact" },
      image: { tag: "CUSTOM · HERO", caption: "// whiteboard planning session: team mapping out a custom program. Shows collaborative design process." },
    },
    process: {
      eyebrow: "▸ ขั้นตอนการทำงาน",
      heading: "สี่ขั้นตอนจากแนวคิด\nสู่ผลลัพธ์",
      sub: "ลูกค้าจะทราบรายละเอียดของโปรแกรมอย่างชัดเจนก่อนการยืนยันใด ๆ",
      steps: [
        { num: "01", title: "การหารือเบื้องต้น", body: "InnoQuest เริ่มต้นด้วยการหารือเป็นเวลา 30 นาที เพื่อทำความเข้าใจเป้าหมาย กลุ่มผู้เรียน และข้อจำกัดของลูกค้า โดยไม่มีการนำเสนอสไลด์" },
        { num: "02", title: "การออกแบบโปรแกรม", body: "นักออกแบบการเรียนรู้ของ InnoQuest จัดทำกรอบโปรแกรม ครอบคลุมหัวข้อ รูปแบบ ผลลัพธ์การเรียนรู้ และแผนการดำเนินกิจกรรม" },
        { num: "03", title: "การทบทวนและปรับปรุง", body: "ลูกค้าพิจารณาข้อเสนอ และ InnoQuest ปรับปรุงจนเป็นที่พอใจก่อนการตกลงใด ๆ โดยจะไม่ดำเนินการต่อจนกว่าลูกค้าจะมั่นใจ" },
        { num: "04", title: "การดำเนินงานและรายงานผล", body: "InnoQuest ดำเนินโปรแกรม และจัดส่งรายงานสรุปผลการดำเนินงานฉบับสมบูรณ์เมื่อสิ้นสุดโปรแกรม" },
      ],
    },
    pastBuilds: {
      eyebrow: "▸ ผลงานการออกแบบเฉพาะ",
      heading: "โปรแกรมที่ InnoQuest",
      headingAccent: "ออกแบบตั้งแต่เริ่มต้น",
      headingSuffix: "",
      items: [] as { label: string; context: string; tag: string }[],
    },
  },
} as const;

export type CustomStep = typeof customPage.en.process.steps[number];
export type PastBuild = typeof customPage.en.pastBuilds.items[number];
