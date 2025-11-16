import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <div className="max-w-xl mx-auto px-6 pt-28 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-6 text-center"
        >
          Contact <span className="text-purple-400">Me</span>
        </motion.h1>

        <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-xl">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-black/30 border border-white/10 rounded-xl mb-4"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-black/30 border border-white/10 rounded-xl mb-4"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <textarea
            placeholder="Message"
            rows={4}
            className="w-full p-3 bg-black/30 border border-white/10 rounded-xl mb-4"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          <button className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl shadow-lg shadow-purple-500/30">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
