import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] text-[#fcfcfc] selection:bg-indigo-500 selection:text-white overflow-hidden">
      <Navbar />

      {/* Background Decorative Element */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] animate-pulse delay-700"></div>
      </div>

      {/* ------------------- HERO SECTION ------------------- */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-8 pt-44 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10"
      >
        {/* ------------ LEFT CONTENT ------------- */}
        <div className="order-2 lg:order-1 space-y-8">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-[12px] font-bold text-indigo-400 tracking-[0.1em] uppercase shadow-inner"
          >
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-ping"></span>
            Available for new projects
          </motion.div>

          <div className="space-y-6">
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-['Playfair_Display'] font-bold leading-[1.1] text-[#fcfcfc] tracking-tight"
            >
              Full-stack <br />
              <span className="italic text-indigo-400">developer</span>.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-white/50 max-w-lg leading-relaxed font-normal"
            >
              I'm <span className="text-white font-medium italic underline decoration-indigo-500/30">Rohit Gholap</span>, a Full-Stack developer based in Pune.
              Refining the digital landscape through clean code and thoughtful design.
            </motion.p>
          </div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-2"
          >
            {professions.map((role, i) => (
              <span
                key={i}
                className="text-[11px] uppercase tracking-[0.2em] font-black text-white/20 border-l border-indigo-500/40 pl-4 py-1"
              >
                {role}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6 pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/projects")}
              className="px-8 py-4 bg-white text-black rounded-xl font-black shadow-2xl shadow-white/5 hover:bg-indigo-500 hover:text-white transition-all text-[11px] uppercase tracking-widest"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ x: 5 }}
              onClick={() => navigate("/contact")}
              className="text-[#fcfcfc] font-black border-b-2 border-white/5 hover:border-indigo-400 transition-all pb-1 text-[11px] uppercase tracking-widest"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </div>

        {/* ------------ RIGHT CONTENT: IMAGE ------------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative group">
            {/* Animated Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 border border-white/5 rounded-[40px] -z-10"
            ></motion.div>

            {/* Background Shape */}
            <div className="absolute -inset-4 border border-indigo-500/20 rounded-[36px] rotate-3 -z-10 bg-indigo-500/5 transition-transform group-hover:rotate-6 duration-700"></div>

            <motion.img
              src={photo}
              alt="Rohit"
              whileHover={{ scale: 1.02 }}
              className="
                w-72 h-96
                md:w-[380px] md:h-[500px]
                rounded-[32px]
                object-cover
                shadow-2xl shadow-indigo-500/10
                grayscale group-hover:grayscale-0
                transition-all duration-700 cursor-pointer
              "
            />
          </div>
        </motion.div>
      </motion.section>

      {/* ------------------- CONNECT SECTION ------------------- */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-8 py-24 relative z-10"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-10">
          <div className="space-y-4">
            <span className="text-indigo-400 font-black tracking-[0.3em] text-[10px] uppercase">Social Presence</span>
            <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold text-[#fcfcfc] tracking-tight leading-tight">
              Let's build something <br />
              <span className="italic text-indigo-400">extraordinary</span> together.
            </h2>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            {quickLinks.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                whileHover={{ y: -5, backgroundColor: "rgba(99, 102, 241, 0.1)" }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl shadow-xl hover:border-indigo-500/50 transition-all duration-500"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-5 h-5 object-contain invert opacity-40 hover:opacity-100 transition-opacity"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 text-center relative z-10">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-white/10 text-[10px] font-black tracking-[0.5em] uppercase hover:text-white/30 transition-colors duration-500">
            © {new Date().getFullYear()} Rohit Gholap • Crafting with precision
          </p>
        </div>
      </footer>
    </div>
  );
}
