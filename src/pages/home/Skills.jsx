import { FaCode, FaDatabase, FaServer, FaTools } from "react-icons/fa";

const categories = [
  {
    title: "Frontend ",
    icon: <FaCode className="text-4xl text-blue-500" />,
    skills: ["React.js", "JavaScript", "TailwindCSS", "HTML", "CSS", "Framer Motion"]
  },
  {
    title: "Backend Core",
    icon: <FaServer className="text-4xl text-green-500" />,
    skills: ["Spring Boot", "REST APIs", "Java", "Python"]
  },
  {
    title: "Database ",
    icon: <FaDatabase className="text-4xl text-orange-500" />,
    skills: ["MySQL", "PostgreSQL", "MongoDB"]
  },
  {
    title: "Tools",
    icon: <FaTools className="text-4xl text-gray-500" />,
    skills: ["Git", "GitHub", "Postman"]
  }
];

export default function Skills() {
  return (
    <div id="skills" className="w-full py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-3xl font-josefin font-bold text-black mb-3">My <span className="text-primary">Skills</span></h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">{category.icon}</span>
              </div>
              <h3 className="text-lg font-josefin font-bold text-black text-center mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-0.5 bg-gray-50 text-gray-700 text-[11px] font-josefin font-semibold rounded-full border border-gray-200 group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

