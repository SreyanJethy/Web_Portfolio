"use client";
import React from "react";

export const Footer = () => {
  return (
    <footer
      className="p-6 text-center text-xs"
      style={{
        borderTop: "1px solid var(--border-subtle)",
        color: "var(--text-muted)",
      }}
    >
      <div className="mb-2">
        <span style={{ color: "var(--text-secondary)" }}>
          Built by{" "}
          <span
            className="font-semibold"
            style={{ color: "var(--accent-purple)" }}
          >
            Sreyan Jethy
          </span>{" "}
          · {new Date().getFullYear()}
        </span>
      </div>
      <div className="flex justify-center gap-5 text-xs">
        <a
          href="https://linkedin.com/in/sreyan-jethy"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:opacity-80"
          style={{ color: "var(--text-muted)" }}
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/SreyanJethy"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:opacity-80"
          style={{ color: "var(--text-muted)" }}
        >
          GitHub
        </a>
        <a
          href="/resume"
          className="transition-colors hover:opacity-80"
          style={{ color: "var(--text-muted)" }}
        >
          Resume
        </a>
      </div>
    </footer>
  );
};
