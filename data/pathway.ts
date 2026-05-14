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
};

export const pathwayStages: PathwayStage[] = [
  {
    step: "01",
    theme: "Ideation Phase",
    name: "The Change Lab",
    subtitle: "Painpoint Discovery & Systems Thinking",
    description: "Students step into the role of consultants. Identify real-world friction and design solutions that balance impact with commercial viability. Pitch to a live panel.",
    status: "available",
    slug: "the-change-lab",
    details: { duration: "1-3 Days", ages: "10-18" },
    engineFeature: "ESG Impact Simulator",
    imgCaption: "// Action shot: Students actively discussing pain points around a whiteboard, high energy.",
  },
  {
    step: "02",
    theme: "Validation Phase",
    name: "Entrepreneur in Innovation",
    subtitle: "MVP & Market Validation",
    description: "A compressed startup lifecycle. Build a business from scratch, validate the market with real data, design the product, and secure funding from our investor panel.",
    status: "available",
    slug: "entrepreneur-in-innovation",
    details: { duration: "1 Semester", ages: "13-18" },
    engineFeature: "Startup Lifecycle Engine",
    imgCaption: "// Screen focus: Over-the-shoulder shot of a student interacting with the digital business simulation interface.",
  },
  {
    step: "03",
    theme: "Disruption Phase",
    name: "Break the Market",
    subtitle: "GTM & Competitive Strategy",
    description: "Reinvent legacy industries. Teams are assigned a dinosaur industry and use creative disruption frameworks to build what doesn't exist yet.",
    status: "available",
    slug: "break-the-market",
    details: { duration: "1-2 Days", ages: "14-18" },
    engineFeature: "Market Disruption Modeler",
    imgCaption: "// Group dynamics: A team looking intensely at the live leaderboard on a main screen.",
  },
  {
    step: "04",
    theme: "Economics Phase",
    name: "Capital Minds",
    subtitle: "Pricing & Unit Economics",
    description: "Run competing businesses in a dynamic live market. Master supply shocks, demand shifts, and the math of survival. Every decision updates the live ecosystem.",
    status: "available",
    slug: "capital-minds",
    details: { duration: "1-2 Days", ages: "12-18" },
    engineFeature: "Live Dynamic Market Engine",
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
