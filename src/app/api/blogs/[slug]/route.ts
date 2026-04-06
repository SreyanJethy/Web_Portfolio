import { NextRequest, NextResponse } from "next/server";
import { blogs } from "@/data/blogs";

export async function GET(
  _req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const post = blogs.find((b) => b.slug === params.slug);

  if (!post) {
    return NextResponse.json(
      { success: false, message: "Blog post not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(
    { success: true, data: post },
    {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    }
  );
}
