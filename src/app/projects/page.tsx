import { Container } from "@/components/Container";
import { Products } from "@/components/Products";

export default function ProjectsPage() {
  return (
    <Container>
      <h1 className="text-2xl font-bold mb-6">Projects</h1>
      <Products />
    </Container>
  );
}
