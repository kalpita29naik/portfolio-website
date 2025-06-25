import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Sample images and data
const projects = [
  {
    name: "Lucky Shrub",
    image: "/src/assets/luckyShrub.png",
    github: "https://kalpita29naik.github.io/Lucky-Shrub/",
  },
  {
    name: "Flipkart Clone",
    image: "/src/assets/flipkart.png",
    github: "https://github.com/kalpita29naik/Flipkart-clone",
  },
  {
    name: "Quotes App",
    image: "/src/assets/quote.png",
    github: "https://github.com/kalpita29naik/QUOTES_APP",
  },
  {
    name: "Brain Storming: Quiz App",
    image: "/src/assets/quizApp.png",
    github: "https://github.com/kalpita29naik/BrainStorming",
  },
  {
    name: "To-Do App",
    image: "/src/assets/todoApp.png",
    github: "https://github.com/kalpita29naik/TODO_APP",
  },
];

export default function Projects() {
  return (
    <div className="text-white px-8 mt-20" id="projects">
      <h2 className="text-4xl font-bold mb-10">Project Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-white rounded-md overflow-hidden hover:shadow-lg transition-transform hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col gap-2 bg-[#1a1a1a]">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline flex items-center gap-2 hover:text-[#b3c746]"
              >
                <FontAwesomeIcon icon={faGithub} />
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
