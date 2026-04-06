import React from "react";
import { twMerge } from "tailwind-merge";

export const Highlight = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <span
      className={twMerge("px-1.5 py-0.5 rounded-md text-sm font-medium", className)}
      style={{
        backgroundColor: "rgba(99,102,241,0.12)",
        border: "1px solid rgba(99,102,241,0.2)",
        color: "var(--accent-purple)",
      }}
    >
      {children}
    </span>
  );
};
