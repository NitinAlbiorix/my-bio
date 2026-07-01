"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { projects } from "@/data/projects";

export function Projects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="projects" className="section-alt section-padding">
      <div className="container-max">
        <SectionHeading
          title="My Projects"
          subtitle="Production applications I've built and shipped."
        />

        <div className="space-y-8">
          {projects.map((project, i) => (
            <RevealOnScroll key={project.id} delay={i * 0.05}>
              <article
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="card-simple overflow-hidden"
              >
                <div className="flex flex-col gap-6 p-6 md:flex-row md:items-start">
                  <div
                    className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl text-3xl font-bold text-white"
                    style={{
                      background: `linear-gradient(135deg, #E85D04, #FF8C42)`,
                    }}
                  >
                    {project.title.charAt(0)}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold text-foreground">
                        {project.title}
                      </h3>
                      {project.recent && (
                        <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-semibold text-primary">
                          Recent
                        </span>
                      )}
                    </div>
                    {(project.role || project.period) && (
                      <p className="mt-1 text-sm font-medium text-primary/90">
                        {[project.role, project.period].filter(Boolean).join(" · ")}
                      </p>
                    )}
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <motion.div
                    animate={{ opacity: hoveredId === project.id ? 1 : 0.6 }}
                    className="flex gap-2"
                  >
                    <a
                      href={project.liveUrl}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-primary hover:text-primary"
                      aria-label={`Live demo of ${project.title}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-primary hover:text-primary"
                      aria-label={`GitHub for ${project.title}`}
                    >
                      <GitBranch className="h-4 w-4" />
                    </a>
                  </motion.div>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
