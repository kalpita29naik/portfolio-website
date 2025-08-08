import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import luckyShrub from "../assets/luckyShrub.png";
import petGallery from "../assets/petGallery.png";
import quote from "../assets/quote.png";
import quizApp from "../assets/quizApp.png";
import todoApp from "../assets/todoApp.png";
import menu from "../assets/menu.png";
import cipher from "../assets/cipher.png";

const projects = [
  {
    name: "Lucky Shrub",
    image: luckyShrub,
    github: "https://kalpita29naik.github.io/Lucky-Shrub/",
  },
  {
    name: "Pet Gallery App",
    image: petGallery,
    github: "https://pet-gallery-vrgl.vercel.app/",
  },
  {
    name: "Quotes App",
    image: quote,
    github: "https://github.com/kalpita29naik/QUOTES_APP",
  },
  {
    name: "Brain Storming: Quiz App",
    image: quizApp,
    github: "https://github.com/kalpita29naik/BrainStorming",
  },
  {
    name: "To-Do App",
    image: todoApp,
    github: "https://github.com/kalpita29naik/TODO_APP",
  },
  {
    name: "Menu App",
    image: menu,
    github: "https://restuarant-menu-six.vercel.app/",
  },
  {
    name: "Cipher App",
    image: cipher,
    github: "https://cipher-app-orcin.vercel.app/",
  },
];

export default function Projects() {
  return (
    <div className="text-white px-4 sm:px-8 mt-20" id="projects">
      <h2 className="text-4xl font-bold mb-10 text-center sm:text-left">
        Project Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-white rounded-md overflow-hidden transition-transform hover:scale-105 hover:shadow-xl"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.name || `Project ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 flex flex-col gap-2 bg-[#1a1a1a]">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline flex items-center gap-2 hover:text-[#b3c746] focus:text-[#b3c746]"
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
