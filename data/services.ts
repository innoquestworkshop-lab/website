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
      title: "บริการ | InnoQuest: ออกแบบ จัดงาน และทีมวิทยากร",
      description: "InnoQuest มีบริการหลักสองด้าน คือเนื้อหา ออกแบบเกม และไลเซนส์ กับจัดงาน ประสานงาน และทีมวิทยากร",
    },
    hero: {
      eyebrow: "บริการของเรา",
      heading: "ทำงานกับเราได้สองแบบ",
      sub: "จะสร้างโปรแกรมการเรียนรู้ของคุณเองจาก IP ของเรา หรือจะยกให้เราจัดการทั้งหมดเลยก็ได้",
    },
    nav: {
      designAnchor: { label: "เนื้อหา ออกแบบเกม และไลเซนส์", href: "#design" },
      deliveryAnchor: { label: "จัดงาน ประสานงาน และทีมวิทยากร", href: "#delivery" },
    },
    design: {
      eyebrow: "บริการ 01",
      heading: "เนื้อหา ออกแบบเกม และไลเซนส์",
      sub: "สร้างโปรแกรมการเรียนรู้ของคุณเองจาก IP ของเราที่ผ่านสนามจริงมาแล้ว เราช่วยออกแบบหลักสูตรตั้งแต่ศูนย์ ให้นวัตกรรมกลายเป็นส่วนหนึ่งของวิธีทำงานในองค์กรคุณ",
      cta: { text: "สอบถามบริการออกแบบ →", href: "/contact" },
    },
    delivery: {
      eyebrow: "บริการ 02",
      heading: "จัดงาน ประสานงาน และทีมวิทยากร",
      sub: "งานเล็กหรืองานใหญ่ เราจัดได้หมด ขอแค่เกี่ยวกับนวัตกรรมและการเรียนรู้",
      cta: { text: "สอบถามบริการจัดงาน →", href: "/contact" },
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
    { title: "ออกแบบเกมตามโจทย์", body: "เราสร้างเกมจำลองตามโจทย์ของคุณ ทุกกลไกในเกมสอนทักษะที่ใช้ได้จริงผ่านการลงมือทำ" },
    { title: "ไลเซนส์ IP ไปใช้ในองค์กร", body: "รับไลเซนส์รูปแบบเกมของเราที่พิสูจน์แล้วว่าได้ผล แล้วจัดเซสชันในองค์กรด้วยทีมของคุณเอง" },
    { title: "พัฒนาเส้นทางการเรียนรู้", body: "เราปั้นนักเรียนตั้งแต่พื้นฐาน จะเริ่มจากศูนย์หรือต่อยอดจากหลักสูตรเดิมของคุณก็ได้ แล้วเราจะออกแบบเส้นทางที่อยู่กับผู้เรียนไปอีกนาน" },
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
    { title: "ค่ายและเวิร์กชอป", body: "ตั้งแต่เวิร์กชอปวันเดียวไปจนถึงค่ายค้างคืนหนึ่งสัปดาห์ เราดูแลครบทั้งออกแบบ โลจิสติกส์ การดำเนินกิจกรรม และรายงานหลังจบโปรแกรม" },
    { title: "การแข่งขันและแฮ็กกาธอน", body: "เราจัดการแข่งขันให้ครบวงจร ทั้งออกแบบโจทย์ วางเกณฑ์การตัดสิน โปรดักชันงาน และดูแลผู้เข้าร่วมตั้งแต่ลงทะเบียนจนถึงรับรางวัล" },
    { title: "ชาเลนจ์ด้านนวัตกรรม", body: "โปรแกรมชาเลนจ์ที่วางโครงมาแล้วสำหรับโรงเรียนและบริษัท จัดได้ตั้งแต่ไม่กี่วัน หลายสัปดาห์ ไปจนถึงทั้งเทอม โจทย์จริง เดิมพันจริง" },
    { title: "ที่ปรึกษาและวิทยากร", body: "เราคัดและบรีฟผู้เชี่ยวชาญเฉพาะด้าน คนทำงานจริงในวงการ และวิทยากรคีย์โน้ต ให้ตรงกับธีมโปรแกรมและระดับของผู้เข้าร่วม" },
    { title: "จัดอีเวนต์", body: "ดูแลโปรดักชันครบ ทั้งหาสถานที่ โลจิสติกส์ ระบบภาพและเสียง อาหาร แบรนดิง และประสานงานหน้างาน คุณแค่มา ที่เหลือเราจัดการเอง" },
    { title: "ชั่วโมงเรียนและหลักสูตร", body: "ชั่วโมงเรียนจะมีการรับรองหรือไม่ก็ได้ ออกแบบตามเป้าหมายการเรียนรู้ของคุณ สอนโดยวิทยากรที่เราฝึกมาเอง หรือเตรียมไว้ให้ทีมของคุณสอนเอง" },
  ],
};
