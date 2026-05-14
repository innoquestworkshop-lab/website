export const pathwayMeta = {
  badge: "InnoQuest Core Curriculum",
  heading: "The Entrepreneurial",
  headingAccent: "Pathway.",
  sub: "This is a structured journey through the full lifecycle of a business. Powered by our own digital simulation engine we deliver an exclusive standard of learning that cannot be matched. We guide students from their initial idea all the way to market dominance.",
  sidebarHeading: "How it works",
  sidebarBody: "Programs can be run independently as standalone sprints, or linked together into a long term deep dive.",
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

const p = (slug: string) => programs.find((p) => p.slug === slug)!;

export const pathwayStages: PathwayStage[] = [
  {
    step: "01",
    theme: "Ideation Phase",
    name: p("the-change-lab").name,
    subtitle: p("the-change-lab").tagline,
    description: p("the-change-lab").description,
    status: "available",
    slug: "the-change-lab",
    details: { duration: p("the-change-lab").duration, ages: p("the-change-lab").ages },
    engineFeature: "ESG Impact Simulator",
    heroImg: p("the-change-lab").heroImg ?? "/logos/logo-transparent.png",
    heroImgPosition: p("the-change-lab").heroImgPosition,
    heroImgScale: p("the-change-lab").heroImgScale,
    heroImgBlur: p("the-change-lab").heroImgBlur,
    imgCaption: "// Action shot: Students actively discussing pain points around a whiteboard, high energy.",
  },
  {
    step: "02",
    theme: "Validation Phase",
    name: p("entrepreneur-in-innovation").name,
    subtitle: p("entrepreneur-in-innovation").tagline,
    description: p("entrepreneur-in-innovation").description,
    status: "available",
    slug: "entrepreneur-in-innovation",
    details: { duration: p("entrepreneur-in-innovation").duration, ages: p("entrepreneur-in-innovation").ages },
    engineFeature: "Startup Lifecycle Engine",
    heroImg: p("entrepreneur-in-innovation").heroImg,
    heroImgPosition: p("entrepreneur-in-innovation").heroImgPosition,
    heroImgScale: p("entrepreneur-in-innovation").heroImgScale,
    imgCaption: "// Screen focus: Over-the-shoulder shot of a student interacting with the digital business simulation interface.",
  },
  {
    step: "03",
    theme: "Disruption Phase",
    name: p("break-the-market").name,
    subtitle: p("break-the-market").tagline,
    description: p("break-the-market").description,
    status: "available",
    slug: "break-the-market",
    details: { duration: p("break-the-market").duration, ages: p("break-the-market").ages },
    engineFeature: "Market Disruption Modeler",
    heroImg: p("break-the-market").heroImg,
    heroImgPosition: p("break-the-market").heroImgPosition,
    heroImgScale: p("break-the-market").heroImgScale,
    imgCaption: "// Group dynamics: A team looking intensely at the live leaderboard on a main screen.",
  },
  {
    step: "04",
    theme: "Economics Phase",
    name: p("capital-minds").name,
    subtitle: p("capital-minds").tagline,
    description: p("capital-minds").description,
    status: "available",
    slug: "capital-minds",
    details: { duration: p("capital-minds").duration, ages: p("capital-minds").ages },
    engineFeature: "Live Dynamic Market Engine",
    heroImg: p("capital-minds").heroImg,
    heroImgPosition: p("capital-minds").heroImgPosition,
    heroImgScale: p("capital-minds").heroImgScale,
    imgCaption: "// Close up: Students reacting to a sudden market shift / supply shock during the simulation.",
  },
  {
    step: "05",
    theme: "Scale Phase",
    name: "The Scale-Up Lab",
    subtitle: "Venture Capital & Global Growth",
    description: "Navigate series funding rounds, scaling complex operations, and global expansion in a high-stakes executive simulation.",
    status: "locked",
    slug: "#",
    details: { duration: "", ages: "" },
    engineFeature: "Global Expansion Engine",
    heroImg: "/logos/logo-dark.png",
    imgCaption: "Encrypted Module",
  },
];
