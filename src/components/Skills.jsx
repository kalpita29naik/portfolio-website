import { faMeta } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Skills() {
  return (
    <div className="flex flex-row text-white gap-4 ml-8 mr-8 mb-64" id="skills">
      <div className="w-full md:w-1/2 ">
        <h2 className="text-4xl font-bold mb-10 mt-20">Skills</h2>
        <div className="grid grid-cols-4 ">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="HTML"
            className="w-16 h-16 m-4"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
            className="w-16 h-16 m-4"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            className="w-16 h-16 m-4"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
            className="w-16 h-16 m-4"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            className="w-16 h-16 m-4"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            className="w-16 h-16 m-4"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-line.svg"
            alt="C"
            className="w-16 h-16 m-4"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
            className="w-16 h-16 m-4"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
            className="w-16 h-16 m-4"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg"
            className="w-16 h-16 m-4"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <h2 className="text-4xl font-bold mb-10 mt-20">Certificates</h2>
        <div className="grid grid-cols-2 gap-4 overflow-hidden">
          <div className="flex border border-white rounded-md p-2 hover:bg-white hover:text-black transition-all">
            <FontAwesomeIcon icon={faMeta} className="h-10 w-10 mr-4 " />
            <div>
              <p className="font-semibold">
                Introduction to Front-End Development{" "}
              </p>
              <a
                href="https://coursera.org/verify/P23Z3TWE9YXM"
                className="underline text-sm"
              >
                Certificate
              </a>
            </div>
          </div>

          <div className="flex border border-white rounded-md p-2 hover:bg-white hover:text-black transition-all">
            <FontAwesomeIcon icon={faMeta} className="h-10 w-10 mr-4 " />
            <div>
              <p className="font-semibold"> Programming with JavaScript </p>
              <a
                href="https://coursera.org/verify/J3U6D9FRGX2Z"
                className="underline text-sm"
              >
                Certificate
              </a>
            </div>
          </div>

          <div className="flex border border-white rounded-md p-2 hover:bg-white hover:text-black transition-all">
            <FontAwesomeIcon icon={faMeta} className="h-10 w-10 mr-4 " />
            <div>
              <p className="font-semibold">Version Control</p>
              <a
                href="https://coursera.org/verify/RTHLTDIOL6CQ"
                className="underline text-sm"
              >
                Certificate
              </a>
            </div>
          </div>

          <div className="flex border border-white rounded-md p-2 hover:bg-white hover:text-black transition-all">
            <FontAwesomeIcon icon={faMeta} className="h-10 w-10 mr-4 " />
            <div>
              <p className="font-semibold"> HTML and CSS in depth</p>
              <a
                href="https://coursera.org/verify/3X9HKBWK0KU7"
                className="underline text-sm"
              >
                Certificate
              </a>
            </div>
          </div>

          <div className="flex border border-white rounded-md p-3 hover:bg-white hover:text-black transition-all">
            <FontAwesomeIcon icon={faMeta} className="h-10 w-10 mr-4" />
            <div>
              <p className="font-semibold">React Basics</p>
              <a
                href="https://coursera.org/verify/VBTFCGYA5KPF"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-sm"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
