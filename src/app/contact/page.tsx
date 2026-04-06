import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Sreyan Jethy — Backend Engineer",
  description: "Get in touch with Sreyan Jethy for internships, freelance projects, or collaborations.",
};

export default function ContactPage() {
  return (
    <Container>
      <Heading className="font-black mb-2">Get In Touch</Heading>
      <p className="text-sm mb-8 max-w-lg" style={{ color: "var(--text-secondary)" }}>
        Open to internships, placements, and freelance projects. I&apos;ll get back to you within 24 hours.
      </p>
      <Contact />
    </Container>
  );
}
