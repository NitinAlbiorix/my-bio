"use client";

import { useState } from "react";
import { Command } from "cmdk";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useKeyboardShortcut } from "@/hooks/use-keyboard-shortcut";
import { navLinks } from "@/data/navigation";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blog";
import { personal } from "@/data/personal";
import {
  Search,
  Home,
  FolderKanban,
  FileText,
  Mail,
  GitBranch,
  Link,
  Download,
} from "lucide-react";

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  useKeyboardShortcut("k", () => onOpenChange(!open));

  const scrollTo = (href: string) => {
    onOpenChange(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl overflow-hidden p-0">
        <DialogHeader className="sr-only">
          <DialogTitle>Command Palette</DialogTitle>
        </DialogHeader>
        <Command className="bg-transparent">
          <div className="flex items-center border-b border-border px-4">
            <Search className="mr-2 h-4 w-4 shrink-0 text-muted" />
            <Command.Input
              placeholder="Search portfolio... (⌘K)"
              className="flex h-12 w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted"
            />
          </div>
          <Command.List className="max-h-80 overflow-y-auto p-2">
            <Command.Empty className="py-6 text-center text-sm text-muted">
              No results found.
            </Command.Empty>

            <Command.Group heading="Navigation">
              <Command.Item
                onSelect={() => scrollTo("#hero")}
                className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm aria-selected:bg-primary/20"
              >
                <Home className="h-4 w-4" /> Home
              </Command.Item>
              {navLinks.map((link) => (
                <Command.Item
                  key={link.href}
                  onSelect={() => scrollTo(link.href)}
                  className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm aria-selected:bg-primary/20"
                >
                  <Search className="h-4 w-4" /> {link.label}
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Group heading="Projects">
              {projects.map((p) => (
                <Command.Item
                  key={p.id}
                  onSelect={() => scrollTo("#projects")}
                  className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm aria-selected:bg-primary/20"
                >
                  <FolderKanban className="h-4 w-4" /> {p.title}
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Group heading="Blog">
              {blogPosts.map((post) => (
                <Command.Item
                  key={post.id}
                  onSelect={() => scrollTo("#blog")}
                  className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm aria-selected:bg-primary/20"
                >
                  <FileText className="h-4 w-4" /> {post.title}
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Group heading="Actions">
              <Command.Item
                onSelect={() => {
                  onOpenChange(false);
                  window.open(personal.resumePath, "_blank");
                }}
                className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm aria-selected:bg-primary/20"
              >
                <Download className="h-4 w-4" /> Download Resume
              </Command.Item>
              <Command.Item
                onSelect={() => scrollTo("#contact")}
                className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm aria-selected:bg-primary/20"
              >
                <Mail className="h-4 w-4" /> Contact Me
              </Command.Item>
              <Command.Item
                onSelect={() => window.open(personal.github, "_blank")}
                className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm aria-selected:bg-primary/20"
              >
                <GitBranch className="h-4 w-4" /> GitHub
              </Command.Item>
              <Command.Item
                onSelect={() => window.open(personal.linkedin, "_blank")}
                className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm aria-selected:bg-primary/20"
              >
                <Link className="h-4 w-4" /> LinkedIn
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </DialogContent>
    </Dialog>
  );
}

export function useCommandPalette() {
  const [open, setOpen] = useState(false);
  return { open, setOpen };
}
