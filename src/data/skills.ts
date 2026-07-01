export interface Skill {
  name: string;
  icon: string;
  years: number;
  color: string;
}

export const skills: Skill[] = [
  { name: "React.js", icon: "⚛️", years: 5, color: "#61DAFB" },
  { name: "Next.js", icon: "▲", years: 4, color: "#F8FAFC" },
  { name: "TypeScript", icon: "TS", years: 5, color: "#3178C6" },
  { name: "JavaScript", icon: "JS", years: 5, color: "#F7DF1E" },
  { name: "Node.js", icon: "🟢", years: 5, color: "#339933" },
  { name: "NestJS", icon: "🐈", years: 4, color: "#E0234E" },
  { name: "Redux", icon: "◈", years: 5, color: "#764ABC" },
  { name: "Tailwind CSS", icon: "🎨", years: 4, color: "#38BDF8" },
  { name: "Material UI", icon: "M", years: 4, color: "#007FFF" },
  { name: "MySQL", icon: "🐬", years: 4, color: "#4479A1" },
  { name: "AWS", icon: "☁️", years: 4, color: "#FF9900" },
];

export const expertise = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "NestJS",
  "Redux",
  "Redux Toolkit",
  "Tailwind CSS",
  "Material UI",
  "MySQL",
  "AWS",
  "HTML",
  "CSS",
  "JavaScript",
  "GitHub",
  "Micro-frontends",
  "CI/CD",
];
