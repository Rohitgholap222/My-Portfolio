import { motion } from "framer-motion";

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
    <div className="bg-[#0a0a0a] text-[#fcfcfc] selection:bg-indigo-500 overflow-x-hidden">
      <section className="max-w-6xl mx-auto px-8 py-12">
        {/* HEADER - Reduced Size */}
        <div className="max-w-3xl mb-8 space-y-2">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-6 h-px bg-indigo-500/50"></div>
            <span className="text-indigo-400 font-bold tracking-[0.15em] text-[9px] uppercase">
              Selected Work
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-['Playfair_Display'] font-bold tracking-tight text-[#fcfcfc]"
          >
            Key <span className="italic text-indigo-400 font-medium font-['Playfair_Display']">Projects</span>
          </motion.h1>
        </div>

        {/* PROJECTS GRID - More Compact 3-column on large screens */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="group space-y-3 p-4 bg-white/5 border border-white/5 rounded-xl hover:border-indigo-500/30 transition-all shadow-sm"
            >
              {/* IMAGE CONTAINER - Smaller height */}
              <div className="aspect-video bg-white/5 rounded-lg overflow-hidden relative mb-2 group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <span className="text-[10px] text-white font-bold uppercase tracking-widest">{project.title}</span>
                </div>
              </div>

              {/* DETAILS */}
              <div className="space-y-2">
                <h3 className="text-base font-bold font-['Playfair_Display'] text-[#fcfcfc] group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-white/40 leading-relaxed font-normal line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-white/5 rounded-md text-[8px] font-bold text-white/20 uppercase"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-[8px] text-white/10 font-bold">+{project.tech.length - 3}</span>
                  )}
                </div>

                <div className="pt-2">
                  <a
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 text-white/60 font-bold text-[9px] uppercase tracking-widest hover:text-indigo-400 transition-all"
                  >
                    Details →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
