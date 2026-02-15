import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";

const certificates = [
  {
    title: "Java Programming",
    org: "NPTEL",
    year: 2025
  },
  {
    title: "Python Fundamentals",
    org: "Great Learning",
    year: 2024
  },
  {
    title: "Git and GitHub",
    org: "PrepInsta",
    year: 2025
  },
  {
    title: "Full Stack WEB Development",
    org: "PrepInsta",
    year: 2025
  },
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

export default function Certificates() {
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
              Achievements
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold tracking-tight text-[#fcfcfc]"
          >
            Verified <span className="italic text-indigo-400 font-medium font-['Playfair_Display']">credentials</span> and certifications.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base text-white/40 max-w-xl leading-relaxed font-normal"
          >
            Professional certifications and honors acquired throughout my academic journey.
          </motion.p>
        </div>

        {/* CERTIFICATES MODULES */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white/5 p-8 rounded-2xl border border-white/5 transition-all duration-300 group flex items-start gap-4"
            >
              <div className="w-10 h-10 bg-white/5 text-indigo-400 rounded-lg flex items-center justify-center text-xl shrink-0 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                📜
              </div>
              <div className="space-y-1">
                <span className="text-[9px] font-bold text-white/20 uppercase tracking-widest">{cert.year}</span>
                <h3 className="text-lg font-bold font-['Playfair_Display'] text-[#fcfcfc] leading-tight group-hover:text-indigo-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs text-white/40 font-medium">{cert.org}</p>
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
