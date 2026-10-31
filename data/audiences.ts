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
      title: "นักเรียน มาทางนี้!",
      body: "นั่งฟังจนเบื่อแล้วใช่ไหม? เราก็เหมือนกัน มาลงมือสร้าง คิดงานใหม่ๆ และแก้โจทย์จริงกับเพื่อนที่ขี้สงสัยเหมือนกัน ไม่มีตำราเรียน ไม่มีบรรยายน่าเบื่อ มีแค่คุณ ไอเดียของคุณ และทีมของคุณ",
      link: { text: "ดูโปรแกรมสำหรับนักเรียน", href: "/programs" },
      bullets: ["โจทย์จริง", "ทำงานเป็นทีม", "ไม่มีตำรา"],
      imgCaption: "// photo: students high-fiving over prototype on table, sticky notes everywhere.",
      img: "/images/events/entre-1-090.jpg",
    },
    {
      id: "school",
      tab: "สำหรับโรงเรียน",
      title: "โปรแกรมสำหรับโรงเรียนและสถาบัน",
      body: "ตั้งแต่เวิร์กชอปวันเดียวจนถึงโปรแกรมเต็มภาคเรียน ทีมออกแบบการเรียนรู้ของเราปรับตามหลักสูตร ครู และปฏิทินการศึกษาของโรงเรียน เพื่อให้โปรแกรมต่อยอดสิ่งที่โรงเรียนทำอยู่แล้ว",
      link: { text: "ดูโปรแกรมสำหรับโรงเรียน", href: "/schools" },
      bullets: ["สอดคล้องกับหลักสูตร", "เตรียมความพร้อมครู", "ลงตัวกับภาคเรียน"],
      imgCaption: "// photo: classroom shot — teacher + facilitator working with students at desks arranged in clusters.",
      img: "/images/events/ac-w4-001.jpg",
    },
    {
      id: "corp",
      tab: "สำหรับองค์กรและ CSR",
      title: "โปรแกรมองค์กรและ CSR",
      body: "ร่วมกับ InnoQuest จัดโปรแกรมพัฒนาเยาวชนภายใต้กลยุทธ์ CSR ขององค์กร เราออกแบบ ดำเนินกิจกรรม และจัดทำรายงานผลลัพธ์ ทีมของคุณได้เรื่องดีๆ ไว้เล่าต่อ เด็กๆ ได้ทักษะจริงติดตัวไป",
      link: { text: "ดูโปรแกรม CSR", href: "/corporates" },
      bullets: ["รายงานผลลัพธ์", "ผลลัพธ์ในนามแบรนด์", "ออกแบบ CSR เฉพาะองค์กร"],
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
    { label: "โรงเรียนและสถาบัน", body: "โปรแกรมที่สอดคล้องกับหลักสูตรและปฏิทินของโรงเรียน ออกแบบร่วมกับครู ไม่ใช่ข้ามหัวครู", href: "/schools", cta: "เรียนรู้เพิ่มเติม" },
    { label: "องค์กรและ CSR", body: "เปลี่ยนงบ CSR ให้เป็นเรื่องที่น่าเล่าต่อ เราจัดการให้ทุกอย่าง ทีมของคุณแค่มาร่วมงาน เด็กๆ กลับไปพร้อมทักษะจริง", href: "/corporates", cta: "เรียนรู้เพิ่มเติม" },
    { label: "ผู้ปกครองและครอบครัว", body: "ให้ลูกได้ฝึกทักษะที่การเรียนในระบบไม่ค่อยเน้น ทั้งความคิดสร้างสรรค์ ความมั่นใจ และการคิดเชิงวิพากษ์", href: "/programs", cta: "ดูโปรแกรม" },
    { label: "นักเรียน", body: "มาแก้ปัญหาจริงกับทีมจริง ไม่มีตำรา ไม่มีคำตอบตายตัว มีแค่คุณ ไอเดียของคุณ และโจทย์ที่น่าลุย", href: "/programs", cta: "ดูโปรแกรม" },
  ],
} as const;

export const audienceSwitcherHeading = {
  en: { eyebrow: "▸ Find your fit", heading: "I'm looking for programs" },
  th: { eyebrow: "▸ เลือกที่เหมาะกับคุณ", heading: "กำลังมองหาโปรแกรม" },
} as const;
