export const stats = {
  en: [
    { n: 400, suf: "+", label: "Students trained" },
    { n: 100, suf: "+", label: "Coaching Hours" },
    { n: 96,  suf: "%", label: "Participants Satisfaction" },
    { n: 100, suf: "%", label: "Institute Conversion Rate" },
  ],
  th: [
    { n: 400, suf: "+", label: "นักเรียนที่ฝึกอบรม" },
    { n: 100, suf: "+", label: "ชั่วโมงโค้ชชิ่ง" },
    { n: 96,  suf: "%", label: "ความพึงพอใจของผู้เข้าร่วม" },
    { n: 100, suf: "%", label: "อัตราการใช้ซ้ำของสถาบัน" },
  ],
} as const;

export const satisfactionNote = {
  en: "of teachers say students returned to class more engaged.",
  th: "ของครูที่กล่าวว่านักเรียนกลับสู่ชั้นเรียนด้วยการมีส่วนร่วมที่สูงขึ้น",
} as const;

export const studentsNote = {
  en: "across Thailand since 2024.",
  th: "ทั่วไทย ตั้งแต่ปี 2024",
} as const;

export const schoolsStat = { n: 30, suf: "+", label: "Schools partnered" } as const;
export const schoolsStatTh = { n: 30, suf: "+", label: "โรงเรียนที่เป็นพันธมิตร" } as const;

export const yearsRunningStat = { n: 2, suf: "+ yrs", label: "Running programs" } as const;
export const yearsRunningStatTh = { n: 2, suf: "+ ปี", label: "ดำเนินโปรแกรม" } as const;

export const capitalMindsYearsStat: { n: string; suf: string; label: string } | null = null;
export const capitalMindsStudentsStat: { n: string; suf: string; label: string } | null = null;
