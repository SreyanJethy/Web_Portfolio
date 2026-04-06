"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  IconBrandPython,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandDocker,
  IconBrandGithub,
  IconDatabase,
  IconServer,
  IconBrain,
  IconCode,
  IconCloud,
  IconTerminal2,
  IconBolt,
} from "@tabler/icons-react";

const categories = [
  {
    label: "Backend Engineering",
    color: "var(--accent-cyan)",
    skills: [
      { name: "Python", icon: IconBrandPython, color: "#3b82f6" },
      { name: "Node.js", icon: IconBrandNodejs, color: "#84cc16" },
      { name: "Express.js", icon: IconServer, color: "var(--text-secondary)" },
      { name: "REST APIs", icon: IconCode, color: "var(--accent-purple)" },
      { name: "FastAPI", icon: IconCode, color: "var(--accent-cyan)" },
    ],
  },
  {
    label: "MERN Stack",
    color: "var(--accent-green)",
    skills: [
      { name: "MongoDB", icon: IconDatabase, color: "#84cc16" },
      { name: "Express", icon: IconServer, color: "var(--text-secondary)" },
      { name: "React", icon: IconBrandReact, color: "#38bdf8" },
      { name: "Node.js", icon: IconBrandNodejs, color: "#84cc16" },
    ],
  },
  {
    label: "Databases",
    color: "var(--accent-purple)",
    skills: [
      { name: "MongoDB", icon: IconDatabase, color: "#84cc16" },
      { name: "MySQL", icon: IconDatabase, color: "#f59e0b" },
      { name: "PostgreSQL", icon: IconDatabase, color: "#38bdf8" },
      { name: "Firebase", icon: IconBolt, color: "#fb923c" },
    ],
  },
  {
    label: "Tools & Deployment",
    color: "#f59e0b",
    skills: [
      { name: "GitHub", icon: IconBrandGithub, color: "var(--text-primary)" },
      { name: "Vercel", icon: IconCloud, color: "var(--text-primary)" },
      { name: "Docker", icon: IconBrandDocker, color: "#38bdf8" },
      { name: "VS Code", icon: IconTerminal2, color: "#38bdf8" },
    ],
  },
  {
    label: "AI / Python Ecosystem",
    color: "#ec4899",
    skills: [
      { name: "Python", icon: IconBrandPython, color: "#3b82f6" },
      { name: "AI APIs", icon: IconBrain, color: "#ec4899" },
      { name: "Automation", icon: IconCode, color: "var(--accent-cyan)" },
      { name: "Data Handling", icon: IconDatabase, color: "var(--accent-purple)" },
    ],
  },
];

export const TechStack = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-8">
        <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-1.5" style={{ color: "var(--text-muted)" }}>
          My Arsenal
        </p>
        <h2 className="text-xl md:text-2xl font-black leading-tight" style={{ color: "var(--text-primary)" }}>
          Tech Stack
        </h2>
        <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>
          Technologies I use to build production systems
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((cat, catIdx) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: catIdx * 0.08 }}
            className="glass-card rounded-xl p-5"
          >
            <div className="flex items-center gap-2 mb-4">
              <div
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: cat.color }}
              />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: cat.color }}
              >
                {cat.label}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -2, scale: 1.05 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 cursor-default"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-secondary)",
                  }}
                >
                  <skill.icon className="h-3.5 w-3.5" style={{ color: skill.color }} />
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
