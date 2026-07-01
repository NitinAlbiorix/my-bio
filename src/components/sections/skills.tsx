"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { skills } from "@/data/skills";
import { personal } from "@/data/personal";

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <SectionHeading title="Skills." />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill, i) => (
            <RevealOnScroll key={skill.name} delay={i * 0.03}>
              <div className="group relative cursor-default">
                <div
                  className="card-simple flex min-h-[120px] flex-col items-center justify-center gap-2 p-5 text-center transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:shadow-[0_8px_24px_rgba(255,140,66,0.12)]"
                  style={
                    {
                      "--skill-color": skill.color,
                    } as React.CSSProperties
                  }
                >
                  <span
                    className="text-2xl transition-transform duration-300 ease-out group-hover:scale-110"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    {skill.name}
                  </span>
                  <span className="h-4 text-xs font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {skill.years}+ years
                  </span>
                </div>

                {/* Glow ring — only visible on hovered card */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    boxShadow: `0 0 0 1px ${skill.color}40, 0 0 20px ${skill.color}20`,
                  }}
                />
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href={personal.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <Download className="h-4 w-4" />
            Download my Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
