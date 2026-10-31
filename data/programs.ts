export type Program = {
  slug: string;
  name: string;
  tagline: string;
  duration: string;
  ages: string;
  groupSize: string;
  format: string;
  description: string;
  featured?: boolean;
  comingSoon?: boolean;
  heroImg?: string;
  heroImgPosition?: string;
  heroImgScale?: number;
  heroImgBlur?: number;
  audiences: ("corporate" | "school" | "parent" | "student")[];
  outcomes: { icon: string; title: string; description: string }[];
  methodPillars: (1 | 2 | 3 | 4)[];
};

const programsEn: Program[] = [
  {
    slug: "the-change-lab",
    name: "The Change Lab",
    heroImg: "/images/events/change-lab-9142.jpg",
    heroImgBlur: 1,
    comingSoon: true,
    tagline: "Impact that Works.",
    duration: "",
    ages: "",
    groupSize: "",
    format: "",
    description:
      "Students play sustainability consultants who have to turn big ideas into something that works in the real world. Teams research, prototype, and play our custom-built board game, which pits social impact against commercial feasibility. Every move has a consequence, so teams must work out how their solutions survive in a competitive market. It ends in a high-energy battle for the board, and only the most viable ideas win.",
    audiences: ["school", "corporate"],
    outcomes: [
      { icon: "leaf", title: "ESG literacy", description: "Understanding environmental, social, and governance issues" },
      { icon: "bulb", title: "Systems thinking", description: "Seeing how decisions ripple through ecosystems, communities, and economies" },
      { icon: "presentation", title: "Sustainable innovation", description: "Designing solutions that balance impact with feasibility" },
      { icon: "chart-bar", title: "Evidence-based pitching", description: "Making the case for change with data and storytelling" },
    ],
    methodPillars: [1, 2, 3, 4],
  },
  {
    slug: "entrepreneur-in-innovation",
    name: "Entrepreneur in Innovation",
    heroImg: "/images/events/IMG_8695.jpg",
    heroImgPosition: "center 45%",
    tagline: "From the Problem & up.",
    duration: "",
    ages: "",
    groupSize: "",
    format: "",
    featured: true,
    description:
      "Students run through the full startup lifecycle, compressed into a single high-energy session. Using professional frameworks, we take teams deep into the problem and through their solution ideas until they find a true problem-solution fit. It's a race to turn a blank canvas into a validated product ready for an investor pitch. Along the way, we show students how to build a business that actually works.",
    audiences: ["school", "student", "parent"],
    outcomes: [
      { icon: "rocket", title: "Entrepreneurial mindset", description: "Opportunity recognition, calculated risk-taking, and bias toward action" },
      { icon: "users", title: "Team dynamics", description: "Roles, equity, conflict, and how high-performing teams actually work" },
      { icon: "puzzle", title: "Problem validation", description: "Researching real users before building anything" },
      { icon: "coin", title: "Business model thinking", description: "Revenue, margins, and what makes a business sustainable" },
    ],
    methodPillars: [1, 2, 3, 4],
  },
  {
    slug: "break-the-market",
    name: "Break the Market",
    heroImg: "/images/events/break-the-market-5758.jpg",
    heroImgPosition: "center 73%",
    tagline: "Disrupt an industry. Build something that doesn't exist yet.",
    duration: "",
    ages: "",
    groupSize: "",
    format: "",
    description:
      "Students act as market entry specialists running the full lifecycle of a product launch. Instead of guessing, they balance R&D budgets and risk while paying for data to analyze consumer behavior in real time. Teams hit key milestones to unlock the funding that keeps their innovation alive. It's a high-stakes race to calculate Willingness to Pay and dominate the shelf before the competition takes the lead.",
    audiences: ["school", "student", "corporate"],
    outcomes: [
      { icon: "bolt", title: "Disruptive thinking", description: "Challenging assumptions that everyone else takes for granted" },
      { icon: "trending-up", title: "Competitive strategy", description: "Understanding market dynamics, positioning, and differentiation" },
      { icon: "tool", title: "Rapid prototyping", description: "Turning ideas into tangible concepts under real time pressure" },
      { icon: "users", title: "High-stakes pitching", description: "Defending a bold idea in front of a skeptical audience" },
    ],
    methodPillars: [1, 3, 4],
  },
  {
    slug: "capital-minds",
    name: "Capital Minds",
    heroImg: "/images/events/price-war-149.jpg",
    heroImgPosition: "center 50%",
    heroImgScale: 1.15,
    tagline: "Master the Market",
    duration: "",
    ages: "",
    groupSize: "",
    format: "",
    description:
      "A simulation where students run competing businesses and make live pricing decisions in a shifting market. Each round changes the rules, forcing teams to think like CFOs, not students. The best pricing strategy wins.",
    audiences: ["school", "student", "corporate"],
    outcomes: [
      { icon: "coin", title: "Pricing strategy", description: "When to use cost-plus, value-based, or competitive pricing, and why" },
      { icon: "chart-bar", title: "Financial literacy", description: "Revenue, profit, margin, and what the numbers actually mean" },
      { icon: "arrows-exchange", title: "Market dynamics", description: "How supply, demand, and competition interact in real time" },
      { icon: "brain", title: "Decision-making under pressure", description: "Committing to a strategy when the data is incomplete and the clock is ticking" },
    ],
    methodPillars: [1, 2, 3, 4],
  },
];

