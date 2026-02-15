import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";

const categories = [
  {
    title: "Frontend Engineering",
    icon: "🎨",
    skills: ["React.js", "JavaScript", "TailwindCSS", "HTML", "CSS", "Framer Motion"]
  },
  {
    title: "Backend Core",
    icon: "⚙️",
    skills: ["Spring Boot", "Node.js", "Express", "REST APIs", "Java", "Python"]
  },
  {
    title: "Database & Tools",
    icon: "🛠️",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Git", "GitHub", "Vite", "Postman"]
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

      <section className="max-w-6xl mx-auto px-8 pt-24 pb-12">
        {/* HEADER - Compact */}
        <div className="max-w-3xl mb-10 space-y-2">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-6 h-[1px] bg-indigo-500/50"></div>
            <span className="text-indigo-400 font-bold tracking-[0.15em] text-[10px] uppercase">
              Abilities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-['Playfair_Display'] font-bold tracking-tight text-[#fcfcfc]"
          >
            Technical <span className="italic text-indigo-400 font-medium font-['Playfair_Display']">Proficiencies</span>.
          </motion.h1>
        </div>

        {/* SKILLS GRID - Tighter layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -3 }}
              className="bg-white/5 p-6 rounded-xl border border-white/5 relative group transition-all"
            >
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-xl mb-4 group-hover:bg-indigo-500/20 transition-all">
                {category.icon}
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold font-['Playfair_Display'] text-[#fcfcfc] group-hover:text-indigo-400 transition-colors">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-white/5 border border-white/5 rounded-md text-[8px] font-bold text-white/20 uppercase tracking-widest"
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

      {/* FOOTER - Compact */}
      <footer className="py-8 border-t border-white/5 text-center">
        <p className="text-white/10 text-[9px] font-bold tracking-[0.3em] uppercase">
          © {new Date().getFullYear()} Rohit Gholap
        </p>
      </footer>
    </div>
  );
}
