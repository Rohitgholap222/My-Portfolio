import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";

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
    tech: ["Java", "PostgreSQL", "Tailwind", "Spring Boot", "React"],
    link: "https://github.com/",
  },
  {
    title: "BigMart E-commerce",
    description: "Full-feature E-commerce web application with product management and recommendations.",
    tech: ["Java", "Spring Boot", "React", "MySQL"],
    link: "https://github.com/Rohitgholap222/BigMart-Web",
  },
  {
    title: "Modern Portfolio",
    description: "Editorial-style personal portfolio built using React, Tailwind, and Framer Motion.",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "https://github.com/Rohitgholap222/My-Portfolio",
  },
  {
    title: "Bookito AI",
    description: "Smart book recommendation system that learns from user reading history and preferences.",
    tech: ["Python", "Flask", "Machine Learning"],
    link: "https://github.com/Rohitgholap222/Bookito-Python-Project",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4 },
  },
};

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fcfcfc] selection:bg-indigo-500 overflow-x-hidden">
      <Navbar />

      <section className="max-w-7xl mx-auto px-8 pt-32 pb-20">
        {/* HEADER - Reduced Size */}
        <div className="max-w-3xl mb-12 space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-[1px] bg-indigo-500/50"></div>
            <span className="text-indigo-400 font-bold tracking-[0.2em] text-[10px] uppercase block">
              Portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold tracking-tight text-[#fcfcfc]"
          >
            Selected <span className="italic text-indigo-400 font-medium font-['Playfair_Display']">projects</span> and works.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base text-white/40 max-w-xl leading-relaxed font-normal"
          >
            A curated selection of technical projects and digital experiments.
          </motion.p>
        </div>

        {/* PROJECTS GRID - More Compact */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group space-y-4"
            >
              {/* IMAGE CONTAINER */}
              <div className="aspect-video bg-white/5 border border-white/5 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/10 transition-colors duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-white font-['Playfair_Display'] text-6xl font-bold opacity-5 select-none italic">
                    0{index + 1}
                  </div>
                </div>
              </div>

              {/* DETAILS */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-['Playfair_Display'] text-[#fcfcfc] group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed font-normal line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-white/5 border border-white/5 rounded-lg text-[9px] font-bold text-white/30 uppercase tracking-widest"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-white/80 font-bold text-[11px] uppercase tracking-widest border-b border-white/5 hover:border-indigo-400 hover:text-indigo-400 transition-all"
                  >
                    View Project →
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-white/20 text-[11px] font-medium tracking-widest uppercase">
          © {new Date().getFullYear()} Rohit Gholap • Full Stack Developer
        </p>
      </footer>
    </div>
  );
}
