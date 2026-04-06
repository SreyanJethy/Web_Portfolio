"use client";
import { navlinks } from "@/constants/navlinks";
import { Navlink } from "@/types/navlink";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { socials } from "@/constants/socials";
import { AnimatePresence, motion } from "framer-motion";
import {
  IconLayoutSidebarRightCollapse,
  IconLayoutSidebarLeftCollapse,
  IconDownload,
} from "@tabler/icons-react";
import { isMobile } from "@/lib/utils";

export const Sidebar = () => {
  const [open, setOpen] = useState(isMobile() ? false : true);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: -216, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -216, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed top-0 left-0 h-screen w-[13.5rem] z-[100] flex flex-col"
            style={{
              backgroundColor: "rgba(8, 8, 14, 0.97)",
              backdropFilter: "blur(24px)",
              borderRight: "1px solid rgba(99,102,241,0.1)",
              boxShadow: "2px 0 40px rgba(0,0,0,0.5)",
            }}
          >
            {/* Top section */}
            <div className="flex-1 overflow-y-auto scrollbar-none px-4 pt-7 pb-4">
              <SidebarHeader />
              <Navigation setOpen={setOpen} />
            </div>

            {/* Bottom section */}
            <div
              className="px-4 py-5 space-y-3"
              style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
            >
              {/* Social icons */}
              <div className="flex items-center gap-1.5">
                {socials.map((s) => (
                  <SocialIcon key={s.href} href={s.href} label={s.label} icon={s.icon} />
                ))}
              </div>

              {/* Resume CTA */}
              <Link
                href="/resume"
                className="flex items-center gap-2 w-full px-3 py-2.5 rounded-lg text-xs font-semibold transition-all duration-200 hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, rgba(99,102,241,0.18), rgba(59,130,246,0.12))",
                  border: "1px solid rgba(99,102,241,0.28)",
                  color: "var(--accent-purple)",
                  boxShadow: "0 2px 12px rgba(99,102,241,0.08)",
                }}
              >
                <IconDownload className="h-3.5 w-3.5 flex-shrink-0" />
                View Resume
              </Link>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Mobile overlay backdrop */}
      <AnimatePresence>
        {open && isMobile() && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99] lg:hidden"
            style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile FAB toggle */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="fixed lg:hidden bottom-5 right-5 h-11 w-11 rounded-full flex items-center justify-center z-[200]"
        style={{
          backgroundColor: "rgba(8,8,14,0.97)",
          border: "1px solid rgba(99,102,241,0.35)",
          boxShadow: "0 4px 24px rgba(99,102,241,0.25)",
          backdropFilter: "blur(12px)",
        }}
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open
          ? <IconLayoutSidebarLeftCollapse className="h-4 w-4" style={{ color: "var(--accent-purple)" }} />
          : <IconLayoutSidebarRightCollapse className="h-4 w-4" style={{ color: "var(--accent-purple)" }} />
        }
      </motion.button>
    </>
  );
};

/* ── Social icon button ─────────────────────────────────── */
const SocialIcon = ({ href, label, icon: Icon }: { href: string; label: string; icon: any }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    title={label}
    className="flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200"
    style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
    onMouseEnter={(e) => {
      const el = e.currentTarget as HTMLElement;
      el.style.borderColor = "rgba(99,102,241,0.45)";
      el.style.backgroundColor = "rgba(99,102,241,0.1)";
      el.style.boxShadow = "0 0 12px rgba(99,102,241,0.15)";
    }}
    onMouseLeave={(e) => {
      const el = e.currentTarget as HTMLElement;
      el.style.borderColor = "rgba(255,255,255,0.07)";
      el.style.backgroundColor = "rgba(255,255,255,0.04)";
      el.style.boxShadow = "none";
    }}
  >
    <Icon className="h-3.5 w-3.5" style={{ color: "var(--text-muted)" }} />
  </a>
);

/* ── Navigation links ───────────────────────────────────── */
export const Navigation = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <nav className="mt-8 flex flex-col gap-0.5">
      <p
        className="text-[10px] font-bold uppercase tracking-[0.12em] px-2.5 mb-3"
        style={{ color: "var(--text-muted)" }}
      >
        Menu
      </p>

      {navlinks.map((link: Navlink) => {
        const active = isActive(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => isMobile() && setOpen(false)}
            className="relative flex items-center gap-2.5 py-2 px-2.5 rounded-lg text-sm font-medium transition-all duration-150 group"
            style={
              active
                ? {
                    backgroundColor: "rgba(99,102,241,0.13)",
                    color: "var(--text-primary)",
                    border: "1px solid rgba(99,102,241,0.22)",
                    boxShadow: "0 0 20px rgba(99,102,241,0.07)",
                  }
                : {
                    color: "var(--text-secondary)",
                    border: "1px solid transparent",
                  }
            }
            onMouseEnter={(e) => {
              if (!active) {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "var(--text-primary)";
                el.style.backgroundColor = "rgba(255,255,255,0.04)";
              }
            }}
            onMouseLeave={(e) => {
              if (!active) {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "var(--text-secondary)";
                el.style.backgroundColor = "transparent";
              }
            }}
          >
            {/* Animated active pill */}
            {active && (
              <motion.span
                layoutId="navPill"
                className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-full"
                style={{ backgroundColor: "var(--accent-purple)" }}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <link.icon
              className="h-[15px] w-[15px] flex-shrink-0"
              style={{ color: active ? "var(--accent-purple)" : "var(--text-muted)" }}
            />
            <span>{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

/* ── Sidebar header (avatar) ────────────────────────────── */
export const SidebarHeader = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setShowModal(true)}
        className="w-full flex items-center gap-3 p-2 rounded-xl text-left transition-all duration-200"
        style={{ border: "1px solid transparent" }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.backgroundColor = "rgba(255,255,255,0.03)";
          el.style.borderColor = "rgba(255,255,255,0.06)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.backgroundColor = "transparent";
          el.style.borderColor = "transparent";
        }}
      >
        <div className="relative flex-shrink-0">
          <Image
            src="/images/SELF.jpg"
            alt="Sreyan Jethy"
            height={40}
            width={40}
            className="object-cover object-top rounded-full"
            style={{
              border: "2px solid rgba(99,102,241,0.5)",
              boxShadow: "0 0 18px rgba(99,102,241,0.22)",
            }}
          />
          <span
            className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2"
            style={{ backgroundColor: "#10b981", borderColor: "#08080e" }}
          />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="font-bold text-sm truncate" style={{ color: "var(--text-primary)" }}>
            Sreyan Jethy
          </span>
          <span className="text-[11px] truncate" style={{ color: "var(--accent-purple)" }}>
            Backend Engineer
          </span>
        </div>
      </motion.button>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center z-[9999]"
            style={{ backgroundColor: "rgba(0,0,0,0.88)", backdropFilter: "blur(10px)" }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(99,102,241,0.3)", boxShadow: "0 0 60px rgba(99,102,241,0.2)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src="/images/SELF.jpg"
                alt="Sreyan Jethy"
                width={380}
                height={380}
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
