import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import About from "../components/About";
import NavBar from "../components/NavBar";
import Photo from "../components/Profile";
import Projects from "../components/Project";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#213448] to-[#0f172a] min-h-screen flex flex-col text-white">
      {/* Navbar + Hero Section */}
      <div className="w-full">
        <NavBar />
        <section
          className="flex flex-col items-center justify-center px-4 py-20 text-center space-y-4"
          data-aos="fade-down"
        >
          <Photo />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Hi, I’m Kalpita
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl">
            A passionate Frontend Developer building beautiful, responsive, and
            intuitive web apps.
          </p>
        </section>
      </div>

      {/* About Section */}
      <section
        className="flex flex-col items-center justify-center px-4 py-20"
        data-aos="fade-up"
        id="about"
      >
        <About />
      </section>

      {/* Skills Section */}
      <section className="px-4 py-20" data-aos="fade-up" id="skills">
        <Skills />
      </section>

      {/* Projects Section */}
      <section className="px-4 py-20" data-aos="fade-up" id="projects">
        <Projects />
      </section>

      <Footer />
    </div>
  );
}
