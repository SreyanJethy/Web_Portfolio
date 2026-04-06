"use client";
import { Container } from "@/components/Container";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  IconBrandGithub,
  IconArrowRight,
  IconServer,
  IconDatabase,
  IconBrandPython,
  IconCode,
  IconRocket,
  IconBrain,
  IconShield,
  IconBolt,
  IconBrandLinkedin,
  IconDownload,
  IconTrophy,
  IconStar,
} from "@tabler/icons-react";

/* ─── helpers ───────────────────────────────────────────── */
const fadeUp = { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } };
const stagger = { animate: { transition: { staggerChildren: 0.1 } } };

const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  action,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}) => (
  <div className="flex items-end justify-between mb-8 gap-4">
    <div>
      <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-1.5" style={{ color: "var(--text-muted)" }}>
        {eyebrow}
      </p>
      <h2 className="text-xl md:text-2xl font-black leading-tight" style={{ color: "var(--text-primary)" }}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>{subtitle}</p>
      )}
    </div>
    {action && <div className="flex-shrink-0">{action}</div>}
  </div>
);

/* ─── Hero floating elements ────────────────────────────── */
const CodeSnippet = ({ code, className, delay = 0 }: { code: string; className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className={`absolute font-mono text-xs rounded-lg px-3 py-2 pointer-events-none select-none ${className}`}
    style={{
      backgroundColor: "rgba(10,10,20,0.92)",
      border: "1px solid rgba(99,102,241,0.22)",
      color: "var(--accent-cyan)",
      backdropFilter: "blur(10px)",
      boxShadow: "0 4px 20px rgba(99,102,241,0.1)",
    }}
  >
    <span style={{ color: "var(--text-muted)" }}>{'// '}</span>{code}
  </motion.div>
);

const ArchNode = ({
  label, icon: Icon, className, delay = 0, color = "var(--accent-purple)",
}: { label: string; icon: any; className?: string; delay?: number; color?: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.45, delay }}
    className={`absolute flex flex-col items-center gap-1.5 pointer-events-none select-none ${className}`}
  >
    <div
      className="rounded-xl p-2.5 animate-float"
      style={{
        backgroundColor: "rgba(10,10,20,0.95)",
        border: `1px solid ${color}45`,
        boxShadow: `0 0 20px ${color}18`,
      }}
    >
      <Icon className="h-4 w-4" style={{ color }} />
    </div>
    <span className="text-[10px] font-semibold" style={{ color: "var(--text-muted)" }}>{label}</span>
  </motion.div>
);

const FlowLines = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.12 }}>
    <defs>
      <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
        <stop offset="50%" stopColor="#6366f1" stopOpacity="1" />
        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
      </linearGradient>
    </defs>
    <line x1="15%" y1="38%" x2="85%" y2="38%" stroke="url(#lg1)" strokeWidth="1" strokeDasharray="5 5" />
    <line x1="50%" y1="15%" x2="50%" y2="85%" stroke="url(#lg1)" strokeWidth="1" strokeDasharray="5 5" />
    {[["15%","38%","#6366f1"],["50%","38%","#6366f1"],["85%","38%","#06b6d4"],["50%","15%","#3b82f6"],["50%","85%","#10b981"]].map(([cx,cy,fill],i) => (
      <circle key={i} cx={cx} cy={cy} r="3" fill={fill as string} opacity="0.7" />
    ))}
  </svg>
);

/* ─── Data ──────────────────────────────────────────────── */
const whyHireItems = [
  { icon: IconBrandPython, title: "Python Backend", desc: "REST APIs, automation, data pipelines, and AI integrations.", color: "var(--accent-cyan)" },
  { icon: IconServer, title: "MERN Stack", desc: "Full-stack apps with MongoDB, Express, React, and Node.js.", color: "var(--accent-green)" },
  { icon: IconDatabase, title: "Database Architecture", desc: "Schema design, query optimization, and scalable data modeling.", color: "var(--accent-purple)" },
  { icon: IconBrain, title: "AI Integrations", desc: "Intelligent features with AI APIs and the Python ML ecosystem.", color: "var(--accent-blue)" },
  { icon: IconRocket, title: "Production Deployments", desc: "CI/CD, Vercel, Render, Docker — shipping apps to real users.", color: "#f59e0b" },
  { icon: IconShield, title: "Security First", desc: "Auth systems, JWT, input validation, and secure API design.", color: "#ec4899" },
];

const achievements = [
  { icon: IconTrophy, label: "D3 Ideate — Winner 🏆", color: "#f59e0b" },
  { icon: IconStar, label: "SIH Internal Finals", color: "var(--accent-purple)" },
  { icon: IconStar, label: "D3 Hackathon Finalist", color: "var(--accent-cyan)" },
  { icon: IconStar, label: "Silicon Tech Fest Nirman", color: "var(--accent-green)" },
];

