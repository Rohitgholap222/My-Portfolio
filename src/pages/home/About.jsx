import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";

export default function About() {
  const experiences = [
    {
      role: "Full Stack Developer (Intern)",
      org: "JSPM JSCOE",
      period: "SEP 2024 – PRESENT",
      desc: "Architecting and implementing enterprise-scale modules for college management systems (ERP).",
      details: [
        "Developing responsive user interfaces using React.js and Tailwind CSS.",
        "Building robust RESTful APIs and backend logic with Spring Boot and PostgreSQL.",
        "Collaborating on system architecture to ensure scalability and high performance.",
        "Optimizing database queries and improving frontend load times by 30%."
      ]
    }
  ];

  const education = [
    {
      title: "MCA",
      org: "SPPU",
      period: "2024 – 2026",
      status: "Currently Pursuing"
    },
    {
      title: "BCS",
      org: "SPPU",
      period: "2021 – 2024",
      status: "CGPA: 8.27"
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
            <span className="text-indigo-400 font-bold tracking-[0.15em] text-[10px] uppercase">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Main Info */}
          <div className="lg:col-span-8 space-y-12">

            {/* EXPERIENCE */}
            <div className="space-y-6">
              <h3 className="text-[9px] uppercase tracking-[0.3em] font-black text-white/10">Professional Experience</h3>
              <div className="space-y-10">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="border-l border-white/5 pl-6 hover:border-indigo-500 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-xl font-bold font-['Playfair_Display'] text-[#fcfcfc]">{exp.role}</h4>
                        <p className="text-sm text-indigo-400 font-medium">{exp.org}</p>
                      </div>
                      <span className="text-[9px] font-bold tracking-widest text-[#fcfcfc]/30 uppercase pt-1">{exp.period}</span>
                    </div>

                    <p className="text-[13px] text-white/60 mb-4 leading-relaxed italic">{exp.desc}</p>

                    <ul className="space-y-2.5">
                      {exp.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-3 group/item">
                          <span className="w-1 h-1 rounded-full bg-indigo-500/50 mt-2 shrink-0 group-hover/item:bg-indigo-400"></span>
                          <p className="text-[12px] text-white/40 leading-relaxed group-hover/item:text-white/60 transition-colors">{detail}</p>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* EDUCATION */}
            <div className="space-y-6">
              <h3 className="text-[9px] uppercase tracking-[0.3em] font-black text-white/10">Academic Background</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {education.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-5 bg-white/5 border border-white/5 rounded-xl group transition-all"
                  >
                    <span className="text-[8px] font-bold text-indigo-400 tracking-widest block mb-2 opacity-40">{item.period}</span>
                    <h4 className="text-base font-bold font-['Playfair_Display'] text-[#fcfcfc] mb-1 group-hover:text-indigo-400 transition-colors">{item.title}</h4>
                    <p className="text-[11px] text-white/30">{item.org} • {item.status}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Smaller and attached */}
          <div className="lg:col-span-4 sticky top-28">
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-indigo-500 rounded-xl text-white shadow-xl"
            >
              <h3 className="text-lg font-bold font-['Playfair_Display'] leading-snug mb-3">Building the future.</h3>
              <p className="text-white/80 leading-relaxed text-[11px] mb-4">
                Bridging the gap between complex logic and visual elegance.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-2.5 bg-white text-indigo-500 rounded-lg font-bold uppercase tracking-widest text-[9px] transition-all"
              >
                Let's Talk
              </motion.button>
            </motion.div>
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
