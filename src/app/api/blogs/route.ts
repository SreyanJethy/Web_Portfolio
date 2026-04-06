import { NextResponse } from "next/server";
import { blogs } from "@/data/blogs";

export async function GET() {
  // Return metadata only — omit heavy content field for the listing page
  const data = blogs.map(({ content: _content, ...meta }) => meta);

  return NextResponse.json(
    { success: true, count: data.length, data },
    {
      status: 200,
      headers: {
        // Cache for 60s on CDN edge, revalidate in background
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
      },
    }
  );
}
