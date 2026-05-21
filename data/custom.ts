export const customPage = {
  en: {
    hero: {
      eyebrow: "▸ Custom solutions",
      heading: "Built around your goals,",
      headingAccent: "not ours.",
      sub: "Have something specific in mind? We design programs from scratch — custom themes, custom formats, custom outcomes. Tell us what you need.",
      cta: { text: "Start the conversation →", href: "/contact" },
      image: { tag: "CUSTOM · HERO", caption: "// whiteboard planning session: team mapping out a custom program. Shows collaborative design process." },
    },
    process: {
      eyebrow: "▸ How it works",
      heading: "Four steps from idea\nto impact.",
      sub: "Our process is designed to minimize risk and maximize fit. You'll know exactly what you're getting before anything is confirmed.",
      steps: [
        { num: "01", title: "Discovery call", body: "We start with a 30-minute conversation to understand your goals, audience, and constraints. No slides — just a real conversation." },
        { num: "02", title: "Program design", body: "Our learning designers create a bespoke program framework tailored to your needs — themes, format, outcomes, and facilitation plan." },
        { num: "03", title: "Review & refine", body: "You review the proposal, we iterate until it's exactly right — before any commitment. We don't proceed until you're confident." },
        { num: "04", title: "Delivery & reporting", body: "We facilitate the program and deliver a full impact report on completion. Your story, documented." },
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
      eyebrow: "▸ โซลูชันเฉพาะ",
      heading: "สร้างสรรค์รอบเป้าหมายของคุณ,",
      headingAccent: "ไม่ใช่ของเรา",
      sub: "มีแนวคิดเฉพาะอยู่ในใจ? เราออกแบบโปรแกรมจากศูนย์ — ธีมเฉพาะ รูปแบบเฉพาะ ผลลัพธ์เฉพาะ บอกเราว่าคุณต้องการอะไร",
      cta: { text: "เริ่มต้นการสนทนา →", href: "/contact" },
      image: { tag: "CUSTOM · HERO", caption: "// whiteboard planning session: team mapping out a custom program. Shows collaborative design process." },
    },
    process: {
      eyebrow: "▸ วิธีการทำงาน",
      heading: "สี่ขั้นตอนจากแนวคิด\nสู่ผลกระทบ",
      sub: "กระบวนการของเราออกแบบมาเพื่อลดความเสี่ยงและเพิ่มความเหมาะสมสูงสุด คุณจะรู้ว่าจะได้รับอะไรก่อนที่จะยืนยันสิ่งใด",
      steps: [
        { num: "01", title: "สายค้นพบ", body: "เราเริ่มด้วยการสนทนา 30 นาทีเพื่อเข้าใจเป้าหมาย กลุ่มเป้าหมาย และข้อจำกัดของคุณ ไม่มีสไลด์ แค่พูดคุยจริงๆ" },
        { num: "02", title: "ออกแบบโปรแกรม", body: "นักออกแบบการเรียนรู้ของเราสร้างกรอบโปรแกรมเฉพาะที่ปรับให้เหมาะกับความต้องการของคุณ — ธีม รูปแบบ ผลลัพธ์ และแผนการอำนวยความสะดวก" },
        { num: "03", title: "ทบทวนและปรับแต่ง", body: "คุณตรวจสอบข้อเสนอ เราปรับปรุงจนถูกต้องแน่นอน — ก่อนยืนยัน เราไม่ดำเนินการจนกว่าคุณจะมั่นใจ" },
        { num: "04", title: "ส่งมอบและรายงาน", body: "เราอำนวยความสะดวกโปรแกรมและส่งมอบรายงานผลกระทบเต็มรูปแบบเมื่อเสร็จสิ้น เรื่องราวของคุณ ถูกบันทึกไว้" },
      ],
    },
    pastBuilds: {
      eyebrow: "▸ งานที่ผ่านมา",
      heading: "สิ่งที่เรา",
      headingAccent: "ออกแบบจากศูนย์",
      headingSuffix: ".",
      items: [] as { label: string; context: string; tag: string }[],
    },
  },
} as const;

export type CustomStep = typeof customPage.en.process.steps[number];
export type PastBuild = typeof customPage.en.pastBuilds.items[number];
