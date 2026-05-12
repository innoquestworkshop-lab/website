/** The InnoQuest Method© — 7 learning principles behind every program. */
export const methodPillars = [
  {
    num: "01",
    title: "Double-Sided Learning",
    desc: "Hard skills (like strategy) and soft skills (like confidence) are two sides of the same coin. We never teach them separately because, in the real world, you can't have one without the other.",
  },
  {
    num: "02",
    title: "Thinking as a Habit",
    desc: "Critical thinking isn't a subject on a syllabus; it's a reflex. We train people to pause and analyze the \"why\" before they ever jump into the \"how.\"",
  },
  {
    num: "03",
    title: "Connecting the Dots",
    desc: "Innovation happens at the edges of different worlds. We teach participants to find the links between business, design, science, and psychology to solve complex problems.",
  },
  {
    num: "04",
    title: "Action Over Instruction",
    desc: "We skip the manuals and the long lectures. Real learning lives in the struggle of a game and the pressure of a challenge — not in a slideshow.",
  },
  {
    num: "05",
    title: "Teamwork by Necessity",
    desc: "The challenges we design are too big for one person to solve alone. In our sessions, collaboration isn't a suggestion; it is a mechanical requirement to succeed.",
  },
  {
    num: "06",
    title: "The Insight is in the Debrief",
    desc: "The game is the hook, but the reflection is the teacher. We spend dedicated time after every activity dissecting what happened so the lesson actually sticks.",
  },
  {
    num: "07",
    title: "Real-World Stakes",
    desc: "We don't do \"busy work.\" Every program is rooted in actual entrepreneurial thinking and real-world strategy, ensuring the experience feels as meaningful as it is educational.",
  },
] as const;

/** Pillar titles as a plain array — used in programs/[slug]/page.tsx for rendering numbered tags. */
export const methodPillarNames = methodPillars.map((p) => p.title) as string[];

export const methodologySection = {
  eyebrow: "▸ Our learning framework",
  heading: "The InnoQuest Method",
  sub: "Seven principles that define how we design every program — because the way people learn matters just as much as what they learn.",
} as const;
