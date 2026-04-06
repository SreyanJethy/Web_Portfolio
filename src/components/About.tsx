"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  IconBrandPython,
  IconServer,
  IconDatabase,
  IconCode,
  IconTrophy,
  IconBrandReact,
} from "@tabler/icons-react";

const stats = [
  { label: "Projects Built", value: "5+" },
  { label: "Hackathons", value: "4+" },
  { label: "Technologies", value: "10+" },
  { label: "Year of Study", value: "3rd" },
];

const strengths = [
  { icon: IconBrandPython, label: "Python", color: "#3b82f6" },
  { icon: IconServer, label: "Node.js & Express", color: "#84cc16" },
  { icon: IconDatabase, label: "MongoDB & MySQL", color: "var(--accent-green)" },
  { icon: IconCode, label: "REST APIs", color: "var(--accent-purple)" },
  { icon: IconBrandReact, label: "React", color: "#38bdf8" },
  { icon: IconTrophy, label: "Hackathon Winner", color: "#f59e0b" },
];

// Asymmetric editorial layout:
// Left  — one tall featured portrait
// Right — 2×2 grid of supporting shots
const featured = { src: "/images/SELF.jpg", alt: "Sreyan Jethy" };
const supporting = [
  { src: "/images/self1.jpg",   alt: "At work" },
  { src: "/images/about.webp",  alt: "About" },
  { src: "/images/bike1.jpg",   alt: "Bike ride" },
  { src: "/images/sunset1.jpg", alt: "Sunset" },
];

const cardBase = {
  border: "1px solid rgba(99,102,241,0.12)",
  boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
} as React.CSSProperties;

export default function About() {
  return (
    <div>
      {/* ── Stats row ─────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.07 }}
            className="glass-card rounded-xl p-4 text-center"
          >
            <div className="text-2xl font-black mb-1 gradient-text">{stat.value}</div>
            <div className="text-xs" style={{ color: "var(--text-muted)" }}>{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* ── Image gallery + bio ────────────────────────────── */}
      <div className="flex flex-col xl:flex-row gap-10 xl:gap-14 items-start">

        {/* ── IMAGE BLOCK ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex-shrink-0 w-full xl:w-auto"
        >
          <div className="flex gap-3 w-full xl:w-[420px]">

            {/* Featured portrait — tall left column */}
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.22 }}
              className="relative rounded-2xl overflow-hidden flex-shrink-0 cursor-pointer"
              style={{
                ...cardBase,
                width: "180px",
                height: "280px",
              }}
            >
              <Image
                src={featured.src}
                alt={featured.alt}
                fill
                className="object-cover object-top transition-transform duration-500 hover:scale-105"
                priority
              />
              {/* Subtle gradient overlay at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-16"
                style={{
                  background: "linear-gradient(to top, rgba(10,10,20,0.6), transparent)",
                }}
              />
              {/* Name tag */}
              <div
                className="absolute bottom-3 left-3 right-3 px-2.5 py-1.5 rounded-lg"
                style={{
                  backgroundColor: "rgba(10,10,20,0.82)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(99,102,241,0.2)",
                }}
              >
                <p className="text-xs font-bold leading-tight" style={{ color: "var(--text-primary)" }}>
                  Sreyan Jethy
                </p>
                <p className="text-[10px]" style={{ color: "var(--accent-purple)" }}>
                  Backend Engineer
                </p>
              </div>
            </motion.div>

            {/* 2×2 supporting grid — right column */}
            <div className="grid grid-cols-2 gap-3 flex-1">
              {supporting.map((img, i) => (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.1 + i * 0.08 }}
                  whileHover={{ scale: 1.04, y: -3 }}
                  className="relative rounded-xl overflow-hidden cursor-pointer"
                  style={{
                    ...cardBase,
                    height: "130px",
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  {/* Hover glow ring */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-200"
                    style={{ boxShadow: "inset 0 0 0 1px rgba(99,102,241,0.35)" }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── BIO CONTENT ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="flex-1 space-y-4 min-w-0"
        >
          <h2
            className="text-2xl md:text-3xl font-black leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            About Me
          </h2>

          <p className="text-sm md:text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            I&apos;m{" "}
            <span style={{ color: "var(--text-primary)", fontWeight: 700 }}>Sreyan Jethy</span>
            {" "}— a Computer Science Engineering student passionate about building{" "}
            <span style={{ color: "var(--accent-purple)" }}>scalable backend systems</span>,
            API-driven products, and full-stack web applications.
          </p>

          <p className="text-sm md:text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            My work primarily focuses on{" "}
            <span style={{ color: "var(--accent-cyan)" }}>Python, Node.js, Express, MongoDB, and React</span>,
            with a strong interest in designing systems that are reliable, efficient, and
            production-ready. I approach every project with a system design mindset — thinking
            about data flow, API contracts, authentication, and scalability from day one.
          </p>

          <p className="text-sm md:text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            From hackathons to real-world product builds, I enjoy solving complex problems and
            turning ideas into impactful digital solutions. I{" "}
            <span style={{ color: "var(--accent-green)" }}>won D3 Ideate</span> and reached the
            internal finals of Smart India Hackathon — experiences that sharpened my ability to
            build fast and ship real products under pressure.
          </p>

          <p className="text-sm md:text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Currently exploring AI integrations, automation pipelines, and cloud deployment
            workflows. My goal is to join a team where I can contribute meaningful backend
            systems and grow as an engineer.
          </p>

          {/* Strengths chips */}
          <div className="pt-3">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.12em] mb-3"
              style={{ color: "var(--text-muted)" }}
            >
              Core Strengths
            </p>
            <div className="flex flex-wrap gap-2">
              {strengths.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.22, delay: 0.3 + i * 0.05 }}
                  whileHover={{ y: -2, scale: 1.05 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium cursor-default"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-secondary)",
                  }}
                >
                  <s.icon className="h-3.5 w-3.5" style={{ color: s.color }} />
                  {s.label}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
