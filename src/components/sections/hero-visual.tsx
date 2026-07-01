"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "@/data/skills";

const heroTech = skills.filter((s) =>
  ["React.js", "Next.js", "TypeScript", "NestJS", "Node.js", "AWS"].includes(s.name)
);

function orbitPosition(index: number, total: number, radius: number) {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
  };
}

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="hero-grid absolute inset-0 opacity-25" />
      <div className="absolute top-1/3 left-1/2 h-[280px] w-[400px] -translate-x-1/2 rounded-full bg-primary/8 blur-[100px]" />
    </div>
  );
}

export function HeroVisual() {
  const [active, setActive] = useState(false);
  const [orbitRadius, setOrbitRadius] = useState(102);

  useEffect(() => {
    const update = () => setOrbitRadius(window.innerWidth >= 640 ? 122 : 102);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mx-auto flex w-full max-w-[340px] flex-col items-center lg:max-w-none"
    >
      <div
        className="hero-orbit-hub relative mx-auto size-[300px] cursor-pointer select-none sm:size-[340px]"
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        onClick={() => setActive((v) => !v)}
        role="button"
        tabIndex={0}
        aria-label="Explore tech stack"
        aria-expanded={active}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setActive((v) => !v);
          }
        }}
      >
        {/* Outer guide rings */}
        <motion.div
          className="hero-orbit-ring absolute inset-4 rounded-full border border-dashed border-primary/20"
          animate={{ scale: active ? 1.05 : 1, opacity: active ? 1 : 0.45 }}
          transition={{ duration: 0.45 }}
        />
        <motion.div
          className="hero-orbit-ring-slow absolute inset-10 rounded-full border border-primary/10"
          animate={{ rotate: active ? 0 : 360 }}
          transition={{
            duration: active ? 0.5 : 28,
            repeat: active ? 0 : Infinity,
            ease: "linear",
          }}
        />

        {/* Connector lines */}
        <svg
          className="pointer-events-none absolute inset-0 size-full overflow-visible"
          viewBox="0 0 340 340"
          aria-hidden
        >
          <g transform="translate(170, 170)">
            {heroTech.map((tech, i) => {
              const { x, y } = orbitPosition(i, heroTech.length, orbitRadius);
              return (
                <motion.line
                  key={tech.name}
                  x1={0}
                  y1={0}
                  x2={x}
                  y2={y}
                  stroke="rgba(255, 140, 66, 0.2)"
                  strokeWidth={1}
                  strokeDasharray="3 5"
                  initial={false}
                  animate={{ opacity: active ? 1 : 0 }}
                  transition={{ duration: 0.3, delay: active ? i * 0.1 : 0 }}
                />
              );
            })}
          </g>
        </svg>

        {/* Orbiting tech pills */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <AnimatePresence>
            {heroTech.map((tech, i) => {
              const { x, y } = orbitPosition(i, heroTech.length, orbitRadius);
              return (
                <motion.div
                  key={tech.name}
                  className="absolute z-20"
                  initial={{ x: 0, y: 0, opacity: 0, scale: 0.3 }}
                  animate={{
                    x: active ? x : 0,
                    y: active ? y : 0,
                    opacity: active ? 1 : 0,
                    scale: active ? 1 : 0.3,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: active ? i * 0.11 : (heroTech.length - 1 - i) * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <span
                    className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-border/80 bg-card/95 px-2.5 py-1.5 text-[11px] font-medium text-foreground shadow-lg backdrop-blur-sm sm:px-3 sm:py-2 sm:text-xs"
                    style={{
                      boxShadow: `0 4px 16px ${tech.color}20, 0 0 0 1px ${tech.color}28`,
                    }}
                  >
                    <span
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold sm:h-6 sm:w-6 sm:text-[11px]"
                      style={{
                        backgroundColor: `${tech.color}18`,
                        color: tech.color,
                      }}
                    >
                      {tech.icon}
                    </span>
                    {tech.name.replace(".js", "")}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Center disc */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="hero-center-disc relative z-10 flex size-[118px] flex-col items-center justify-center rounded-full sm:size-[140px]"
            animate={{
              scale: active ? 1.05 : 1,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <motion.span
              className="text-2xl font-bold text-primary sm:text-3xl"
              animate={{ scale: active ? 0.9 : 1 }}
              transition={{ duration: 0.3 }}
            >
              ND
            </motion.span>
            <span className="mt-0.5 text-[10px] font-medium tracking-wider text-muted uppercase">
              {active ? "My Stack" : "Tech Hub"}
            </span>
          </motion.div>
        </div>

        {/* Pulse ring */}
        <motion.div
          className="absolute inset-[54px] rounded-full border border-primary/25 sm:inset-[62px]"
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.35, 0.05, 0.35],
          }}
          transition={{
            duration: active ? 1.4 : 2.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.p
        className="mt-5 text-center text-[11px] text-muted sm:text-xs"
        animate={{ opacity: active ? 0.45 : 0.85 }}
      >
        <span className="hidden sm:inline">Hover the circle — </span>
        <span className="sm:hidden">Tap the circle — </span>
        tech stack opens one by one
      </motion.p>
    </motion.div>
  );
}
