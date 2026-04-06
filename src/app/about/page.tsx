import { Container } from "@/components/Container";
import { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About | Sreyan Jethy — Backend Engineer",
  description:
    "Sreyan Jethy is a Computer Science Engineer specializing in Python, MERN stack, REST APIs, and scalable backend systems.",
};

export default function AboutPage() {
  return (
    <Container>
      {/* Page header */}
      <div className="mb-12">
        <p
          className="text-[11px] font-bold uppercase tracking-[0.12em] mb-2"
          style={{ color: "var(--text-muted)" }}
        >
          Who I Am
        </p>
        <h1
          className="text-3xl md:text-4xl font-black leading-tight mb-3"
          style={{ color: "var(--text-primary)" }}
        >
          About Me
        </h1>
        <p className="text-sm max-w-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          Backend engineer. Full-stack builder. Problem solver. Here&apos;s my story.
        </p>
      </div>

      <About />
    </Container>
  );
}
