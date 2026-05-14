import type { Program } from "@/data/programs";

export const capitalMinds: Program = {
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
};
