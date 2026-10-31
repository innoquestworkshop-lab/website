export type AudienceTab = {
  id: string;
  tab: string;
  title: string;
  body: string;
  link: { text: string; href: string };
  bullets: string[];
  imgCaption: string;
  img?: string;
};

export const audienceTabs: Record<"en" | "th", AudienceTab[]> = {
  en: [
    {
      id: "student",
      tab: "For Students",
      title: "Hey, Students!",
      body: "Tired of sitting and listening? Us too. Come build, create, and solve real challenges alongside other curious kids. No textbooks. No boring lectures. Just you, your ideas, and your team.",
      link: { text: "See student programs", href: "/programs" },
      bullets: ["Real challenges", "Team-based", "No textbooks"],
      imgCaption: "// photo: students high-fiving over prototype on table, sticky notes everywhere.",
      img: "/images/events/entre-1-090.jpg",
    },
    {
      id: "school",
      tab: "For Schools",
      title: "School & institution programs",
      body: "From one-day workshops to semester-long programs. Our learning designers align with your curriculum, teachers, and academic calendar, so programs enhance what you already do.",
      link: { text: "See school programs", href: "/schools" },
      bullets: ["Curriculum-aligned", "Teacher onboarding", "Semester-friendly"],
      imgCaption: "// photo: classroom shot — teacher + facilitator working with students at desks arranged in clusters.",
      img: "/images/events/ac-w4-001.jpg",
    },
    {
      id: "corp",
      tab: "For Corporates & CSR",
      title: "Corporate & CSR programs",
      body: "Partner with InnoQuest to run youth development programs under your CSR strategy. We design, facilitate, and produce impact reports. Your team gets a story worth telling. The kids get real skills.",
      link: { text: "See CSR programs", href: "/corporates" },
      bullets: ["Impact reports", "Branded outcomes", "Custom CSR design"],
      imgCaption: "// photo: corporate team observing kids workshop, two CSR leads smiling. Wide. Daylight.",
      img: "/images/events/price-war-067.jpg",
    },
  ],
  th: [
    {
      id: "student",
      tab: "สำหรับนักเรียน",
      title: "ยินดีต้อนรับนักเรียนทุกคน",
      body: "InnoQuest เปิดโอกาสให้นักเรียนลงมือสร้างสรรค์และแก้โจทย์จริงร่วมกับเพื่อนที่มีความใฝ่รู้ การเรียนรู้เกิดจากการปฏิบัติจริง โดยมีนักเรียน แนวคิดของนักเรียน และทีมเป็นศูนย์กลาง",
      link: { text: "ดูโปรแกรมสำหรับนักเรียน", href: "/programs" },
      bullets: ["โจทย์จริง", "การทำงานเป็นทีม", "การเรียนรู้จากการปฏิบัติจริง"],
      imgCaption: "// photo: students high-fiving over prototype on table, sticky notes everywhere.",
      img: "/images/events/entre-1-090.jpg",
    },
    {
      id: "school",
      tab: "สำหรับโรงเรียน",
      title: "โปรแกรมสำหรับโรงเรียนและสถาบัน",
      body: "ตั้งแต่การอบรมเชิงปฏิบัติการ 1 วันจนถึงโปรแกรมตลอดภาคเรียน ทีมออกแบบการเรียนรู้ของ InnoQuest ทำงานให้สอดคล้องกับหลักสูตร คุณครู และปฏิทินการศึกษาของโรงเรียน เพื่อส่งเสริมการเรียนการสอนของโรงเรียน",
      link: { text: "ดูโปรแกรมสำหรับโรงเรียน", href: "/schools" },
      bullets: ["สอดคล้องกับหลักสูตร", "การเตรียมความพร้อมคุณครู", "เหมาะสมกับภาคเรียน"],
      imgCaption: "// photo: classroom shot — teacher + facilitator working with students at desks arranged in clusters.",
      img: "/images/events/ac-w4-001.jpg",
    },
    {
      id: "corp",
      tab: "สำหรับองค์กรและ CSR",
      title: "โปรแกรมสำหรับองค์กรและ CSR",
      body: "InnoQuest ร่วมกับองค์กรดำเนินโปรแกรมพัฒนาเยาวชนภายใต้กลยุทธ์ CSR ครอบคลุมการออกแบบ การดำเนินกิจกรรม และการจัดทำรายงานสรุปผลการดำเนินงาน องค์กรได้เรื่องราวที่ควรค่าแก่การเผยแพร่ เยาวชนได้ทักษะที่นำไปใช้ได้จริง",
      link: { text: "ดูโปรแกรม CSR", href: "/corporates" },
      bullets: ["รายงานสรุปผลการดำเนินงาน", "ผลลัพธ์ในนามแบรนด์", "การออกแบบ CSR เฉพาะองค์กร"],
      imgCaption: "// photo: corporate team observing kids workshop, two CSR leads smiling. Wide. Daylight.",
      img: "/images/events/price-war-067.jpg",
    },
  ],
};

export const audienceCards = {
  en: [
    { label: "Schools & Institutions", body: "Programs that align with your curriculum and calendar, designed alongside your teachers, not on top of them.", href: "/schools", cta: "Learn more" },
    { label: "Corporates & CSR", body: "Turn your CSR budget into a story worth telling. We handle everything. Your team shows up, and the kids leave with real skills.", href: "/corporates", cta: "Learn more" },
    { label: "Parents & Families", body: "Give your child the skills that formal education doesn't prioritise: creativity, confidence, and critical thinking.", href: "/programs", cta: "See programs" },
    { label: "Students", body: "Come solve real problems with real teams. No textbooks. No right answers. Just you, your ideas, and a challenge worth tackling.", href: "/programs", cta: "See programs" },
  ],
  th: [
    { label: "โรงเรียนและสถาบัน", body: "โปรแกรมที่สอดคล้องกับหลักสูตรและปฏิทินของโรงเรียน ออกแบบร่วมกับคุณครู", href: "/schools", cta: "ดูรายละเอียด" },
    { label: "องค์กรและ CSR", body: "InnoQuest ดูแลการดำเนินงานทั้งหมด เพื่อให้งบประมาณ CSR เกิดเป็นเรื่องราวที่ควรค่าแก่การเผยแพร่ ทีมขององค์กรเข้าร่วมกิจกรรม เยาวชนได้ทักษะที่นำไปใช้ได้จริง", href: "/corporates", cta: "ดูรายละเอียด" },
    { label: "ผู้ปกครองและครอบครัว", body: "ส่งเสริมบุตรหลานให้พัฒนาทักษะเพิ่มเติมจากการศึกษาในระบบ ได้แก่ ความคิดสร้างสรรค์ ความมั่นใจ และการคิดเชิงวิพากษ์", href: "/programs", cta: "ดูโปรแกรมทั้งหมด" },
    { label: "นักเรียน", body: "ร่วมแก้ปัญหาจริงเป็นทีม การเรียนรู้เกิดจากการปฏิบัติ ไม่ยึดคำตอบตายตัว โดยมีนักเรียน แนวคิดของนักเรียน และโจทย์ที่ท้าทายเป็นศูนย์กลาง", href: "/programs", cta: "ดูโปรแกรมทั้งหมด" },
  ],
} as const;

export const audienceSwitcherHeading = {
  en: { eyebrow: "▸ Find your fit", heading: "I'm looking for programs" },
  th: { eyebrow: "▸ เลือกโปรแกรมที่เหมาะสม", heading: "กำลังมองหาโปรแกรม" },
} as const;
