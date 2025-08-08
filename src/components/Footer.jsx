import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#213448] text-white py-8 px-4 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Name */}
        <div className="text-xl font-bold mb-4 md:mb-0 text-[#b3c746]">
          KALPITA
        </div>

        {/* Navigation */}
        <ul className="flex space-x-6 text-sm mb-4 md:mb-0">
          <li>
            <a href="#about" className="hover:text-[#b3c746]">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-[#b3c746]">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-[#b3c746]">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#b3c746]">
              Contact
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/kalpita29naik"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#b3c746]"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a
            href="https://linkedin.com/in/kalpita29naik"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#b3c746]"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a
            href="mailto:kalpitanaik29@gmail.com"
            className="hover:text-[#b3c746]"
          >
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
}
