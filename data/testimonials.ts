export type TestimonialAudience = "corporate" | "school" | "parent" | "student";

export type Testimonial = {
  id: string;
  audience: TestimonialAudience;
  quote: string;
  name: string;
  role: string;
  context: string | string[];
  stars?: 1 | 2 | 3 | 4 | 5;
  avatar?: string;
  programSlug?: string;
  personTag?: string; // e.g. "asia" — shown only on that person's bio page, not main testimonials
  extraBadge?: TestimonialAudience; // second badge pill when person spans two audience types
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    audience: "student",
    quote:
      "ก่อนเข้าค่ายผมเป็นคนที่มีหลายไอเดียในหัว แต่ไม่ค่อยกล้าลองทำจริงเพราะชอบคิดไปก่อนว่ามันจะเวิร์กมั้ย มันจะไปรอดมั้ย กลัวทำออกมาไม่ดี แต่พอได้มาอยู่ใน INNOQUEST ทุกคนก็เริ่มจากศูนย์เหมือนกัน มันเลยทำให้ผมรู้ว่าบางทีการเริ่มลงมือสำคัญกว่าการคิดให้พร้อมทุกอย่าง ค่ายนี้ทำให้ผมกล้าพูดความคิดตัวเองมากขึ้น แล้วก็กล้าลองทำอะไรใหม่ๆครับ พี่ๆสอนมุมมอง มายด์เซ็ตของนักธุรกิจการทำ startup ดีมากครับ กล้าคิด กล้าทำ ทำเลย",
    name: "นายนิติพัฒน์ อามาตมนตรี",
    role: "Student",
    context: ["Break the Market Vol.1", "ACS Panel Discussion"],
    stars: 5,
    avatar: "/images/testimonials/นายนิติพัฒน์ อามาตมนตรี.jpg",
    programSlug: "break-the-market",
    extraBadge: "school",
  },
  {
    id: "t2",
    audience: "corporate",
    quote:
      "พูดจริงแบบไม่เวอร์ InnoQuest บรรยากาศเป็นกันเองมากตั้งแต่เช้า รู้สึกสนิทกับพี่กลุ่มได้ กล้าแสดงออกแบบเป็นกันเอง มีพี่ guest มาเล่าเรื่องธุรกิจแบบไม่น่าเบื่อ ได้เล่นเกมธุรกิจกับเพื่อนๆในกลุ่ม Workshop ก็ไม่ใช่ workshop แบบน่าเบื่อทั่วๆไป รู้สึกได้ทั้งความสนุกแล้วก็ความรู้ทางธุรกิจที่โรงเรียนไม่มีสอน อยากให้มีกิจกรรมแบบนี้อีกเยอะๆเพื่อน้องๆรุ่นถัดไป",
    name: "Mike",
    role: "Student",
    context: "Swipe Next Gen Camp · Assumption College Series",
    stars: 5,
    avatar: "/images/testimonials/mike.jpg",
  },
  {
    id: "t3",
    audience: "school",
    quote:
      "ผมขอบคุณพี่ ๆ วิทยากรที่มาให้ความรู้ สิ่งที่ผมชอบมากที่สุดคือวิทยากรให้ความสำคัญกับ ''กรอบความคิด'' หรือ mindset เพราะหากมีเพียงความคิดแต่ไม่ลงมือทำ ก็ยากที่จะเกิดการเปลี่ยนแปลงได้จริง วิทยากรสื่อสารได้ลื่นไหล จังหวะการพูดชัดเจน เข้าใจง่าย และเป็นกันเอง ทำให้ผู้ฟังรู้สึกเข้าถึงได้ตลอดทั้งกิจกรรม แม้งานจะสิ้นสุดลงแล้ว พี่ๆยังให้การสนับสนุนธุรกิจของผู้ที่สนใจด้วยความจริงใจ แสดงให้เห็นถึงความตั้งใจในการส่งต่อโอกาสให้กับรุ่นน้องอย่างแท้จริงครับ",
    name: "นาย ภีมวิภู ประณมศรี",
    role: "Student",
    context: "ACS Panel Discussion",
    stars: 5,
    avatar: "/images/testimonials/นาย ภีมวิภู ประณมศรี.jpg",
  },
  {
    id: "t4",
    audience: "school",
    quote:
      "เอาห้าดาวไปเลยฮะ พี่กลุ่มน่ารักเป็นกันเอง คุยสนุก สอนเข้าใจ เนื้อหาสอนดีเข้าใจไม่ยาก ถ้าไม่เข้าใจพี่ๆจะช่วยเรา บรรยากาศสนุก ไม่ได้ซีเรียสจนเกินไป ได้ทำกิจกรรมสนุกๆเยอะ ฟีลกูดด",
    name: "Tonkla",
    role: "Student",
    context: "Break the Market · Assumption Series",
    stars: 5,
    avatar: "/images/testimonials/tonkla.jpg",
    programSlug: "break-the-market",
  },
  {
    id: "t5",
    audience: "school",
    quote:
      "เต็ม 5 ไม่หัก — Innoquest บรรยากาศเป็นกันเอง มีกิจกรรมละลายพฤติกรรมทำให้สนิทกันเร็วกับเพื่อนและพี่ที่เพิ่งเคยเจอกัน จนกล้าแสดงออกทางความคิดเห็นมากขึ้น เนื้อหาธุรกิจที่สอนรู้สึกเหมาะกับโลกปัจจุบัน นำไปใช้ได้จริง และมีประสบการณ์จริงของพี่มาเป็นตัวอย่างให้ดู ได้เล่นเกมธุรกิจกับเพื่อนในกลุ่ม เห็นความคิดทางธุรกิจของทุกคน และสามารถนำไปต่อยอดได้โดยมีพี่จาก InnoQuest แนะนำอย่างใกล้ชิด",
    name: "Seen",
    role: "Student",
    context: "Break the Market Vol.1· Assumption College Series",
    stars: 5,
    avatar: "/images/testimonials/seen.jpg",
    programSlug: "break-the-market",
  },
  {
    id: "t6",
    audience: "school",
    quote:
      "เรื่องราวและมุมมองที่พี่ ๆ นำมาแบ่งปันในครั้งนี้ ไม่เพียงเป็นองค์ความรู้ที่น่าสนใจ แต่ยังเป็นแรงบันดาลใจสำคัญที่ช่วยเปิดโลกทัศน์ใหม่ ๆ ให้น้อง ๆ ได้กล้าคิด กล้าลอง กล้าก้าวออกจากกรอบเดิม บรรยากาศการพูดคุยที่เป็นกันเอง สนุกสนาน ทำให้น้องๆเรียนรู้อย่างมีความสุข มิสเชื่อว่ากิจกรรมในครั้งนี้จะเป็นอีกหนึ่งจุดเริ่มต้นที่ช่วยจุดประกายความฝัน เติมไฟแห่งความกล้า และสร้างแรงผลักดันให้น้องๆค้นพบศักยภาพของตนเอง",
    name: "มิสธันย์ชนก ภูแก้ว",
    role: "Teacher · ACS",
    context: "Founder's Talk Panel Discussion",
    stars: 5,
    avatar: "/images/testimonials/มิสธันย์ชนก.jpg",
  },
  {
    id: "t7",
    audience: "student",
    quote:
      "ตั้งแต่ที่ได้เริ่มเรียนกับพี่เอเชียมา ผมรู้สึกได้ถึงความเป็นกันเอง เหมือนพี่น้อง พี่เอเชียจะค่อย ๆ crack ตัวตนของเราออกมา และนำมาดูว่ามีอะไรที่ต้องเสริม สิ่งที่ผมชอบมาก ๆ คือพี่เอเชียไม่ใช่คนที่จะมาบอกเราว่าต้องทำอะไรทุกอย่าง แต่เปิดโอกาสให้เราได้ลองทำด้วยตัวเอง และเมื่อเจออุปสรรค พี่ก็จะคอยเข้ามาช่วยแก้ไขจุดบอด การเรียนกับพี่เอเชียที่ผ่านมาเป็นเหมือนจิ๊กซอว์ชิ้นสำคัญที่ช่วยให้ผมประสบความสำเร็จในการเข้าคณะ BASCII ได้ในที่สุด",
    name: "Fui",
    role: "Student",
    context: "Project Consultation",
    stars: 5,
    avatar: "/images/testimonials/Fui.jpg",
    personTag: "asia",
  },
  {
    id: "t8",
    audience: "student",
    quote:
      "เป็นหนึ่งวันที่ผมได้เรียนรู้อะไรมากมายจริงๆ ตั้งแต่การได้รับความรู้จากคนที่ทำ Startup และประสบความสำเร็จ ซึ่งเป็นแรงบันดาลใจให้กับผมมากๆ กิจกรรมที่ผมชอบที่สุดคือการได้ออกแบบแนวคิดสินค้าด้วยตัวเอง เป็นงานกลุ่มที่ทำให้ผมได้สนิทกับเพื่อนๆมากขึ้น Workshop นี้ไม่ได้ให้แค่ความรู้เท่านั้น แต่ยังให้ทั้งเพื่อนและประสบการณ์ดีๆ ถ้าใครอยากได้ประสบการณ์แบบนี้ก็ไม่ควรพลาดครับ",
    name: "Fui",
    role: "Student",
    context: "Break the Market Vol.1",
    stars: 5,
    avatar: "/images/testimonials/Fui.jpg",
    programSlug: "break-the-market",
  },
  {
    id: "t9",
    audience: "student",
    quote:
      "พี่เอเชียเป็น mentor ที่อธิบายทุกอย่างออกมาได้เข้าใจง่ายมากๆ ไม่ว่าจะเป็นเรื่องที่ยากแค่ไหนก็สามารถทำให้ผมเข้าใจได้ชัดเจนในแบบที่เป็นกันเองสุดๆ ตลอดช่วง mini hackathon พี่คอยช่วยแนะนำและสนับสนุนทีมเราอย่างเต็มที่ ทำให้พวกเราทำงานได้มั่นใจขึ้นมากจริงๆ พี่คือ mentor ที่ดีที่สุดที่พวกเราจะขอได้เลยครับ",
    name: "Trust",
    role: "InCSII Playground Mentee",
    context: "InCSII Playground",
    stars: 5,
    avatar: "/images/testimonials/trust.jpg",
    personTag: "asia",
  },
  {
    id: "t10",
    audience: "student",
    quote:
      "บอกตรงๆ นะครับ ก่อนมาผมก็ลังเลอยู่ เพราะราคามันก็ไม่ใช่น้อยๆ แล้วที่อื่นที่เคยไปมาก็มีแต่วิชาการจ๋าๆ นั่งฟัง lecture ยาวๆ แล้วก็กลับบ้าน แต่พอมาลองเข้าจริงๆ — เฮ้ยแบบนี้ ไม่เคยเจอเลยแหะ ทุก session ถูก design มาอย่างตั้งใจ ไม่ใช่แค่ copy-paste content แต่ถูกปรับให้เข้ากับบริบทของเราจริงๆ ทั้ง case study, กิจกรรม, เกม ทุกอย่างมัน apply ได้จริง guest speaker ก็อีกระดับเลยคับ สื่อสารรู้เรื่อง ดึงดูด แล้วเล่าจากชีวิตจริงของเขา ถ้าชอบลงมือทำ ฟังแล้วเอาไปใช้ได้เลย — แนะนำ Innoquest คับ ไม่เสียใจแน่นอน",
    name: "Santa",
    role: "Student",
    context: "Entrepreneur in Innovation Vol.1",
    stars: 5,
    avatar: "/images/testimonials/Santa.jpg",
    programSlug: "entrepreneur-in-innovation",
  },
  {
    id: "t11",
    audience: "student",
    quote:
      "Innoquest Workshop เป็นค่ายที่จัดขึ้นมาตอบโจทย์คนที่อยากเข้าคณะสาย business มากๆ พี่ๆเฟรนลี่ น่ารัก เป็นกันเองมาก กิจกรรมช่วยให้ได้รู้จักเพื่อนใหม่ๆ ทุกกิจกรรมสนุกมากๆ ช่วยให้ได้วางแผน คิดนอกกรอบ ยังได้ความรู้จาก Guest lecturers ที่มีประสบการณ์ต่างๆ ทำให้ได้รู้จักมุมมองใหม่ๆ จนต้องมาซ้ำรอบ 2 — ตอนแรกก็มีแอบคิดว่ากิจกรรมจะซ้ำมั้ย สรุปคือไม่ซ้ำเลย สนุกเหมือนเดิม มาคนเดียวก็ไม่เหงาเลยค่ะ",
    name: "Mind",
    role: "Student",
    context: "Entrepreneur in Innovation Vol.1 & 2",
    stars: 5,
    avatar: "/images/testimonials/mild.jpg",
    programSlug: "entrepreneur-in-innovation",
  },
  {
    id: "t12",
    audience: "student",
    quote:
      "สนุกมากคับ ได้เรียนรู้เกี่ยวกับ innovation idea และได้ค้นพบตัวเองว่าชอบ BASCII จริงๆ พี่ๆทุกคนก็ดูแลดีมากๆ",
    name: "Putt",
    role: "Student",
    context: "Entrepreneur in Innovation Vol.1",
    stars: 4,
    avatar: "/images/testimonials/putt.jpg",
    programSlug: "entrepreneur-in-innovation",
  },
];

export const audienceGroups: { key: TestimonialAudience | "all"; label: string; tag: string }[] = [
  { key: "student" as const, label: "Students", tag: "STUDENTS" },
  { key: "school" as const, label: "Schools", tag: "SCHOOLS" },
  { key: "corporate" as const, label: "Corporates", tag: "CORPORATE" },
  { key: "parent" as const, label: "Parents", tag: "PARENTS" },
];

export const testimonialsPageMeta = {
  eyebrow: "▸ What people say",
  heading: "Real words from real people.",
} as const;
