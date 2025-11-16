import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import photo from "/rohit.jpg";
import github from "/github.png";
import linkedin from "/linkedin.png";
import gmail from "/gmail.png";
import whatsapp from "/whatsapp.png";
import insta from "/insta.png";
import facebook from "/facebook.png";

export default function Home() {
  const professions = [
    "Frontend Developer",
    "UI/UX",
    "Backend Developer",
    "Full Stack Learner",
  ];

  const quickLinks = [
    { img: github, title: "GitHub", link: "https://github.com/Rohitgholap222" },
    { img: linkedin, title: "LinkedIn", link: "https://www.linkedin.com/in/rohit-gholap-576886270" },
    { img: gmail, title: "Email", link: "mailto:test@gmail.com" },
    { img: whatsapp, title: "WhatsApp", link: "https://wa.me/+91XXXXXXXXXX" },
    { img: insta, title: "Instagram", link: "https://instagram.com" },
    { img: facebook, title: "Facebook", link: "https://facebook.com" },
  ];

  return (
    <div className="min-h-screen w-full bg-[#050505] text-white font-sans">
      {/* Navbar */}
      <Navbar />

      {/* ------------------- HERO SECTION ------------------- */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-20 flex flex-col-reverse md:flex-row items-center gap-14">

        {/* ------------ LEFT CONTENT ------------- */}
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-pink-500 bg-clip-text text-transparent animate-pulse">
              Rohit Gholap
            </span>
          </motion.h1>

          {/* Typing subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}

          >
            Frontend Developer | Spring-Boot | Git & Github
          </motion.p>

          {/* Profession Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-3 mt-6"
          >
            {professions.map((role, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/20 
                rounded-xl text-sm backdrop-blur-md"
              >
                {role}
              </motion.div>
            ))}
          </motion.div>

          Buttons
          <div className="flex gap-6 mt-10">
            <a
              href="/projects"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl text-white text-lg transition 
              shadow-lg shadow-purple-600/40"
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="px-6 py-3 border border-gray-600 hover:border-purple-500 hover:text-purple-400 
              rounded-xl text-lg transition"
            >
              Contact Me
            </a>
          </div>

          {/* Info Cards */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: "📍 Location", value: "Pune, India" },
              { label: "💼 Skills", value: "React, Java, JS" },
              { label: "📧 Contact", value: "rohitgholap045@gmail.com" },
            ].map((info, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-md"
              >
                <strong className="text-purple-300">{info.label}</strong>
                <p className="text-gray-300 mt-1">{info.value}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ------------ RIGHT SIDE PHOTO ------------- */}
<div className="relative flex justify-center">
  <img
    src={photo}
    alt="Rohit"
    className="
      w-40 h-40
      sm:w-56 sm:h-56
      md:w-72 md:h-72
      lg:w-80 lg:h-80
      rounded-full
      border border-purple-400/30
      object-cover
      shadow-lg shadow-purple-500/20
    "
  />
</div>

      </section>

      {/* ------------------- QUICK LINKS ------------------- */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-center text-3xl font-bold text-purple-400 mb-6">
          Connect with Me
        </h2>

        <div className="flex justify-center flex-wrap gap-8">
          {quickLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              whileHover={{ scale: 1.15 }}
              className="transition"
            >
              <img
                src={item.img}
                className="w-12 h-12 hover:drop-shadow-[0_0_20px_var(--tw-shadow-color)] shadow-purple-500 object-fit rounded-2xl"
              />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-900">
        © {new Date().getFullYear()} Rohit Gholap • All Rights Reserved
      </footer>
    </div>
  );
}