/* ─── Page ──────────────────────────────────────────────── */
export default function Home() {
  return (
    <Container>

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <motion.section
        variants={stagger}
        initial="initial"
        animate="animate"
        className="relative min-h-[88vh] flex flex-col justify-center"
      >
        {/* Dot grid bg */}
        <div className="absolute inset-0 dot-grid rounded-3xl" style={{ opacity: 0.35 }} />

        {/* Floating nodes — desktop only */}
        <div className="hidden lg:block">
          <FlowLines />
          <ArchNode label="Python API"  icon={IconBrandPython} className="top-[12%] right-[8%]"  delay={0.9}  color="var(--accent-cyan)" />
          <ArchNode label="MongoDB"     icon={IconDatabase}    className="top-[28%] right-[22%]" delay={1.05} color="var(--accent-green)" />
          <ArchNode label="Node.js"     icon={IconServer}      className="bottom-[20%] right-[10%]" delay={1.2} color="#84cc16" />
          <ArchNode label="REST API"    icon={IconCode}        className="bottom-[10%] right-[26%]" delay={1.35} color="var(--accent-purple)" />
          <CodeSnippet code="POST /api/auth/login"   className="top-[6%] right-[2%] hidden xl:block"    delay={1.5} />
          <CodeSnippet code="async def get_users()"  className="bottom-[6%] right-[2%] hidden xl:block"  delay={1.65} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl">
          {/* Status badge */}
          <motion.div variants={fadeUp} className="mb-7">
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold"
              style={{
                backgroundColor: "rgba(99,102,241,0.1)",
                border: "1px solid rgba(99,102,241,0.28)",
                color: "var(--accent-purple)",
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for Internships &amp; Freelance
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl xl:text-6xl font-black leading-[1.1] tracking-tight mb-6"
          >
            <span style={{ color: "var(--text-primary)" }}>Building Scalable</span>
            <br />
            <span className="gradient-text">Backend Systems</span>
            <br />
            <span style={{ color: "var(--text-primary)" }}>with Python &amp; MERN</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg leading-relaxed mb-9 max-w-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            CS Engineer focused on backend architecture, REST APIs, full-stack
            development, and AI-powered products. I build systems that scale.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.03] hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, var(--accent-purple), var(--accent-blue))",
                color: "#fff",
                boxShadow: "0 4px 22px rgba(99,102,241,0.32)",
              }}
            >
              View Projects <IconArrowRight className="h-4 w-4" />
            </Link>
            {[
              { href: "/about", label: "About Me" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.03]"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-primary)",
                }}
              >
                {label}
              </Link>
            ))}
            <a
              href="https://github.com/SreyanJethy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.03]"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid var(--border-subtle)",
                color: "var(--text-primary)",
              }}
            >
              <IconBrandGithub className="h-4 w-4" /> GitHub
            </a>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          className="absolute bottom-8 left-0 flex items-center gap-2"
        >
          <div className="flex flex-col gap-1">
            <span className="h-1 w-1 rounded-full bg-current animate-bounce" style={{ color: "var(--text-muted)", animationDelay: "0ms" }} />
            <span className="h-1 w-1 rounded-full bg-current animate-bounce" style={{ color: "var(--text-muted)", animationDelay: "150ms" }} />
            <span className="h-1 w-1 rounded-full bg-current animate-bounce" style={{ color: "var(--text-muted)", animationDelay: "300ms" }} />
          </div>
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>Scroll to explore</span>
        </motion.div>
      </motion.section>

      {/* ══ DIVIDER ═══════════════════════════════════════════ */}
      <div className="my-20 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.2), transparent)" }} />

      {/* ══ FEATURED PROJECTS ═════════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeader
          eyebrow="What I've Built"
          title="Featured Projects"
          subtitle="Production-grade systems built with real-world architecture"
          action={
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-70"
              style={{ color: "var(--accent-purple)" }}
            >
              All projects <IconArrowRight className="h-3.5 w-3.5" />
            </Link>
          }
        />
        <Products />
      </motion.section>

      {/* ══ DIVIDER ═══════════════════════════════════════════ */}
      <div className="my-20 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.2), transparent)" }} />

      {/* ══ TECH STACK ════════════════════════════════════════ */}
      <TechStack />

      {/* ══ DIVIDER ═══════════════════════════════════════════ */}
      <div className="my-20 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.2), transparent)" }} />

      {/* ══ WHY HIRE ME ═══════════════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeader
          eyebrow="Value I Bring"
          title="Why Work With Me"
          subtitle="What I bring to your team or project"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {whyHireItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.07 }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-xl p-5 transition-all duration-200"
            >
              <div
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg mb-4"
                style={{ backgroundColor: `${item.color}14`, border: `1px solid ${item.color}28` }}
              >
                <item.icon className="h-4 w-4" style={{ color: item.color }} />
              </div>
              <h3 className="font-semibold text-sm mb-1.5" style={{ color: "var(--text-primary)" }}>
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ══ DIVIDER ═══════════════════════════════════════════ */}
      <div className="my-20 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.2), transparent)" }} />

      {/* ══ SOCIAL / BRAND ════════════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeader eyebrow="Connect & Explore" title="Let's Build Together" />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-4">
          {/* GitHub */}
          <BrandCard
            href="https://github.com/SreyanJethy"
            external
            iconBg="rgba(255,255,255,0.06)"
            iconBorder="rgba(255,255,255,0.1)"
            icon={<IconBrandGithub className="h-5 w-5" style={{ color: "var(--text-primary)" }} />}
            title="GitHub"
            handle="@SreyanJethy"
            desc="Explore my open-source projects, backend systems, and code contributions."
            cta="View Profile"
            ctaColor="var(--accent-purple)"
          />
          {/* LinkedIn */}
          <BrandCard
            href="https://www.linkedin.com/in/sreyan-jethy/"
            external
            iconBg="rgba(10,102,194,0.12)"
            iconBorder="rgba(10,102,194,0.28)"
            icon={<IconBrandLinkedin className="h-5 w-5" style={{ color: "#0a66c2" }} />}
            title="LinkedIn"
            handle="sreyan-jethy"
            desc="Connect professionally. Open to internships, placements, and collaborations."
            cta="Connect"
            ctaColor="#0a66c2"
          />
          {/* Resume */}
          <BrandCard
            href="/resume"
            iconBg="rgba(99,102,241,0.14)"
            iconBorder="rgba(99,102,241,0.3)"
            icon={<IconDownload className="h-5 w-5" style={{ color: "var(--accent-purple)" }} />}
            title="Resume"
            handle="Full experience"
            desc="View my complete background, skills, projects, and academic achievements."
            cta="View Resume"
            ctaColor="var(--accent-purple)"
            highlight
          />
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="glass-card rounded-2xl p-5"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-4" style={{ color: "var(--text-muted)" }}>
            Hackathon Achievements
          </p>
          <div className="flex flex-wrap gap-2.5">
            {achievements.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.22, delay: i * 0.06 }}
                whileHover={{ y: -2 }}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium cursor-default"
                style={{
                  backgroundColor: `${a.color}0e`,
                  border: `1px solid ${a.color}22`,
                  color: "var(--text-secondary)",
                }}
              >
                <a.icon className="h-3.5 w-3.5" style={{ color: a.color }} />
                {a.label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* ══ CTA BANNER ════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-20 mb-4 rounded-2xl p-10 text-center relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(99,102,241,0.11) 0%, rgba(59,130,246,0.07) 50%, rgba(6,182,212,0.05) 100%)",
          border: "1px solid rgba(99,102,241,0.18)",
        }}
      >
        <div className="absolute inset-0 dot-grid opacity-25" />
        <div className="relative z-10">
          <div
            className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-4"
            style={{ backgroundColor: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.25)" }}
          >
            <IconBolt className="h-6 w-6" style={{ color: "var(--accent-purple)" }} />
          </div>
          <h3 className="text-xl font-black mb-2" style={{ color: "var(--text-primary)" }}>
            Ready to build something great?
          </h3>
          <p className="text-sm mb-6 max-w-sm mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Actively looking for internships, placements, and freelance projects.
            Let&apos;s connect and build something impactful.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.03]"
              style={{
                background: "linear-gradient(135deg, var(--accent-purple), var(--accent-blue))",
                color: "#fff",
                boxShadow: "0 4px 22px rgba(99,102,241,0.3)",
              }}
            >
              Get In Touch
            </Link>
            <a
              href="https://www.linkedin.com/in/sreyan-jethy/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.03]"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid var(--border-subtle)",
                color: "var(--text-primary)",
              }}
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </motion.div>

    </Container>
  );
}

