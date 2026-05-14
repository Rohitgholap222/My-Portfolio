import { FaAward } from "react-icons/fa";

const certificates = [
  {
    title: "Java Programming",
    org: "NPTEL",
    year: "2025"
  },
  {
    title: "Python Fundamentals",
    org: "Great Learning",
    year: "2024"
  },
  {
    title: "Git and GitHub",
    org: "PrepInsta",
    year: "2025"
  },
  {
    title: "Full Stack Development",
    org: "PrepInsta",
    year: "2025"
  },
];

export default function Certificates() {
  return (
    <div className="max-w-7xl mx-auto px-8 pt-4 pb-10">
      <div className="text-center mb-10" data-aos="fade-up">
        <h2 className="text-3xl font-josefin font-bold text-black mb-3">My <span className="text-primary">Certifications</span></h2>
        <div className="w-16 h-1 bg-primary mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
              <FaAward className="text-3xl text-primary" />
            </div>
            <div className="text-center">
              <span className="text-[10px] font-josefin font-bold text-gray-400 uppercase tracking-widest block mb-1">{cert.year}</span>
              <h3 className="text-lg font-josefin font-bold text-black mb-1.5 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-[13px] font-josefin font-semibold text-gray-500">{cert.org}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

