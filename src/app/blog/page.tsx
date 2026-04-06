import { Container } from "@/components/Container";
import { Blogs } from "@/components/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles | Sreyan Jethy — Backend Engineer",
  description:
    "Technical articles on backend engineering, REST APIs, MERN stack, Python, MongoDB, and scalable system design.",
};

export default function BlogPage() {
  return (
    <Container>
      <div className="mb-2">
        <p
          className="text-[11px] font-bold uppercase tracking-[0.12em] mb-2"
          style={{ color: "var(--text-muted)" }}
        >
          Technical Writing
        </p>
        <h1
          className="text-3xl md:text-4xl font-black leading-tight mb-3"
          style={{ color: "var(--text-primary)" }}
        >
          Articles
        </h1>
        <p className="text-sm max-w-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          Deep dives into backend engineering, API design, database architecture,
          and full-stack development patterns.
        </p>
      </div>
      <Blogs />
    </Container>
  );
}
