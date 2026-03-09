import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Navbar from "../../components/Navbar";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    title: "Frontend ",
    skills: ["React.js", "JavaScript", "TailwindCSS", "HTML", "CSS", "Framer Motion"]
  },
  {
    title: "Backend Core",
    skills: ["Spring Boot", "REST APIs", "Java", "Python"]
  },
  {
    title: "Database ",
    skills: ["MySQL", "PostgreSQL", "MongoDB"]
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Postman"]
  }
];

export default function Skills() {
  const containerRef = useRef();

  useGSAP(() => {
    const cards = gsap.utils.toArray(".skill-card");

    cards.forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        x: i % 2 === 0 ? -50 : 50,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none reverse",
        }
      });
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0a0a0a] text-[#fcfcfc] selection:bg-indigo-500 overflow-x-hidden">
      <Navbar />

      <section className="max-w-6xl mx-auto px-8 pt-24 pb-12">
        {/* HEADER - Compact */}
        <div className="max-w-3xl mb-10 space-y-2">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-6 h-[1px] bg-indigo-500/50"></div>
            <span className="text-indigo-400 font-bold tracking-[0.15em] text-[10px] uppercase">
              Skills
            </span>
          </motion.div>
        </div>

        {/* SKILLS GRID - Tighter layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className="skill-card bg-white/5 p-6 rounded-xl border border-white/5 relative group transition-all"
            >
              <div className="space-y-4">
                <h3 className="text-lg font-bold font-['Playfair_Display'] text-[#fcfcfc] group-hover:text-indigo-400 transition-colors">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-white/5 border border-white/20 rounded-md text-[10px] font-bold text-white/70 uppercase tracking-widest"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
