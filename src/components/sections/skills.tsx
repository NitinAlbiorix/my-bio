"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { skills } from "@/data/skills";
import { personal } from "@/data/personal";
import { Download } from "lucide-react";

export function Skills() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <SectionHeading title="Skills." />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill, i) => (
            <RevealOnScroll key={skill.name} delay={i * 0.03}>
              <motion.div
                onMouseEnter={() => setHoveredId(skill.name)}
                onMouseLeave={() => setHoveredId(null)}
                className="card-simple flex flex-col items-center justify-center gap-2 p-5 text-center"
                whileHover={{ y: -4 }}
              >
                <span className="text-2xl" style={{ color: skill.color }}>
                  {skill.icon}
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {skill.name}
                </span>
                {hoveredId === skill.name && (
                  <span className="text-xs text-primary">
                    {skill.years}+ years
                  </span>
                )}
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={personal.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <Download className="h-4 w-4" />
            Download my Resume
          </a>
        </div>
      </div>
    </section>
  );
}
