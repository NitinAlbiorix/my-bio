export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
  type: "work" | "education" | "achievement";
  current?: boolean;
}

export const timeline: TimelineItem[] = [
  {
    id: "albiorix",
    year: "Jan 2021 — Present",
    title: "Sr. Software Engineer",
    organization: "Albiorix Technology Pvt. Ltd, Ahmedabad",
    description:
      "Develop and maintain frontend applications using React.js, Next.js, and Tailwind CSS. Build backend services and APIs with Node.js and NestJS. Deploy and scale applications on AWS. Apply CI/CD best practices for efficient delivery.",
    type: "work",
    current: true,
  },
  {
    id: "orchestro",
    year: "Nov 2024 — Jul 2025",
    title: "Senior Frontend Developer",
    organization: "Orchestro.AI",
    description:
      "Built responsive web applications with React.js and Tailwind CSS. Implemented micro-frontend architecture for modular, scalable codebases. Optimized UI for performance, accessibility, and cross-browser compatibility.",
    type: "work",
  },
  {
    id: "cognisun",
    year: "Oct 2020 — Jan 2021",
    title: "Junior Software Developer",
    organization: "Cognisun Infotech Pvt Ltd, Ahmedabad",
    description:
      "Worked on both frontend and backend development using React.js and Node.js, delivering full-stack features for client projects.",
    type: "work",
  },
  {
    id: "codevision",
    year: "Jan 2020 — Jul 2020",
    title: "Junior Software Developer (Intern)",
    organization: "The Codevision Technologies Pvt. Ltd, Ahmedabad",
    description:
      "Gained hands-on experience in software development, contributing to web application projects during the internship period.",
    type: "work",
  },
  {
    id: "mca",
    year: "May 2020",
    title: "MCA — Computer Application",
    organization: "Nirma University",
    description: "Master of Computer Applications with focus on software engineering and application development. Grade: 6.79 / 10.00",
    type: "education",
  },
  {
    id: "bca",
    year: "Jan 2015",
    title: "BCA — Computer Science",
    organization: "Shree R P Bhalodia College of Commerce and Business Management",
    description: "Bachelor of Computer Applications building foundation in computer science. Grade: 75.41 / 100.00",
    type: "education",
  },
];
