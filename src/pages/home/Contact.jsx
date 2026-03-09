import { motion } from "framer-motion";
import { useState } from "react";

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
    <div className="bg-[#0a0a0a] text-[#fcfcfc] selection:bg-indigo-500 overflow-x-hidden transition-all">
      <section className="max-w-6xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT SIDE: Header and Info - Compact */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2"
              >
                <div className="w-6 h-px bg-indigo-500/50"></div>
                <span className="text-indigo-400 font-bold tracking-[0.15em] text-[10px] uppercase block">
                  Connect
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl md:text-3xl font-['Playfair_Display'] font-bold tracking-tight text-[#fcfcfc] leading-tight"
              >
                Start a <span className="italic text-indigo-400 font-medium font-['Playfair_Display']">Conversation</span>.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-sm text-white/40 max-w-sm leading-relaxed"
              >
                Open to new projects and opportunities.
              </motion.p>
            </div>

            <div className="space-y-6">
              <div className="space-y-1">
                <h4 className="text-[9px] uppercase tracking-[0.3em] font-black text-white/10">Email</h4>
                <motion.a
                  whileHover={{ x: 3 }}
                  href="mailto:rohitgholap045@gmail.com"
                  className="text-lg font-bold font-['Playfair_Display'] text-[#fcfcfc] hover:text-indigo-400 transition-colors"
                >
                  rohitgholap045@gmail.com
                </motion.a>
              </div>

              <div className="space-y-2">
                <h4 className="text-[9px] uppercase tracking-[0.3em] font-black text-white/10">Follow</h4>
                <div className="flex gap-4">
                  {["LinkedIn", "GitHub"].map((social, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      className="text-[10px] font-bold text-[#fcfcfc]/30 uppercase tracking-widest hover:text-indigo-400 transition-all border-b border-white/5"
                    >
                      {social}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Form - Compact */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-7 bg-white/5 border border-white/5 p-6 md:p-10 rounded-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold uppercase tracking-widest text-white/20">Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Full name"
                    className="w-full py-2.5 border-b border-white/10 focus:border-indigo-400 transition-colors outline-none font-medium bg-transparent text-sm"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold uppercase tracking-widest text-white/20">Email</label>
                  <input
                    required
                    type="email"
                    placeholder="mail@example.com"
                    className="w-full py-2.5 border-b border-white/10 focus:border-indigo-400 transition-colors outline-none font-medium bg-transparent text-sm"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[9px] font-bold uppercase tracking-widest text-white/20">Message</label>
                <textarea
                  required
                  placeholder="How can I help?"
                  rows={2}
                  className="w-full py-2.5 border-b border-white/10 focus:border-indigo-400 transition-colors outline-none font-medium bg-transparent resize-none text-sm"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`w-full py-3.5 rounded-lg font-bold uppercase tracking-widest text-[10px] transition-all ${submitted
                  ? "bg-green-500 text-white"
                  : "bg-white text-black hover:bg-indigo-500 hover:text-white"
                  }`}
              >
                {submitted ? "Sent" : "Send"}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
