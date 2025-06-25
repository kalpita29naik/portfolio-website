export default function NavBar() {
  return (
    <nav className="bg-[#213448] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold pl-10">KALPITA</div>
        <ul className="flex space-x-20 pr-16">
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-white font-bold font-sans"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-gray-300 hover:text-white font-bold font-sans"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-gray-300 hover:text-white font-bold font-sans"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white font-bold font-sans"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/17puzIQHJH67WeiO5gr6AJpU0QcbuDToa/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white font-bold font-sans"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white font-bold font-sans"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
