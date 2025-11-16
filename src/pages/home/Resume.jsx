import React from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-6"
        >
          My <span className="text-purple-400">Resume</span>
        </motion.h1>

        <p className="text-gray-300 mb-6">
          Download my latest resume using the button below.
        </p>

        <a
          href="/Rohit-Resume.pdf"  // Place file in public folder
          download
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl shadow-purple-600/40 shadow-lg"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
