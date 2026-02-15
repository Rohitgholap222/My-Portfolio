import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fcfcfc]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-8 pt-32 pb-20">

        {/* HEADER SECTION */}
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-indigo-400 font-bold tracking-[0.2em] text-[11px] uppercase block mb-4"
          >
            Our Story
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold tracking-tight text-[#fcfcfc] mb-6"
          >
            Developing with purpose <br /> and <span className="italic text-indigo-400">precision</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/60 leading-relaxed font-normal"
          >
            I'm <span className="font-semibold text-[#fcfcfc]">Rohit Gholap</span>,
            crafting digital experiences that harmonize form and function.
            Currently based in Pune, India.
          </motion.p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* EDUCATION & EXPERIENCE */}
          <div className="lg:col-span-8 space-y-16">

            {/* EDUCATION */}
            <div className="space-y-8">
              <h3 className="text-[11px] uppercase tracking-[0.3em] font-black text-white/10">Education</h3>
              <div className="space-y-8">
                {[
                  {
                    title: "Master Of Computer Application",
                    org: "Savitribai Phule Pune University",
                    period: "2024 – 2026",
                    status: "Currently Pursuing"
                  },
                  {
                    title: "Bachelor Of Computer Science",
                    org: "Savitribai Phule Pune University",
                    period: "2021 – 2024",
                    status: "CGPA: 8.27"
                  }
                ].map((item, i) => (
                  <div key={i} className="group border-l border-white/5 hover:border-indigo-500 pl-6 transition-colors">
                    <span className="text-[11px] font-bold text-white/20 block mb-1">{item.period}</span>
                    <h4 className="text-xl font-bold font-['Playfair_Display'] text-[#fcfcfc] mb-1 group-hover:text-indigo-400 transition-colors">{item.title}</h4>
                    <p className="text-base text-white/40 font-medium">{item.org} • {item.status}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* EXPERIENCE */}
            <div className="space-y-8">
              <h3 className="text-[11px] uppercase tracking-[0.3em] font-black text-white/10">Experience</h3>
              <div className="bg-white/5 border border-white/5 p-8 rounded-3xl backdrop-blur-sm">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-3">
                  <h4 className="text-xl font-bold font-['Playfair_Display'] text-[#fcfcfc]">ERP Development Intern</h4>
                  <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-[10px] font-bold text-indigo-400">SEP 2025 – PRESENT</span>
                </div>
                <p className="text-lg text-white/80 font-medium mb-6">JSPM JSCOE</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "React.js for frontend UI",
                    "Spring Boot for backend APIs",
                    "PostgreSQL for database",
                    "REST API Integration",
                    "Optimizing performance"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/50 text-sm">
                      <span className="w-1 h-1 bg-indigo-500 rounded-full shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* SIDE INFO */}
          <div className="lg:col-span-4 space-y-10 sticky top-32">
            <div className="p-8 bg-indigo-600/10 border border-indigo-500/20 text-white rounded-3xl shadow-2xl shadow-indigo-500/5">
              <h3 className="text-xl font-bold font-['Playfair_Display'] mb-4 leading-tight text-[#fcfcfc]">Always learning, <br />always building.</h3>
              <p className="text-sm text-white/60 mb-6 leading-relaxed">
                I believe every line of code should improve user experience. Bridging logic and elegance.
              </p>
              <button className="w-full py-3 bg-indigo-500 text-white rounded-xl font-bold hover:bg-indigo-600 transition-colors shadow-xl shadow-indigo-500/20 text-sm">
                Let's Talk
              </button>
            </div>

            <div className="space-y-4">
              <h4 className="text-[11px] uppercase tracking-widest font-black text-white/10">Current Focus</h4>
              <div className="flex flex-wrap gap-2">
                {["FULL-STACK", "UI DESIGN", "ARCHITECTURE"].map((tag, i) => (
                  <span key={i} className="px-3 py-1.5 border border-white/5 rounded-lg text-[10px] font-black text-white/30">{tag}</span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
