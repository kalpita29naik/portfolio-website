import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    {
      label: "Resume",
      href: "https://drive.google.com/file/d/1g-8iuD7Ert1R7Cxlzg6fm-aJk-AiQos2/view?usp=sharing",
      external: true,
    },
    { label: "Contact", href: "#contact" },
  ];

  const NavItems = ({ onClick }) => (
    <>
      {navLinks.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            target={link.external ? "_blank" : "_self"}
            rel={link.external ? "noopener noreferrer" : undefined}
            className={`block font-medium transition duration-300 text-white hover:text-[#b3c746]`}
            onClick={onClick}
          >
            {link.label}
          </a>
        </li>
      ))}
    </>
  );

  return (
    <nav className="bg-[#213448] fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-[#b3c746] text-2xl font-bold tracking-widest">
          KALPITA
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-10 pr-4">
          <NavItems />
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 animate-slideDown">
          <ul className="flex flex-col space-y-4">
            <NavItems onClick={() => setMenuOpen(false)} />
          </ul>
        </div>
      )}
    </nav>
  );
}
