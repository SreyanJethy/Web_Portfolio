import { StaticImageData } from "next/image";

export type Product = {
  href: string;
  liveUrl?: string;
  title: string;
  description: string;
  thumbnail: string | StaticImageData;
  images: (string | StaticImageData)[];
  stack: string[];
  highlights?: string[];
  slug: string;
  content: JSX.Element;
};
