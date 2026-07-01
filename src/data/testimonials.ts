export interface Highlight {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const highlights: Highlight[] = [
  {
    id: "1",
    title: "Full Stack Expertise",
    description:
      "End-to-end development across React.js, Next.js, Node.js, and NestJS — from pixel-perfect UIs to robust backend APIs and AWS deployments.",
    icon: "⚡",
  },
  {
    id: "2",
    title: "Micro-Frontend Architecture",
    description:
      "Implemented modular micro-frontend patterns at Orchestro.AI, enabling scalable and maintainable codebases across multiple teams.",
    icon: "🧩",
  },
  {
    id: "3",
    title: "Cross-Functional Collaboration",
    description:
      "Proven track record collaborating with designers, backend developers, and product managers to deliver seamless user experiences.",
    icon: "🤝",
  },
  {
    id: "4",
    title: "Production-Ready Delivery",
    description:
      "Shipped 7+ production applications spanning SaaS platforms, social media, IPTV streaming, office management, and enterprise acquisition systems.",
    icon: "🚀",
  },
];
