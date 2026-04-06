import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 md:px-10 xl:px-14 py-14 md:py-20">
      {children}
    </div>
  );
};
