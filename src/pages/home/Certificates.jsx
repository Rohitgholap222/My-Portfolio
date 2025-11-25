import React from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const certificates = [
  {
    title: "Java Programming",
    org: "NPTEL",
    year: 2025,
  },
  {
    title: "Python Fundamentals",
    org: "Great Learning",
    year: 2024,
  },
  {
    title: "Git and GitHub",
    org: "PrepInsta",
    year: 2025,
  },
  {
    title: "Full Stack WEB Development",
    org: "PrepInsta",
    year: 2025,
  },
];

export default function Certificates() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-6"
        >
          My <span className="text-purple-400">Certificates</span>
        </motion.h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((c, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-white/5 border border-white/10 rounded-xl shadow-lg"
            >
              <h2 className="text-purple-300 font-semibold text-lg">{c.title}</h2>
              <p className="text-gray-400 mt-1">{c.org}</p>
              <p className="text-gray-500 text-sm mt-2">{c.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
