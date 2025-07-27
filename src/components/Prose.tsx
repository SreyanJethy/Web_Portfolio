import clsx from "clsx";

export function Prose({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "prose max-w-none",
        className,
        // Force all text inside to be black in light mode, white in dark
        "[&]:text-black dark:[&]:text-white",
        // Also force nested elements to inherit
        "[&_*]:text-black dark:[&_*]:text-white"
      )}
    >
      {children}
    </div>
  );
}
