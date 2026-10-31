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
    { num: "01", title: "การเรียนรู้แบบผสมผสาน", desc: "เพราะ Hard Skills (อย่างเรื่องกลยุทธ์) และ Soft Skills (อย่างความมั่นใจ) คือสิ่งที่ไม่แยกจากกัน ในโลกการทำงานจริงเราไม่สามารถขาดด้านใดด้านหนึ่งได้ เราจึงไม่แยกสอนสองสิ่งนี้ออกจากกัน เพื่อให้คุณได้พัฒนาทั้งสองทักษะควบคู่กันไปอย่างสมบูรณ์" },
    { num: "02", title: "เปลี่ยน \"การคิด\" ให้เป็นสัญชาตญาณ", desc: "Critical Thinking ไม่ใช่แค่บทเรียนในหลักสูตร แต่คือปฏิกิริยาตอบสนองอัตโนมัติ เราฝึกให้ทุกคนหยุดคิดเพื่อวิเคราะห์หาเหตุผลชวนคิดอย่าง \"Why\" ก่อนที่จะกระโดดลงไปลงมือทำในส่วนของ \"How\"" },
    { num: "03", title: "เชื่อมโยงระหว่างศาสตร์เพื่อสร้างนวัตกรรม", desc: "นวัตกรรมและไอเดียใหม่ๆ มักเกิดจากจุดตัดของศาสตร์ที่หลากหลาย เราฝึกให้ผู้เรียนมองหาความเชื่อมโยงระหว่างโลกธุรกิจ, การดีไซน์, วิทยาศาสตร์ และจิตวิทยา เพื่อนำมาใช้แก้โจทย์ธุรกิจที่ซับซ้อนได้อย่างสร้างสรรค์" },
    { num: "04", title: "เน้นลงมือทำ มากกว่าทฤษฎี", desc: "เราข้ามขั้นตอนของการเปิดคู่มือและการนั่งฟังบรรยายที่ยาวนาน เพราะการเรียนรู้ที่แท้จริงเกิดขึ้นจากความท้าทายและการแก้ปัญหาในสถานการณ์จำลอง... ไม่ใช่จากการนั่งดูสไลด์ Presentation" },
    { num: "05", title: "ทีมเวิร์กที่ขับเคลื่อนด้วยสถานการณ์", desc: "โครงสร้างความท้าทายที่เราออกแบบนั้นใหญ่เกินกว่าจะแก้ได้ด้วยตัวคนเดียว ในเซสชันของเรา \"การทำงานร่วมกัน\" จึงไม่ใช่แค่ข้อแนะนำ แต่เป็นกลไกสำคัญในระบบที่ทุกคนต้องมีร่วมกันเพื่อไปถึงความสำเร็จ" },
    { num: "06", title: "ถอดบทเรียนเพื่อการตกผลึก", desc: "กิจกรรมคือเครื่องมือสร้างประสบการณ์ แต่การ Reflection คือครูที่ดีที่สุด เราจึงเน้นการใช้เวลาหลังจบเกมเพื่อวิเคราะห์และถอดรหัสสิ่งที่เกิดขึ้นอย่างละเอียด เพื่อให้มั่นใจว่าบทเรียนเหล่านั้นจะสามารถนำไปประยุกต์ใช้ได้จริง" },
    { num: "07", title: "ตอบโจทย์จริง บนสนามธุรกิจ", desc: "เราไม่ทำโจทย์สมมติที่ไม่มีความหมาย ทุกโปรแกรมของเรารากฐานมาจากวิธีคิดแบบผู้ประกอบการและกลยุทธ์ในโลกจริง เพื่อให้มั่นใจว่าประสบการณ์การเรียนรู้นี้จะสร้างผลลัพธ์ที่จับต้องได้และมีความหมายต่อการทำงานของคุณที่สุด" },
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
