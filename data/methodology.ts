export const methodPillars = {
  en: [
    { num: "01", title: "Double-Sided Learning", desc: "Hard skills (like strategy) and soft skills (like confidence) are two sides of the same coin. We never teach them separately because, in the real world, you can't have one without the other." },
    { num: "02", title: "Thinking as a Habit", desc: "Critical thinking isn't a subject on a syllabus; it's a reflex. We train people to pause and analyze the \"why\" before they ever jump into the \"how.\"" },
    { num: "03", title: "Connecting the Dots", desc: "Innovation happens at the edges of different worlds. We teach participants to find the links between business, design, science, and psychology to solve complex problems." },
    { num: "04", title: "Action Over Instruction", desc: "We skip the manuals and the long lectures. Real learning lives in the struggle of a game and the pressure of a challenge — not in a slideshow." },
    { num: "05", title: "Teamwork by Necessity", desc: "The challenges we design are too big for one person to solve alone. In our sessions, collaboration isn't a suggestion; it is a mechanical requirement to succeed." },
    { num: "06", title: "The Insight is in the Debrief", desc: "The game is the hook, but the reflection is the teacher. We spend dedicated time after every activity dissecting what happened so the lesson actually sticks." },
    { num: "07", title: "Real-World Stakes", desc: "We don't do \"busy work.\" Every program is rooted in actual entrepreneurial thinking and real-world strategy, ensuring the experience feels as meaningful as it is educational." },
  ],
  th: [
    { num: "01", title: "การเรียนรู้สองด้าน", desc: "ทักษะแข็ง (เช่น กลยุทธ์) และทักษะอ่อน (เช่น ความมั่นใจ) เป็นสองด้านของเหรียญเดียวกัน เราไม่เคยสอนแยกกันเพราะในโลกแห่งความเป็นจริง คุณไม่สามารถมีด้านหนึ่งโดยไม่มีอีกด้านหนึ่ง" },
    { num: "02", title: "การคิดเป็นนิสัย", desc: "การคิดเชิงวิพากษ์ไม่ใช่วิชาในหลักสูตร แต่เป็นปฏิกิริยาอัตโนมัติ เราฝึกให้คนหยุดและวิเคราะห์ 'ทำไม' ก่อนที่จะก้าวเข้าสู่ 'อย่างไร'" },
    { num: "03", title: "การเชื่อมโยงจุดต่างๆ", desc: "นวัตกรรมเกิดขึ้นที่ขอบของโลกที่ต่างกัน เราสอนผู้เข้าร่วมให้ค้นหาความเชื่อมโยงระหว่างธุรกิจ การออกแบบ วิทยาศาสตร์ และจิตวิทยาเพื่อแก้ปัญหาที่ซับซ้อน" },
    { num: "04", title: "การกระทำเหนือคำสั่งสอน", desc: "เราข้ามคู่มือและการบรรยายยาวๆ การเรียนรู้จริงอยู่ในความยากลำบากของเกมและแรงกดดันของความท้าทาย ไม่ใช่ในสไลด์" },
    { num: "05", title: "การทำงานเป็นทีมโดยจำเป็น", desc: "ความท้าทายที่เราออกแบบนั้นใหญ่เกินกว่าที่คนเดียวจะแก้ได้ ในเซสชันของเรา การทำงานร่วมกันไม่ใช่คำแนะนำ แต่เป็นข้อกำหนดเชิงกลไกเพื่อความสำเร็จ" },
    { num: "06", title: "ข้อคิดอยู่ในการสรุปผล", desc: "เกมคือตะขอ แต่การสะท้อนคือครู เราใช้เวลาพิเศษหลังจากทุกกิจกรรมเพื่อวิเคราะห์สิ่งที่เกิดขึ้น เพื่อให้บทเรียนฝังแน่นจริงๆ" },
    { num: "07", title: "เดิมพันในโลกแห่งความเป็นจริง", desc: "เราไม่ทำ 'งานง่ายๆ' ทุกโปรแกรมหยั่งรากในการคิดแบบผู้ประกอบการจริงและกลยุทธ์โลกแห่งความเป็นจริง ทำให้ประสบการณ์รู้สึกมีความหมายพอๆ กับที่เป็นการศึกษา" },
  ],
} as const;

export const methodPillarNames = methodPillars.en.map((p) => p.title) as string[];

export const methodologySection = {
  en: {
    eyebrow: "▸ Our learning framework",
    heading: "The InnoQuest Method",
    headingScribble: "Method",
    sub: "Seven principles that define how we design every program — because the way people learn matters just as much as what they learn.",
  },
  th: {
    eyebrow: "▸ กรอบการเรียนรู้ของเรา",
    heading: "วิธีการ InnoQuest",
    headingScribble: "วิธีการ",
    sub: "เจ็ดหลักการที่กำหนดวิธีที่เราออกแบบทุกโปรแกรม — เพราะวิธีที่คนเรียนรู้สำคัญพอๆ กับสิ่งที่พวกเขาเรียน",
  },
} as const;
