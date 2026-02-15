import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

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
    tech: ["Java", "postgreSQL", "Tailwind", "Spring Boot", "React"],
    link: "https://github.com/",
  },
  {
    title: "BigMart - E-commerce Web App",
    description: "E-commerce web application with product recommendations.",
    tech: ["Java", "Spring Boot", "React"],
    link: "https://github.com/Rohitgholap222/BigMart-Web",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built using React + Tailwind + Framer Motion.",
    tech: ["React", "Tailwind"],
    link: "https://github.com/Rohitgholap222/My-Portfolio",
  },
  {
    title: "Bookito - Book Recommendation System",
    description: "Bookito is Personel book recommendation system that stores reading history and recommends books accordingly.",
    tech: ["Python", "Flask"],
    link: "https://github.com/Rohitgholap222/Bookito-Python-Project",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fcfcfc]">
      <Navbar />

      <section className="max-w-7xl mx-auto px-8 pt-32 pb-20">
        {/* HEADER */}
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-indigo-400 font-bold tracking-[0.2em] text-[11px] uppercase block mb-4"
          >
            Portfolio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold tracking-tight text-[#fcfcfc] mb-6"
          >
            Selected <span className="italic text-indigo-400">projects</span> and works.
          </motion.h1>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group space-y-6"
            >
              {/* IMAGE CONTAINER */}
              <div className="aspect-video bg-white/5 border border-white/5 rounded-3xl overflow-hidden relative">
                <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/10 transition-colors duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="text-white font-['Playfair_Display'] text-8xl font-bold opacity-5 select-none">0{index + 1}</div>
                </div>
              </div>

              {/* DETAILS */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold font-['Playfair_Display'] text-[#fcfcfc] group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-base text-white/50 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-[10px] font-bold text-white/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center gap-3 text-[#fcfcfc] font-bold group"
                  >
                    <span className="border-b border-white/10 group-hover:border-indigo-400 transition-all pb-0.5 uppercase tracking-widest text-[11px]">View Case Study</span>
                    <span className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full group-hover:bg-indigo-500 group-hover:text-white transition-colors text-xs">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-[#0a0a0a] border-t border-white/5 mt-20">
        <div className="max-w-7xl mx-auto px-8 flex flex-col items-center text-center space-y-6">
          <h3 className="text-2xl font-bold font-['Playfair_Display'] text-[#fcfcfc]">Let's discuss your next project</h3>
          <a href="mailto:rohitgholap045@gmail.com" className="text-base font-bold text-indigo-400 border-b border-indigo-500/20 hover:border-indigo-400 transition-all pb-1 uppercase tracking-widest">rohitgholap045@gmail.com</a>
        </div>
      </footer>
    </div>
  );
}
