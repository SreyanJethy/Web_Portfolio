"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import springBootImage from "@/assets/images/SpringBoot_api.png";
import vidyaNetraImage from "@/assets/images/VidyaNetra.png";

interface Product {
  title: string;
  description: string;
  image: StaticImageData;
  slug: string;
}

const products: Product[] = [
  {
    title: "Spring Boot API",
    description:
      "A RESTful backend built with Spring Boot that powers scalable micro-services.",
    image: springBootImage,
    slug: "springboot-api",
  },
  {
    title: "VidyaNetra",
    description:
      "An educational analytics platform that delivers real-time insights for learners and instructors.",
    image: vidyaNetraImage,
    slug: "vidyanetra",
  },
];

export default function Products() {
  return (
    <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 p-4">
      {products.map((product, index) => (
        <Link href={`/projects/${product.slug}`} key={index}>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 transition-transform hover:scale-105 cursor-pointer">
            <div className="relative w-full h-[200px] mb-4">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="rounded-md object-cover"
                priority
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {product.description}
            </p>
            <span className="text-blue-500 hover:underline">
              View Project →
            </span>
          </div>
        </Link>
      ))}
    </section>
  );
}
