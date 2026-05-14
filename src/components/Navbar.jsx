import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollToPlugin);

const links = [
  { name: "Home", to: "home" },
  { name: "Skills", to: "skills" },
  { name: "Works", to: "projects" },
  { name: "Resume", to: "resume" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll detection and hide/show on scroll direction
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 20);
  });

  const scrollToSection = (id) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: `#${id}`, offsetY: 80 },
        ease: "power4.inOut",
      });
    }
  };

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 w-full z-[100] transition-colors duration-500 ${scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

          {/* Logo */}
          <div
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold font-josefin text-black tracking-tight cursor-pointer group"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              &lt; Rohit Gholap <span className="text-primary">/&gt;</span>
            </motion.div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.slice(0, 5).map((link) => (
              <button
                key={link.to}
                onClick={() => scrollToSection(link.to)}
                className={`text-[13px] font-josefin font-semibold transition-all duration-300 ${scrolled ? "text-gray-700 hover:text-primary" : "text-gray-800 hover:text-primary"
                  }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-black text-white px-6 py-2 rounded-md text-xs font-josefin font-bold tracking-wider hover:bg-primary transition-colors"
            >
              HIRE ME
            </button>
          </div>

          {/* Mobile Hamburger Icon */}
          <button
            className="md:hidden w-8 h-8 flex flex-col items-end justify-center gap-1.5 focus:outline-none z-70"
            onClick={() => setOpen(!open)}
          >
            <span className={`h-0.5 bg-black transition-all duration-300 ${open ? 'w-8 rotate-45 translate-y-2' : 'w-6'}`}></span>
            <span className={`h-0.5 bg-black transition-all duration-300 ${open ? 'opacity-0' : 'w-4'}`}></span>
            <span className={`h-0.5 bg-black transition-all duration-300 ${open ? 'w-8 -rotate-45 -translate-y-2' : 'w-8'}`}></span>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 h-screen bg-white flex flex-col items-center justify-center space-y-8 z-60 md:hidden"
          >
            {links.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <button
                  onClick={() => scrollToSection(link.to)}
                  className="text-4xl font-bold font-josefin text-black hover:text-primary transition-colors"
                >
                  {link.name}
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
