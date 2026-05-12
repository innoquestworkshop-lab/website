/** The 5-step partner journey shown on the home page. */
export type JourneyStepState = "done" | "active" | "upcoming";

export type JourneyStep = {
  label: string;
  state: JourneyStepState;
  /** Key maps to the icon rendered in JourneySection.tsx */
  iconKey: "phone" | "edit" | "bolt" | "chart" | "growth";
};

export const journeySteps: JourneyStep[] = [
  { label: "Discovery call",     state: "done",     iconKey: "phone"  },
  { label: "Custom design",      state: "done",     iconKey: "edit"   },
  { label: "Program delivery",   state: "active",   iconKey: "bolt"   },
  { label: "Impact report",      state: "upcoming", iconKey: "chart"  },
  { label: "Long-term program",  state: "upcoming", iconKey: "growth" },
];

export const journeySection = {
  eyebrow: "▸ How it works",
  heading: "Your organization's\nlearning path.",
  sub: "From first conversation to long-term partnership — InnoQuest guides every step.",
} as const;
