"use client";

import { Briefcase, GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { timeline } from "@/data/timeline";

const typeIcons = {
  work: Briefcase,
  education: GraduationCap,
  achievement: Briefcase,
};

export function Timeline() {
  return (
    <section id="timeline" className="section-padding">
      <div className="container-max">
        <SectionHeading
          title="My Journey"
          subtitle="Work experience and education."
        />

        <div className="space-y-6">
          {timeline.map((item, i) => {
            const Icon = typeIcons[item.type];
            return (
              <RevealOnScroll key={item.id} delay={i * 0.05}>
                <div className="card-simple flex gap-5 p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-primary">
                      {item.year}
                      {item.current && (
                        <span className="ml-2 rounded-full bg-primary/15 px-2 py-0.5 text-xs">
                          Current
                        </span>
                      )}
                    </span>
                    <h3 className="mt-1 text-lg font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-muted">
                      {item.organization}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
