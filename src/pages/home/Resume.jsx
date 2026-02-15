import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fcfcfc]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-8 pt-40 pb-24">

        {/* HEADER */}
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-indigo-400 font-bold tracking-[0.2em] text-[11px] uppercase block mb-6"
          >
            Curriculum Vitae
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold tracking-tight text-[#fcfcfc] mb-8"
          >
            Professional <span className="italic text-indigo-400">trajectory</span> and record.
          </motion.h1>
        </div>

        {/* Embedded Resume Viewer */}
        <div className="w-full h-[85vh] rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/5 bg-white/5 border border-white/5">
          <iframe
            src="/Rohit-Resume.pdf"
            className="w-full h-full invert opacity-90"
            title="Resume Preview"
          ></iframe>
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
