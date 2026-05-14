import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import photo from "/rohit.jpg";

export default function Home() {
  const professions = [
    "Backend Developer",
    "Frontend Developer",
    "Full Stack Learner",
  ];

  const socialLinks = [
    { icon: <FaGithub />, link: "https://github.com/Rohitgholap222", color: "hover:text-black" },
    { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/rohit-gholap-576886270", color: "hover:text-blue-600" },
    { icon: <SiGmail />, link: "rohitgholap045@gmail.com", color: "hover:text-red-500" },
    { icon: <FaWhatsapp />, link: "https://wa.me/+91XXXXXXXXXX", color: "hover:text-green-500" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/rohit_gholap172/", color: "hover:text-pink-500" },
  ];

  return (
    <div className="w-full min-h-screen hero-gradient flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 py-10">
        
        {/* LEFT CONTENT */}
        <div className="order-2 lg:order-1 flex flex-col md:flex-row items-center lg:items-start gap-10" data-aos="fade-right">
          
          {/* Social Sidebar - Refined */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex flex-col gap-6">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xl text-gray-800 transition-all duration-300 transform hover:scale-125 ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="w-[1px] h-48 bg-black/10"></div>
          </div>

          {/* Main Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-gray-800 font-josefin font-bold text-lg mb-2">Hello, It's Me</h3>
            <h1 className="text-4xl md:text-6xl font-josefin font-bold text-black mb-4 leading-tight">
              Rohit Gholap
            </h1>
            <h2 className="text-xl md:text-2xl font-josefin font-bold text-gray-800 mb-6 min-h-[1.5em] flex flex-wrap justify-center lg:justify-start gap-x-2">
              And I'm a{" "}
              <span className="text-primary whitespace-nowrap">
                <Typewriter
                  words={professions}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            <p className="text-gray-600 font-josefin text-base max-w-lg mb-8 leading-relaxed">
              I'm a passionate developer based in Pune. I specialize in creating high-performance digital products with clean code and modern aesthetics.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <button
                onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
                className="bg-black text-white px-8 py-3 rounded-full font-josefin font-bold shadow-lg hover:bg-primary transition-all transform hover:-translate-y-1"
              >
                CONTACT
              </button>
              <button
                className="border-2 border-black text-black px-8 py-3 rounded-full font-josefin font-bold hover:bg-black hover:text-white transition-all transform hover:-translate-y-1"
              >
                View Resume
              </button>
            </div>

            {/* Mobile Socials */}
            <div className="flex lg:hidden gap-6">
              {socialLinks.slice(0, 4).map((social, i) => (
                <a key={i} href={social.link} className={`text-xl text-gray-800 ${social.color}`}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT: IMAGE */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end" data-aos="zoom-in">
          <div className="relative">
            {/* Decorative background for image */}
            <div className="absolute -inset-4 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white/30 shadow-2xl">
              <img
                src={photo}
                alt="Rohit Gholap"
                className="w-full h-full object-cover object-top transform hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

