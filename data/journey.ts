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
    { label: "สายค้นพบ",        state: "done",     iconKey: "phone"  },
    { label: "ออกแบบเฉพาะ",    state: "done",     iconKey: "edit"   },
    { label: "ส่งมอบโปรแกรม",  state: "active",   iconKey: "bolt"   },
    { label: "รายงานผลกระทบ",  state: "upcoming", iconKey: "chart"  },
    { label: "โปรแกรมระยะยาว", state: "upcoming", iconKey: "growth" },
  ],
};

export const journeySection = {
  en: {
    eyebrow: "▸ How it works",
    heading: "Your organization's\nlearning path.",
    sub: "From first conversation to long-term partnership — InnoQuest guides every step.",
    stepLabel: "Step",
    currentLabel: "You are here",
  },
  th: {
    eyebrow: "▸ วิธีการทำงาน",
    heading: "เส้นทางการเรียนรู้\nขององค์กรคุณ",
    sub: "ตั้งแต่การสนทนาครั้งแรกจนถึงการเป็นหุ้นส่วนระยะยาว — InnoQuest นำทางทุกก้าว",
    stepLabel: "ขั้นที่",
    currentLabel: "คุณอยู่ที่นี่",
  },
} as const;
