import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sreyan Jethy | Backend & Full-Stack Engineer",
  description:
    "Sreyan Jethy is a Computer Science Engineer specializing in Python backend development, REST APIs, MERN stack, and AI-integrated applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(inter.className, "antialiased")}
        style={{ backgroundColor: "var(--bg-primary)", overflowX: "hidden" }}
      >
        {/*
          Root grid: sidebar (fixed, off-flow) + scrollable main.
          On desktop the sidebar is fixed-position so we push main
          content right with a left margin equal to sidebar width.
          On mobile the sidebar overlays, so no margin needed.
        */}
        <Sidebar />

        <div
          className="lg:ml-[13.5rem] min-h-screen flex flex-col"
          style={{ backgroundColor: "var(--bg-primary)" }}
        >
          {/* Inner surface — the "page card" */}
          <div
            className="flex-1 flex flex-col lg:m-2 lg:rounded-xl overflow-hidden"
            style={{
              backgroundColor: "var(--bg-secondary)",
              border: "1px solid var(--border-subtle)",
              minHeight: "calc(100vh - 16px)",
            }}
          >
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
