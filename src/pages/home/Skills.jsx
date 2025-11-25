import React from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      {/* Main container */}
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-6"
        >
          My <span className="text-purple-400">Skills</span>
        </motion.h1>

        {/* Skill Categories Card */}
        <div className="mt-10 bg-white/5 p-6 rounded-xl border border-white/10">
          
          <div className="grid md:grid-cols-3 gap-6 text-gray-300">

            <div>
              <p className="font-semibold text-white mb-2">Frontend</p>
              <ul className="space-y-1 text-gray-400">
                <li>React.js</li>
                <li>JavaScript (ES6+)</li>
                <li>TailwindCSS</li>
                <li>HTML & CSS</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-white mb-2">Backend</p>
              <ul className="space-y-1 text-gray-400">
                <li>Spring Boot</li>
                <li>Node.js (Basics)</li>
                <li>REST APIs</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-white mb-2">Tools & Databases</p>
              <ul className="space-y-1 text-gray-400">
                <li>Git & GitHub (Master)</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
