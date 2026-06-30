"use client";

import { motion } from "framer-motion";
import { ArrowRight, Coffee, Download } from "lucide-react";
import { personal } from "@/data/personal";
import { roles } from "@/data/roles";
import { stats } from "@/data/navigation";
import { RotatingRoles } from "@/components/shared/rotating-roles";
import { HeroBackground, HeroVisual } from "@/components/sections/hero-visual";
import { CountUp } from "@/components/shared/count-up";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-background pt-28 pb-16"
    >
      <HeroBackground />

      <div className="container-max relative z-10 px-6 md:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Sr. Software Engineer · Albiorix Technology
            </motion.span>

            <p className="mt-8 text-lg text-muted md:text-xl">Hi, I&apos;m</p>
            <h1 className="mt-2 text-3xl font-bold leading-[1.05]">
                  <span className="hero-gradient-text">{personal.name}</span>
            </h1>

            <RotatingRoles roles={roles} variant="hero" />

            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg">
              {personal.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary glow-primary">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="btn-outline">
                <Coffee className="h-4 w-4" />
                Coffee with me
              </a>
              <a
                href={personal.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-muted transition-colors hover:text-primary"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
            </div>

            {/* Quick stats */}
            <div className="mt-12 grid grid-cols-2 gap-4 border-t border-border pt-8 sm:grid-cols-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <p className="text-2xl font-bold text-primary md:text-3xl">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-xs text-muted">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-first lg:order-last"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-muted"
        aria-label="Scroll to about"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-8 w-5 rounded-full border border-border p-1"
        >
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="mx-auto block h-1.5 w-1 rounded-full bg-primary"
          />
        </motion.span>
      </motion.a>
    </section>
  );
}
