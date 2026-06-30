"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { highlights } from "@/data/testimonials";

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % highlights.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const item = highlights[current];

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-max">
        <SectionHeading title="What I bring." />

        <AnimatePresence mode="wait">
          <motion.blockquote
            key={current}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="card-simple p-8 md:p-10"
          >
            <span className="text-3xl">{item.icon}</span>
            <h3 className="mt-4 text-xl font-bold text-foreground">{item.title}</h3>
            <p className="mt-3 text-muted leading-relaxed">{item.description}</p>
          </motion.blockquote>
        </AnimatePresence>

        <div className="mt-6 flex justify-center gap-2">
          {highlights.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current ? "w-8 bg-primary" : "w-2 bg-border"
              }`}
              aria-label={`Highlight ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
