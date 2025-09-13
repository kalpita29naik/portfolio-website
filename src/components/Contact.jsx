import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div className="mt-20 text-white" id="contact">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Contact Me</h2>

      {/* Contact Info */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 items-start mb-8 text-base sm:text-lg lg:text-xl">
        <p className="flex items-center gap-2">
          <FontAwesomeIcon icon={faEnvelope} className="text-lg sm:text-xl" />
          <span className="truncate">kalpita03naik@gmail.com</span>
        </p>
        <p className="flex items-center gap-2">
          <FontAwesomeIcon icon={faPhone} className="text-lg sm:text-xl" />
          <span>+91 7083529843</span>
        </p>
      </div>

      {/* Social Links */}
      <div className="flex gap-4 sm:gap-6 flex-wrap justify-start">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/kalpita-naik-b2aba6249/"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white rounded-full p-3 sm:p-4 hover:bg-white hover:text-black transition-colors flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="text-lg sm:text-xl" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/kalpita29naik"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white rounded-full p-3 sm:p-4 hover:bg-white hover:text-black transition-colors flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faGithub} className="text-lg sm:text-xl" />
        </a>
      </div>
    </div>
  );
}
