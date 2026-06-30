import { personal } from "./personal";

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  { label: "GitHub", href: personal.github, icon: "github" },
  { label: "LinkedIn", href: personal.linkedin, icon: "linkedin" },
  { label: "Email", href: `mailto:${personal.email}`, icon: "mail" },
];

export const stats = [
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Production Projects", value: 6, suffix: "+" },
  { label: "Companies", value: 4, suffix: "" },
  { label: "Tech Stack Skills", value: 18, suffix: "+" },
];
