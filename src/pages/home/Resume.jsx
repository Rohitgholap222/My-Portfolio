import React from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 pt-28 pb-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-6"
        >
          My <span className="text-purple-400">Resume</span>
        </motion.h1>

        <p className="text-gray-300 text-center mb-6">
          View my complete resume below.
        </p>

        {/* Embedded Resume Viewer */}
        <div className="w-full h-[85vh] rounded-xl overflow-hidden shadow-lg shadow-purple-600/30 border border-gray-700">
          <iframe
            src="/Rohit-Resume.pdf"
            className="w-full h-full"
            title="Resume Preview"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
