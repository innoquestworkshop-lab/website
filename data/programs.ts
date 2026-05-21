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
      "Students step into the role of sustainability consultants to bridge the gap between big ideas and real-world implementation. Through research and prototyping, teams use our custom-built board game to navigate the tension between social impact and commercial feasibility. Every move has a consequence, forcing participants to think critically about how their solutions survive in a competitive market. It all culminates in a high-energy battle for board dominance where only the most viable ideas win.",
    audiences: ["school", "corporate"],
    outcomes: [
      { icon: "leaf", title: "ESG literacy", description: "Understanding environmental, social, and governance issues that matter today" },
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
      "Students go through the full startup lifecycle, compressed into a single high-energy session. Using professional frameworks, we guide teams through deep problem understanding and solution ideation to find a true problem-solution fit. It's a race to transform a blank canvas into a validated product ready for an investor pitch. We move beyond theory to show students how to build a business that actually works.",
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
      "Students act as market entry specialists managing the full lifecycle of a product launch. Instead of guessing they must balance R&D budgets and risk while paying for data to analyze consumer behavior in real time. Teams work to hit key milestones that unlock the funding needed to keep their innovation alive in an uncertain landscape. It is a high stakes race to calculate Willingness to Pay and dominate the shelf before the competition takes the lead.",
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
      "A simulation-driven program where students run competing businesses and make live pricing decisions in a dynamic market. Each round changes the rules forcing teams to think like CFOs, not students. The best pricing strategy wins.",
    audiences: ["school", "student", "corporate"],
    outcomes: [
      { icon: "coin", title: "Pricing strategy", description: "Cost-plus, value-based, competitive — when to use each and why" },
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
    tagline: "ผลกระทบที่ใช้งานได้จริง",
    duration: "",
    ages: "",
    groupSize: "",
    format: "",
    description:
      "นักเรียนก้าวเข้าสู่บทบาทที่ปรึกษาด้านความยั่งยืนเพื่อเชื่อมช่องว่างระหว่างแนวคิดยิ่งใหญ่กับการนำไปปฏิบัติจริง ผ่านการวิจัยและสร้างต้นแบบ ทีมใช้บอร์ดเกมที่เราสร้างขึ้นเองเพื่อนำทางความตึงเครียดระหว่างผลกระทบทางสังคมและความเป็นไปได้เชิงพาณิชย์ ทุกการเคลื่อนไหวมีผลที่ตามมา บังคับให้ผู้เข้าร่วมคิดอย่างมีวิจารณญาณ",
    audiences: ["school", "corporate"],
    outcomes: [
      { icon: "leaf", title: "ความรู้ด้าน ESG", description: "เข้าใจประเด็นด้านสิ่งแวดล้อม สังคม และธรรมาภิบาลที่สำคัญในปัจจุบัน" },
      { icon: "bulb", title: "การคิดเชิงระบบ", description: "มองเห็นว่าการตัดสินใจส่งผลกระทบต่อระบบนิเวศ ชุมชน และเศรษฐกิจอย่างไร" },
      { icon: "presentation", title: "นวัตกรรมที่ยั่งยืน", description: "ออกแบบโซลูชันที่สมดุลระหว่างผลกระทบและความเป็นไปได้" },
      { icon: "chart-bar", title: "การนำเสนอด้วยหลักฐาน", description: "โต้แย้งเพื่อการเปลี่ยนแปลงด้วยข้อมูลและการเล่าเรื่อง" },
    ],
    methodPillars: [1, 2, 3, 4],
  },
  {
    slug: "entrepreneur-in-innovation",
    name: "Entrepreneur in Innovation",
    heroImg: "/images/events/IMG_8695.jpg",
    heroImgPosition: "center 45%",
    tagline: "จากปัญหาสู่โซลูชัน",
    duration: "",
    ages: "",
    groupSize: "",
    format: "",
    featured: true,
    description:
      "นักเรียนผ่านวงจรชีวิต Startup ทั้งหมดในเซสชันเดียวที่เปี่ยมพลังงาน ด้วยกรอบการทำงานระดับมืออาชีพ เรานำทางทีมผ่านการทำความเข้าใจปัญหาเชิงลึกและการสร้างแนวคิดเพื่อค้นหาความสอดคล้องระหว่างปัญหาและโซลูชัน เป็นการแข่งขันเพื่อเปลี่ยนผืนผ้าว่างเปล่าเป็นผลิตภัณฑ์ที่ผ่านการตรวจสอบพร้อมสำหรับการนำเสนอต่อนักลงทุน",
    audiences: ["school", "student", "parent"],
    outcomes: [
      { icon: "rocket", title: "มายด์เซ็ตผู้ประกอบการ", description: "การจดจำโอกาส การรับความเสี่ยงอย่างรอบคอบ และความกล้าลงมือทำ" },
      { icon: "users", title: "พลวัตของทีม", description: "บทบาท ความเท่าเทียม ความขัดแย้ง และวิธีที่ทีมประสิทธิภาพสูงทำงานจริงๆ" },
      { icon: "puzzle", title: "การตรวจสอบปัญหา", description: "การวิจัยผู้ใช้จริงก่อนสร้างสิ่งใด" },
      { icon: "coin", title: "การคิดแบบโมเดลธุรกิจ", description: "รายได้ อัตรากำไร และสิ่งที่ทำให้ธุรกิจยั่งยืน" },
    ],
    methodPillars: [1, 2, 3, 4],
  },
  {
    slug: "break-the-market",
    name: "Break the Market",
    heroImg: "/images/events/break-the-market-5758.jpg",
    heroImgPosition: "center 73%",
    tagline: "ทำลายอุตสาหกรรม สร้างสิ่งที่ยังไม่มี",
    duration: "",
    ages: "",
    groupSize: "",
    format: "",
    description:
      "นักเรียนทำหน้าที่เป็นผู้เชี่ยวชาญการเข้าตลาดบริหารวงจรชีวิตทั้งหมดของการเปิดตัวผลิตภัณฑ์ แทนที่จะเดาสุ่ม พวกเขาต้องสมดุลงบประมาณ R&D และความเสี่ยงในขณะที่จ่ายเงินเพื่อวิเคราะห์พฤติกรรมผู้บริโภคแบบเรียลไทม์ เป็นการแข่งขันที่มีเดิมพันสูงเพื่อครองตลาดก่อนที่คู่แข่งจะนำหน้า",
    audiences: ["school", "student", "corporate"],
    outcomes: [
      { icon: "bolt", title: "การคิดแบบสร้างการเปลี่ยนแปลง", description: "ท้าทายสมมติฐานที่คนอื่นถือว่าเป็นเรื่องธรรมดา" },
      { icon: "trending-up", title: "กลยุทธ์การแข่งขัน", description: "เข้าใจพลวัตตลาด การวางตำแหน่ง และการสร้างความแตกต่าง" },
      { icon: "tool", title: "การสร้างต้นแบบรวดเร็ว", description: "เปลี่ยนแนวคิดเป็นคอนเซ็ปต์ที่จับต้องได้ภายใต้แรงกดดันเรียลไทม์" },
      { icon: "users", title: "การนำเสนอในสถานการณ์ตึงเครียด", description: "ปกป้องแนวคิดที่กล้าหาญต่อหน้าผู้ฟังที่สงสัย" },
    ],
    methodPillars: [1, 3, 4],
  },
  {
    slug: "capital-minds",
    name: "Capital Minds",
    heroImg: "/images/events/price-war-149.jpg",
    heroImgPosition: "center 50%",
    heroImgScale: 1.15,
    tagline: "เชี่ยวชาญตลาด",
    duration: "",
    ages: "",
    groupSize: "",
    format: "",
    description:
      "โปรแกรมที่ขับเคลื่อนด้วยการจำลองซึ่งนักเรียนบริหารธุรกิจที่แข่งขันกันและตัดสินใจด้านราคาสดในตลาดที่มีพลวัต แต่ละรอบเปลี่ยนกฎบังคับให้ทีมคิดแบบ CFO ไม่ใช่แบบนักเรียน กลยุทธ์ราคาที่ดีที่สุดชนะ",
    audiences: ["school", "student", "corporate"],
    outcomes: [
      { icon: "coin", title: "กลยุทธ์ด้านราคา", description: "ต้นทุนบวก คุณค่า การแข่งขัน — เมื่อไหร่จะใช้แต่ละแบบและทำไม" },
      { icon: "chart-bar", title: "ความรู้ทางการเงิน", description: "รายได้ กำไร อัตรากำไร และสิ่งที่ตัวเลขหมายความว่าอย่างไร" },
      { icon: "arrows-exchange", title: "พลวัตตลาด", description: "อุปทาน อุปสงค์ และการแข่งขันมีปฏิสัมพันธ์กันแบบเรียลไทม์อย่างไร" },
      { icon: "brain", title: "การตัดสินใจภายใต้แรงกดดัน", description: "มุ่งมั่นกับกลยุทธ์เมื่อข้อมูลไม่ครบและเวลาจำกัด" },
    ],
    methodPillars: [1, 2, 3, 4],
  },
];

