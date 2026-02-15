import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";

const categories = [
  {
    title: "Frontend Engineering",
    icon: "🎨",
    skills: ["React.js", "JavaScript (ES6+)", "TailwindCSS", "HTML & CSS", "Framer Motion"]
  },
  {
    title: "Backend Core",
    icon: "⚙️",
    skills: ["Spring Boot", "Node.js", "Express", "REST APIs", "Java", "Python"]
  },
  {
    title: "Database & Tools",
    icon: "🛠️",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Git & GitHub", "Vite", "Postman"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4 }
  }
};

export default function Skills() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fcfcfc] selection:bg-indigo-500 overflow-x-hidden">
      <Navbar />

      <section className="max-w-7xl mx-auto px-8 pt-32 pb-20">
        {/* HEADER */}
        <div className="max-w-3xl mb-12 space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-[1px] bg-indigo-500/50"></div>
            <span className="text-indigo-400 font-bold tracking-[0.2em] text-[10px] uppercase block underline decoration-indigo-500/30 underline-offset-4">
              Expertise
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold tracking-tight text-[#fcfcfc]"
          >
            Technical <span className="italic text-indigo-400 font-medium font-['Playfair_Display']">proficiencies</span> and tools.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base text-white/40 max-w-xl leading-relaxed font-normal"
          >
            A look at the technologies I use to build robust digital experiences.
          </motion.p>
        </div>

        {/* SKILLS GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white/5 p-8 rounded-2xl border border-white/5 relative group transition-all duration-300"
            >
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-indigo-500/20 group-hover:text-white transition-all duration-300">
                {category.icon}
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold font-['Playfair_Display'] text-[#fcfcfc] group-hover:text-indigo-400 transition-colors">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-white/5 border border-white/5 rounded-lg text-[9px] font-bold text-white/30 uppercase tracking-widest"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-white/20 text-[11px] font-medium tracking-widest uppercase">
          © {new Date().getFullYear()} Rohit Gholap • Engineering Excellence
        </p>
      </footer>
    </div>
  );
}
