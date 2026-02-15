import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";

export default function About() {
  const experiences = [
    {
      role: "ERP Development Intern",
      org: "JSPM JSCOE",
      period: "SEP 2024 – PRESENT",
      desc: "Working on enterprise resource planning systems using React and Spring Boot."
    }
  ];

  const education = [
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
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fcfcfc] selection:bg-indigo-500 overflow-x-hidden">
      <Navbar />

      <section className="max-w-7xl mx-auto px-8 pt-32 pb-20">
        {/* HEADER */}
        <div className="max-w-3xl mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-[1px] bg-indigo-500/50"></div>
            <span className="text-indigo-400 font-bold tracking-[0.2em] text-[10px] uppercase">
              About Me
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold tracking-tight text-[#fcfcfc]"
          >
            Developing with <span className="italic text-indigo-400 font-medium font-['Playfair_Display']">purpose</span> and precision.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base text-white/50 max-w-2xl leading-relaxed"
          >
            I'm <span className="text-white font-medium">Rohit Gholap</span>, a full-stack engineer focused on creating high-performance digital products.
          </motion.p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Main Info */}
          <div className="lg:col-span-8 space-y-16">

            {/* EXPERIENCE */}
            <div className="space-y-8">
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-black text-white/20">Work Experience</h3>
              <div className="space-y-8">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group border-l border-white/5 pl-6 hover:border-indigo-500 transition-colors"
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2 gap-2">
                      <h4 className="text-xl font-bold font-['Playfair_Display'] text-[#fcfcfc] group-hover:text-indigo-400 transition-colors">{exp.role}</h4>
                      <span className="text-[10px] font-bold tracking-widest text-indigo-400 uppercase">{exp.period}</span>
                    </div>
                    <p className="text-base text-white/50 font-medium mb-2">{exp.org}</p>
                    <p className="text-sm text-white/30 max-w-2xl leading-relaxed">{exp.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* EDUCATION */}
            <div className="space-y-8">
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-black text-white/20">Academic Background</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {education.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-8 bg-white/5 border border-white/5 rounded-2xl group transition-all"
                  >
                    <div className="text-indigo-400 font-bold tracking-widest text-[9px] mb-4 uppercase">{item.period}</div>
                    <h4 className="text-lg font-bold font-['Playfair_Display'] text-[#fcfcfc] mb-2 group-hover:text-indigo-400 transition-colors leading-tight">{item.title}</h4>
                    <p className="text-sm text-white/30 font-medium">{item.org}</p>
                    <div className="mt-6 pt-4 border-t border-white/5">
                      <span className="text-[10px] font-bold text-white/10 uppercase tracking-widest">{item.status}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 sticky top-32 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-indigo-500 rounded-2xl text-white shadow-xl shadow-indigo-500/10"
            >
              <h3 className="text-xl font-bold font-['Playfair_Display'] leading-tight mb-4">Always learning, <br />always building.</h3>
              <p className="text-white/80 leading-relaxed text-sm mb-6">
                I believe every line of code should improve user experience. My goal is to bridge the gap between logic and elegance.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-white text-indigo-500 rounded-xl font-bold uppercase tracking-widest text-[10px] transition-all"
              >
                Let's Talk
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-white/20 text-[11px] font-medium tracking-widest uppercase">
          © {new Date().getFullYear()} Rohit Gholap • Building the future
        </p>
      </footer>
    </div>
  );
}
