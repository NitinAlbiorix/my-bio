"use client";

import { GitBranch, Link, Mail } from "lucide-react";
import { socialLinks } from "@/data/navigation";
import { personal } from "@/data/personal";

const iconMap = {
  github: GitBranch,
  linkedin: Link,
  mail: Mail,
};

export function Footer() {
  return (
    <footer className="section-padding border-t border-border pb-8">
      <div className="container-max text-center">
        <p className="text-xl font-bold text-foreground">{personal.name}</p>
        <p className="mt-1 text-sm text-muted">Made with ❤️ in India</p>

        <div className="mt-6 flex items-center justify-center gap-4">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon as keyof typeof iconMap];
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-primary hover:text-primary"
                aria-label={link.label}
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>

        <p className="mt-8 text-xs text-muted">
          You can find me everywhere · &copy; {new Date().getFullYear()}{" "}
          {personal.name}
        </p>
      </div>
    </footer>
  );
}
