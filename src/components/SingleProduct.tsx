"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/products";
import { motion } from "framer-motion";
import { IconBrandGithub, IconExternalLink, IconArrowLeft } from "@tabler/icons-react";

type Props = {
  product: Product;
};

export default function SingleProduct({ product }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-3xl mx-auto py-12 px-4"
    >
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm mb-8 transition-colors hover:opacity-80"
        style={{ color: "var(--text-muted)" }}
      >
        <IconArrowLeft className="h-3.5 w-3.5" /> Back to Projects
      </Link>

      <h1
        className="text-3xl md:text-4xl font-black mb-3 leading-tight"
        style={{ color: "var(--text-primary)" }}
      >
        {product.title}
      </h1>

      <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
        {product.description}
      </p>

      {/* Action links */}
      <div className="flex flex-wrap gap-3 mb-8">
        {product.href && (
          <a
            href={product.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, var(--accent-purple), var(--accent-blue))",
              color: "#fff",
            }}
          >
            <IconBrandGithub className="h-4 w-4" /> View on GitHub
          </a>
        )}
        {product.liveUrl && (
          <a
            href={product.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
              color: "var(--text-primary)",
            }}
          >
            <IconExternalLink className="h-4 w-4" /> Live Demo
          </a>
        )}
      </div>

      {/* Thumbnail */}
      <div
        className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8"
        style={{ border: "1px solid var(--border-subtle)" }}
      >
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Highlights */}
      {product.highlights && product.highlights.length > 0 && (
        <div className="mb-8">
          <h3
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--text-muted)" }}
          >
            Backend Highlights
          </h3>
          <div className="flex flex-wrap gap-2">
            {product.highlights.map((h, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 rounded-lg font-medium"
                style={{
                  backgroundColor: "rgba(99,102,241,0.1)",
                  border: "1px solid rgba(99,102,241,0.2)",
                  color: "var(--accent-purple)",
                }}
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Content */}
      <div
        className="space-y-4 text-sm leading-relaxed mb-8"
        style={{ color: "var(--text-secondary)" }}
      >
        {product.content}
      </div>

      {/* Tech Stack */}
      {product.stack.length > 0 && (
        <div>
          <h3
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--text-muted)" }}
          >
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {product.stack.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs px-3 py-1.5 rounded-lg font-medium"
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-secondary)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.section>
  );
}
