"use client";

import React from "react";
import { Heading } from "./Heading";
import { products } from "@/constants/products";
import Link from "next/link";
import Image from "next/image";
import { Paragraph } from "./Paragraph";
import { motion } from "framer-motion";

export const Products = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-10">
        {products.map((product, idx) => {
          const href = product.slug
            ? `/projects/${product.slug}`
            : product.href || "#";

          const thumbnail = product.thumbnail ?? "/images/placeholder.png"; // ✅ fallback for undefined thumbnails
          const stack = product.stack ?? []; // ✅ prevent undefined stack

          return (
            <motion.div
              key={product.slug || product.href || idx}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: idx * 0.1 }}
            >
              <Link
                href={href}
                className="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-50 rounded-2xl transition duration-200 pt-4"
              >
                <Image
                  src={thumbnail}
                  alt={product.title || "thumbnail"}
                  height={200}
                  width={200}
                  className="rounded-md"
                  priority
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <Heading
                      as="h4"
                      className="font-black text-lg md:text-lg lg:text-lg"
                    >
                      {product.title}
                    </Heading>
                    <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
                      {product.description}
                    </Paragraph>
                  </div>

                  {stack.length > 0 && (
                    <div className="flex space-x-2 md:mb-1 mt-2 md:mt-0">
                      {stack.map((tech: string, index: number) => (
                        <span
                          key={index}
                          className="text-xs md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
