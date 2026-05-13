/** Global proof-points used across Hero, Programs, About, and Testimonials sections. */
export const stats = [
  { n: 400, suf: "+", label: "Students trained" },
  { n: 100, suf: "+", label: "Coaching Hours" },
  { n: 96, suf: "%", label: "Participants Satisfaction" },
  { n: 100, suf: "%", label: "Institute Conversion Rate " },

] as const;

/** Sub-copy for the satisfaction stat tile in ProgramsSection. */
export const satisfactionNote =
  "of teachers say students returned to class more engaged.";

/** Sub-copy for the students stat tile in ProgramsSection. */
export const studentsNote =
  "across Thailand since 2024.";

/** Named stat for school partnerships — used on testimonials page. */
export const schoolsStat = { n: 30, suf: "+", label: "Schools partnered" } as const;

/** Named stat for years running — used on testimonials page. */
export const yearsRunningStat = { n: 2, suf: "+ yrs", label: "Running programs" } as const;
