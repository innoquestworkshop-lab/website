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
    tagline: "อิมแพกต์ที่เวิร์กจริง",
    duration: "",
    ages: "",
    groupSize: "",
    format: "",
    description:
      "นักเรียนรับบทที่ปรึกษาด้านความยั่งยืน ที่ต้องเปลี่ยนไอเดียใหญ่ให้เกิดขึ้นได้จริง แต่ละทีมทำรีเสิร์ช สร้างต้นแบบ และเล่นบอร์ดเกมที่เราออกแบบเอง ซึ่งผลดีต่อสังคมกับความเป็นไปได้ทางธุรกิจจะดึงกันอยู่ตลอด ทุกการตัดสินใจมีผลตามมา ทีมจึงต้องคิดให้ออกว่าโซลูชันของตัวเองจะรอดในตลาดที่แข่งกันดุเดือดได้อย่างไร ปิดท้ายด้วยศึกชิงกระดานสุดมันส์ และมีแค่ไอเดียที่ไปได้จริงเท่านั้นที่ชนะ",
    audiences: ["school", "corporate"],
    outcomes: [
      { icon: "leaf", title: "ความรู้ด้าน ESG", description: "เข้าใจประเด็นด้านสิ่งแวดล้อม สังคม และธรรมาภิบาล" },
      { icon: "bulb", title: "การคิดเชิงระบบ", description: "เห็นว่าการตัดสินใจหนึ่งครั้งส่งผลต่อเนื่องถึงระบบนิเวศ ชุมชน และเศรษฐกิจอย่างไร" },
      { icon: "presentation", title: "นวัตกรรมที่ยั่งยืน", description: "ออกแบบโซลูชันที่ทั้งสร้างอิมแพกต์และทำได้จริง" },
      { icon: "chart-bar", title: "การพิตช์ด้วยหลักฐาน", description: "บอกให้ได้ว่าทำไมต้องเปลี่ยน ด้วยข้อมูลและการเล่าเรื่อง" },
    ],
    methodPillars: [1, 2, 3, 4],
  },
  {
    slug: "entrepreneur-in-innovation",
    name: "Entrepreneur in Innovation",
    heroImg: "/images/events/IMG_8695.jpg",
    heroImgPosition: "center 45%",
    tagline: "เริ่มจากปัญหา แล้วปั้นขึ้นมาเอง",
    duration: "",
    ages: "",
    groupSize: "",
    format: "",
    featured: true,
    description:
      "นักเรียนได้ลองทำสตาร์ทอัพครบทุกขั้นตอน อัดแน่นอยู่ในเซสชันเดียวที่มันส์ตั้งแต่ต้นจนจบ เราใช้เฟรมเวิร์กระดับมืออาชีพพาทีมเจาะลึกปัญหาและไล่ดูไอเดียโซลูชัน จนเจอ problem-solution fit ที่ใช่จริงๆ ทุกทีมแข่งกันเปลี่ยนกระดาษเปล่าให้เป็นผลิตภัณฑ์ที่ทดสอบแล้วและพร้อมพิตช์ต่อหน้านักลงทุน ระหว่างทางเราจะสอนให้เห็นว่าธุรกิจที่ไปได้จริงต้องสร้างอย่างไร",
    audiences: ["school", "student", "parent"],
    outcomes: [
      { icon: "rocket", title: "มายด์เซ็ตผู้ประกอบการ", description: "มองเห็นโอกาส กล้าเสี่ยงอย่างมีเหตุผล และลงมือทำทันที" },
      { icon: "users", title: "ไดนามิกของทีม", description: "บทบาท การแบ่งหุ้น ความขัดแย้ง และวิธีทำงานจริงของทีมเก่งๆ" },
      { icon: "puzzle", title: "การพิสูจน์ปัญหา", description: "รีเสิร์ชผู้ใช้จริงก่อนลงมือสร้างอะไรทั้งนั้น" },
      { icon: "coin", title: "การคิดเชิงโมเดลธุรกิจ", description: "รายได้ มาร์จิน และอะไรที่ทำให้ธุรกิจอยู่ได้ยาว" },
    ],
    methodPillars: [1, 2, 3, 4],
  },
  {
    slug: "break-the-market",
    name: "Break the Market",
    heroImg: "/images/events/break-the-market-5758.jpg",
    heroImgPosition: "center 73%",
    tagline: "เขย่าอุตสาหกรรม สร้างสิ่งที่ยังไม่เคยมี",
    duration: "",
    ages: "",
    groupSize: "",
    format: "",
    description:
      "นักเรียนรับบทผู้เชี่ยวชาญการเจาะตลาด ดูแลการเปิดตัวสินค้าตั้งแต่ต้นจนจบ ห้ามเดาสุ่ม ทุกทีมต้องบาลานซ์งบ R&D กับความเสี่ยง และจ่ายเงินซื้อข้อมูลมาวิเคราะห์พฤติกรรมผู้บริโภคแบบเรียลไทม์ ทีมต้องทำให้ถึงเป้าแต่ละขั้นเพื่อปลดล็อกเงินทุนที่ต่อลมหายใจให้นวัตกรรมของตัวเอง เดิมพันสูงมาก เพราะทุกทีมแข่งกันคำนวณ Willingness to Pay แล้วยึดชั้นวางสินค้าให้ได้ก่อนคู่แข่ง",
    audiences: ["school", "student", "corporate"],
    outcomes: [
      { icon: "bolt", title: "การคิดแบบดิสรัปต์", description: "ตั้งคำถามกับสิ่งที่คนอื่นเชื่อกันโดยไม่เคยสงสัย" },
      { icon: "trending-up", title: "กลยุทธ์การแข่งขัน", description: "เข้าใจกลไกตลาด การวางตำแหน่ง และการสร้างความแตกต่าง" },
      { icon: "tool", title: "การทำต้นแบบอย่างรวดเร็ว", description: "เปลี่ยนไอเดียเป็นคอนเซ็ปต์ที่จับต้องได้ ในเวลาที่บีบจริง" },
      { icon: "users", title: "การพิตช์ในสถานการณ์กดดัน", description: "ยืนหยัดปกป้องไอเดียกล้าๆ ต่อหน้าผู้ฟังที่ยังไม่เชื่อ" },
    ],
    methodPillars: [1, 3, 4],
  },
  {
    slug: "capital-minds",
    name: "Capital Minds",
    heroImg: "/images/events/price-war-149.jpg",
    heroImgPosition: "center 50%",
    heroImgScale: 1.15,
    tagline: "คุมเกมตลาด",
    duration: "",
    ages: "",
    groupSize: "",
    format: "",
    description:
      "เกมจำลองธุรกิจที่นักเรียนบริหารบริษัทแข่งกัน และตัดสินใจเรื่องราคากันสดๆ ในตลาดที่เปลี่ยนตลอดเวลา กติกาเปลี่ยนทุกรอบ ทีมจึงต้องคิดแบบ CFO ไม่ใช่คิดแบบนักเรียน กลยุทธ์ราคาที่ดีที่สุดคือผู้ชนะ",
    audiences: ["school", "student", "corporate"],
    outcomes: [
      { icon: "coin", title: "กลยุทธ์ด้านราคา", description: "ควรตั้งราคาจากต้นทุน จากคุณค่า หรือจากคู่แข่งตอนไหน และเพราะอะไร" },
      { icon: "chart-bar", title: "ความรู้ทางการเงิน", description: "รายได้ กำไร มาร์จิน และตัวเลขเหล่านี้บอกอะไรเราจริงๆ" },
      { icon: "arrows-exchange", title: "กลไกตลาด", description: "อุปทาน อุปสงค์ และการแข่งขันส่งผลต่อกันแบบเรียลไทม์อย่างไร" },
      { icon: "brain", title: "การตัดสินใจภายใต้แรงกดดัน", description: "เลือกกลยุทธ์แล้วเดินหน้า ทั้งที่ข้อมูลยังไม่ครบและเวลากำลังเดิน" },
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
    eyebrow: "▸ ประสบการณ์ของเรา",
    heading: "สั้น ยาว หรือออกแบบเองทั้งหมด",
    sub: "ตั้งแต่วันเดียวที่จุดประกาย ไปจนถึงเต็มหนึ่งเทอม ออกแบบตามเป้าหมายของคุณ",
    popularBadge: "★ ยอดนิยม",
    customTile: {
      heading: "อยากได้แบบที่ทำมาเพื่อคุณโดยเฉพาะ?",
      body: "มาออกแบบโปรแกรมของคุณกับเรา",
      cta: "เริ่มบรีฟโปรแกรมของคุณ",
      href: "/what-we-do#custom",
    },
  },
} as const;
