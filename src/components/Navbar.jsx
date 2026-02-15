import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

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
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
            ? "bg-[#0a0a0a]/80 backdrop-blur-2xl border-b border-white/5 py-3 shadow-2xl shadow-indigo-500/5"
            : "bg-transparent py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8">

          {/* Logo with animation */}
          <NavLink to="/">
            <motion.div
              className="text-2xl font-bold font-['Playfair_Display'] text-[#fcfcfc] tracking-tighter cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              RG<span className="text-indigo-400">.</span>
            </motion.div>
          </NavLink>

          {/* Desktop Links with hover glow */}
          <div className="hidden md:flex gap-10">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `relative text-[11px] uppercase tracking-[0.25em] font-black transition-all duration-500 
                  ${isActive ? "text-indigo-400" : "text-white/30 hover:text-white"}`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute -bottom-2 left-0 w-full h-0.5 bg-indigo-500 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile Hamburger Icon */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden w-10 h-10 flex flex-col items-end justify-center gap-1.5 focus:outline-none z-[70]"
            onClick={() => setOpen(!open)}
          >
            <span className={`h-0.5 bg-[#fcfcfc] transition-all duration-300 ${open ? 'w-8 rotate-45 translate-y-2' : 'w-6'}`}></span>
            <span className={`h-0.5 bg-[#fcfcfc] transition-all duration-300 ${open ? 'opacity-0' : 'w-4'}`}></span>
            <span className={`h-0.5 bg-[#fcfcfc] transition-all duration-300 ${open ? 'w-8 -rotate-45 -translate-y-2' : 'w-8'}`}></span>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 h-screen bg-[#0a0a0a] flex flex-col items-center justify-center space-y-8 z-[60] md:hidden"
          >
            {links.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `text-4xl font-bold font-['Playfair_Display'] transition-colors ${isActive ? "text-indigo-400" : "text-[#fcfcfc] hover:text-indigo-300"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
