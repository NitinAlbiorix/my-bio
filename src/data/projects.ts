export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  gradient: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "orchestro-ai",
    title: "Orchestro.AI",
    description:
      "Responsive high-performance web application with micro-frontend architecture for modular, scalable codebases. Optimized UI for performance, accessibility, and cross-browser compatibility.",
    techStack: ["React.js", "Tailwind CSS", "Micro-frontends", "REST APIs"],
    image: "/projects/orchestro.jpg",
    gradient: "from-orange-500/40 via-amber-500/20 to-teal-500/40",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "fanship",
    title: "Fanship",
    description:
      "Social media platform enabling users to connect, build communities, and enhance business productivity. Supports paid content for merchants with multi-language support (English, Japanese, Chinese).",
    techStack: ["React.js", "Redux", "Node.js", "AWS", "DynamoDB", "MUI"],
    image: "/projects/fanship.jpg",
    gradient: "from-rose-500/40 via-orange-500/20 to-amber-500/40",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "mware-iptv",
    title: "MwareIPTV",
    description:
      "Cloud-based multi-tenant TV platform delivering OTT and IPTV middleware solutions. Manages content distribution, live video streaming, and transcoded streams to public, private, or hybrid networks.",
    techStack: ["React.js", "Redux", "TypeScript", "JavaScript", "CSS"],
    image: "/projects/mware.jpg",
    gradient: "from-teal-500/40 via-cyan-500/20 to-blue-500/40",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "bamrec",
    title: "Bamrec",
    description:
      "Platform helping parents and organizers cultivate confidence, character, and creativity in children through engaging activities. Activity browsing filtered by age criteria for parents and organizers.",
    techStack: ["React.js", "Redux", "TypeScript", "Ant Design", "CSS"],
    image: "/projects/bamrec.jpg",
    gradient: "from-amber-500/40 via-yellow-500/20 to-orange-500/40",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "oms",
    title: "Office Management System",
    description:
      "Comprehensive web application managing office services — daily attendance, task management, project tracking, access control, leave management, and company payroll system.",
    techStack: ["React.js", "Redux", "Node.js", "MySQL", "Ant Design"],
    image: "/projects/oms.jpg",
    gradient: "from-emerald-500/40 via-teal-500/20 to-cyan-500/40",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "dental-acquire",
    title: "Dental Acquire System",
    description:
      "Digital acquisition management application built with SharePoint Online, streamlining the dental acquisition process through a comprehensive enterprise workflow system.",
    techStack: ["React.js", "SharePoint", "Office 365", "JavaScript", "HTML", "CSS"],
    image: "/projects/dental.jpg",
    gradient: "from-sky-500/40 via-blue-500/20 to-indigo-500/40",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
];
