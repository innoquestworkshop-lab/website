export const pathwayMeta = {
  en: {
    badge: "InnoQuest Core Curriculum",
    heading: "The Entrepreneurial",
    headingAccent: "Pathway.",
    sub: "A structured path through the full lifecycle of a business. In our own digital simulation, every student action creates real data and an immediate consequence, and we unpack that data in the debrief. We guide students from their first idea all the way to market dominance.",
    sidebarHeading: "How it works",
    sidebarBody: "Run any program as a standalone sprint, or link them into a long-term deep dive.",
  },
  th: {
    badge: "หลักสูตรหลัก InnoQuest",
    heading: "เส้นทาง",
    headingAccent: "ผู้ประกอบการ",
    sub: "เส้นทางที่วางไว้ครบทุกช่วงชีวิตของธุรกิจ ในเกมจำลองดิจิทัลที่เราสร้างเอง ทุกการกระทำของนักเรียนจะกลายเป็นข้อมูลจริงและเห็นผลทันที แล้วเรานำข้อมูลนั้นมาคุยกันต่อในช่วงสรุปบทเรียน เราพานักเรียนไปตั้งแต่ไอเดียแรกจนถึงการครองตลาด",
    sidebarHeading: "รูปแบบโปรแกรม",
    sidebarBody: "จัดแต่ละโปรแกรมเป็นสปรินต์เดี่ยวๆ ก็ได้ หรือต่อกันเป็นคอร์สเจาะลึกระยะยาวก็ได้",
  },
} as const;

export type PathwayStage = {
  step: string;
  theme: string;
  name: string;
  subtitle: string;
  description: string;
  status: "available" | "locked";
  slug: string;
  details: { duration: string; ages: string };
  engineFeature: string;
  imgCaption: string;
  heroImg?: string;
  heroImgPosition?: string;
  heroImgScale?: number;
  heroImgBlur?: number;
};

import { programs } from "@/data/programs";

const p = (slug: string, locale: "en" | "th" = "en") =>
  programs[locale].find((prog) => prog.slug === slug)!;

const buildStages = (locale: "en" | "th"): PathwayStage[] => [
  {
    step: "01",
    theme: locale === "en" ? "Ideation Phase" : "เฟสไอเดีย",
    name: p("the-change-lab", locale).name,
    subtitle: locale === "en" ? "Pain Point Discovery & Systems Thinking" : "ค้นหา Pain Point และการคิดเชิงระบบ",
    description: p("the-change-lab", locale).description,
    status: "available",
    slug: p("the-change-lab", locale).slug,
    details: { duration: p("the-change-lab", locale).duration, ages: p("the-change-lab", locale).ages },
    engineFeature: "ESG Impact Simulator",
    heroImg: p("the-change-lab", locale).heroImg ?? "/logos/logo-transparent.png",
    imgCaption: "// Action shot: Students actively discussing pain points around a whiteboard, high energy.",
  },
  {
    step: "02",
    theme: locale === "en" ? "Validation Phase" : "เฟสทดสอบตลาด",
    name: p("entrepreneur-in-innovation", locale).name,
    subtitle: locale === "en" ? "MVP & Market Validation" : "MVP และการทดสอบตลาด",
    description: p("entrepreneur-in-innovation", locale).description,
    status: "available",
    slug: p("entrepreneur-in-innovation", locale).slug,
    details: { duration: p("entrepreneur-in-innovation", locale).duration, ages: p("entrepreneur-in-innovation", locale).ages },
    engineFeature: "Startup Lifecycle Engine",
    heroImg: p("entrepreneur-in-innovation", locale).heroImg,
    imgCaption: "// Screen focus: Over-the-shoulder shot of a student interacting with the digital business simulation interface.",
  },
  {
    step: "03",
    theme: locale === "en" ? "Disruption Phase" : "เฟสดิสรัปต์",
    name: p("break-the-market", locale).name,
    subtitle: locale === "en" ? "GTM & Competitive Strategy" : "GTM และกลยุทธ์การแข่งขัน",
    description: p("break-the-market", locale).description,
    status: "available",
    slug: p("break-the-market", locale).slug,
    details: { duration: p("break-the-market", locale).duration, ages: p("break-the-market", locale).ages },
    engineFeature: "Market Disruption Modeler",
    heroImg: p("break-the-market", locale).heroImg,
    imgCaption: "// Group dynamics: A team looking intensely at the live leaderboard on a main screen.",
  },
  {
    step: "04",
    theme: locale === "en" ? "Economics Phase" : "เฟสเศรษฐศาสตร์",
    name: p("capital-minds", locale).name,
    subtitle: locale === "en" ? "Pricing & Unit Economics" : "การตั้งราคาและ Unit Economics",
    description: p("capital-minds", locale).description,
    status: "available",
    slug: p("capital-minds", locale).slug,
    details: { duration: p("capital-minds", locale).duration, ages: p("capital-minds", locale).ages },
    engineFeature: "Live Dynamic Market Engine",
    heroImg: p("capital-minds", locale).heroImg,
    imgCaption: "// Close up: Students reacting to a sudden market shift / supply shock during the simulation.",
  },
  {
    step: "05",
    theme: locale === "en" ? "Scale Phase" : "เฟสขยายธุรกิจ",
    name: "The Scale-Up Lab",
    subtitle: locale === "en" ? "Venture Capital & Global Growth" : "เงินร่วมลงทุนและการเติบโตระดับโลก",
    description: locale === "en"
      ? "Work through series funding rounds, complex operations at scale, and global expansion in a high-stakes executive simulation."
      : "รับมือการระดมทุนแต่ละซีรีส์ การบริหารงานซับซ้อนในสเกลใหญ่ และการบุกตลาดโลก ในเกมจำลองระดับผู้บริหารที่เดิมพันสูง",
    status: "locked",
    slug: "#",
    details: { duration: "TBA", ages: "16-18" },
    engineFeature: "Global Expansion Engine",
    heroImg: "/logos/logo-transparent.png",
    imgCaption: "Encrypted Module",
  },
];

export const pathwayStages: Record<"en" | "th", PathwayStage[]> = {
  en: buildStages("en"),
  th: buildStages("th"),
};
