export type JourneyStepState = "done" | "active" | "upcoming";

export type JourneyStep = {
  label: string;
  state: JourneyStepState;
  iconKey: "phone" | "edit" | "bolt" | "chart" | "growth";
};

export const journeySteps: Record<"en" | "th", JourneyStep[]> = {
  en: [
    { label: "Discovery call",     state: "done",     iconKey: "phone"  },
    { label: "Custom design",      state: "done",     iconKey: "edit"   },
    { label: "Program delivery",   state: "active",   iconKey: "bolt"   },
    { label: "Impact report",      state: "upcoming", iconKey: "chart"  },
    { label: "Long-term program",  state: "upcoming", iconKey: "growth" },
  ],
  th: [
    { label: "หารือความต้องการ",     state: "done",     iconKey: "phone"  },
    { label: "ออกแบบโปรแกรมเฉพาะ",  state: "done",     iconKey: "edit"   },
    { label: "ดำเนินโปรแกรม",  state: "active",   iconKey: "bolt"   },
    { label: "รายงานสรุปผลการดำเนินงาน",  state: "upcoming", iconKey: "chart"  },
    { label: "โปรแกรมระยะยาว", state: "upcoming", iconKey: "growth" },
  ],
};

export const journeySection = {
  en: {
    eyebrow: "▸ How it works",
    heading: "Your organization's\nlearning path.",
    sub: "From first conversation to long-term partnership, InnoQuest guides every step.",
    stepLabel: "Step",
    currentLabel: "You are here",
  },
  th: {
    eyebrow: "▸ ขั้นตอนการดำเนินงาน",
    heading: "เส้นทางการเรียนรู้\nขององค์กร",
    sub: "ตั้งแต่การหารือครั้งแรกจนถึงความร่วมมือระยะยาว InnoQuest ดูแลทุกขั้นตอน",
    stepLabel: "ขั้นตอนที่",
    currentLabel: "ขั้นตอนปัจจุบัน",
  },
} as const;
