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
      <div className="fixed inset-0 pointer-events-none opacity-50">
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[80px]"></div>
      </div>

      {/* ------------------- HERO SECTION - More Compact ------------------- */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-8 pt-28 pb-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10"
      >
        {/* ------------ LEFT CONTENT ------------- */}
        <div className="order-2 lg:order-1 space-y-4">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-[10px] font-bold text-indigo-400 tracking-wide uppercase"
          >
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse"></span>
            Ready to work
          </motion.div>

          <div className="space-y-3">
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-['Playfair_Display'] font-bold leading-tight text-[#fcfcfc] tracking-tight"
            >
              Full-stack <br />
              <span className="italic text-indigo-400">developer</span>.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-sm text-white/50 max-w-lg leading-relaxed font-normal"
            >
              I'm <span className="text-white font-medium">Rohit Gholap</span>, based in Pune.
              Creating high-performance digital products with clean code.
            </motion.p>
          </div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 pt-1"
          >
            {professions.map((role, i) => (
              <span
                key={i}
                className="text-[9px] uppercase tracking-[0.15em] font-bold text-white/20 border-l border-indigo-500/30 pl-3"
              >
                {role}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 pt-2"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/projects")}
              className="px-6 py-3 bg-white text-black rounded-lg font-bold shadow-lg hover:bg-indigo-500 hover:text-white transition-all text-[11px] uppercase tracking-widest"
            >
              Projects
            </motion.button>
            <motion.button
              onClick={() => navigate("/contact")}
              className="text-[#fcfcfc] font-bold border-b border-white/10 hover:border-indigo-400 transition-all pb-0.5 text-[11px] uppercase tracking-widest"
            >
              Contact
            </motion.button>
          </motion.div>
        </div>

        {/* ------------ RIGHT CONTENT: IMAGE - Smaller ------------------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative group">
            <div className="absolute -inset-2 border border-indigo-500/10 rounded-2xl rotate-2 -z-10 bg-indigo-500/5"></div>
            <img
              src={photo}
              alt="Rohit"
              className="
                w-56 h-72
                md:w-64 md:h-80
                rounded-2xl
                object-cover
                shadow-xl grayscale group-hover:grayscale-0
                transition-all duration-500
              "
            />
          </div>
        </motion.div>
      </motion.section>

      {/* ------------------- CONNECT SECTION - More Compact ------------------- */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-8 py-10 relative z-10"
      >
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 ">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-indigo-400 font-bold tracking-[0.2em] text-[9px] uppercase">Socials</span>
            <h2 className="text-2xl font-['Playfair_Display'] font-bold text-[#fcfcfc]">Let's build together.</h2>
          </div>

          
        </div>
        <div className="flex gap-3">
            {quickLinks.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                whileHover={{ y: -3 }}
                className="w-9 h-9 flex items-center justify-center bg-white/5 border border-white/5 rounded-lg shadow-md hover:border-indigo-500/50 transition-all"
              >
                <img src={item.img} alt={item.title} className="w-4 h-4 invert opacity-40 hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </div>
      </motion.section>

      
    </div>
  );
}
