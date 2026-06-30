"use client";

import { useState, useMemo } from "react";
import { Search, Clock, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { blogPosts } from "@/data/blog";

export function Blog() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    if (!q) return blogPosts;
    return blogPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <section id="blog" className="section-padding">
      <div className="container-max">
        <SectionHeading title="Latest articles" />

        <div className="relative mb-8 max-w-md">
          <Search className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-muted" />
          <Input
            placeholder="Search articles..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-11"
            aria-label="Search blog articles"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((post, i) => (
            <RevealOnScroll key={post.id} delay={i * 0.05}>
              <article className="card-simple flex h-full flex-col p-6">
                <div className="flex items-center gap-2 text-xs text-muted">
                  <time>{post.date}</time>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-foreground">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted">{post.excerpt}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  Read article
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
