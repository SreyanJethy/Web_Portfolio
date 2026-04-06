import { Container } from "@/components/Container";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs";
import BlogArticle from "@/components/BlogArticle";

type Props = { params: { slug: string } };

/* ── Static params for build-time generation ─────────────── */
export async function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

/* ── Dynamic metadata ────────────────────────────────────── */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogs.find((b) => b.slug === params.slug);
  if (!post) return { title: "Article Not Found" };
  return {
    title: `${post.title} | Sreyan Jethy`,
    description: post.summary,
  };
}

/* ── Page ────────────────────────────────────────────────── */
export default function BlogSlugPage({ params }: Props) {
  const post = blogs.find((b) => b.slug === params.slug);
  if (!post) notFound();

  return (
    <Container>
      <BlogArticle post={post} />
    </Container>
  );
}
