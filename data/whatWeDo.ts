/** What We Do page content. */
export const whatWeDoPage = {
  hero: {
    eyebrow: "▸ Empowering innovators",
    heading: 'Turning "unteachable" skills into unforgettable experiences.',
    headingAccent: "unforgettable experiences.",
    sub: "Whether it's a high-energy workshop, a week-long residential camp, or a national innovation competition, InnoQuest transforms complex concepts into immersive learning journeys for schools, corporations, and communities.",
    cta1: { text: "Talk to us →", href: "/contact" },
    cta2: { text: "See programs", href: "/programs" },
    image: {
      tag: "WHAT WE DO · HERO",
      caption:
        "// wide action shot showing InnoQuest in action: facilitators + students in mid-session energy. Real, candid.",
    },
  },

  process: {
    eyebrow: "▸ How we work",
    heading: "From concept to\ncoordination.",
    sub: "Every InnoQuest engagement follows the same three-phase approach — tailored to your context, executed to the highest standard.",
    steps: [
      {
        num: "01",
        title: "Design & Development",
        body: "We always start by listening to what you want to achieve. We adapt programs based on your timeline, participants, and setting to make sure it's exactly what you're looking for.",
      },
      {
        num: "02",
        title: "Facilitation & Logistics",
        body: "We've got it covered from start to finish. Whether it's venues, logistics, or mentors and speakers, we handle it all so you can stay focused on the big picture.",
      },
      {
        num: "03",
        title: "Impact & Analytics",
        body: "Every journey concludes with a comprehensive report measuring skill growth, participant engagement, and facilitator observations — tangible metrics that prove real-world impact and ROI.",
      },
    ],
  },

  coreServices: {
    eyebrow: "▸ Our core services",
    heading: "Two ways to\ntransform learning.",
    sub: "Whether you need fully custom IP or world-class delivery, we have the team and the track record to make it happen.",
    items: [
      {
        tag: "DESIGN",
        title: "Content, Game Design & Licensing",
        body: "Build your own ecosystem using our battle-tested IP. This includes Custom Game Design, In-House Product Licensing for proven formats, and Learning Journey Development as a Service. We help you architect a curriculum from scratch that integrates innovation directly into your organization's DNA.",
        cta: "View Design services",
        href: "/services#design",
      },
      {
        tag: "DELIVERY",
        title: "Delivery, Coordination & Talent",
        body: "Professional execution for any scale. Our versatile team delivers Camps, Workshops, Competitions, and Hackathons. We provide the full infrastructure: Event Organizing, Mentor and Speaker Services, and Course Hours tailored to bring your boldest ideas to life.",
        cta: "View Event services",
        href: "/services#delivery",
      },
    ],
  },

  learningPath: {
    eyebrow: "▸ Your learning path",
    heading: "We build it\naround you.",
    sub: "No two organisations are the same. We don't hand you a catalog — we sit down with you and design a journey that maps to your goals, your people, and your timeline.",
    steps: [
      {
        num: "01",
        title: "Discovery",
        body: "We learn your objectives, audience, constraints, and what success looks like for you.",
      },
      {
        num: "02",
        title: "Design",
        body: "We propose a learning journey — format, content, and milestones — built to your specs.",
      },
      {
        num: "03",
        title: "Delivery",
        body: "Our team handles everything on the ground: facilitation, logistics, and real-time adaptation.",
      },
      {
        num: "04",
        title: "Measure",
        body: "A documented impact report gives you data on skill growth, engagement, and ROI.",
      },
    ],
    cta1: { text: "Start the conversation →", href: "/contact" },
    cta2: { text: "Custom solutions", href: "/custom" },
  },
} as const;
