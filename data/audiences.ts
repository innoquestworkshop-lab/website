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
      body: "Tired of sitting and listening? Us too. Come build, create, and solve real challenges alongside other curious kids.No textbooks.No boring lectures.  Just you, your ideas, and your team.",
      link: { text: "See student programs", href: "/programs" },
      bullets: ["Real challenges", "Team-based", "No textbooks"],
      imgCaption: "// photo: students high-fiving over prototype on table, sticky notes everywhere.",
      img: "/images/events/entre-1-090.jpg",
    },
    {
      id: "school",
      tab: "For Schools",
      title: "School & institution programs",
      body: "From one-day workshops to semester-long journeys. Our learning designers align with your curriculum, teachers, and academic calendar — so programs enhance what you already do.",
      link: { text: "Explore Possibilities", href: "/schools" },
      bullets: ["Curriculum-aligned", "Teacher onboarding", "Semester-friendly"],
      imgCaption: "// photo: classroom shot — teacher + facilitator working with students at desks arranged in clusters.",
      img: "/images/events/ac-w4-001.jpg",
    },
    {
      id: "corp",
      tab: "For Corporates & CSR",
      title: "Corporate & CSR programs",
      body: "Partner with InnoQuest to deliver meaningful youth development under your CSR strategy. We design, facilitate, and produce impact reports. Your team gets a compelling story — the kids get life-changing skills.",
      link: { text: "Explore Possibilities", href: "/corporates" },
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
      body: "เบื่อนั่งฟังการบรรยายแล้วใช่ไหม? เราก็เหมือนกัน มาสร้าง สร้างสรรค์ และแก้ปัญหาจริงๆ ร่วมกับเพื่อนที่อยากรู้อยากเห็นเหมือนกัน ไม่มีตำราเรียน ไม่มีบรรยายน่าเบื่อ มีแค่คุณ ไอเดียของคุณ และทีมของคุณ",
      link: { text: "ดูโปรแกรมสำหรับนักเรียน", href: "/programs" },
      bullets: ["ความท้าทายจริง", "ทำงานเป็นทีม", "ไม่มีตำรา"],
      imgCaption: "// photo: students high-fiving over prototype on table, sticky notes everywhere.",
      img: "/images/events/entre-1-090.jpg",
    },
    {
      id: "school",
      tab: "สำหรับโรงเรียน",
      title: "โปรแกรมสำหรับโรงเรียนและสถาบัน",
      body: "ตั้งแต่เวิร์กชอปหนึ่งวันจนถึงการเดินทางยาวนานหนึ่งภาคเรียน นักออกแบบการเรียนรู้ของเราปรับตัวให้เข้ากับหลักสูตร ครู และปฏิทินการศึกษาของคุณ เพื่อให้โปรแกรมเสริมสิ่งที่คุณทำอยู่แล้ว",
      link: { text: "สำรวจความเป็นไปได้", href: "/schools" },
      bullets: ["สอดคล้องกับหลักสูตร", "อบรมครูผู้สอน", "เหมาะกับตาราง"],
      imgCaption: "// photo: classroom shot — teacher + facilitator working with students at desks arranged in clusters.",
      img: "/images/events/ac-w4-001.jpg",
    },
    {
      id: "corp",
      tab: "สำหรับองค์กรและ CSR",
      title: "โปรแกรมองค์กรและ CSR",
      body: "ร่วมงานกับ InnoQuest เพื่อส่งมอบการพัฒนาเยาวชนที่มีความหมายภายใต้กลยุทธ์ CSR ของคุณ เราออกแบบ อำนวยความสะดวก และจัดทำรายงานผลกระทบ ทีมของคุณได้เรื่องราวที่น่าประทับใจ เด็กๆ ได้ทักษะที่เปลี่ยนชีวิต",
      link: { text: "สำรวจความเป็นไปได้", href: "/corporates" },
      bullets: ["รายงานผลกระทบ", "ผลลัพธ์ที่มีแบรนด์", "ออกแบบ CSR เฉพาะ"],
      imgCaption: "// photo: corporate team observing kids workshop, two CSR leads smiling. Wide. Daylight.",
      img: "/images/events/price-war-067.jpg",
    },
  ],
};

export const audienceCards = {
  en: [
    { label: "Schools & Institutions", body: "Programs that align with your curriculum and calendar, designed alongside your teachers, not on top of them.", href: "/schools", cta: "Learn more" },
    { label: "Corporates & CSR", body: "Turn your CSR budget into a story worth telling. We handle everything — your team shows up, the kids leave with real skills.", href: "/corporates", cta: "Learn more" },
    { label: "Parents & Families", body: "Give your child the skills that formal education doesn't prioritise — creativity, confidence, and critical thinking.", href: "/programs", cta: "See programs" },
    { label: "Students", body: "Come solve real problems with real teams. No textbooks. No right answers. Just you, your ideas, and a challenge worth tackling.", href: "/programs", cta: "See programs" },
  ],
  th: [
    { label: "โรงเรียนและสถาบัน", body: "โปรแกรมที่สอดคล้องกับหลักสูตรและปฏิทินของคุณ ออกแบบร่วมกับครูของคุณ ไม่ใช่แทรกแซงพวกเขา", href: "/schools", cta: "เรียนรู้เพิ่มเติม" },
    { label: "องค์กรและ CSR", body: "เปลี่ยนงบ CSR ของคุณให้เป็นเรื่องราวที่คุ้มค่า เราจัดการทุกอย่าง ทีมของคุณแค่มาปรากฏตัว เด็กๆ กลับไปพร้อมทักษะจริง", href: "/corporates", cta: "เรียนรู้เพิ่มเติม" },
    { label: "ผู้ปกครองและครอบครัว", body: "ให้ลูกของคุณได้ทักษะที่การศึกษาในระบบไม่ได้ให้ความสำคัญ ทั้งความคิดสร้างสรรค์ ความมั่นใจ และการคิดเชิงวิพากษ์", href: "/programs", cta: "ดูโปรแกรม" },
    { label: "นักเรียน", body: "มาแก้ปัญหาจริงกับทีมจริง ไม่มีตำรา ไม่มีคำตอบที่ถูกหรือผิด มีแค่คุณ ไอเดียของคุณ และความท้าทายที่คุ้มค่า", href: "/programs", cta: "ดูโปรแกรม" },
  ],
} as const;

export const audienceSwitcherHeading = {
  en: { eyebrow: "▸ Find your fit", heading: "I'm looking for programs" },
  th: { eyebrow: "▸ เลือกที่เหมาะกับคุณ", heading: "ฉันกำลังมองหาโปรแกรม" },
} as const;
