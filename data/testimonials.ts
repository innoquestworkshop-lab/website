export type TestimonialAudience = "corporate" | "school" | "parent" | "student";

export type Testimonial = {
  id: string;
  audience: TestimonialAudience;
  quote: string;
  name: string;
  role: string;
  context: string | string[];
  stars?: 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5 | 5.5 | 6;
  avatar?: string;
  programSlug?: string;
  personTag?: string;
  extraBadge?: TestimonialAudience;
  tag?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    audience: "student",
    quote: "ก่อนเข้าค่ายผมเป็นคนที่มีหลายไอเดียในหัว แต่ไม่ค่อยกล้าลองทำจริงเพราะชอบคิดไปก่อนว่ามันจะเวิร์กมั้ย มันจะไปรอดมั้ย กลัวทำออกมาไม่ดี แต่พอได้มาอยู่ใน INNOQUEST ทุกคนก็เริ่มจากศูนย์เหมือนกัน มันเลยทำให้ผมรู้ว่าบางทีการเริ่มลงมือสำคัญกว่าการคิดให้พร้อมทุกอย่าง ค่ายนี้ทำให้ผมกล้าพูดความคิดตัวเองมากขึ้น แล้วก็กล้าลองทำอะไรใหม่ๆครับ พี่ๆสอนมุมมอง มายด์เซ็ตของนักธุรกิจการทำ startup ดีมากครับ กล้าคิด กล้าทำ ทำเลย",
    name: "นายนิติพัฒน์ อามาตมนตรี",
    role: "Student",
    context: ["Break the Market Vol.1", "Founder's Talk Panel Discussion"],
    stars: 5,
    avatar: "/images/testimonials/นายนิติพัฒน์ อามาตมนตรี.jpg",
    programSlug: "break-the-market",
    extraBadge: "school",
  },
  {
    id: "t2",
    audience: "corporate",
    quote: "พูดจริงแบบไม่เวอร์ InnoQuest บรรยากาศเป็นกันเองมากตั้งแต่เช้า รู้สึกสนิทกับพี่กลุ่มได้ กล้าแสดงออกแบบเป็นกันเอง มีพี่ guest มาเล่าเรื่องธุรกิจแบบไม่น่าเบื่อ ได้เล่นเกมธุรกิจกับเพื่อนๆในกลุ่ม Workshop ก็ไม่ใช่ workshop แบบน่าเบื่อทั่วๆไป รู้สึกได้ทั้งความสนุกแล้วก็ความรู้ทางธุรกิจที่โรงเรียนไม่มีสอน อยากให้มีกิจกรรมแบบนี้อีกเยอะๆเพื่อน้องๆรุ่นถัดไป",
    name: "Mike",
    role: "Student",
    context: "Swipe Next Gen Summer Camp · Assumption College Series",
    stars: 5,
    avatar: "/images/testimonials/mike.jpg",
  },
  {
    id: "t3",
    audience: "school",
    quote: "ผมขอบคุณพี่ ๆ วิทยากรที่มาให้ความรู้ สิ่งที่ผมชอบมากที่สุดคือวิทยากรให้ความสำคัญกับ ''กรอบความคิด'' หรือ mindset เพราะหากมีเพียงความคิดแต่ไม่ลงมือทำ ก็ยากที่จะเกิดการเปลี่ยนแปลงได้จริง วิทยากรสื่อสารได้ลื่นไหล จังหวะการพูดชัดเจน เข้าใจง่าย และเป็นกันเอง ทำให้ผู้ฟังรู้สึกเข้าถึงได้ตลอดทั้งกิจกรรม",
    name: "นาย ภีมวิภู ประณมศรี",
    role: "Student",
    context: "Founder's Talk Panel Discussion",
    stars: 5,
    avatar: "/images/testimonials/นาย ภีมวิภู ประณมศรี.jpg",
  },
  {
    id: "t4",
    audience: "school",
    quote: "เอาห้าดาวไปเลยฮะ พี่กลุ่มน่ารักเป็นกันเอง คุยสนุก สอนเข้าใจ เนื้อหาสอนดีเข้าใจไม่ยาก ถ้าไม่เข้าใจพี่ๆจะช่วยเรา บรรยากาศสนุก ไม่ได้ซีเรียสจนเกินไป ได้ทำกิจกรรมสนุกๆเยอะ ฟีลกูดด",
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
    quote: "เต็ม 5 ไม่หัก — Innoquest บรรยากาศเป็นกันเอง มีกิจกรรมละลายพฤติกรรมทำให้สนิทกันเร็วกับเพื่อนและพี่ที่เพิ่งเคยเจอกัน จนกล้าแสดงออกทางความคิดเห็นมากขึ้น เนื้อหาธุรกิจที่สอนรู้สึกเหมาะกับโลกปัจจุบัน นำไปใช้ได้จริง",
    name: "Seen",
    role: "Student",
    context: "Break the Market Vol.1 · Assumption College Series",
    stars: 5,
    avatar: "/images/testimonials/seen.jpg",
    programSlug: "break-the-market",
  },
  {
    id: "t6",
    audience: "school",
    quote: "เรื่องราวและมุมมองที่พี่ ๆ นำมาแบ่งปันในครั้งนี้ ไม่เพียงเป็นองค์ความรู้ที่น่าสนใจ แต่ยังเป็นแรงบันดาลใจสำคัญที่ช่วยเปิดโลกทัศน์ใหม่ ๆ ให้น้อง ๆ ได้กล้าคิด กล้าลอง กล้าก้าวออกจากกรอบเดิม",
    name: "มิสธันย์ชนก ภูแก้ว",
    role: "Teacher · Assumption College Sriracha",
    context: "Founder's Talk Panel Discussion",
    stars: 5,
    avatar: "/images/testimonials/มิสธันย์ชนก.jpg",
    tag: "Teacher",
  },
  {
    id: "t7",
    audience: "student",
    quote: "ตั้งแต่ที่ได้เริ่มเรียนกับพี่เอเชียมา ผมรู้สึกได้ถึงความเป็นกันเอง เหมือนพี่น้อง พี่เอเชียจะค่อย ๆ crack ตัวตนของเราออกมา และนำมาดูว่ามีอะไรที่ต้องเสริม สิ่งที่ผมชอบมาก ๆ คือพี่เอเชียไม่ใช่คนที่จะมาบอกเราว่าต้องทำอะไรทุกอย่าง แต่เปิดโอกาสให้เราได้ลองทำด้วยตัวเอง",
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
    quote: "เป็นหนึ่งวันที่ผมได้เรียนรู้อะไรมากมายจริงๆ ตั้งแต่การได้รับความรู้จากคนที่ทำ Startup และประสบความสำเร็จ ซึ่งเป็นแรงบันดาลใจให้กับผมมากๆ กิจกรรมที่ผมชอบที่สุดคือการได้ออกแบบแนวคิดสินค้าด้วยตัวเอง",
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
    quote: "พี่เอเชียเป็น mentor ที่อธิบายทุกอย่างออกมาได้เข้าใจง่ายมากๆ ไม่ว่าจะเป็นเรื่องที่ยากแค่ไหนก็สามารถทำให้ผมเข้าใจได้ชัดเจนในแบบที่เป็นกันเองสุดๆ ตลอดช่วง mini hackathon พี่คอยช่วยแนะนำและสนับสนุนทีมเราอย่างเต็มที่",
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
    quote: "บอกตรงๆ นะครับ ก่อนมาผมก็ลังเลอยู่ เพราะราคามันก็ไม่ใช่น้อยๆ แล้วที่อื่นที่เคยไปมาก็มีแต่วิชาการจ๋าๆ นั่งฟัง lecture ยาวๆ แล้วก็กลับบ้าน แต่พอมาลองเข้าจริงๆ — เฮ้ยแบบนี้ ไม่เคยเจอเลยแหะ",
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
    quote: "Innoquest Workshop เป็นค่ายที่จัดขึ้นมาตอบโจทย์คนที่อยากเข้าคณะสาย business มากๆ พี่ๆเฟรนลี่ น่ารัก เป็นกันเองมาก กิจกรรมช่วยให้ได้รู้จักเพื่อนใหม่ๆ ทุกกิจกรรมสนุกมากๆ ช่วยให้ได้วางแผน คิดนอกกรอบ",
    name: "Mind",
    role: "Student",
    context: "Entrepreneur in Innovation Vol.1 & 2",
    stars: 6,
    avatar: "/images/testimonials/mild.jpg",
    programSlug: "entrepreneur-in-innovation",
  },
  {
    id: "t12",
    audience: "student",
    quote: "สนุกมากคับ ได้เรียนรู้เกี่ยวกับ innovation idea และได้ค้นพบตัวเองว่าชอบ BASCII จริงๆ พี่ๆทุกคนก็ดูแลดีมากๆ",
    name: "Putt",
    role: "Student",
    context: "Entrepreneur in Innovation Vol.1",
    stars: 4.5,
    avatar: "/images/testimonials/putt.jpg",
    programSlug: "entrepreneur-in-innovation",
  },
  {
    id: "t13",
    audience: "student",
    quote: "มา Innoquest แล้วได้รู้อะไรใหม่ๆเยอะมาก เพราะจากเดิมไม่ได้มีความรู้ด้านธุรกิจอะไรเลย แต่พอมาทำกิจกรรมได้ลองเล่นกิจกรรมแล้วก็ฟังข้อมูลจาก guest speaker คือไม่เบื่อเลยย",
    name: "Plearn",
    role: "Student",
    context: "Entrepreneur in Innovation Vol.2",
    stars: 5,
    avatar: "/images/testimonials/plearn.jpg",
    programSlug: "entrepreneur-in-innovation",
  },
  {
    id: "t14",
    audience: "student",
    quote: "InnoQuest Sanook Mak Kub2, we do productive activities which were useful for my future. the staff were very friendly and helpful, and I made a lot of friends",
    name: "Obi",
    role: "Student",
    context: "Entrepreneur in Innovation Vol.1",
    stars: 5,
    avatar: "/images/testimonials/Obi.jpg",
    programSlug: "entrepreneur-in-innovation",
  },
  {
    id: "t15",
    audience: "student",
    quote: "พวกเราได้พี่เอเชียมาเป็นพี่mentorตอนเข้าค่ายincsii ความประทับใจแรกของกลุ่มเราเลยคือตั่งแต่ตอนที่พี่ๆแต่ล่ะคนให้คำแนะนำแล้วพี่เอเชียช่วยไกด์ให้ทุกคนในทีมเห็นภาพมากๆ",
    name: "Shogun",
    role: "InCSII Playground Mentee",
    context: "InCSII Playground",
    stars: 5,
    avatar: "/images/testimonials/shogun.jpg",
    personTag: "asia",
  },
  {
    id: "t17",
    audience: "corporate",
    quote: "A huge thank you to Team InnoQuest for supporting Swipe Next Gen through the finance sessions. Working with the team was smooth and comfortable throughout the process — everyone was very friendly, approachable, and well-prepared.",
    name: "Swipe Next Gen",
    role: "Partner Organization",
    context: "Swipe Next Gen Summer Camp · Finance Sessions",
    stars: 5,
    avatar: "/images/testimonials/swipe-next-gen-logo.jpg",
    tag: "Corporate",
  },
  {
    id: "t16",
    audience: "student",
    quote: "ค่าย innoquest เป็นค่ายที่ทั้งสนุกแล้วก็ได้ความรู้เยอะมากมากเลย เพราะพี่พี่พาทำ workshop ที่สนุกแต่ก็ยังได้ประโยชน์ แล้วก็ได้ฟังประสบการ์ณจากคนที่ทำ business จริงๆ",
    name: "Ulie",
    role: "Student",
    context: "Entrepreneur in Innovation",
    stars: 5,
    avatar: "/images/testimonials/ulie.jpg",
    programSlug: "entrepreneur-in-innovation",
  },
];

export const audienceGroups: Record<"en" | "th", { key: TestimonialAudience | "all"; label: string; tag: string }[]> = {
  en: [
    { key: "student",   label: "Students",    tag: "WORKSHOP"  },
    { key: "school",    label: "Schools",     tag: "SCHOOLS"   },
    { key: "corporate", label: "Corporates",  tag: "CORPORATE" },
    { key: "parent",    label: "Parents",     tag: "PARENTS"   },
  ],
  th: [
    { key: "student",   label: "นักเรียน",  tag: "เวิร์กชอป" },
    { key: "school",    label: "โรงเรียน",  tag: "โรงเรียน"  },
    { key: "corporate", label: "องค์กร",    tag: "องค์กร"    },
    { key: "parent",    label: "ผู้ปกครอง", tag: "ผู้ปกครอง" },
  ],
};

export const testimonialsPageMeta = {
  en: {
    eyebrow: "▸ What people say",
    heading: "Real words from real people.",
  },
  th: {
    eyebrow: "▸ สิ่งที่คนพูด",
    heading: "คำพูดจริงจากคนจริง",
  },
} as const;