export const programs: Record<"en" | "th", Program[]> = { en: programsEn, th: programsTh };

export function getProgramBySlug(slug: string): Program | undefined {
  return programsEn.find((p) => p.slug === slug);
}

export const programsPageMeta = {
  en: {
    eyebrow: "▸ Our experiences",
    heading: "Short, long, or fully custom.",
    sub: "From a single-day spark to a semester-long transformation — built around your goals.",
    popularBadge: "★ Most popular",
    customTile: {
      heading: "Want something personalized?",
      body: "Design something custom with us.",
      cta: "Start a custom brief",
      href: "/custom",
    },
  },
  th: {
    eyebrow: "▸ ประสบการณ์ของเรา",
    heading: "กระชั้บ ระยะยาว หรือ custom สำหรับคุณ",
    sub: "ตั้งแต่ประกายจากวันเดียวถึงการเปลี่ยนแปลงตลอดภาคเรียน — สร้างสรรค์รอบเป้าหมายของคุณ",
    popularBadge: "★ ยอดนิยมที่สุด",
    customTile: {
      heading: "ต้องการอะไรเฉพาะสำหรับคุณ?",
      body: "ออกแบบสิ่งเฉพาะกับเรา",
      cta: "เริ่มบรีฟ แบบ custom",
      href: "/custom",
    },
  },
} as const;
