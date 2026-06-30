"use client";

import { SmoothScroll } from "@/components/providers/smooth-scroll";

export function Providers({ children }: { children: React.ReactNode }) {
  return <SmoothScroll>{children}</SmoothScroll>;
}
