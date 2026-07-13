import { Typewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import photo from "/rohit.jpg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const professions = [
    "Backend Developer",
    "Frontend Developer",
    "Full Stack Developer",
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      link: "https://github.com/Rohitgholap222",
      color: "hover:text-black",
    },
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/rohit-gholap-576886270",
      color: "hover:text-blue-600",
    },
    {
      icon: <SiGmail />,
      link: "mailto:rohitgholap045@gmail.com",
      color: "hover:text-red-500",
    },
    {
      icon: <FaWhatsapp />,
      link: "https://wa.me/91XXXXXXXXXX",
      color: "hover:text-green-500",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/rohit_gholap172/",
      color: "hover:text-pink-500",
    },
  ];

  return (
    <section
      id="home"
      className="w-full min-h-screen hero-gradient flex items-center pt-20"
    >
      <div className="max-w-7xl mx-auto w-full px-5 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-8 items-center h-full">

          {/* LEFT */}
          <div className="order-2 lg:order-1 flex gap-8">

            {/* Desktop Social */}
            <div className="hidden lg:flex flex-col items-center gap-6">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xl transition-all duration-300 hover:scale-125 ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}

              <div className="w-px h-40 bg-gray-300"></div>
            </div>

            {/* Content */}
            <div className="text-center lg:text-left">

              <h3 className="text-lg font-bold text-gray-700 mb-2">
                Hello, It's Me
              </h3>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
                Rohit Gholap
              </h1>

              <h2 className="mt-4 text-xl sm:text-2xl font-bold text-gray-700 min-h-[40px]">
                And I'm a{" "}
                <span className="text-primary">
                  <Typewriter
                    words={professions}
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1200}
                  />
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-gray-600 leading-7">
                I'm a passionate developer based in Pune. I specialize in
                creating high-performance websites, resumes and digital
                designs with clean code and modern aesthetics.
              </p>

              {/* SERVICES */}
              <div className="mt-5">

                <h4 className="font-bold text-lg mb-4">
                  💼 What I Can Help You With
                </h4>

                <div className="flex flex-wrap justify-center lg:justify-start gap-3">

                  {[
                    "🌐 Business Website",
                    "📄 Resume Service",
                    "🎨 Canva Design",
                    "💌 Invitation Card",
                    "⚡ Other Services",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full border border-gray-300 text-sm font-medium bg-white"
                    >
                      {item}
                    </span>
                  ))}

                </div>

              </div>

              <p className="mt-6 text-gray-700 font-medium">
                📞 Feel free to contact me for your next project.
              </p>

              {/* Buttons */}
              <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">

                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-primary transition"
                >
                  CONTACT
                </button>

                <button
                  onClick={() => navigate("/resume")}
                  className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition"
                >
                  View Resume
                </button>

              </div>

              {/* Mobile Social */}
              <div className="flex lg:hidden justify-center mt-8 gap-6">

                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-2xl ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}

              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 lg:order-2 flex justify-center items-center h-full">

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-white/20 blur-3xl animate-pulse"></div>

              <div className="relative
                w-30 h-30
                sm:w-56 sm:h-56
                md:w-72 md:h-72
                lg:w-96 lg:h-96
                rounded-full
                overflow-hidden
                border-4 lg:border-8
                border-white/30
                shadow-2xl">

                <img
                  src={photo}
                  alt="Rohit Gholap"
                  className="w-full h-full object-cover object-top hover:scale-110 transition duration-700"
                />

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}