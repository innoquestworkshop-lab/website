export type ServiceItem = {
  title: string;
  body: string;
};

export const servicesPage = {
  en: {
    meta: {
      title: "Services | InnoQuest: Design, Delivery & Talent",
      description: "InnoQuest offers two services: Content, Game Design & Licensing, and Delivery, Coordination & Talent.",
    },
    hero: {
      eyebrow: "Our Services",
      heading: "Two ways to work with us.",
      sub: "Build your own learning program on our IP, or hand the whole thing to us to run.",
    },
    nav: {
      designAnchor: { label: "Content, Game Design & Licensing", href: "#design" },
      deliveryAnchor: { label: "Delivery, Coordination & Talent", href: "#delivery" },
    },
    design: {
      eyebrow: "Service 01",
      heading: "Content, Game Design & Licensing",
      sub: "Build your own learning program using our battle-tested IP. We help you design a curriculum from scratch that builds innovation into how your organisation works.",
      cta: { text: "Enquire about design services →", href: "/contact" },
    },
    delivery: {
      eyebrow: "Service 02",
      heading: "Delivery, Coordination & Talent",
      sub: "We run programs of any size. If it relates to innovation and learning, we can deliver it.",
      cta: { text: "Enquire about event services →", href: "/contact" },
    },
  },
  th: {
    meta: {
      title: "บริการ | InnoQuest: การออกแบบ การดำเนินงาน และทีมวิทยากร",
      description: "InnoQuest ให้บริการหลักสองด้าน ได้แก่ ด้านเนื้อหา การออกแบบเกม และการอนุญาตให้ใช้สิทธิ์ และด้านการดำเนินงาน การประสานงาน และทีมวิทยากร",
    },
    hero: {
      eyebrow: "บริการของ InnoQuest",
      heading: "สองแนวทางในการร่วมงานกับ InnoQuest",
      sub: "องค์กรสามารถพัฒนาโปรแกรมการเรียนรู้ของตนเองจากทรัพย์สินทางปัญญาของ InnoQuest หรือมอบหมายให้ InnoQuest ดำเนินงานทั้งหมด",
    },
    nav: {
      designAnchor: { label: "การออกแบบและการอนุญาตให้ใช้สิทธิ์", href: "#design" },
      deliveryAnchor: { label: "การดำเนินงานและทีมวิทยากร", href: "#delivery" },
    },
    design: {
      eyebrow: "บริการ 01",
      heading: "เนื้อหา การออกแบบเกม และการอนุญาตให้ใช้สิทธิ์",
      sub: "องค์กรสามารถพัฒนาโปรแกรมการเรียนรู้ของตนเองจากทรัพย์สินทางปัญญาของ InnoQuest ซึ่งผ่านการใช้งานจริงแล้ว InnoQuest ร่วมออกแบบหลักสูตรตั้งแต่เริ่มต้น เพื่อให้นวัตกรรมเป็นส่วนหนึ่งของการทำงานในองค์กร",
      cta: { text: "สอบถามข้อมูลบริการออกแบบ →", href: "/contact" },
    },
    delivery: {
      eyebrow: "บริการ 02",
      heading: "การดำเนินงาน การประสานงาน และทีมวิทยากร",
      sub: "InnoQuest ดำเนินโปรแกรมได้ทุกขนาด ในทุกงานที่เกี่ยวข้องกับนวัตกรรมและการเรียนรู้",
      cta: { text: "สอบถามข้อมูลบริการดำเนินงาน →", href: "/contact" },
    },
  },
} as const;

export const designServices: Record<"en" | "th", ServiceItem[]> = {
  en: [
    { title: "Custom Game Design", body: "We build simulations around your brief, where every mechanic teaches real-world skills by doing." },
    { title: "In-House Product IP Licensing", body: "License our proven formats and run the sessions in-house with your own team." },
    { title: "Learning Journey Development", body: "We develop students from the ground up. Start from a blank canvas or plug into your existing curriculum, and we'll build a journey that sticks." },
  ],
  th: [
    { title: "การออกแบบเกมเฉพาะ", body: "InnoQuest ออกแบบการจำลองสถานการณ์ทางธุรกิจตามความต้องการของลูกค้า ทุกกลไกในเกมมุ่งพัฒนาทักษะที่นำไปใช้ได้ ผ่านการเรียนรู้จากการปฏิบัติจริง" },
    { title: "การอนุญาตให้ใช้สิทธิ์ทรัพย์สินทางปัญญาภายในองค์กร", body: "องค์กรสามารถขอรับอนุญาตให้ใช้สิทธิ์ในรูปแบบกิจกรรมของ InnoQuest ที่ผ่านการพิสูจน์ผลแล้ว และดำเนินกิจกรรมภายในองค์กรโดยทีมงานของตนเอง" },
    { title: "การพัฒนาเส้นทางการเรียนรู้", body: "InnoQuest พัฒนาศักยภาพนักเรียนตั้งแต่พื้นฐาน โดยสามารถเริ่มต้นใหม่หรือต่อยอดจากหลักสูตรเดิม เพื่อสร้างเส้นทางการเรียนรู้ที่ผู้เรียนนำไปใช้ได้อย่างต่อเนื่อง" },
  ],
};

