export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Micro-Frontend Architecture with React",
    excerpt:
      "Lessons from building modular, scalable frontends at Orchestro.AI — patterns for team autonomy and independent deployments.",
    date: "Jul 10, 2025",
    readTime: "8 min",
    tags: ["React", "Architecture", "Micro-frontends"],
    slug: "micro-frontend-react",
  },
  {
    id: "2",
    title: "Building Scalable APIs with NestJS",
    excerpt:
      "Best practices for modular backend architecture, dependency injection, and AWS deployment from production experience at Albiorix.",
    date: "Jun 15, 2025",
    readTime: "7 min",
    tags: ["NestJS", "Node.js", "AWS"],
    slug: "scalable-apis-nestjs",
  },
  {
    id: "3",
    title: "Next.js + Tailwind for Enterprise Apps",
    excerpt:
      "How I build responsive, high-performance web applications using Next.js and Tailwind CSS in production environments.",
    date: "May 28, 2025",
    readTime: "6 min",
    tags: ["Next.js", "Tailwind CSS", "Performance"],
    slug: "nextjs-tailwind-enterprise",
  },
  {
    id: "4",
    title: "Redux Toolkit in Large React Apps",
    excerpt:
      "State management patterns that scale — from Fanship's social features to IPTV platform content management.",
    date: "Apr 10, 2025",
    readTime: "9 min",
    tags: ["Redux", "React", "State Management"],
    slug: "redux-toolkit-large-apps",
  },
];
