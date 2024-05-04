export interface SLsEVType {
  title: string;
  date?: string;
  context: string | string[];
}

export const SkillInfo: SLsEVType[] = [
  {
    title: "Languages",
    context: "HTML, CSS, JavaScript, TypeScript, Python, C",
  },
  {
    title: "Front-end Frameworks",
    context: "React.Js, Next.JS",
  },
  {
    title: "Back-end Frameworks",
    context: "Flask, Express",
  },
  {
    title: "DB",
    context: "MySQL",
  },
];

export const LanguagesInfo: SLsEVType[] = [
  {
    title: "Korean",
    context: "Native",
  },
  {
    title: "English",
    context: "Intermediate",
  },
];

export const EducationInfo: SLsEVType[] = [
  {
    title: "High School Dipmloa",
    context:
      "Embedded software development\nin Daegu Software Mesiter High School",
  },
];

export const VolunteeringInfo: SLsEVType[] = [
  {
    title: "Python Grammar lecture - LIKELION US",
    date: "07.2023 ~ 09.2023",
    context: [
      "Teaching Python coding grammar to school students on a weekly basis",
      "This required clear and sometimes assertive communication skills combined with a positive attitude and the ability to adapt quickly to student needs",
    ],
  },
  {
    title: "Python Grammar lecture - LIKELION US",
    date: "07.2023 ~ 09.2023",
    context: [
      "Teaching Python coding grammar to school students on a weekly basis",
    ],
  },
  {
    title: "Python Grammar lecture - LIKELION US",
    date: "07.2023 ~ 09.2023",
    context: [
      "Teaching Python coding grammar to school students on a weekly basis",
      "This required clear and sometimes assertive communication skills combined with a positive attitude and the ability to adapt quickly to student needs",
    ],
  },
];

export interface ExperienceType {
  title: string;
  date: string;
  position: string;
  context: {
    subTitle: string;
    subContext: string[];
  }[];
}

export const ExperienceInfo: ExperienceType[] = [
  {
    title: "UNIVA",
    date: "01.2024 ~ 02.2024",
    position: "Front-end Developer",
    context: [
      {
        subTitle: "Web Task Management Development",
        subContext: ["Flask, JavaScript, React.JS, MySQL", "Single~~"],
      },
      {
        subTitle: "Web Task Management Development",
        subContext: ["Flask, JavaScript, React.JS, MySQL", "Single~~"],
      },
    ],
  },
  {
    title: "CoSignOn",
    date: "07.2023 ~ 09.2023",
    position: "Front-end Developer",
    context: [
      {
        subTitle: "Web Task Management Development",
        subContext: ["Flask, JavaScript, React.JS, MySQL", "Single~~"],
      },
    ],
  },
];
