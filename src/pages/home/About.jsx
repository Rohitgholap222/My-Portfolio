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

        {/* GRID SECTIONS */}
        <div className="mt-10 grid md:grid-cols-2 gap-8">

          {/* EDUCATION SECTION */}
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h3 className="text-xl text-purple-300 font-semibold mb-3">Education</h3>

            <ul className="text-gray-300 space-y-4">
              <li>
                <p className="font-semibold text-white">MCA (Master Of Computer Application)</p>
                <p>Savitribai Phule Pune University (2024–2026)</p>
                <p className="text-sm text-gray-400">CGPA: Pursuing</p>
              </li>

              <li>
                <p className="font-semibold text-white">BSc (Bachelor Of Computer Science)</p>
                <p>Savitribai Phule Pune University, Nashik (2021–2024)</p>
                <p className="text-sm text-gray-400">CGPA: 8.27</p>
              </li>

              <li>
                <p className="font-semibold text-white">HSC (Science)</p>
                <p>Maharashtra State Board (2020–2021)</p>
                <p className="text-sm text-gray-400">Percentage: 75.33%</p>
              </li>

              <li>
                <p className="font-semibold text-white">SSC</p>
                <p>Maharashtra State Board (2018–2019)</p>
              </li>
            </ul>
          </div>

          {/* EXPERIENCE SECTION */}
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h3 className="text-xl text-purple-300 font-semibold mb-3">Experience</h3>

            <div className="text-gray-300 space-y-3">
              <p className="font-semibold text-white">
                ERP Development – Internship, JSPM JSCOE (Sep 2025 – Present)
              </p>

              <p>
                Working on the Internship & Placement Management Module using:
              </p>

              <ul className="list-disc ml-5 space-y-1 text-gray-400">
                <li>React.js for frontend UI</li>
                <li>Spring Boot for backend APIs</li>
                <li>PostgreSQL as the database</li>
                <li>Building modules for managing internships & placements</li>
                <li>Integrating REST APIs for CRUD operations</li>
                <li>Fixing API issues & ensuring smooth frontend–backend communication</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SKILLS SECTION */}
        <div className="mt-10 bg-white/5 p-6 rounded-xl border border-white/10">
          <h3 className="text-xl text-purple-300 font-semibold mb-4">Skills</h3>

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
