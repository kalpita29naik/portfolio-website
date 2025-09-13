import Contact from "./Contact";

export default function About() {
  return (
    <div
      className="px-4 sm:px-6 lg:px-12 mt-10 flex flex-col md:flex-row gap-12 text-white"
      id="about"
      data-aos="fade-up"
    >
      {/* About Me Section */}
      <div className="md:w-2/3">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 mt-6">
          About Me
        </h2>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed mt-4 text-gray-200">
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

        {/* Contact Section */}
        <div className="mt-8 sm:mt-10">
          <Contact />
        </div>
      </div>

      {/* Education Timeline */}
      <div className="md:w-1/3">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 mt-6">
          Education
        </h2>

        <div className="relative border-l-2 border-gray-500 pl-6 mt-6 space-y-8">
          {[
            {
              title: "Goa College of Engineering",
              duration: "2021 – 2025",
              detail: "B.E. in Computer Engineering",
            },
            {
              title: "Shree Damodar Higher Secondary School of Science",
              duration: "2019 – 2021",
              detail: "Higher Secondary School",
            },
            {
              title: "Mahila & Nutan English High School",
              duration: "2017 – 2019",
              detail: "Secondary School",
            },
          ].map((entry, idx) => (
            <div className="relative" key={idx}>
              <div className="absolute -left-8 top-1.5 w-4 h-4 bg-[#b3c746] rounded-full shadow-lg"></div>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold">
                {entry.title}
              </h3>
              <span className="text-xs sm:text-sm text-gray-400">
                {entry.duration}
              </span>
              <p className="text-xs sm:text-sm lg:text-base text-gray-300 mt-1">
                {entry.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
