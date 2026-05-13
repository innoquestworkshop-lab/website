/** Schools & Institutions page content. */
export const schoolsPage = {
  hero: {
    eyebrow: "▸ For schools & institutions",
    heading: "Programs that enhance what you already do.",
    headingAccent: "enhance what you already do.",
    sub: "Our learning designers align with your curriculum, teachers, and academic calendar — so every InnoQuest program feels like a natural extension of your school.",
    cta1: { text: "Talk to us →", href: "/contact" },
    cta2: { text: "See programs", href: "/programs" },
    image: {
      tag: "SCHOOLS · HERO",
      caption:
        "// classroom shot — teacher + facilitator working with students at desks arranged in clusters. Real engagement, not posed.",
    },
  },

  modes: {
    eyebrow: "▸ How we work",
    heading: "Short, medium,\nor semester-long.",
    sub: "Pick the format that fits your calendar. All modes are curriculum-aligned, teacher-briefed, and outcomes-measured.",
    items: [
      {
        tag: "SHORT",
        title: "One-day workshops",
        duration: "1 day",
        desc: "A high-energy standalone session designed to spark curiosity and challenge students to think differently. Perfect for curriculum breaks, talent days, or open days.",
        outcomes: ["Focused skill activation", "High energy, high engagement", "Minimal admin overhead"],
        bg: "#F5F0EA",
        ink: "#121212",
      },
      {
        tag: "MEDIUM",
        title: "Short programs",
        duration: "3–5 days",
        desc: "A condensed sprint that delivers real depth. Students tackle a meaningful challenge across multiple sessions, building teamwork and critical thinking.",
        outcomes: ["Team-based problem solving", "Curriculum-aligned outcomes", "Mid-term or holiday sprint"],
        bg: "#121212",
        ink: "#F5F0EA",
      },
      {
        tag: "LONG",
        title: "Semester programs",
        duration: "8–16 weeks",
        desc: "The full InnoQuest experience. Embedded into your academic calendar, students develop skills across a sustained journey with reflection, iteration, and a finale.",
        outcomes: ["Deep behavioral change", "Teacher co-facilitation", "Measured outcomes + report"],
        bg: "#E8E0D5",
        ink: "#121212",
      },
    ],
  },

  teacherCollab: {
    eyebrow: "▸ Teacher collaboration",
    heading: "We work with teachers, \nnot around them.",
    body: "Before any program begins, we run a teacher-briefing session to align on your students, your curriculum, and your goals. During delivery, teachers co-facilitate alongside our team so the learning continues in the classroom.",
    cta: { text: "Start a conversation →", href: "/contact" },
    image: {
      tag: "TEACHER COLLAB",
      caption:
        "// planning session: teacher + InnoQuest facilitator at a whiteboard, mapping out curriculum alignment. Informal, collaborative mood.",
    },
  },

  learningPath: {
    eyebrow: "▸ Your learning path",
    heading: "We fit into\nyour school.",
    sub: "We don't show up with a fixed program. We sit with your teachers, understand your curriculum and calendar, and then design exactly what your students need.",
    steps: [
      {
        num: "01",
        title: "Align",
        body: "We meet your curriculum coordinators and teachers to understand your learning goals and constraints.",
      },
      {
        num: "02",
        title: "Design",
        body: "A custom learning journey is proposed — format, timing, content — aligned to your academic calendar.",
      },
      {
        num: "03",
        title: "Co-deliver",
        body: "Our facilitators work alongside your teachers. Students see a unified team, not an outside interruption.",
      },
      {
        num: "04",
        title: "Report",
        body: "You receive learning outcome data, facilitator observations, and a report you can use for school reports.",
      },
    ],
    cta1: { text: "Talk to our team →", href: "/contact" },
    cta2: { text: "Custom solutions", href: "/custom" },
  },
} as const;
