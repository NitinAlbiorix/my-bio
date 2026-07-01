"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RotatingRolesProps {
  roles: string[];
  variant?: "default" | "hero";
}

export function RotatingRoles({ roles, variant = "default" }: RotatingRolesProps) {
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [roles.length]);

  useEffect(() => {
    if (variant !== "hero") return;
    const blink = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(blink);
  }, [variant]);

  const isHero = variant === "hero";

  return (
    <p
      className={
        isHero
          ? "mt-3 text-base text-muted sm:text-lg"
          : "mt-4 text-xl text-muted md:text-2xl"
      }
    >
      I am{" "}
      <span
        className={
          isHero
            ? "inline-block min-w-[14ch] font-bold text-primary"
            : "inline-block min-w-[16ch] font-bold text-primary"
        }
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="inline-block"
          >
            {roles[index]}
          </motion.span>
        </AnimatePresence>
        {isHero && (
          <span
            className={`ml-0.5 inline-block h-[1em] w-[2px] bg-primary align-middle ${
              showCursor ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </span>
    </p>
  );
}
