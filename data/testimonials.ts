export type TestimonialAudience = "corporate" | "school" | "parent";

export type Testimonial = {
  id: string;
  audience: TestimonialAudience;
  quote: string;
  name: string;
  role: string;
  context: string;
  programSlug?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    audience: "corporate",
    quote:
      "The kids came back energized and our CSR team had a story worth telling. ROI was immediate and the impact report made it easy to share with leadership.",
    name: "Head of HR",
    role: "MNC Thailand",
    context: "200-person CSR program",
    programSlug: "corporate-csr-camp",
  },
  {
    id: "t2",
    audience: "school",
    quote:
      "Students who hadn't spoken up all year were pitching ideas on day two. Something genuinely shifted — we saw it in the classroom for weeks after.",
    name: "Principal",
    role: "Bangkok International School",
    context: "Semester program",
    programSlug: "leadership-program",
  },
  {
    id: "t3",
    audience: "parent",
    quote:
      "She came home asking to solve problems. I didn't know a camp could do that. She's been different ever since — more curious, more confident.",
    name: "Parent of participant, age 12",
    role: "Parent",
    context: "Summer workshop · 5 days",
    programSlug: "creative-thinking-workshop",
  },
  {
    id: "t4",
    audience: "school",
    quote:
      "InnoQuest made it easy to align with our curriculum. The program fit seamlessly into our calendar and the students are still talking about it.",
    name: "Head of Curriculum",
    role: "STEM Academy Bangkok",
    context: "Innovation Hackathon · Full school",
    programSlug: "innovation-hackathon",
  },
  {
    id: "t5",
    audience: "corporate",
    quote:
      "We've run CSR events before but nothing like this. The engagement was real, the outcomes were documented, and it genuinely reflected our company values.",
    name: "CSR Director",
    role: "Regional Bank Thailand",
    context: "Half-day CSR camp · 80 kids",
    programSlug: "corporate-csr-camp",
  },
];
