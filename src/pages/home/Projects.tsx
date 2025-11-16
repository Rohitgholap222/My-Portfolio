import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "Collaborative Whiteboard",
    description: "A real-time multi-user drawing board using WebSockets, React, and Spring Boot.",
    tech: ["React", "Spring Boot", "WebSockets"],
    link: "https://github.com/",
  },
  {
    title: "Placement Management System",
    description: "Full-stack portal for training & placement with admin and student modules.",
    tech: ["Java", "MySQL", "Tailwind"],
    link: "https://github.com/",
  },
  {
    title: "AI Image Classifier",
    description: "ML model for object classification using TensorFlow & FastAPI.",
    tech: ["Python", "TensorFlow", "FastAPI"],
    link: "https://github.com/",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built using React + Tailwind + Framer Motion.",
    tech: ["React", "Tailwind"],
    link: "https://github.com/",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          My <span className="text-purple-400">Projects</span>
        </motion.h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.25 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg shadow-lg hover:border-purple-500/30"
            >
              <h2 className="text-xl font-semibold text-purple-300">
                {project.title}
              </h2>

              <p className="text-gray-300 mt-2 text-sm">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs border border-purple-500/20 rounded-lg text-purple-300 bg-purple-500/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={project.link}
                target="_blank"
                className="block mt-5 text-sm text-purple-400 hover:text-purple-300"
              >
                → View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-900">
        © {new Date().getFullYear()} Rohit Gholap • All Rights Reserved
      </footer>
    </div>
  );
}
