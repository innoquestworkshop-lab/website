import type { Program } from "@/data/programs";

export const entrepreneurInInnovation: Program = {
  slug: "entrepreneur-in-innovation",
  name: "Entrepreneur in Innovation",
  heroImg: "/images/events/IMG_8695.jpg",
  tagline: "From zero to startup — in a day, a week, or a semester.",
  duration: "1 day – semester",
  ages: "13–18",
  groupSize: "15–60 students",
  format: "In-person / Hybrid",
  featured: true,
  description:
    "A startup simulation program where students build a business from scratch. They identify a real problem, validate the market, design the product, and pitch to investors — all within the program timeline. Structured to mirror the actual startup journey, just compressed.",
  audiences: ["school", "student", "parent"],
  outcomes: [
    { icon: "rocket", title: "Entrepreneurial mindset", description: "Opportunity recognition, calculated risk-taking, and bias toward action" },
    { icon: "users", title: "Team dynamics", description: "Roles, equity, conflict, and how high-performing teams actually work" },
    { icon: "puzzle", title: "Problem validation", description: "Researching real users before building anything" },
    { icon: "coin", title: "Business model thinking", description: "Revenue, margins, and what makes a business sustainable" },
  ],
  methodPillars: [1, 2, 3, 4],
};
