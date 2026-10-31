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
      eyebrow: "▸ โซลูชันตามโจทย์",
      heading: "สร้างจากเป้าหมายของคุณ",
      headingAccent: "ไม่ใช่ของเรา",
      sub: "มีไอเดียในใจอยู่แล้วใช่ไหม เราออกแบบโปรแกรมตั้งแต่ศูนย์ ด้วยธีม รูปแบบ และผลลัพธ์ของคุณเอง บอกเรามาได้เลยว่าต้องการอะไร",
      cta: { text: "เริ่มคุยกันเลย →", href: "/contact" },
      image: { tag: "CUSTOM · HERO", caption: "// whiteboard planning session: team mapping out a custom program. Shows collaborative design process." },
    },
    process: {
      eyebrow: "▸ วิธีการทำงาน",
      heading: "สี่ขั้นตอนจากไอเดีย\nสู่ผลลัพธ์",
      sub: "คุณจะรู้ชัดว่าจะได้อะไรบ้าง ก่อนยืนยันอะไรทั้งนั้น",
      steps: [
        { num: "01", title: "คุยโจทย์", body: "เราเริ่มจากคุยกัน 30 นาที เพื่อเข้าใจเป้าหมาย กลุ่มผู้เรียน และข้อจำกัดของคุณ ไม่มีสไลด์" },
        { num: "02", title: "ออกแบบโปรแกรม", body: "นักออกแบบการเรียนรู้ของเราร่างกรอบโปรแกรมให้คุณ ครอบคลุมธีม รูปแบบ ผลลัพธ์ และแผนการดำเนินกิจกรรม" },
        { num: "03", title: "ทบทวนและปรับแต่ง", body: "คุณดูข้อเสนอ เราแก้จนลงตัวก่อนจะตกลงอะไรกัน และจะไม่เดินหน้าต่อจนกว่าคุณจะมั่นใจ" },
        { num: "04", title: "จัดงานและรายงานผล", body: "เราจัดโปรแกรมให้ และส่งรายงานผลลัพธ์ฉบับเต็มให้คุณเมื่อจบงาน" },
      ],
    },
    pastBuilds: {
      eyebrow: "▸ งานออกแบบเฉพาะที่ผ่านมา",
      heading: "งานที่เรา",
      headingAccent: "ออกแบบจากศูนย์",
      headingSuffix: "",
      items: [] as { label: string; context: string; tag: string }[],
    },
  },
} as const;

export type CustomStep = typeof customPage.en.process.steps[number];
export type PastBuild = typeof customPage.en.pastBuilds.items[number];
