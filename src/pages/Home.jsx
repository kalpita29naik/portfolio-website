import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

import About from "../components/About";
import NavBar from "../components/NavBar";
import Photo from "../components/Profile";
import Projects from "../components/Project";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#213448] to-[#0f172a] min-h-screen flex flex-col text-white">
      <div className="w-full">
        <NavBar />

        <section
          className="flex flex-col items-center justify-center px-4 py-20 md:py-32 text-center space-y-6"
          id="hero"
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Photo />
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            Hi, I'm Kalpita
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          >
            A passionate Frontend Developer building beautiful, responsive, and
            intuitive web apps.
          </motion.p>
        </section>
      </div>

      {/* About Section */}
      <section
        className="flex flex-col items-center justify-center px-4 py-16 sm:py-20"
        data-aos="fade-up"
        id="about"
      >
        <About />
      </section>

      {/* Skills Section */}
      <section className="px-4 py-16 sm:py-20" data-aos="fade-up" id="skills">
        <Skills />
      </section>

      {/* Projects Section */}
      <section className="px-4 py-16 sm:py-20" data-aos="fade-up" id="projects">
        <Projects />
      </section>

      <Footer />
    </div>
  );
}