const programsTh: Program[] = [
  {
    slug: "the-change-lab",
    name: "The Change Lab",
    heroImg: "/images/events/change-lab-9142.jpg",
    heroImgBlur: 1,
    comingSoon: true,
    tagline: "ผลลัพธ์เชิงบวกที่เกิดขึ้นจริง",
    duration: "",
    ages: "",
    groupSize: "",
    format: "",
    description:
      "นักเรียนรับบทบาทเป็นที่ปรึกษาด้านความยั่งยืน ซึ่งมีหน้าที่เปลี่ยนแนวคิดให้เกิดผลได้จริง แต่ละทีมศึกษาข้อมูล สร้างต้นแบบ และร่วมเล่นบอร์ดเกมที่ InnoQuest ออกแบบเฉพาะ โดยต้องชั่งน้ำหนักระหว่างผลดีต่อสังคมกับความเป็นไปได้ทางธุรกิจ ทุกการตัดสินใจมีผลที่ตามมา แต่ละทีมจึงต้องพิจารณาว่าแนวทางของตนจะดำเนินต่อไปในตลาดที่มีการแข่งขันได้อย่างไร กิจกรรมปิดท้ายด้วยการแข่งขันบนกระดาน โดยแนวคิดที่มีความเป็นไปได้มากที่สุดจะเป็นผู้ชนะ",
    audiences: ["school", "corporate"],
    outcomes: [
      { icon: "leaf", title: "ความรู้ด้าน ESG", description: "เข้าใจประเด็นด้านสิ่งแวดล้อม สังคม และธรรมาภิบาล" },
      { icon: "bulb", title: "การคิดเชิงระบบ", description: "เข้าใจว่าการตัดสินใจส่งผลต่อเนื่องถึงระบบนิเวศ ชุมชน และเศรษฐกิจอย่างไร" },
      { icon: "presentation", title: "นวัตกรรมที่ยั่งยืน", description: "ออกแบบแนวทางที่สมดุลระหว่างผลลัพธ์เชิงบวกกับความเป็นไปได้" },
      { icon: "chart-bar", title: "การนำเสนอโดยอิงหลักฐาน", description: "นำเสนอเหตุผลของการเปลี่ยนแปลงด้วยข้อมูลและการเล่าเรื่อง" },
    ],
    methodPillars: [1, 2, 3, 4],
  },
  {
    slug: "entrepreneur-in-innovation",
    name: "Entrepreneur in Innovation",
    heroImg: "/images/events/IMG_8695.jpg",
    heroImgPosition: "center 45%",
    tagline: "เริ่มต้นจากปัญหาแล้วพัฒนาต่อยอด",
    duration: "",
    ages: "",
    groupSize: "",
    format: "",
    featured: true,
    description:
      "นักเรียนได้เรียนรู้วงจรของสตาร์ทอัพครบทุกขั้นตอนภายในกิจกรรมเดียว InnoQuest นำกรอบแนวคิดระดับมืออาชีพมาใช้ เพื่อให้แต่ละทีมศึกษาปัญหาอย่างลึกซึ้งและพัฒนาแนวทางแก้ไข จนได้ problem-solution fit ที่แท้จริง แต่ละทีมเริ่มต้นจากกระดาษเปล่า และพัฒนาจนได้ผลิตภัณฑ์ที่ผ่านการทดสอบและพร้อมนำเสนอต่อนักลงทุน ตลอดกระบวนการ นักเรียนจะได้เข้าใจวิธีสร้างธุรกิจที่ดำเนินงานได้จริง",
    audiences: ["school", "student", "parent"],
    outcomes: [
      { icon: "rocket", title: "แนวคิดแบบผู้ประกอบการ", description: "มองเห็นโอกาส กล้ารับความเสี่ยงอย่างมีเหตุผล และลงมือปฏิบัติ" },
      { icon: "users", title: "พลวัตของทีม", description: "บทบาท การแบ่งส่วนความเป็นเจ้าของ ความขัดแย้ง และแนวทางการทำงานของทีมที่มีประสิทธิภาพ" },
      { icon: "puzzle", title: "การตรวจสอบปัญหา", description: "ศึกษาข้อมูลจากผู้ใช้จริงก่อนเริ่มพัฒนาผลิตภัณฑ์" },
      { icon: "coin", title: "การคิดเชิงโมเดลธุรกิจ", description: "รายได้ อัตรากำไร และปัจจัยที่ทำให้ธุรกิจดำเนินต่อไปได้อย่างยั่งยืน" },
    ],
    methodPillars: [1, 2, 3, 4],
  },
  {
    slug: "break-the-market",
    name: "Break the Market",
    heroImg: "/images/events/break-the-market-5758.jpg",
    heroImgPosition: "center 73%",
    tagline: "เปลี่ยนแปลงอุตสาหกรรม สร้างสรรค์สิ่งที่ยังไม่เคยมีมาก่อน",
    duration: "",
    ages: "",
    groupSize: "",
    format: "",
    description:
      "นักเรียนรับบทบาทเป็นผู้เชี่ยวชาญด้านการเข้าสู่ตลาด และดูแลการเปิดตัวผลิตภัณฑ์ตั้งแต่ต้นจนจบ แต่ละทีมบริหารงบประมาณวิจัยและพัฒนาควบคู่กับความเสี่ยง พร้อมลงทุนซื้อข้อมูลเพื่อวิเคราะห์พฤติกรรมผู้บริโภคแบบเรียลไทม์แทนการคาดเดา เมื่อบรรลุเป้าหมายในแต่ละขั้น ทีมจะได้รับเงินทุนเพื่อพัฒนานวัตกรรมต่อไป ทุกทีมแข่งขันกันคำนวณ Willingness to Pay และครองพื้นที่บนชั้นวางสินค้าก่อนคู่แข่ง",
    audiences: ["school", "student", "corporate"],
    outcomes: [
      { icon: "bolt", title: "การคิดเชิงพลิกโฉม", description: "ตั้งคำถามกับสมมติฐานที่ผู้อื่นยอมรับโดยไม่ได้ทบทวน" },
      { icon: "trending-up", title: "กลยุทธ์การแข่งขัน", description: "เข้าใจกลไกตลาด การวางตำแหน่ง และการสร้างความแตกต่าง" },
      { icon: "tool", title: "การสร้างต้นแบบอย่างรวดเร็ว", description: "พัฒนาแนวคิดให้เป็นรูปธรรมภายใต้ข้อจำกัดด้านเวลา" },
      { icon: "users", title: "การนำเสนอในสถานการณ์กดดัน", description: "นำเสนอและอธิบายแนวคิดใหม่ต่อผู้ฟังที่ยังตั้งข้อสงสัย" },
    ],
    methodPillars: [1, 3, 4],
  },
  {
    slug: "capital-minds",
    name: "Capital Minds",
    heroImg: "/images/events/price-war-149.jpg",
    heroImgPosition: "center 50%",
    heroImgScale: 1.15,
    tagline: "เชี่ยวชาญกลไกตลาด",
    duration: "",
    ages: "",
    groupSize: "",
    format: "",
    description:
      "เกมจำลองธุรกิจที่นักเรียนบริหารบริษัทซึ่งแข่งขันกัน และตัดสินใจด้านราคาแบบเรียลไทม์ในตลาดที่เปลี่ยนแปลงอยู่เสมอ เงื่อนไขของตลาดเปลี่ยนแปลงในทุกรอบ แต่ละทีมจึงต้องคิดในมุมมองของ CFO กลยุทธ์ด้านราคาที่ดีที่สุดจะเป็นผู้ชนะ",
    audiences: ["school", "student", "corporate"],
    outcomes: [
      { icon: "coin", title: "กลยุทธ์ด้านราคา", description: "เลือกตั้งราคาจากต้นทุน คุณค่า หรือคู่แข่งให้เหมาะกับสถานการณ์ พร้อมเหตุผลประกอบ" },
      { icon: "chart-bar", title: "ความรู้ทางการเงิน", description: "รายได้ กำไร อัตรากำไร และความหมายที่แท้จริงของตัวเลขเหล่านี้" },
      { icon: "arrows-exchange", title: "กลไกตลาด", description: "ความสัมพันธ์ระหว่างอุปทาน อุปสงค์ และการแข่งขันแบบเรียลไทม์" },
      { icon: "brain", title: "การตัดสินใจภายใต้แรงกดดัน", description: "ตัดสินใจเลือกกลยุทธ์ภายใต้ข้อมูลที่ไม่ครบถ้วนและเวลาที่จำกัด" },
    ],
    methodPillars: [1, 2, 3, 4],
  },
];

