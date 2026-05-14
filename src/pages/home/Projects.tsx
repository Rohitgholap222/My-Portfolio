import { FaCode, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Placement Management System",
    description: "Full-stack portal for training & placement with admin and student modules.",
    tech: ["Java", "PostgreSQL", "Tailwind", "Spring Boot", "React"],
    link: "https://github.com/",
    image: "/project/ERP.png",
  },
  {
    title: "Increda Billing Management System",
    description: "Full-stack billing management system for small businesses.",
    tech: ["Java", "MySQL", "AWT/Swing"],
    link: "https://github.com/",
    image: "/project/incredabill.png",
  },
  {
    title: "Meal-Mitra AI",
    description: "AI-powered meal recommendation system.",
    tech: ["Python", "Machine Learning", "React"],
    link: "https://meal-mitra-pi.vercel.app/",
    image: "/project/mealmitra.png",
  },
  {
    title: "Modern Portfolio",
    description: "Editorial-style personal portfolio built using React, Tailwind, and Framer Motion.",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "https://github.com/Rohitgholap222/My-Portfolio",
    image: "/project/portfolio.png",
  },
  {
    title: "Bookito",
    description: "Smart book recommendation system that learns from user reading history and preferences.",
    tech: ["Python", "Flask", "Machine Learning"],
    link: "https://github.com/Rohitgholap222/Bookito-Python-Project",
    image: "/project/bookito.png",
  },
];

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-10">
      <div className="text-center mb-10" data-aos="fade-up">
        <h2 className="text-3xl font-josefin font-bold text-black mb-3">Latest <span className="text-primary">Projects</span></h2>
        <div className="w-16 h-1 bg-primary mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all duration-500"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-primary hover:text-white transition-colors"
                  title="View Code"
                >
                  <FaCode className="text-lg" />
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-primary hover:text-white transition-colors"
                  title="Live Demo"
                >
                  <FaExternalLinkAlt className="text-lg" />
                </a>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-5">
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.slice(0, 3).map((t, i) => (
                  <span
                    key={i}
                    className="text-[9px] font-josefin font-bold text-primary uppercase tracking-wider"
                  >
                    #{t}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-josefin font-bold text-black mb-1.5 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 font-josefin text-[13px] leading-relaxed line-clamp-2">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