/* ─── BrandCard sub-component ───────────────────────────── */
function BrandCard({
  href, external, iconBg, iconBorder, icon, title, handle, desc, cta, ctaColor, highlight,
}: {
  href: string; external?: boolean; iconBg: string; iconBorder: string;
  icon: React.ReactNode; title: string; handle: string; desc: string;
  cta: string; ctaColor: string; highlight?: boolean;
}) {
  const inner = (
    <motion.div
      whileHover={{ y: -4 }}
      className="h-full rounded-2xl p-6 flex flex-col gap-4 transition-all duration-200 relative overflow-hidden"
      style={
        highlight
          ? {
              background: "linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(59,130,246,0.07) 100%)",
              border: "1px solid rgba(99,102,241,0.22)",
            }
          : {
              backgroundColor: "rgba(17,17,32,0.8)",
              border: "1px solid var(--border-subtle)",
            }
      }
    >
      {highlight && <div className="absolute inset-0 dot-grid opacity-15" />}
      <div className="relative z-10 flex flex-col gap-4 h-full">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: iconBg, border: `1px solid ${iconBorder}` }}
          >
            {icon}
          </div>
          <div>
            <p className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>{title}</p>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>{handle}</p>
          </div>
        </div>
        <p className="text-xs leading-relaxed flex-1" style={{ color: "var(--text-secondary)" }}>{desc}</p>
        <div className="flex items-center gap-1 text-xs font-semibold" style={{ color: ctaColor }}>
          {cta} <IconArrowRight className="h-3 w-3" />
        </div>
      </div>
    </motion.div>
  );

  return external
    ? <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">{inner}</a>
    : <Link href={href} className="block h-full">{inner}</Link>;
}
