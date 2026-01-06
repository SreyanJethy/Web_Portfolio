import { Container } from "@/components/Container";
import SingleProduct from "@/components/SingleProduct";
import { products } from "@/constants/products";
import { Metadata } from "next";
import { redirect } from "next/navigation";

type Props = {
  params: { slug: string };
};

// SEO metadata for dynamic pages
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);

  if (product) {
    return {
      title: product.title,
      description: product.description,
    };
  }

  return {
    title: "Projects | Sreyan Jethy",
    description:
      "Sreyan Jethy is a developer and problem-solver building full-stack solutions and microservices.",
  };
}

export default function SingleProjectPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    redirect("/projects");
  }

  return (
    <Container>
      <SingleProduct product={product} />
    </Container>
  );
}
