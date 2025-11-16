import React from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-6"
        >
          About <span className="text-purple-400">Me</span>
        </motion.h1>

        <p className="text-gray-300 leading-relaxed text-lg">
          Hi! I'm <span className="text-purple-400 font-semibold">Rohit Gholap</span>, 
          a passionate Frontend Developer and UI/UX enthusiast. I enjoy building modern,
          clean, and interactive interfaces using React, TailwindCSS, and JavaScript.
          <br /><br />
          I'm continuously exploring new technologies, including AI/ML and backend
          development using Java Spring Boot. My goal is to become a versatile 
          full-stack developer and build impactful digital experiences.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h3 className="text-xl text-purple-300 font-semibold mb-3">Education</h3>
            <p className="text-gray-300">Master of Computer Applications (MCA), JSPM JSCOE – Pune</p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h3 className="text-xl text-purple-300 font-semibold mb-3">Experience</h3>
            <p className="text-gray-300">Internship & Placement Portal – JSPM JSCOE</p>
          </div>
        </div>
      </div>
    </div>
  );
}
