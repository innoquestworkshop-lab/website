export const stats = {
  en: [
    { n: 400, suf: "+", label: "Students trained" },
    { n: 100, suf: "+", label: "Session hours" },
    { n: 96,  suf: "%", label: "Participants Satisfaction" },
    { n: 100, suf: "%", label: "Pilot institutions rebooked" },
  ],
  th: [
    { n: 400, suf: "+", label: "นักเรียนที่ผ่านการอบรม" },
    { n: 100, suf: "+", label: "ชั่วโมงการอบรม" },
    { n: 96,  suf: "%", label: "ความพึงพอใจของผู้เข้าร่วม" },
    { n: 100, suf: "%", label: "สถาบันนำร่องที่กลับมาจองซ้ำ" },
  ],
} as const;

export const satisfactionNote = {
  en: "from student ratings.",
  th: "จากคะแนนที่นักเรียนให้",
} as const;

export const studentsNote = {
  en: "across Thailand since 2024.",
  th: "ทั่วไทย ตั้งแต่ปี 2024",
} as const;

export const schoolsStat = { n: 30, suf: "+", label: "Schools reached" } as const;
export const schoolsStatTh = { n: 30, suf: "+", label: "โรงเรียนที่เราไปถึง" } as const;

export const yearsRunningStat = { n: 2, suf: "+ yrs", label: "Running programs" } as const;
export const yearsRunningStatTh = { n: 2, suf: "+ ปี", label: "ที่จัดโปรแกรมมา" } as const;

export const capitalMindsYearsStat: { n: string; suf: string; label: string } | null = null;
export const capitalMindsStudentsStat: { n: string; suf: string; label: string } | null = null;
