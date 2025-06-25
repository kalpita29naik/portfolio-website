import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div className="mt-10 text-white">
      <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>

      <div className="flex gap-10 items-center mb-6 text-xl">
        <p className="flex items-center gap-2 ">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>kalpita03naik@gmail.com</span>
        </p>
        <p className="flex items-center gap-2">
          <FontAwesomeIcon icon={faPhone} />
          <span>+91 7083529843</span>
        </p>
      </div>

      {/* Social Links */}
      <div className="flex gap-10 flex-wrap">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/kalpita-naik-b2aba6249/"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white rounded-full p-3 hover:bg-white hover:text-black transition-colors"
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="text-xl" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/kalpita29naik"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white rounded-full p-3 hover:bg-white hover:text-black transition-colors"
        >
          <FontAwesomeIcon icon={faGithub} className="text-xl" />
        </a>
      </div>
    </div>
  );
}
