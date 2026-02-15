import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";

export default function Resume() {
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
              Curriculum Vitae
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold tracking-tight text-[#fcfcfc]"
          >
            Professional <span className="italic text-indigo-400 font-medium font-['Playfair_Display']">trajectory</span> and record.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-6 items-center pt-4"
          >
            <p className="text-base text-white/50 max-w-xl leading-relaxed">
              Academic background and professional milestones.
            </p>
            <motion.a
              href="/Rohit-Resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white text-black rounded-xl font-bold text-[11px] uppercase tracking-widest shadow-lg hover:bg-indigo-500 hover:text-white transition-all"
            >
              Download PDF
            </motion.a>
          </motion.div>
        </div>

        {/* Embedded Viewer - More Compact */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="w-full h-[75vh] rounded-2xl overflow-hidden shadow-2xl bg-white/5 border border-white/5"
        >
          <iframe
            src="/Rohit-Resume.pdf"
            className="w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            title="Resume Preview"
          ></iframe>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-white/20 text-[11px] font-medium tracking-widest uppercase">
          © {new Date().getFullYear()} Rohit Gholap • Structured Excellence
        </p>
      </footer>
    </div>
  );
}
