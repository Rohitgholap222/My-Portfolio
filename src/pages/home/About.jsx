import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";

export default function About() {
  const experiences = [
    {
      role: "Full Stack Developer (Intern)",
      org: "JSPM JSCOE",
      period: "SEP 2024 – PRESENT",
      desc: "Specializing in enterprise resource planning modules (ERP). Building full-stack solutions with React, Spring Boot, and PostgreSQL."
    }
  ];

  const education = [
    {
      title: "Master of Computer Applications (MCA)",
      org: "Savitribai Phule Pune University (SPPU)",
      period: "2024 – 2026",
      status: "Currently Pursuing "
    },
    {
      title: "Bachelor of Computer Science (BCS)",
      org: "Savitribai Phule Pune University (SPPU)",
      period: "2021 – 2024",
      status: "CGPA: 8.27 "
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      org: "Maharashtra State Board",
      period: "2019 – 2021",
      status: "75.33%"
    },
    {
      title: "Secondary School Certificate (SSC)",
      org: "Maharashtra State Board",
      period: "2018 – 2019",
      status: "79%"
    }
  ];

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
            <span className="text-indigo-400 font-bold tracking-[0.15em] text-[9px] uppercase">
              Profile
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-['Playfair_Display'] font-bold tracking-tight text-[#fcfcfc]"
          >
            Purpose and <span className="italic text-indigo-400 font-medium font-['Playfair_Display']">Precision</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-white/40 max-w-xl leading-relaxed"
          >
            I'm <span className="text-white font-medium">Rohit Gholap</span>, a full-stack engineer focused on creating efficient digital products.
          </motion.p>
        </div>

        {/* CONTENT GRID - Optimized flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Main Info */}
          <div className="lg:col-span-12 space-y-12">

            {/* EXPERIENCE */}
            <div className="space-y-6">
              <h3 className="text-[9px] uppercase tracking-[0.3em] font-black text-white/10">Work</h3>
              <div className="space-y-6">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="border-l border-white/5 pl-5 hover:border-indigo-500 transition-colors"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="text-lg font-bold font-['Playfair_Display'] text-[#fcfcfc]">{exp.role}</h4>
                      <span className="text-[8px] font-bold tracking-widest text-indigo-400 uppercase">{exp.period}</span>
                    </div>
                    <p className="text-sm text-white/40 mb-1">{exp.org}</p>
                    <p className="text-[12px] text-white/60 max-w-2xl leading-relaxed">{exp.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* EDUCATION */}
            <div className="space-y-6">
              <h3 className="text-[9px] uppercase tracking-[0.3em] font-black text-white/10">Academic Journey</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {education.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-5 bg-white/5 border border-white/5 rounded-xl group transition-all hover:border-indigo-500/30"
                  >
                    <span className="text-[8px] font-bold text-indigo-400 tracking-widest block mb-2 opacity-60">{item.period}</span>
                    <h4 className="text-base font-bold font-['Playfair_Display'] text-[#fcfcfc] mb-1 group-hover:text-indigo-400 transition-colors">{item.title}</h4>
                    <p className="text-[11px] text-white/40 font-medium italic mb-1">{item.org}</p>
                    <p className="text-[10px] text-indigo-400/80 font-bold uppercase tracking-wider">{item.status}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
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