export const deliveryServices: Record<"en" | "th", ServiceItem[]> = {
  en: [
    { title: "Camps & Workshops", body: "Full-service facilitation for single-day workshops up to week-long residential camps. We handle design, logistics, facilitation, and post-program reporting." },
    { title: "Competitions & Hackathons", body: "We organise competitions end to end: problem design, judging frameworks, event production, and participant experience from registration to awards." },
    { title: "Innovation Challenges", body: "Structured challenge programs for schools and corporates that run over days, weeks, or a full semester. Real problems, real stakes." },
    { title: "Mentor & Speaker Services", body: "We source and brief domain experts, industry practitioners, and keynote speakers matched to your program's theme and participant level." },
    { title: "Event Organising", body: "Full production management: venue sourcing, logistics, AV, catering, branding, and on-the-day coordination. You show up, we run it." },
    { title: "Course Hours & Curriculum", body: "Accredited or non-accredited course hours designed around your learning objectives, delivered by our trained facilitators or prepared for your own team." },
  ],
  th: [
    { title: "ค่ายการเรียนรู้และเวิร์กช็อป", body: "InnoQuest ให้บริการครบวงจร ตั้งแต่การอบรมเชิงปฏิบัติการหนึ่งวันจนถึงค่ายการเรียนรู้แบบพักค้างหนึ่งสัปดาห์ ครอบคลุมการออกแบบ โลจิสติกส์ การดำเนินกิจกรรม และการรายงานผลหลังจบโปรแกรม" },
    { title: "การแข่งขันและแฮ็กกาธอน", body: "InnoQuest จัดการแข่งขันครบทุกขั้นตอน ได้แก่ การออกแบบโจทย์ การกำหนดเกณฑ์การตัดสิน การผลิตงาน และการดูแลผู้เข้าร่วมตั้งแต่การลงทะเบียนจนถึงการมอบรางวัล" },
    { title: "โปรแกรมโจทย์ท้าทายด้านนวัตกรรม", body: "โปรแกรมที่มีโครงสร้างชัดเจนสำหรับโรงเรียนและองค์กร มีระยะเวลาตั้งแต่หลายวัน หลายสัปดาห์ จนถึงหนึ่งภาคการศึกษา โดยใช้โจทย์และเงื่อนไขจากสถานการณ์จริง" },
    { title: "บริการที่ปรึกษาและวิทยากรรับเชิญ", body: "InnoQuest คัดเลือกและเตรียมความพร้อมผู้เชี่ยวชาญเฉพาะด้าน ผู้ปฏิบัติงานในอุตสาหกรรม และวิทยากรรับเชิญ ให้สอดคล้องกับหัวข้อของโปรแกรมและระดับของผู้เข้าร่วม" },
    { title: "การจัดงาน", body: "InnoQuest บริหารจัดการงานอย่างครบวงจร ครอบคลุมการจัดหาสถานที่ โลจิสติกส์ ระบบภาพและเสียง อาหาร การสร้างภาพลักษณ์ของงาน และการประสานงานในวันจริง เพื่อให้ลูกค้าเข้าร่วมงานได้อย่างราบรื่น" },
    { title: "ชั่วโมงเรียนและหลักสูตร", body: "ชั่วโมงเรียนทั้งแบบมีการรับรองและไม่มีการรับรอง ออกแบบตามวัตถุประสงค์การเรียนรู้ของลูกค้า สอนโดยวิทยากรที่ผ่านการฝึกอบรมจาก InnoQuest หรือจัดเตรียมให้ทีมงานของลูกค้าเป็นผู้สอน" },
  ],
};
