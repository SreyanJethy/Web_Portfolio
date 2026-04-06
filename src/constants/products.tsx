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
  {
  href: "https://github.com/SreyanJethy/sidekick",
  liveUrl: "",
  title: "SideKick — Smart Companion Discovery Platform",
  description:
    "A full-stack social discovery platform that helps users find compatible companions for outings, movies, events, and activities using intelligent matching and real-time interaction.",
  thumbnail: "/images/sidekick.png",
  images: ["/images/sidekick.png"],
  stack: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "Socket.IO",
    "React",
    "Next.js",
    "REST API"
  ],
  highlights: [
    "Smart Matching Engine",
    "JWT Auth",
    "Secure User Profiles",
    "Real-Time Chat APIs",
    "Input Validation",
    "Error Handling",
    "Scalable REST Architecture"
  ],
  slug: "sidekick",
  content: (
    <div>
      <p>
        <strong>Challenge:</strong> Build a scalable and maintainable full-stack social discovery platform that helps users find like-minded companions for activities such as movies, outings, and events, while ensuring secure authentication, real-time communication, and smooth user experience.
      </p>
      <p>
        <strong>Solution:</strong> Designed a layered backend architecture following the Controller → Service → Repository pattern for clean code separation and scalability. Implemented JWT-based authentication, robust validation, centralized exception handling, and intelligent matching logic based on shared interests and preferences.
      </p>
      <p>
        <strong>Backend Highlights:</strong> RESTful API architecture, real-time chat integration with Socket.IO, secure auth workflows, modular services, optimized user relationship schema, and production-ready scalable backend design.
      </p>
    </div>
  ),
},
{
  href: "https://github.com/SreyanJethy/Serenity-AI",
  liveUrl: "",
  title: "Serenity AI — Mental Health First-Response Platform",
  description:
    "An AI-powered crisis support platform providing immediate emotional assistance, sentiment analysis, crisis detection, and safe escalation workflows for students and young adults.",
  thumbnail: "/images/serenity-ai.png",
  images: ["/images/serenity-ai.png"],
  stack: [
    "Node.js",
    "Express.js",
    "Firebase",
    "Gemini API",
    "NLP",
    "JWT",
    "React",
    "Vite",
    "REST API"
  ],
  highlights: [
    "AI Sentiment Analysis Pipeline",
    "3-Tier Crisis Detection",
    "Secure Authentication",
    "Mood Tracking APIs",
    "Error Handling",
    "Scalable REST Architecture",
    "Emergency Escalation Workflow"
  ],
  slug: "serenity-ai",
  content: (
    <div>
      <p>
        <strong>Challenge:</strong> Build a scalable AI-powered mental health first-response platform that provides immediate emotional support, detects crisis-level user inputs, and safely escalates emergency cases.
      </p>
      <p>
        <strong>Solution:</strong> Designed a modular backend architecture using Controller → Service → Repository pattern. Integrated sentiment analysis, mood classification, crisis detection engine, and structured authentication workflows for safe user interaction.
      </p>
      <p>
        <strong>Backend Highlights:</strong> AI sentiment analysis pipeline, crisis alert APIs, emergency override workflows, conversation memory flow, mood logging services, and production-ready scalable architecture.
      </p>
    </div>
  ),
},
];
