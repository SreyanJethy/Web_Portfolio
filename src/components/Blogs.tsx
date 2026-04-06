"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IconClock, IconTag, IconArrowRight, IconAlertCircle } from "@tabler/icons-react";

interface BlogMeta {
  id: number;
  slug: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  coverImage: string;
  tags: string[];
}

/* ── Skeleton card ──────────────────────────────────────── */
const SkeletonCard = () => (
  <div
    className="rounded-2xl overflow-hidden animate-pulse"
    style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-subtle)" }}
  >
    <div className="h-48 w-full" style={{ backgroundColor: "rgba(255,255,255,0.04)" }} />
    <div className="p-5 space-y-3">
      <div className="h-3 w-20 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.06)" }} />
      <div className="h-5 w-3/4 rounded-lg"  style={{ backgroundColor: "rgba(255,255,255,0.06)" }} />
      <div className="h-3 w-full rounded-lg"  style={{ backgroundColor: "rgba(255,255,255,0.04)" }} />
      <div className="h-3 w-5/6 rounded-lg"  style={{ backgroundColor: "rgba(255,255,255,0.04)" }} />
      <div className="flex gap-2 pt-1">
        {[1,2,3].map(i => (
          <div key={i} className="h-5 w-14 rounded-md" style={{ backgroundColor: "rgba(255,255,255,0.05)" }} />
        ))}
      </div>
    </div>
  </div>
);

/* ── Blog card ──────────────────────────────────────────── */
const BlogCard = ({ blog, index }: { blog: BlogMeta; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35, delay: index * 0.08 }}
    whileHover={{ y: -4 }}
    className="group rounded-2xl overflow-hidden transition-all duration-200"
    style={{
      backgroundColor: "var(--bg-card)",
      border: "1px solid var(--border-subtle)",
    }}
  >
    <Link href={`/blog/${blog.slug}`} className="block h-full">
      {/* Cover image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={blog.coverImage}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(10,10,20,0.7) 0%, transparent 60%)",
          }}
        />
        {/* Read time badge */}
        <div
          className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold"
          style={{
            backgroundColor: "rgba(10,10,20,0.82)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "var(--text-secondary)",
          }}
        >
          <IconClock className="h-3 w-3" />
          {blog.readTime}
        </div>
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col gap-3">
        {/* Date */}
        <p className="text-[11px] font-medium" style={{ color: "var(--text-muted)" }}>
          {new Date(blog.date).toLocaleDateString("en-US", {
            day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
          })}
        </p>

        {/* Title */}
        <h3
          className="font-black text-base leading-snug transition-colors duration-200 group-hover:opacity-80"
          style={{ color: "var(--text-primary)" }}
        >
          {blog.title}
        </h3>

        {/* Summary */}
        <p
          className="text-xs leading-relaxed line-clamp-2"
          style={{ color: "var(--text-secondary)" }}
        >
          {blog.summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {blog.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-md"
              style={{
                backgroundColor: "rgba(99,102,241,0.1)",
                border: "1px solid rgba(99,102,241,0.2)",
                color: "var(--accent-purple)",
              }}
            >
              <IconTag className="h-2.5 w-2.5" />
              {tag}
            </span>
          ))}
        </div>

        {/* Read more */}
        <div
          className="flex items-center gap-1 text-xs font-semibold mt-1 transition-opacity duration-200 group-hover:opacity-80"
          style={{ color: "var(--accent-purple)" }}
        >
          Read Article <IconArrowRight className="h-3 w-3" />
        </div>
      </div>
    </Link>
  </motion.div>
);

/* ── Main component ─────────────────────────────────────── */
export const Blogs = () => {
  const [blogs, setBlogs]   = useState<BlogMeta[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]   = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((json) => {
        setBlogs(json.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("[Blogs] fetch error:", err);
        setError("Failed to load articles. Please try again.");
        setLoading(false);
      });
  }, []);

  /* Loading */
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
        {[1, 2, 3, 4].map((i) => <SkeletonCard key={i} />)}
      </div>
    );
  }

  /* Error */
  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 flex items-center gap-3 px-5 py-4 rounded-xl text-sm"
        style={{
          backgroundColor: "rgba(239,68,68,0.08)",
          border: "1px solid rgba(239,68,68,0.2)",
          color: "#f87171",
        }}
      >
        <IconAlertCircle className="h-4 w-4 flex-shrink-0" />
        {error}
      </motion.div>
    );
  }

  return (
    <AnimatePresence>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
        {blogs.map((blog, i) => (
          <BlogCard key={blog.slug} blog={blog} index={i} />
        ))}
      </div>
    </AnimatePresence>
  );
};
