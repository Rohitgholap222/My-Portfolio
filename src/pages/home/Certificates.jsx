import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";

const certificates = [
  {
    title: "Java Programming",
    org: "NPTEL",
    year: "2025"
  },
  {
    title: "Python Fundamentals",
    org: "Great Learning",
    year: "2024"
  },
  {
    title: "Git and GitHub",
    org: "PrepInsta",
    year: "2025"
  },
  {
    title: "Full Stack Development",
    org: "PrepInsta",
    year: "2025"
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
  hidden: { y: 15, opacity: 0 },
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

      <section className="max-w-6xl mx-auto px-8 pt-24 pb-12">
        {/* HEADER - Compact */}
        <div className="max-w-3xl mb-8 space-y-2">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-6 h-[1px] bg-indigo-500/50"></div>
            <span className="text-indigo-400 font-bold tracking-[0.15em] text-[10px] uppercase">
              Recognition
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-['Playfair_Display'] font-bold tracking-tight text-[#fcfcfc]"
          >
            Verified <span className="italic text-indigo-400 font-medium font-['Playfair_Display']">Credentials</span>.
          </motion.h1>
        </div>

        {/* CERTIFICATES MODULES - Tighter layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -2 }}
              className="bg-white/5 p-5 rounded-xl border border-white/5 transition-all duration-300 group flex items-start gap-4"
            >
              <div className="w-9 h-9 bg-white/5 text-indigo-400 rounded-lg flex items-center justify-center text-lg shrink-0 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                📜
              </div>
              <div className="space-y-0.5">
                <span className="text-[8px] font-bold text-white/20 uppercase tracking-widest">{cert.year}</span>
                <h3 className="text-sm font-bold font-['Playfair_Display'] text-[#fcfcfc] leading-tight group-hover:text-indigo-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-[11px] text-white/30 font-medium">{cert.org}</p>
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
