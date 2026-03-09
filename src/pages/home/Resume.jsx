import { motion } from "framer-motion";

export default function Resume() {
  return (
    <div className="bg-[#0a0a0a] text-[#fcfcfc] selection:bg-indigo-500 overflow-x-hidden transition-all">
      <section className="max-w-6xl mx-auto px-8 py-12">
        {/* HEADER - Compact */}
        <div className="max-w-3xl mb-8 space-y-2">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-6 h-px bg-indigo-500/50"></div>
            <span className="text-indigo-400 font-bold tracking-[0.15em] text-[10px] uppercase">
              Resume
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-['Playfair_Display'] font-bold tracking-tight text-[#fcfcfc]"
          >
            My <span className="italic text-indigo-400 font-medium font-['Playfair_Display']">Resume</span>.
          </motion.h1>

          <div className="flex flex-wrap gap-4 items-center pt-2">
            <p className="text-sm text-white/50 max-w-sm leading-relaxed">
              Curriculum vitae and academic records.
            </p>
            <motion.a
              href="/Rohit-Resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 bg-white text-black rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-indigo-500 hover:text-white transition-all shadow-sm"
            >
              PDF
            </motion.a>
          </div>
        </div>

        {/* Embedded Viewer - Optimized height */}
        <motion.div
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full h-[60vh] rounded-xl overflow-hidden shadow-xl bg-white/5 border border-white/5"
        >
          <iframe
            src="/Rohit-Resume.pdf"
            className="w-full h-full opacity-80"
            title="Resume"
          ></iframe>
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
