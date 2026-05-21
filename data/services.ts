export type ServiceItem = {
  title: string;
  body: string;
};

export const servicesPage = {
  en: {
    meta: {
      title: "Services | InnoQuest — Design, Delivery & Talent",
      description: "InnoQuest offers two core service pillars: Content, Game Design & Licensing, and Delivery, Coordination & Talent.",
    },
    hero: {
      eyebrow: "Our Services",
      heading: "Two ways to transform learning.",
      sub: "Whether you want to build your own learning ecosystem or hand it to us to run — we have the service model to match.",
    },
    nav: {
      designAnchor: { label: "Content, Game Design & Licensing", href: "#design" },
      deliveryAnchor: { label: "Delivery, Coordination & Talent", href: "#delivery" },
    },
    design: {
      eyebrow: "Service 01",
      heading: "Content, Game Design & Licensing",
      sub: "Build your own ecosystem using our battle-tested IP. We help you architect a curriculum from scratch that integrates innovation directly into your organisation's DNA.",
      cta: { text: "Enquire about design services →", href: "/contact" },
    },
    delivery: {
      eyebrow: "Service 02",
      heading: "Delivery, Coordination & Talent",
      sub: "Professional execution for any scale. If it relates to innovation and learning, we can deliver it.",
      cta: { text: "Enquire about event services →", href: "/contact" },
    },
  },
  th: {
    meta: {
      title: "บริการ | InnoQuest — ออกแบบ ส่งมอบ & ผู้มีความสามารถ",
      description: "InnoQuest นำเสนอสองเสาหลักบริการ: เนื้อหา การออกแบบเกม & การอนุญาต และการส่งมอบ การประสานงาน & ผู้มีความสามารถ",
    },
    hero: {
      eyebrow: "บริการของเรา",
      heading: "สองวิธีเปลี่ยนแปลงการเรียนรู้",
      sub: "ไม่ว่าคุณจะต้องการสร้างระบบนิเวศการเรียนรู้เองหรือมอบให้เราดำเนินการ — เรามีโมเดลบริการที่เหมาะสม",
    },
    nav: {
      designAnchor: { label: "เนื้อหา การออกแบบเกม & การอนุญาต", href: "#design" },
      deliveryAnchor: { label: "การส่งมอบ การประสานงาน & ผู้มีความสามารถ", href: "#delivery" },
    },
    design: {
      eyebrow: "บริการ 01",
      heading: "เนื้อหา การออกแบบเกม & การอนุญาต",
      sub: "สร้างระบบนิเวศของคุณเองโดยใช้ IP ที่ผ่านการทดสอบของเรา เราช่วยคุณออกแบบหลักสูตรตั้งแต่ต้น ที่รวมนวัตกรรมเข้ากับ DNA ขององค์กรคุณโดยตรง",
      cta: { text: "สอบถามเกี่ยวกับบริการออกแบบ →", href: "/contact" },
    },
    delivery: {
      eyebrow: "บริการ 02",
      heading: "การส่งมอบ การประสานงาน & ผู้มีความสามารถ",
      sub: "การดำเนินงานระดับมืออาชีพสำหรับทุกขนาด หากเกี่ยวข้องกับนวัตกรรมและการเรียนรู้ เราสามารถส่งมอบได้",
      cta: { text: "สอบถามเกี่ยวกับบริการงาน →", href: "/contact" },
    },
  },
} as const;

export const designServices: Record<"en" | "th", ServiceItem[]> = {
  en: [
    { title: "Custom Game Design", body: "We build tailored simulations according to your needs and requirements, where every mechanic teaches real-world skills through lived experience." },
    { title: "In-House Product IP Licensing", body: "You can license our battle-tested game formats and IP to run sessions in-house with your own team. These tools are proven across hundreds of participants to ensure they deliver high-impact results every time." },
    { title: "Learning Journey Development", body: "We architect full paths that take students from their first introduction to complete mastery. Whether we are building from a blank canvas or integrating with your existing curriculum, we create a journey that truly sticks." },
  ],
  th: [
    { title: "ออกแบบเกมเฉพาะ", body: "เราสร้างการจำลองที่ปรับแต่งตามความต้องการของคุณ ที่ทุกกลไกสอนทักษะในโลกแห่งความเป็นจริงผ่านประสบการณ์จริง" },
    { title: "การอนุญาต IP ผลิตภัณฑ์ภายในองค์กร", body: "คุณสามารถอนุญาต IP รูปแบบเกมที่ผ่านการทดสอบของเราเพื่อดำเนินเซสชันภายในองค์กรด้วยทีมของคุณเอง เครื่องมือเหล่านี้ผ่านการพิสูจน์กับผู้เข้าร่วมหลายร้อยคน" },
    { title: "การพัฒนาเส้นทางการเรียนรู้", body: "เราออกแบบเส้นทางเต็มรูปแบบที่พาผู้เรียนตั้งแต่การแนะนำครั้งแรกจนถึงการเชี่ยวชาญอย่างสมบูรณ์ ไม่ว่าจะสร้างจากศูนย์หรือรวมกับหลักสูตรที่มีอยู่" },
  ],
};

export const deliveryServices: Record<"en" | "th", ServiceItem[]> = {
  en: [
    { title: "Camps & Workshops", body: "We facilitate everything from one day workshops to week long residential camps including all design and logistics." },
    { title: "Competitions & Hackathons", body: "We handle the full experience from initial problem design to the final awards ceremony." },
    { title: "Innovation Challenges", body: "We run structured programs for schools and companies over days or full semesters to solve real world problems." },
    { title: "Mentors & Speakers", body: "We find and brief industry experts and speakers who perfectly fit your theme and audience." },
    { title: "Event Management", body: "We take care of venue sourcing and on site coordination so you can just show up while we run the show." },
    { title: "Curriculum & Course Hours", body: "We design custom course hours for your goals delivered by our facilitators or your own team." },
  ],
  th: [
    { title: "ค่ายและเวิร์กชอป", body: "เราอำนวยความสะดวกทุกอย่างตั้งแต่เวิร์กชอปหนึ่งวันจนถึงค่ายพักแรมหนึ่งสัปดาห์ รวมถึงการออกแบบและโลจิสติกส์ทั้งหมด" },
    { title: "การแข่งขันและแฮ็กกาธอน", body: "เราจัดการประสบการณ์ทั้งหมดตั้งแต่การออกแบบปัญหาเริ่มต้นจนถึงพิธีมอบรางวัลขั้นสุดท้าย" },
    { title: "ความท้าทายด้านนวัตกรรม", body: "เราดำเนินโปรแกรมที่มีโครงสร้างสำหรับโรงเรียนและบริษัทในช่วงหลายวันหรือทั้งภาคเรียนเพื่อแก้ปัญหาโลกแห่งความเป็นจริง" },
    { title: "ที่ปรึกษาและวิทยากร", body: "เราหาและอบรมผู้เชี่ยวชาญในอุตสาหกรรมและวิทยากรที่เหมาะสมกับธีมและกลุ่มเป้าหมายของคุณอย่างสมบูรณ์แบบ" },
    { title: "การจัดงาน", body: "เราดูแลการหาสถานที่และการประสานงานในสถานที่เพื่อให้คุณแค่ปรากฏตัวในขณะที่เราดำเนินการแสดง" },
    { title: "หลักสูตรและชั่วโมงการเรียน", body: "เราออกแบบชั่วโมงการเรียนเฉพาะสำหรับเป้าหมายของคุณ โดยวิทยากรของเราหรือทีมของคุณเอง" },
  ],
};
