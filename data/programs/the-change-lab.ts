import type { Program } from "@/data/programs";

export const theChangeLab: Program = {
  slug: "the-change-lab",
  name: "The Change Lab",
  comingSoon: true,
  tagline: "Real-world ESG challenges. Hands-on solutions. Future-ready minds.",
  duration: "1–3 days",
  ages: "10–18",
  groupSize: "20–150 students",
  format: "In-person",
  description:
    "Students step into the role of sustainability consultants tasked with solving a real environmental or social challenge. Through research, ideation, and prototyping, they design solutions that are both impactful and commercially viable — then pitch them to a panel.",
  audiences: ["school", "corporate"],
  outcomes: [
    { icon: "leaf", title: "ESG literacy", description: "Understanding environmental, social, and governance issues that matter today" },
    { icon: "bulb", title: "Systems thinking", description: "Seeing how decisions ripple through ecosystems, communities, and economies" },
    { icon: "presentation", title: "Sustainable innovation", description: "Designing solutions that balance impact with feasibility" },
    { icon: "chart-bar", title: "Evidence-based pitching", description: "Making the case for change with data and storytelling" },
  ],
  methodPillars: [1, 2, 3, 4],
};
