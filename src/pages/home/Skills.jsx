import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fcfcfc]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-8 pt-32 pb-20">

        {/* HEADER */}
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-indigo-400 font-bold tracking-[0.2em] text-[11px] uppercase block mb-4"
          >
            Expertise
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold tracking-tight text-[#fcfcfc] mb-6"
          >
            Technical <span className="italic text-indigo-400">proficiencies</span> and tools.
          </motion.h1>
        </div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Frontend Engineering",
              icon: "🎨",
              skills: ["React.js", "JavaScript (ES6+)", "TailwindCSS", "HTML & CSS"]
            },
            {
              title: "Backend Core",
              icon: "⚙️",
              skills: ["Spring Boot", "Node.js", "REST APIs", "Java"]
            },
            {
              title: "Database & Tools",
              icon: "🛠️",
              skills: ["Git & GitHub", "MySQL", "MongoDB", "PostgreSQL"]
            }
          ].map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 p-8 rounded-3xl border border-white/5 shadow-xl shadow-black/20 hover:shadow-indigo-500/10 transition-all group"
            >
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-500">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold font-['Playfair_Display'] text-[#fcfcfc] mb-4 group-hover:text-indigo-400 transition-colors">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/40 font-medium text-sm">
                    <span className="w-1 h-1 bg-indigo-500 rounded-full shrink-0"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
