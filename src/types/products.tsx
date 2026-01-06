import { StaticImageData } from "next/image";

export type Product = {
  href: string;
  title: string;
  description: string;
  thumbnail: string | StaticImageData; // ✅ updated
  images: (string | StaticImageData)[]; // ✅ updated
  stack: string[];
  slug: string;
  content: JSX.Element;
};
