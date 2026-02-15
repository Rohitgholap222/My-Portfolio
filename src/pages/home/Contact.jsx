import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fcfcfc]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* HEADER SECTION */}
          <div className="space-y-8">
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-indigo-400 font-bold tracking-[0.2em] text-[11px] uppercase block"
              >
                Get In Touch
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold tracking-tight text-[#fcfcfc] leading-tight"
              >
                Let's start <br />
                a <span className="italic text-indigo-400">conversation</span>.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-white/50 leading-relaxed font-normal max-w-sm"
              >
                I'm open to discussing new projects, creative ideas or opportunities.
              </motion.p>
            </div>

            <div className="space-y-6 pt-8">
              <div className="space-y-1">
                <h4 className="text-[10px] uppercase tracking-widest font-black text-white/10">Email Me</h4>
                <a href="mailto:rohitgholap045@gmail.com" className="text-xl font-bold font-['Playfair_Display'] text-[#fcfcfc] hover:text-indigo-400 transition-colors">rohitgholap045@gmail.com</a>
              </div>
              <div className="space-y-2">
                <h4 className="text-[10px] uppercase tracking-widest font-black text-white/10">Socials</h4>
                <div className="flex gap-4">
                  {["LinkedIn", "GitHub", "Twitter"].map((social, i) => (
                    <a key={i} href="#" className="text-sm font-bold text-[#fcfcfc] hover:text-indigo-400 border-b border-white/10 hover:border-indigo-400 transition-all pb-0.5">{social}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FORM SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 border border-white/5 p-10 rounded-3xl shadow-2xl shadow-black/20"
          >
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/20">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    className="w-full py-3 border-b border-white/10 focus:border-indigo-400 transition-colors outline-none font-medium bg-transparent text-sm"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/20">Email Address</label>
                  <input
                    type="email"
                    placeholder="example@mail.com"
                    className="w-full py-3 border-b border-white/10 focus:border-indigo-400 transition-colors outline-none font-medium bg-transparent text-sm"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/20">Your Message</label>
                <textarea
                  placeholder="Tell me about your project"
                  rows={3}
                  className="w-full py-3 border-b border-white/10 focus:border-indigo-400 transition-colors outline-none font-medium bg-transparent resize-none text-sm"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              <button className="w-full py-4 bg-white text-black rounded-xl font-bold shadow-xl shadow-white/5 hover:bg-indigo-500 hover:text-white transition-all active:scale-95 text-sm">
                Send Message
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
