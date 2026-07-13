import {
  FaLaptopCode,
  FaFileAlt,
  FaPaintBrush,
  FaRegEnvelope,
  FaTools,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Business Website",
    desc: "Responsive websites & landing pages.",
  },
  {
    icon: <FaFileAlt />,
    title: "Resume Service",
    desc: "ATS-friendly resumes & LinkedIn.",
  },
  {
    icon: <FaPaintBrush />,
    title: "Canva Design",
    desc: "Presentations, posts & banners.",
  },
  {
    icon: <FaRegEnvelope />,
    title: "Invitation Card",
    desc: "Wedding & event invitations.",
  },
  {
    icon: <FaTools />,
    title: "Website Support",
    desc: "Maintenance & UI improvements.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">
            My <span className="text-primary">Services</span>
          </h2>

          <p className="text-gray-500 mt-2">
            Digital solutions for businesses and professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className="flex gap-4 border-b border-gray-200 pb-5"
            >
              <div className="text-primary text-2xl mt-1">
                {service.icon}
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm mt-1 leading-6">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Have a project in mind? Feel free to contact me.
          </p>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-2.5 bg-black text-white rounded-full hover:bg-primary transition"
          >
            Contact Me
          </button>
        </div>

      </div>
    </section>
  );
}