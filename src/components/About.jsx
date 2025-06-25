import Contact from "./Contact";

export default function About() {
  return (
    <div
      className="ml-8 mr-8 mt-10 flex flex-col md:flex-row gap-10 text-white mb-64"
      id="about"
    >
      {/* About Me Section */}
      <div className="md:w-2/3">
        <h2 className="text-4xl font-bold mb-4 mt-20">About Me</h2>
        <p className="text-lg leading-relaxed mt-10 ">
          Hi! I’m Kalpita, a passionate{" "}
          <span className="font-bold text-[#b3c746]">Frontend Developer</span>{" "}
          with a strong focus on building responsive, user-friendly, and
          visually appealing web applications. I love turning ideas into clean
          and functional interfaces that offer a great user experience.
          <br />
          <br />
          I started my journey in web development during my engineering studies,
          and since then, I've worked on diverse projects — from a vocabulary
          quiz app to a smart disease detection system for Parkinson’s.
          <br />
          <br />
          My experience spans across frontend frameworks like{" "}
          <span className="text-[#b3c746] font-semibold">React</span> and{" "}
          <span className="text-[#b3c746] font-semibold">Tailwind CSS</span>,
          and I’m always eager to explore new tools that improve how users
          interact with technology. As a team player and a curious learner, I
          thrive in collaborative environments and enjoy solving real-world
          problems through code.
        </p>
        <div>
          <Contact />
        </div>
      </div>

      {/* Education Timeline */}
      <div className="md:w-1/3">
        <h2 className="text-4xl font-bold mb-4 mt-20">Education</h2>
        <div className=" relative border-l border-gray-400 pl-6 mt-10 ">
          {/* Entry 1 */}
          <div className="mb-10 relative">
            <div className="absolute w-4 h-4 bg-[#b3c746] rounded-full -left-8 top-1.4"></div>
            <h3 className="text-xl font-semibold text-white">
              Goa College of Engineering
            </h3>
            <span className="text-sm text-gray-400">2021 – 2025</span>
            <p className="text-md text-gray-300 mt-1">
              B.E. in Computer Engineering
            </p>
          </div>

          {/* Entry 2 */}
          <div className="mb-10 relative">
            <div className="absolute w-4 h-4 bg-[#b3c746] rounded-full -left-8 top-1.5"></div>
            <h3 className="text-xl font-semibold text-white">
              Shree Damodar Higher Secondary School of Science
            </h3>
            <span className="text-sm text-gray-400">2019 – 2021</span>
            <p className="text-md text-gray-300 mt-1">
              Higher Secondary School
            </p>
          </div>

          {/* Entry 3 */}
          <div className="mb-10 relative">
            <div className="absolute w-4 h-4 bg-[#b3c746] rounded-full -left-8 top-1.5"></div>
            <h3 className="text-xl font-semibold text-white">
              Mahila & Nutan English High School
            </h3>
            <span className="text-sm text-gray-400">2017 – 2019</span>
            <p className="text-md text-gray-300 mt-1">Secondary School</p>
          </div>
        </div>
      </div>
    </div>
  );
}
