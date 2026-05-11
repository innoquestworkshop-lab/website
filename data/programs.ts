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
  audiences: ("corporate" | "school" | "parent" | "student")[];
  outcomes: { icon: string; title: string; description: string }[];
  methodPillars: (1 | 2 | 3 | 4)[];
};

export const programs: Program[] = [
  {
    slug: "the-change-lab",
    name: "The Change Lab",
    tagline: "Real-world ESG challenges. Hands-on solutions. Future-ready minds.",
    duration: "1–3 days",
    ages: "10–18",
    groupSize: "20–150 students",
    format: "In-person",
    description:
      "Students step into the role of sustainability consultants tasked with solving a real environmental or social challenge. Through research, ideation, and prototyping, they design solutions that are both impactful and commercially viable — then pitch them to a panel.",
    featured: true,
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
    tagline: "From zero to startup — in a day, a week, or a semester.",
    duration: "1 day – semester",
    ages: "13–18",
    groupSize: "15–60 students",
    format: "In-person / Hybrid",
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
  },
  {
    slug: "break-the-market",
    name: "Break the Market",
    tagline: "Disrupt an industry. Build something that doesn't exist yet.",
    duration: "1–2 days",
    ages: "14–18",
    groupSize: "20–80 students",
    format: "In-person",
    description:
      "Teams are assigned a legacy industry and challenged to break it — reinventing its core assumptions using design thinking, technology, and creative disruption frameworks. Think: what would you build if you had to kill your own company? Fast, competitive, and full of energy.",
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
    tagline: "Price it. Trade it. Win it. Finance made real.",
    duration: "1–2 days",
    ages: "12–18",
    groupSize: "20–100 students",
    format: "In-person",
    description:
      "A simulation-driven program where students run competing businesses and make live pricing decisions in a dynamic market. Each round changes the rules — new competitors, supply shocks, demand shifts — forcing teams to think like CFOs, not students. The best pricing strategy wins.",
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

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}
