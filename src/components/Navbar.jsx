import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", to: "/" },
  { name: "Projects", to: "/projects" },
  { name: "Skills", to: "/skills" },
  { name: "Certificates", to: "/certificates" },
  { name: "Resume", to: "/resume" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

          {/* Logo */}
          <NavLink to="/">
            <motion.div
              className="text-xl font-bold font-['Playfair_Display'] text-[#fcfcfc] tracking-tighter"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
            >
              RG<span className="text-indigo-500">.</span>
            </motion.div>
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-[11px] uppercase tracking-[0.25em] font-black transition-all duration-500 
                  ${isActive ? "text-indigo-400" : "text-white/30 hover:text-indigo-300"}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Hamburger Icon */}
          <button
            className="md:hidden w-8 h-8 flex flex-col items-end justify-center gap-1.5 group"
            onClick={() => setOpen(!open)}
          >
            <span className={`h-0.5 bg-[#fcfcfc] transition-all duration-300 ${open ? 'w-8 rotate-45 translate-y-2' : 'w-6'}`}></span>
            <span className={`h-0.5 bg-[#fcfcfc] transition-all duration-300 ${open ? 'opacity-0' : 'w-4'}`}></span>
            <span className={`h-0.5 bg-[#fcfcfc] transition-all duration-300 ${open ? 'w-8 -rotate-45 -translate-y-2' : 'w-8'}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 h-screen bg-[#0a0a0a] flex flex-col items-center justify-center space-y-8 z-[60] md:hidden"
          >
            <button
              className="absolute top-8 right-8 text-3xl text-[#fcfcfc]"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-[#fcfcfc] text-3xl font-bold font-['Playfair_Display'] hover:text-indigo-400 transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
