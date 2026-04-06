"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconClock, IconCalendar, IconTag } from "@tabler/icons-react";
import { BlogPost } from "@/data/blogs";

/* ── Minimal markdown → HTML renderer ───────────────────── */
function renderContent(raw: string): string {
  return raw
    // Fenced code blocks
    .replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) => {
      const escaped = code
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
      return `<pre data-lang="${lang}"><code>${escaped}</code></pre>`;
    })
    // Inline code
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    // H2
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    // H3
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    // Bold
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    // Bullet lists — group consecutive lines
    .replace(/(^- .+$\n?)+/gm, (block) => {
      const items = block
        .trim()
        .split("\n")
        .map((l) => `<li>${l.replace(/^- /, "")}</li>`)
        .join("");
      return `<ul>${items}</ul>`;
    })
    // Paragraphs — wrap non-tag lines
    .replace(/^(?!<[a-z]|\s*$)(.+)$/gm, "<p>$1</p>")
    // Clean up empty lines
    .replace(/\n{3,}/g, "\n\n");
}

/* ── Component ───────────────────────────────────────────── */
export default function BlogArticle({ post }: { post: BlogPost }) {
  const html = renderContent(post.content);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm font-medium mb-10 transition-opacity hover:opacity-70"
        style={{ color: "var(--text-muted)" }}
      >
        <IconArrowLeft className="h-4 w-4" />
        Back to Articles
      </Link>

      {/* Header */}
      <header className="mb-10">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-md"
              style={{
                backgroundColor: "rgba(99,102,241,0.1)",
                border: "1px solid rgba(99,102,241,0.22)",
                color: "var(--accent-purple)",
              }}
            >
              <IconTag className="h-2.5 w-2.5" />
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1
          className="text-2xl md:text-4xl font-black leading-tight mb-5"
          style={{ color: "var(--text-primary)" }}
        >
          {post.title}
        </h1>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-5 mb-8">
          <span
            className="flex items-center gap-1.5 text-xs font-medium"
            style={{ color: "var(--text-muted)" }}
          >
            <IconCalendar className="h-3.5 w-3.5" />
            {new Date(post.date).toLocaleDateString("en-US", {
              day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
            })}
          </span>
          <span
            className="flex items-center gap-1.5 text-xs font-medium"
            style={{ color: "var(--text-muted)" }}
          >
            <IconClock className="h-3.5 w-3.5" />
            {post.readTime}
          </span>
        </div>

        {/* Cover image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden"
          style={{ border: "1px solid var(--border-subtle)" }}
        >
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, rgba(10,10,20,0.5) 0%, transparent 50%)",
            }}
          />
        </motion.div>
      </header>

      {/* Summary callout */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.25 }}
        className="mb-10 px-5 py-4 rounded-xl text-sm leading-relaxed"
        style={{
          backgroundColor: "rgba(99,102,241,0.07)",
          borderLeft: "3px solid var(--accent-purple)",
          color: "var(--text-secondary)",
        }}
      >
        {post.summary}
      </motion.div>

      {/* Article content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="mt-16 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        style={{ borderTop: "1px solid var(--border-subtle)" }}
      >
        <div>
          <p className="text-xs font-semibold mb-1" style={{ color: "var(--text-muted)" }}>
            Written by
          </p>
          <p className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>
            Sreyan Jethy
          </p>
          <p className="text-xs" style={{ color: "var(--accent-purple)" }}>
            Backend Engineer
          </p>
        </div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.03]"
          style={{
            backgroundColor: "rgba(255,255,255,0.05)",
            border: "1px solid var(--border-subtle)",
            color: "var(--text-primary)",
          }}
        >
          <IconArrowLeft className="h-4 w-4" />
          More Articles
        </Link>
      </motion.div>
    </motion.article>
  );
}
