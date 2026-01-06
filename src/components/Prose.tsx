// DELETE THIS FILE
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
        "[&]:text-black dark:[&]:text-white",
        "[&_*]:text-black dark:[&_*]:text-white"
      )}
    >
      {children}
    </div>
  );
}
