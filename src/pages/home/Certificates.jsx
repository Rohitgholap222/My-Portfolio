import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const certificates = [
  {
    title: "Java Programming",
    org: "NPTEL",
    year: 2025,
  },
  {
    title: "Python Fundamentals",
    org: "Great Learning",
    year: 2024,
  },
  {
    title: "Git and GitHub",
    org: "PrepInsta",
    year: 2025,
  },
  {
    title: "Full Stack WEB Development",
    org: "PrepInsta",
    year: 2025,
  },
];

export default function Certificates() {
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
            Achievements
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold tracking-tight text-[#fcfcfc] mb-6"
          >
            Verified <span className="italic text-indigo-400">credentials</span> and certifications.
          </motion.h1>
        </div>

        {/* CERTIFICATES GRID/LIST */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 p-8 rounded-3xl border border-white/5 shadow-xl shadow-black/20 hover:shadow-indigo-500/10 transition-all group flex items-start gap-6"
            >
              <div className="w-12 h-12 bg-white/5 text-indigo-400 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
                <span className="text-lg">📜</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">{cert.year}</span>
                <h3 className="text-xl font-bold font-['Playfair_Display'] text-[#fcfcfc] leading-tight group-hover:text-indigo-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-white/40 font-medium">{cert.org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center bg-[#0a0a0a]">
        <p className="text-white/20 text-[11px] font-medium tracking-widest uppercase">
          © {new Date().getFullYear()} Rohit Gholap • Full Stack Developer
        </p>
      </footer>
    </div>
  );
}
