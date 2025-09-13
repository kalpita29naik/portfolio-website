import { faMeta } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Skills() {
  const skills = [
    {
      alt: "HTML",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      alt: "CSS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      alt: "JavaScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      alt: "TypeScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      alt: "React",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      alt: "React Native",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", // same React logo
    },
    {
      alt: "Tailwind CSS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      alt: "Git",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      alt: "MongoDB",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      alt: "PostgreSQL",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      alt: "C",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-line.svg",
    },
    {
      alt: "C++",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      alt: "Python",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      alt: "Jest",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    },
  ];

  const certificates = [
    {
      name: "Introduction to Front-End Development",
      url: "https://coursera.org/verify/P23Z3TWE9YXM",
    },
    {
      name: "Programming with JavaScript",
      url: "https://coursera.org/verify/J3U6D9FRGX2Z",
    },
    {
      name: "Version Control",
      url: "https://coursera.org/verify/RTHLTDIOL6CQ",
    },
    {
      name: "HTML and CSS in depth",
      url: "https://coursera.org/verify/3X9HKBWK0KU7",
    },
    {
      name: "React Basics",
      url: "https://coursera.org/verify/VBTFCGYA5KPF",
    },
  ];

  return (
    <div
      className="px-4 md:px-10 mt-20 text-white flex flex-col md:flex-row gap-12"
      id="skills"
      data-aos="fade-up"
    >
      {/* Skills Grid */}
      <div className="md:w-1/2">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <img
                src={skill.src}
                alt={skill.alt}
                className="w-14 h-14 transition-transform hover:scale-110 duration-300"
              />
              <p className="mt-2 text-sm">{skill.alt}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="md:w-1/2">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Certificates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="flex items-start border border-white rounded-md p-4 hover:bg-white hover:text-black transition-all duration-300"
            >
              <FontAwesomeIcon icon={faMeta} className="h-8 w-8 mr-4 mt-1" />
              <div>
                <p className="font-semibold leading-tight">{cert.name}</p>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-sm mt-1 inline-block"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
