import React from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Tailwind CSS",
  "Java", "Spring Boot", "MySQL", "UI/UX Design", "Git & GitHub"
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-6"
        >
          My <span className="text-purple-400">Skills</span>
        </motion.h1>

        <div className="flex flex-wrap gap-4 mt-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              className="px-5 py-2 bg-purple-500/10 border border-purple-500/30 text-purple-300 rounded-xl text-sm"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
