"use client";

import { motion } from "framer-motion";
import { ArrowRight, Coffee, Download, MapPin } from "lucide-react";
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
      className="relative flex min-h-[calc(100vh-4rem)] flex-col justify-center overflow-hidden bg-background pt-24 pb-16 sm:pt-28 sm:pb-20"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-[11px] font-medium sm:text-xs">
              <span className="flex items-center gap-1.5 text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Open to work
              </span>
              <span className="text-muted">· Albiorix Technology</span>
            </div>

            <p className="mt-6 text-sm text-muted sm:mt-8 sm:text-base">
              Hi, I&apos;m
            </p>

            <h1 className="mt-1 text-[1.75rem] font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              <span className="hero-gradient-text">{personal.name}</span>
            </h1>

            <RotatingRoles roles={roles} variant="hero" />

            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:mt-5 sm:text-base">
              {personal.tagline}
            </p>

            <p className="mt-3 flex items-center gap-1.5 text-xs text-muted sm:text-sm">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" />
              <span>{personal.location}</span>
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#projects"
                className="btn-primary glow-primary w-full justify-center sm:w-auto"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="btn-outline w-full justify-center sm:w-auto"
              >
                <Coffee className="h-4 w-4" />
                Coffee with me
              </a>
              <a
                href={personal.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full py-2.5 text-sm font-medium text-muted transition-colors hover:text-primary sm:w-auto sm:justify-start sm:px-2"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-10 sm:grid-cols-4 sm:gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.06 }}
                  className="hero-stat-card rounded-xl px-3 py-3 text-center sm:rounded-2xl sm:px-4 sm:py-4"
                >
                  <p className="text-xl font-bold text-primary sm:text-2xl">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-0.5 text-[10px] leading-tight text-muted sm:text-[11px]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual — shows first on mobile for quick impact, second on desktop */}
          <div>
            <HeroVisual />
          </div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-muted sm:flex"
        aria-label="Scroll to about"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <span className="relative flex h-8 w-4 justify-center rounded-full border border-border">
          <motion.span
            animate={{ y: [3, 12, 3], opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="absolute top-1.5 h-1 w-1 rounded-full bg-primary"
          />
        </span>
      </motion.a>
    </section>
  );
}
