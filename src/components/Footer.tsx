"use client";
import React from "react";

export const Footer = () => {
  return (
    <footer className="p-4 text-center justify-center text-xs text-neutral-500 border-t border-neutral-100">
      <div>
        <span className="font-semibold">{new Date().getFullYear()} </span>
        — Built by Sreyan
      </div>

      <div className="flex justify-center gap-4 mt-2 text-sm text-primary">
        <a
          href="https://linkedin.com/in/sreyanjethy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/sreyanjethy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Resume
        </a>
      </div>
    </footer>
  );
};
