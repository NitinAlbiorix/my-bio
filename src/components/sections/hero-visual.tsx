"use client";

import { motion } from "framer-motion";

const techOrbits = [
  { label: "React", color: "#61DAFB" },
  { label: "Next", color: "#f3f4f6" },
  { label: "Nest", color: "#E0234E" },
  { label: "AWS", color: "#FF9900" },
  { label: "Node", color: "#339933" },
];

const ORBIT_RADIUS = 150;

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="hero-grid absolute inset-0 opacity-40" />
      <motion.div
        className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-primary/20 blur-[100px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-32 h-[360px] w-[360px] rounded-full bg-accent/15 blur-[90px]"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 left-1/3 h-[300px] w-[300px] rounded-full bg-secondary/10 blur-[80px]"
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export function HeroVisual() {
  return (
    <div className="relative mx-auto flex h-[380px] w-full max-w-md items-center justify-center md:h-[440px]">
      <motion.div
        className="absolute h-[300px] w-[300px] rounded-full border border-primary/20 md:h-[340px] md:w-[340px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute h-[260px] w-[260px] rounded-full border border-dashed border-primary/15 md:h-[290px] md:w-[290px]"
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      />

      {/* Orbiting tech */}
      <motion.div
        className="absolute h-0 w-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {techOrbits.map((tech, i) => {
          const angle = (i / techOrbits.length) * 360 * (Math.PI / 180);
          const x = Math.cos(angle) * ORBIT_RADIUS;
          const y = Math.sin(angle) * ORBIT_RADIUS;
          return (
            <motion.div
              key={tech.label}
              className="absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-border bg-card text-[10px] font-bold shadow-lg md:h-12 md:w-12 md:text-xs"
              style={{
                left: x,
                top: y,
                color: tech.color,
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            >
              {tech.label}
            </motion.div>
          );
        })}
      </motion.div>

      {/* Center */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl" />
          <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-2 border-primary bg-gradient-to-br from-card to-background text-3xl font-bold text-primary glow-primary md:h-32 md:w-32 md:text-4xl">
            ND
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 w-64 rounded-xl border border-border bg-card/90 p-4 backdrop-blur-sm md:w-72"
        >
          <div className="mb-2 flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
          </div>
          <p className="font-mono text-[11px] text-primary md:text-xs">
            <span className="text-muted">$</span> npm run ship
          </p>
          <p className="mt-1 font-mono text-[11px] text-green-400 md:text-xs">
            ✓ Build successful
          </p>
          <p className="mt-1 font-mono text-[11px] text-muted md:text-xs">
            Deploying to AWS...
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
