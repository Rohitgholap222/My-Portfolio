import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../../components/Navbar";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fcfcfc] selection:bg-indigo-500 overflow-x-hidden">
      <Navbar />

      <section className="max-w-7xl mx-auto px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* LEFT SIDE: Header and Info */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3"
              >
                <div className="w-8 h-[1px] bg-indigo-500/50"></div>
                <span className="text-indigo-400 font-bold tracking-[0.2em] text-[10px] uppercase block underline decoration-indigo-500/30 underline-offset-4">
                  Get In Touch
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold tracking-tight text-[#fcfcfc] leading-tight"
              >
                Let's start <br />
                a <span className="italic text-indigo-400 font-medium font-['Playfair_Display']">conversation</span>.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-base text-white/50 max-w-sm leading-relaxed"
              >
                I'm open to discussing new projects, creative ideas or opportunities.
              </motion.p>
            </div>

            <div className="space-y-8 pt-6">
              <div className="space-y-2">
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-white/20">Email Me</h4>
                <motion.a
                  whileHover={{ x: 5 }}
                  href="mailto:rohitgholap045@gmail.com"
                  className="text-xl font-bold font-['Playfair_Display'] text-[#fcfcfc] hover:text-indigo-400 transition-colors"
                >
                  rohitgholap045@gmail.com
                </motion.a>
              </div>

              <div className="space-y-4">
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-white/20">Socials</h4>
                <div className="flex flex-wrap gap-4">
                  {["LinkedIn", "GitHub", "Twitter"].map((social, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      whileHover={{ color: "#818cf8" }}
                      className="text-[11px] font-bold text-[#fcfcfc]/40 uppercase tracking-widest border-b border-white/5 hover:border-indigo-400 transition-all pb-0.5"
                    >
                      {social}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-7 bg-white/5 border border-white/5 p-8 md:p-12 rounded-2xl shadow-xl shadow-black/20"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/20">Your Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Enter name"
                    className="w-full py-3 border-b border-white/10 focus:border-indigo-400 transition-colors outline-none font-medium bg-transparent text-sm placeholder:text-white/10"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/20">Email Address</label>
                  <input
                    required
                    type="email"
                    placeholder="example@mail.com"
                    className="w-full py-3 border-b border-white/10 focus:border-indigo-400 transition-colors outline-none font-medium bg-transparent text-sm placeholder:text-white/10"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/20">Your Message</label>
                <textarea
                  required
                  placeholder="How can I help you?"
                  rows={3}
                  className="w-full py-3 border-b border-white/10 focus:border-indigo-400 transition-colors outline-none font-medium bg-transparent resize-none text-sm placeholder:text-white/10"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-[11px] transition-all ${submitted
                    ? "bg-green-500 text-white"
                    : "bg-white text-black shadow-lg hover:bg-indigo-500 hover:text-white"
                  }`}
              >
                {submitted ? "Message Received" : "Send Message"}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-white/20 text-[11px] font-medium tracking-widest uppercase">
          © {new Date().getFullYear()} Rohit Gholap • Forge with integrity
        </p>
      </footer>
    </div>
  );
}
