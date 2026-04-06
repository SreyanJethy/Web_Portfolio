import { Product } from "@/types/products";

export const products: Product[] = [
  {
    href: "https://github.com/SreyanJethy/API-Explorer",
    liveUrl: "",
    title: "Spring Boot REST API",
    description:
      "A production-grade RESTful web service built with Spring Boot and Java. Exposes CRUD endpoints backed by MySQL with full validation, error handling, and API documentation.",
    thumbnail: "/images/SpringBoot_api.png",
    images: ["/images/SpringBoot_api.png"],
    stack: ["Java", "Spring Boot", "MySQL", "JPA", "Maven", "REST"],
    highlights: ["CRUD Architecture", "JWT Auth", "Input Validation", "Error Handling", "API Docs"],
    slug: "springboot-api",
    content: (
      <div>
        <p>
          <strong>Challenge:</strong> Build a scalable, maintainable REST API backend that handles
          real-world CRUD operations with proper validation, authentication, and documentation.
        </p>
        <p>
          <strong>Solution:</strong> Designed a layered Spring Boot architecture with Controller →
          Service → Repository pattern. Integrated JPA/Hibernate for ORM, Bean Validation for
          input sanitization, and global exception handling for consistent error responses.
        </p>
        <p>
          <strong>Backend Highlights:</strong> RESTful endpoint design following HTTP semantics,
          MySQL schema with relational integrity, Maven build pipeline, and Postman-tested API
          contracts. Follows industry-standard patterns for scalable microservice architecture.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/sreyanjethy/vidyanetra",
    liveUrl: "",
    title: "VidyaNetra — Education Analytics Platform",
    description:
      "An intelligent MERN stack education dashboard for tracking and visualizing student academic performance. Features role-based auth, real-time analytics, and admin control panels.",
    thumbnail: "/images/VidyaNetra.png",
    images: ["/images/VidyaNetra.png"],
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Chart.js"],
    highlights: ["Role-Based Auth", "MongoDB Models", "REST API", "Async Operations", "Admin Panel"],
    slug: "vidya-netra",
    content: (
      <div>
        <p>
          <strong>Challenge:</strong> Educational institutions needed a unified platform to monitor
          student performance across subjects with role-specific access for students, teachers,
          and administrators.
        </p>
        <p>
          <strong>Solution:</strong> Built a full MERN stack application with JWT-based role
          authentication, MongoDB document models for flexible academic data, and Express REST
          APIs consumed by a React dashboard with Chart.js visualizations.
        </p>
        <p>
          <strong>Backend Highlights:</strong> Mongoose schema design for students, courses, and
          grades. Middleware-based auth guards on protected routes. Async/await throughout the
          Node.js service layer. Scalable MongoDB aggregation pipelines for analytics queries.
        </p>
      </div>
    ),
  },
];
