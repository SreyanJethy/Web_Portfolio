import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { WorkHistory } from "@/components/WorkHistory";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Sreyan Jethy — Backend Engineer",
  description: "Experience, projects, and academic background of Sreyan Jethy.",
};

export default function ResumePage() {
  return (
    <Container>
      <Heading className="font-black">Experience & Background</Heading>
      <p className="text-sm mt-2 mb-2" style={{ color: "var(--text-muted)" }}>
        Projects, hackathons, and academic journey
      </p>
      <WorkHistory />
    </Container>
  );
}
