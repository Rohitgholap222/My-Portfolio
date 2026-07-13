import { FaBook, FaBriefcase, FaGraduationCap } from "react-icons/fa";

export default function Resume() {
  const experiences = [
    {
      role: "Full Stack Developer (Intern)",
      org: "JSPM JSCOE",
      period: "SEP 2024 – PRESENT",
      desc: "Specializing in enterprise resource planning modules (ERP). Building full-stack solutions with React, Spring Boot, and PostgreSQL."
    }
  ];

  const education = [
    {
      title: "MCA",
      org: "SPPU",
      period: "2024 – 2026",
      status: "Currently Pursuing"
    },
    {
      title: "BCS",
      org: "SPPU",
      period: "2021 – 2024",
      status: "CGPA: 8.27"
    }
  ];

  const schooling = [
    {
      title: "HSC",
      org: "Maharashtra State Board",
      period: "2019 – 2021",
      status: "75.33%"
    },
    {
      title: "SSC",
      org: "Maharashtra State Board",
      period: "2018 – 2019",
      status: "79%"
    }
  ];

  return (
    <div id="resume" className="w-full py-16 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-josefin font-bold text-black mb-3">My <span className="text-primary">Resume</span></h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Experience Column */}
          <div data-aos="fade-right">
            <div className="flex items-center gap-2 mb-6">
              <FaBriefcase className="text-xl text-primary" />
              <h3 className="text-xl font-josefin font-bold text-black">Experience</h3>
            </div>
            <div className="space-y-6 border-l-2 border-gray-200 ml-3 pl-6 relative">
              {experiences.map((exp, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[33px] top-0 w-4 h-4 bg-primary rounded-full border-2 border-white shadow-sm"></div>
                  <span className="text-[10px] font-josefin font-bold text-primary uppercase tracking-wider block mb-1">
                    {exp.period}
                  </span>
                  <h4 className="text-lg font-josefin font-bold text-black mb-0.5">{exp.role}</h4>
                  <p className="text-gray-500 font-josefin font-semibold text-xs mb-2">{exp.org}</p>
                  <p className="text-gray-600 font-josefin text-[13px] leading-relaxed">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div data-aos="fade-up">
            <div className="flex items-center gap-2 mb-6">
              <FaGraduationCap className="text-xl text-primary" />
              <h3 className="text-xl font-josefin font-bold text-black">Education</h3>
            </div>
            <div className="space-y-6 border-l-2 border-gray-200 ml-3 pl-6 relative">
              {education.map((edu, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[33px] top-0 w-4 h-4 bg-primary rounded-full border-2 border-white shadow-sm"></div>
                  <span className="text-[10px] font-josefin font-bold text-primary uppercase tracking-wider block mb-1">
                    {edu.period}
                  </span>
                  <h4 className="text-lg font-josefin font-bold text-black mb-0.5">{edu.title}</h4>
                  <p className="text-gray-500 font-josefin font-semibold text-xs mb-1">{edu.org}</p>
                  <p className="text-primary font-josefin font-bold text-[10px] uppercase">{edu.status}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Schooling Column */}
          <div data-aos="fade-left">
            <div className="flex items-center gap-2 mb-6">
              <FaBook className="text-xl text-primary" />
              <h3 className="text-xl font-josefin font-bold text-black">Schooling</h3>
            </div>
            <div className="space-y-6 border-l-2 border-gray-200 ml-3 pl-6 relative">
              {schooling.map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[33px] top-0 w-4 h-4 bg-primary rounded-full border-2 border-white shadow-sm"></div>
                  <span className="text-[10px] font-josefin font-bold text-primary uppercase tracking-wider block mb-1">
                    {item.period}
                  </span>
                  <h4 className="text-lg font-josefin font-bold text-black mb-0.5">{item.title}</h4>
                  <p className="text-gray-500 font-josefin font-semibold text-xs mb-1">{item.org}</p>
                  <p className="text-primary font-josefin font-bold text-[10px] uppercase">{item.status}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="mt-16 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-8">Resume</h2>

          <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border">
            <iframe
              src="/rohit resume.pdf"
              title="Resume Preview"
              className="w-full h-[600px]"
            />
          </div>

          <div className="flex justify-center gap-4 mt-8">
            {/* View Resume */}
            <a
              href="/rohit resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
            >
              View Resume
            </a>

            {/* Download Resume */}
            <a
              href="/rohit resume.pdf"
              download="rohit-resume.pdf"
              className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
            >
              Download Resume
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

