"use client";

import React from "react";
import { products } from "@/constants/products";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { IconBrandGithub, IconExternalLink, IconArrowRight } from "@tabler/icons-react";

export const Products = () => {
  return (
    <div className="grid grid-cols-1 gap-5">
      {products.map((product, idx) => {
        const href = product.slug ? `/projects/${product.slug}` : product.href || "#";
        const thumbnail = product.thumbnail ?? "/images/placeholder.png";
        const stack = product.stack ?? [];

        return (
          <motion.div
            key={product.slug || product.href || idx}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            whileHover={{ y: -2 }}
            className="glass-card rounded-2xl overflow-hidden transition-all duration-200 group"
            style={{ border: "1px solid var(--border-subtle)" }}
          >
            <div className="flex flex-col md:flex-row">
              {/* Thumbnail */}
              <div
                className="relative md:w-56 h-44 md:h-auto flex-shrink-0 overflow-hidden"
                style={{ backgroundColor: "var(--bg-card)" }}
              >
                <Image
                  src={thumbnail}
                  alt={product.title || "thumbnail"}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to right, transparent 60%, var(--bg-card) 100%)",
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between p-5 flex-1">
                <div>
                  {/* Title + links */}
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <Link href={href}>
                      <h3
                        className="font-black text-base md:text-lg leading-tight hover:opacity-80 transition-opacity"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {product.title}
                      </h3>
                    </Link>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {product.href && (
                        <a
                          href={product.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors hover:opacity-80"
                          style={{ color: "var(--text-muted)" }}
                        >
                          <IconBrandGithub className="h-4 w-4" />
                        </a>
                      )}
                      {product.liveUrl && (
                        <a
                          href={product.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors hover:opacity-80"
                          style={{ color: "var(--text-muted)" }}
                        >
                          <IconExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>
                    {product.description}
                  </p>

                  {/* Backend highlights */}
                  {product.highlights && product.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {product.highlights.map((h: string, i: number) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-0.5 rounded-md font-medium"
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
                  )}
                </div>

                {/* Footer: stack + CTA */}
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex flex-wrap gap-1.5">
                    {stack.map((tech: string, i: number) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-0.5 rounded-md"
                        style={{
                          backgroundColor: "rgba(255,255,255,0.04)",
                          border: "1px solid var(--border-subtle)",
                          color: "var(--text-muted)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={href}
                    className="flex items-center gap-1 text-xs font-semibold transition-colors hover:opacity-80 flex-shrink-0"
                    style={{ color: "var(--accent-purple)" }}
                  >
                    Case Study <IconArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
