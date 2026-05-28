export const pathwayMeta = {
  badge: "InnoQuest Core Curriculum",
  heading: "The Entrepreneurial",
  headingAccent: "Pathway.",
  sub: "This is a structured journey through the full lifecycle of a business. Powered by our own digital simulation engine we deliver an exclusive standard of learning that cannot be matched. We guide students from their initial idea all the way to market dominance.",
  sidebarHeading: "How it works",
  sidebarBody: "Programs can be run independently as standalone sprints, or linked together into a long termß deep dive.",
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

// Single source of truth: pathway pulls heroImg from program data files
import { theChangeLab } from "@/data/programs/the-change-lab";
import { entrepreneurInInnovation } from "@/data/programs/entrepreneur-in-innovation";
import { breakTheMarket } from "@/data/programs/break-the-market";
import { capitalMinds } from "@/data/programs/capital-minds";

export const pathwayStages: PathwayStage[] = [
  {
    step: "01",
    theme: "Ideation Phase",
    name: theChangeLab.name,
    subtitle: "Painpoint Discovery & Systems Thinking",
    description: theChangeLab.description,
    status: "available",
    slug: theChangeLab.slug,
    details: { duration: theChangeLab.duration, ages: theChangeLab.ages },
    engineFeature: "ESG Impact Simulator",
    heroImg: theChangeLab.heroImg ?? "/logos/logo-transparent.png",
    imgCaption: "// Action shot: Students actively discussing pain points around a whiteboard, high energy.",
  },
  {
    step: "02",
    theme: "Validation Phase",
    name: entrepreneurInInnovation.name,
    subtitle: "MVP & Market Validation",
    description: entrepreneurInInnovation.description,
    status: "available",
    slug: entrepreneurInInnovation.slug,
    details: { duration: entrepreneurInInnovation.duration, ages: entrepreneurInInnovation.ages },
    engineFeature: "Startup Lifecycle Engine",
    heroImg: entrepreneurInInnovation.heroImg,
    imgCaption: "// Screen focus: Over-the-shoulder shot of a student interacting with the digital business simulation interface.",
  },
  {
    step: "03",
    theme: "Disruption Phase",
    name: breakTheMarket.name,
    subtitle: "GTM & Competitive Strategy",
    description: breakTheMarket.description,
    status: "available",
    slug: breakTheMarket.slug,
    details: { duration: breakTheMarket.duration, ages: breakTheMarket.ages },
    engineFeature: "Market Disruption Modeler",
    heroImg: breakTheMarket.heroImg,
    imgCaption: "// Group dynamics: A team looking intensely at the live leaderboard on a main screen.",
  },
  {
    step: "04",
    theme: "Economics Phase",
    name: capitalMinds.name,
    subtitle: "Pricing & Unit Economics",
    description: capitalMinds.description,
    status: "available",
    slug: capitalMinds.slug,
    details: { duration: capitalMinds.duration, ages: capitalMinds.ages },
    engineFeature: "Live Dynamic Market Engine",
    heroImg: capitalMinds.heroImg,
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
    details: { duration: "TBA", ages: "16-18" },
    engineFeature: "Global Expansion Engine",
    imgCaption: "Encrypted Module",
  },
];
