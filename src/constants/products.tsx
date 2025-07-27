import { Product } from "@/types/products";

export const products: Product[] = [
  {
    href: "https://github.com/SreyanJethy/API-Explorer",
    title: "Spring Boot API",
    description: "A RESTful web service built using Spring Boot and Java.",
    thumbnail: "/images/SpringBoot_api.png", // ✅ Use string path
    images: ["/images/SpringBoot_api.png"],
    stack: ["Java", "Spring Boot", "REST"],
    slug: "springboot-api",
    content: (
      <div>
        <p>
          This project demonstrates a well-structured Spring Boot application
          exposing REST APIs. It handles CRUD operations and integrates with a
          MySQL database.
        </p>
        <p>
          Technologies used include Spring Boot, Maven, and JPA. The project
          follows RESTful principles and includes validation, error handling,
          and documentation.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/sreyanjethy/vidyanetra",
    title: "VidyaNetra",
    description:
      "An intelligent education dashboard for tracking student performance.",
    thumbnail: "/images/VidyaNetra.png", // ✅ Use string path
    images: ["/images/VidyaNetra.png"],
    stack: ["React", "Node.js", "MongoDB"],
    slug: "vidya-netra",
    content: (
      <div>
        <p>
          VidyaNetra is a smart analytics platform tailored for education
          institutes to monitor and visualize academic performance.
        </p>
        <p>
          Built with a MERN stack, it supports user roles, secure login,
          performance graphs, and admin control panels. It's scalable and
          designed for intuitive use.
        </p>
      </div>
    ),
  },
];
