import type { Program } from "@/data/programs";

export const breakTheMarket: Program = {
  slug: "break-the-market",
  name: "Break the Market",
  heroImg: "/images/events/break-the-market-5446.jpg",
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
};
