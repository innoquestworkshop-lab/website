/** Audience tabs for the home page AudienceSwitcher + audience cards on What We Do. */
export type AudienceTab = {
  id: string;
  tab: string;
  title: string;
  body: string;
  link: { text: string; href: string };
  bullets: string[];
  imgCaption: string;
  img?: string;
};

export const audienceTabs: AudienceTab[] = [
  {
    id: "student",
    tab: "For Students",
    title: "Hey, Students!",
    body: "Tired of sitting and listening? Us too. Come build, create, and solve real challenges alongside other curious kids.No textbooks.No boring lectures.  Just you, your ideas, and your team.",
    link: { text: "See student programs", href: "/programs" },
    bullets: ["Real challenges", "Team-based", "No textbooks"],
    imgCaption:
      "// photo: students high-fiving over prototype on table, sticky notes everywhere.",
    img: "/images/events/entre-1-090.jpg",
  },
  {
    id: "school",
    tab: "For Schools",
    title: "School & institution programs",
    body: "From one-day workshops to semester-long journeys. Our learning designers align with your curriculum, teachers, and academic calendar — so programs enhance what you already do.",
    link: { text: "Explore Possibilities", href: "/schools" },
    bullets: ["Curriculum-aligned", "Teacher onboarding", "Semester-friendly"],
    imgCaption:
      "// photo: classroom shot — teacher + facilitator working with students at desks arranged in clusters.",
    img: "/images/events/ac-w4-001.jpg",
  },
  {
    id: "corp",
    tab: "For Corporates & CSR",
    title: "Corporate & CSR programs",
    body: "Partner with InnoQuest to deliver meaningful youth development under your CSR strategy. We design, facilitate, and produce impact reports. Your team gets a compelling story — the kids get life-changing skills.",
    link: { text: "Explore Possibilities", href: "/corporates" },
    bullets: ["Impact reports", "Branded outcomes", "Custom CSR design"],
    imgCaption:
      "// photo: corporate team observing kids workshop, two CSR leads smiling. Wide. Daylight.",
    img: "/images/events/price-war-067.jpg",
  },
];

/** Audience cards used on the What We Do page. */
export const audienceCards = [
  {
    label: "Schools & Institutions",
    body: "Programs that align with your curriculum and calendar, designed alongside your teachers, not on top of them.",
    href: "/schools",
    cta: "Learn more",
  },
  {
    label: "Corporates & CSR",
    body: "Turn your CSR budget into a story worth telling. We handle everything — your team shows up, the kids leave with real skills.",
    href: "/corporates",
    cta: "Learn more",
  },
  {
    label: "Parents & Families",
    body: "Give your child the skills that formal education doesn't prioritise — creativity, confidence, and critical thinking.",
    href: "/programs",
    cta: "See programs",
  },
  {
    label: "Students",
    body: "Come solve real problems with real teams. No textbooks. No right answers. Just you, your ideas, and a challenge worth tackling.",
    href: "/programs",
    cta: "See programs",
  },
];
