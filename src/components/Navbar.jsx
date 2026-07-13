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
  { name: "Services", to: "services" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();
  const location = useLocation();
  const navigate = useNavigate();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;

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
        duration: 0.8,
        scrollTo: {
          y: `#${id}`,
          offsetY: 80,
        },
        ease: "power2.out",
      });
    }
  };

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
        className={`fixed top-0 left-0 right-0 h-20 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-5 lg:px-8">

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection("home")}
            className="cursor-pointer text-l font-bold font-josefin tracking-tight text-black"
          >
            &lt; Rohit Gholap <span className="text-primary">/&gt;</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <motion.button
                key={link.to}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(link.to)}
                className={`text-[13px] font-josefin font-semibold transition-colors duration-300 ${
                  scrolled
                    ? "text-gray-700 hover:text-primary"
                    : "text-gray-800 hover:text-primary"
                }`}
              >
                {link.name}
              </motion.button>
            ))}

            <button
              onClick={() => scrollToSection("contact")}
              className="bg-black text-white px-6 py-2 rounded-md text-xs font-bold tracking-wider hover:bg-primary transition-colors"
            >
              HIRE ME
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col justify-center items-end gap-1.5 w-8 h-8"
          >
            <span
              className={`h-0.5 bg-black transition-all duration-300 ${
                open ? "w-8 rotate-45 translate-y-2" : "w-6"
              }`}
            />
            <span
              className={`h-0.5 bg-black transition-all duration-300 ${
                open ? "opacity-0" : "w-4"
              }`}
            />
            <span
              className={`h-0.5 bg-black transition-all duration-300 ${
                open ? "w-8 -rotate-45 -translate-y-2" : "w-8"
              }`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 220,
            }}
            className="fixed top-20 left-0 right-0 bottom-0 bg-white z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((link, i) => (
              <motion.button
                key={link.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => scrollToSection(link.to)}
                className="text-3xl font-bold font-josefin text-black hover:text-primary transition-colors"
              >
                {link.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}