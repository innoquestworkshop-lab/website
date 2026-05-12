/** About page content. */
export const aboutPage = {
  hero: {
    eyebrow: "▸ About InnoQuest",
    heading: "We believe every kid has extraordinary potential.",
    headingAccent: "extraordinary potential.",
    sub: "InnoQuest is a youth experiential learning company based in Bangkok, Thailand. We design and facilitate programs that develop the skills the next generation will actually need.",
    cta: { text: "Meet the team →", href: "/team" },
    image: {
      tag: "ABOUT · TEAM",
      caption:
        "// hero photo: full team group shot — casual, daylight, somewhere recognisably Thai. 8–12 people. NOT a corporate posed shot.",
    },
  },

  story: {
    eyebrow: "▸ Our story",
    heading: "Started in 2024.\nBuilt for kids by (somewhat) a kid.",
    paragraphs: [
      "InnoQuest started with a simple observation: the skills that matter most in the modern world — critical thinking, creativity, collaboration, and confidence — are rarely taught in traditional classrooms.",
      "We set out to fix that. Not by replacing schools, but by building programs that complement formal education with real-world, play-based experiences that stick.",
      "Today, we partner with schools, corporations, and institutions across Thailand to deliver programs that are genuinely different — science-backed, outcome-driven, and designed for how kids and teens actually learn.",
    ],
    cta: { text: "Meet the team →", href: "/team" },
  },

  values: {
    eyebrow: "▸ What we believe",
    heading: "Four ideas we won't compromise on.",
    items: [
      {
        n: "01",
        title: "Kids are not future adults — they are people, today.",
        body: "We design programs that respect kids as capable, curious humans. We don't talk down. We don't simplify pointlessly.",
      },
      {
        n: "02",
        title: "Play is the most serious learning there is.",
        body: "Every neuroscientist who studies childhood agrees: play is how skills become real. Our programs are play-first by design.",
      },
      {
        n: "03",
        title: "Outcomes beat memorable days.",
        body: "Lots of \"events\" make great photos and forget themselves a week later. We measure what changes in the classroom afterward.",
      },
      {
        n: "04",
        title: "Teachers are partners, not obstacles.",
        body: "We design with teachers from day one. They know things about your kids that we don't — and never will.",
      },
    ],
  },
} as const;
