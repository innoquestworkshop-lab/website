export type TestimonialAudience = "corporate" | "school" | "parent" | "student";

export type Testimonial = {
  id: string;
  audience: TestimonialAudience;
  quote: string;
  name: string;
  role: string;
  context: string;
  stars?: 1 | 2 | 3 | 4 | 5;
  avatar?: string;
  programSlug?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    audience: "student",
    quote:
      "พี่เอเชียป็น mentor ที่อธิบายทุกอย่างออกมาได้เข้าใจง่ายมากๆ ไม่ว่าจะเป็นเรื่องที่ยากแค่ไหนก็สามารถทำให้ผมเข้าใจได้ชัดเจนในแบบที่เป็นกันเองสุดๆ ตลอดช่วง mini hackathon พี่คอยช่วยแนะนำและสนับสนุนทีมเราอย่างเต็มที่ ทำให้พวกเราทำงานได้มั่นใจขึ้นมากจริงๆ พี่คือ mentor ที่ดีที่สุดที่พวกเราจะขอได้เลยครับ.",
    name: "Trust",
    role: "InCSii Playground Mentee",
    context: "InCSii Playground",
  },
  {
    id: "t2",
    audience: "school",
    quote:
      "Students who hadn't spoken up all year were pitching ideas on day two. Something genuinely shifted — we saw it in the classroom for weeks after.",
    name: "Principal",
    role: "Assumption College Sriracha",
    context: "Semester program",
  },
  {
    id: "t3",
    audience: "parent",
    quote:
      "She came home asking to solve problems. I didn't know a camp could do that.",
    name: "Parent of participant, age 12",
    role: "Parent",
    context: "Summer workshop · 5 days",
  },
  {
    id: "t4",
    audience: "school",
    quote:
      "InnoQuest made it easy to align with our curriculum. The program fit seamlessly into our calendar and the students are still talking about it.",
    name: "Head of Curriculum",
    role: "STEM Academy Bangkok",
    context: "Innovation Hackathon · Full school",
  },
  {
    id: "t5",
    audience: "corporate",
    quote:
      "We've run CSR events before but nothing like this. The engagement was real, the outcomes were documented, and it genuinely reflected our company values.",
    name: "CSR Director",
    role: "Regional Bank Thailand",
    context: "Half-day CSR camp · 80 kids",
  },
];
