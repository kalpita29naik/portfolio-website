import About from "../components/About";
import NavBar from "../components/NavBar";
import Photo from "../components/Profile";
import Projects from "../components/Project";
import Skills from "../components/Skills";
export default function Home() {
  return (
    <div className="bg-[#213448] min-h-screen flex flex-col">
      <div>
        <NavBar />
        <Photo />
      </div>

      <div className="flex flex-col items-center justify-center mt-10">
        <About />
      </div>

      <div>
        <Skills />
      </div>

      <div>
        <Projects />
      </div>
    </div>
  );
}