export const programs: Record<"en" | "th", Program[]> = { en: programsEn, th: programsTh };

export function getProgramBySlug(slug: string, locale: "en" | "th" = "en"): Program | undefined {
  return programs[locale].find((p) => p.slug === slug);
}

export const programsPageMeta = {
  en: {
    eyebrow: "▸ Our experiences",
    heading: "Short, long, or fully custom.",
    sub: "From a single-day spark to a full semester, built around your goals.",
    popularBadge: "★ Most popular",
    customTile: {
      heading: "Want something personalized?",
      body: "Design something custom with us.",
      cta: "Start a custom brief",
      href: "/what-we-do#custom",
    },
  },
  th: {
    eyebrow: "▸ ประสบการณ์การเรียนรู้",
    heading: "ระยะสั้น ระยะยาว หรือออกแบบเฉพาะ",
    sub: "ตั้งแต่กิจกรรมหนึ่งวันไปจนถึงโปรแกรมตลอดภาคเรียน ออกแบบให้สอดคล้องกับเป้าหมายของแต่ละโรงเรียนและองค์กร",
    popularBadge: "★ ยอดนิยม",
    customTile: {
      heading: "โปรแกรมที่ออกแบบเฉพาะ",
      body: "InnoQuest ยินดีร่วมออกแบบโปรแกรมให้สอดคล้องกับความต้องการของท่าน",
      cta: "สอบถามข้อมูล",
      href: "/what-we-do#custom",
    },
  },
} as const;
