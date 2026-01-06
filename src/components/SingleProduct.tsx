"use client";

import Image from "next/image";
import { Product } from "@/types/products";

type Props = {
  product: Product;
};

export default function SingleProduct({ product }: Props) {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
        {product.title}
      </h1>

      <p className="text-black dark:text-gray-3000 text-lg mb-6">
        {product.description}
      </p>

      <div className="w-full max-w-3xl h-auto mb-8">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={1200}
          height={700}
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Styled manually, no Prose */}
      <div className="mb-6 text-black dark:text-gray-2000 space-y-4 text-base leading-relaxed">
        {product.content}
      </div>

      {product.stack.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
            Tech Stack:
          </h3>
          <ul className="flex flex-wrap gap-2">
            {product.stack.map((tech, idx) => (
              <li
                key={idx}
                className="bg-blue-200 text-blue-900 dark:bg-blue-800 dark:text-white px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      )}

      <a
        href={product.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-blue-600 dark:text-blue-400 hover:underline text-lg font-medium"
      >
        View Project on GitHub →
      </a>
    </section>
  );
}
