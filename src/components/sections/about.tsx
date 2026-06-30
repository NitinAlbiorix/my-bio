"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { CountUp } from "@/components/shared/count-up";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { stats } from "@/data/navigation";
import { personal } from "@/data/personal";

export function About() {
  return (
    <section id="about" className="section-alt section-padding">
      <div className="container-max">
        <SectionHeading title="About me." />

        <RevealOnScroll>
          <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
            <p>
              Hi I am <span className="font-semibold text-foreground">{personal.name}</span>
              , a Senior Software Engineer living in {personal.location}. I am
              currently working with awesome folks at{" "}
              <span className="font-semibold text-primary">Albiorix Technology</span>.
            </p>
            <p>{personal.profile}</p>
            <p>
              Have a look at my{" "}
              <a href="#skills" className="font-semibold text-primary hover:underline">
                skills
              </a>
              ,{" "}
              <a href="#projects" className="font-semibold text-primary hover:underline">
                projects
              </a>{" "}
              or connect with me on{" "}
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:underline"
              >
                LinkedIn
              </a>
              . I am always excited to do business with like minded people, lets
              discuss over coffee.
            </p>
          </div>
        </RevealOnScroll>

        <div className="divider" />

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-primary md:text-4xl">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
