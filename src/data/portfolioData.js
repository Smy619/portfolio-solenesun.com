import img1 from "../assets/img/masonry-portfolio/masonry-portfolio-1.jpg";
import img2 from "../assets/img/masonry-portfolio/masonry-portfolio-2.jpg";
import img3 from "../assets/img/masonry-portfolio/masonry-portfolio-3.jpg";
import img4 from "../assets/img/masonry-portfolio/masonry-portfolio-4.jpg";
import img5 from "../assets/img/masonry-portfolio/masonry-portfolio-5.jpg";
import img6 from "../assets/img/masonry-portfolio/masonry-portfolio-6.jpg";
import img7 from "../assets/img/masonry-portfolio/masonry-portfolio-7.jpg";
import img8 from "../assets/img/masonry-portfolio/masonry-portfolio-8.jpg";


export const portfolioData = [
  // Formation Projects
  {
    id: 1,
    title: "Nina Carducci – SEO Optimization",
    category: "Formation",
    image: img1,
    description:
      "Website optimized for SEO, accessibility, and performance using Lighthouse, WAVE, and structured data.",
    tech: ["HTML", "CSS", "SEO", "Lighthouse"],
    status: "Completed",
    year: 2024,
  },
  {
    id: 2,
    title: "ArgentBank – React Banking App",
    category: "Formation",
    image: img2,
    description:
      "Full-stack banking web app with user authentication, transactions, and Redux state management.",
    tech: ["React", "Redux", "Node.js", "MongoDB"],
    status: "Completed",
    year: 2025,
  },
  {
    id: 3,
    title: "Portfolio – Projet 12",
    category: "Formation",
    image: img3,
    description:
      "Modern portfolio website built with React + Vite, including animations, routing, and responsive design.",
    tech: ["React", "Vite", "AOS", "SCSS"],
    status: "In Progress",
    year: 2025,
  },

  // Personal Projects
  {
    id: 4,
    title: "MonResto WordPress Theme",
    category: "Personal",
    image: img4,
    description:
      "Commercial WordPress restaurant theme with WooCommerce and custom animations.",
    tech: ["WordPress", "SCSS", "JavaScript"],
    status: "Completed",
    year: 2025,
  },
  {
    id: 5,
    title: "AI Job Hunter",
    category: "Personal",
    image: img5,
    description:
      "AI-powered tool that automatically sends tailored CVs to remote job offers.",
    tech: ["React", "OpenAI API", "Automation"],
    status: "In Progress",
    year: 2025,
  },
  {
    id: 6,
    title: "AI Theme2WP",
    category: "Personal",
    image: img6,
    description:
      "Tool that converts static HTML templates into WordPress themes using AI assistance.",
    tech: ["Node.js", "React", "OpenAI API"],
    status: "In Progress",
    year: 2025,
  },
  {
    id: 7,
    title: "AI Tarot Project",
    category: "Personal",
    image: img7,
    description:
      "Interactive Tarot reading web app powered by AI, combining psychology and symbolic storytelling.",
    tech: ["React", "Node.js", "AI API"],
    status: "In Progress",
    year: 2025,
  },

  // Concept Stage
  {
    id: 8,
    title: "AI Email Assistant",
    category: "Concept",
    image: img8,
    description:
      "Smart email management assistant that reads, summarizes, and replies automatically using AI.",
    tech: ["Python", "OpenAI", "IMAP/SMTP"],
    status: "Concept Stage",
    year: 2025,
  },
];