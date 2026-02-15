import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import facebook from "/facebook.png";
import github from "/github.png";
import gmail from "/gmail.png";
import insta from "/insta.png";
import linkedin from "/linkedin.png";
import photo from "/rohit.jpg";
import whatsapp from "/whatsapp.png";

export default function Home() {
  const navigate = useNavigate();
  const professions = [
    "Backend Developer",
    "Frontend Developer",
    "Full Stack Learner",
  ];

  const quickLinks = [
    { img: github, title: "GitHub", link: "https://github.com/Rohitgholap222" },
    { img: linkedin, title: "LinkedIn", link: "https://www.linkedin.com/in/rohit-gholap-576886270" },
    { img: gmail, title: "Email", link: "mailto:test@gmail.com" },
    { img: whatsapp, title: "WhatsApp", link: "https://wa.me/+91XXXXXXXXXX" },
    { img: insta, title: "Instagram", link: "https://www.instagram.com/rohit_gholap172/" },
    { img: facebook, title: "Facebook", link: "https://facebook.com" },
  ];

  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] text-[#fcfcfc] selection:bg-indigo-500 selection:text-white">
      <Navbar />

      {/* ------------------- HERO SECTION ------------------- */}
      <section className="max-w-7xl mx-auto px-8 pt-32 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* ------------ LEFT CONTENT ------------- */}
        <div className="order-2 lg:order-1 space-y-6">
          <div className="inline-flex items-center gap-3 px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-[12px] font-semibold text-indigo-400 tracking-wide">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></span>
            Available for new projects
          </div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-['Playfair_Display'] font-bold leading-tight text-[#fcfcfc] tracking-tight"
            >
              Full-stack  <span className="italic text-indigo-400">developer</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-base text-white/60 max-w-lg leading-relaxed font-normal"
            >
              I'm <span className="font-semibold text-[#fcfcfc]">Rohit Gholap</span>, a Full-Stack developer based in Pune.
              Refining the digital landscape through clean code and thoughtful design.
            </motion.p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {professions.map((role, i) => (
              <span
                key={i}
                className="text-[11px] uppercase tracking-[0.15em] font-bold text-white/30 border-l border-indigo-500/30 pl-3"
              >
                {role}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-5 pt-4">
            <button
              onClick={() => navigate("/projects")}
              className="px-6 py-3 bg-white text-black rounded-lg font-bold shadow-xl shadow-white/5 hover:bg-indigo-500 hover:text-white transition-all active:scale-95 text-sm"
            >
              View My Work
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="text-[#fcfcfc] font-bold border-b border-white/10 hover:border-indigo-400 transition-all pb-0.5 text-sm"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* ------------ RIGHT CONTENT: IMAGE ------------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-4 border border-white/10 rounded-3xl rotate-2 -z-10 bg-white/5"></div>
            <img
              src={photo}
              alt="Rohit"
              className="
                w-64 h-80
                md:w-[320px] md:h-[420px]
                rounded-3xl
                object-cover
                shadow-2xl shadow-indigo-500/10
                filter grayscale hover:grayscale-0
                transition-all duration-700
              "
            />
          </div>
        </motion.div>
      </section>

      {/* ------------------- CONNECT SECTION ------------------- */}
      <section className="max-w-7xl mx-auto px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div className="space-y-3">
            <span className="text-indigo-400 font-bold tracking-widest text-[11px] uppercase">Stay in touch</span>
            <h2 className="text-3xl font-['Playfair_Display'] font-bold text-[#fcfcfc] tracking-tight">Let's build something <br />together.</h2>
          </div>
          <div className="flex gap-3">
            {quickLinks.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                whileHover={{ y: -3 }}
                className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg shadow-lg hover:shadow-indigo-500/10 hover:border-indigo-500/50 transition-all"
              >
                <img
                  src={item.img}
                  className="w-4 h-4 object-contain invert opacity-60 hover:opacity-100 transition-opacity"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-white/20 text-[11px] font-medium tracking-widest uppercase">
          © {new Date().getFullYear()} Rohit Gholap • Full Stack Developer
        </p>
      </footer>
    </div>
  );
}
