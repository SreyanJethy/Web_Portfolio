import { Container } from "@/components/Container";
import { Products } from "@/components/Products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Sreyan Jethy — Backend Engineer",
  description: "Production-grade backend and full-stack projects built with Python, MERN stack, and REST APIs.",
};

export default function ProjectsPage() {
  return (
    <Container>
      <h1
        className="text-2xl md:text-3xl font-black mb-2"
        style={{ color: "var(--text-primary)" }}
      >
        Projects
      </h1>
      <p className="text-sm mb-10" style={{ color: "var(--text-muted)" }}>
        Real-world systems built with backend-first architecture
      </p>
      <Products />
    </Container>
  );
}
