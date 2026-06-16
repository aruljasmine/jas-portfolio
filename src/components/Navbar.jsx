import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/70 border-b border-yellow-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-bold text-yellow-400">
          Arul Jasmine
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <a href="#about" className="hover:text-yellow-400">About</a>
          <a href="#skills" className="hover:text-yellow-400">Skills</a>
          <a href="#projects" className="hover:text-yellow-400">Projects</a>
          <a href="#certifications" className="hover:text-yellow-400">Certificates</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-yellow-400 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-yellow-700 flex flex-col text-center py-4 gap-4">

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>

          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>

          <a href="#certifications" onClick={() => setMenuOpen(false)}>
            Certifications
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>

        </div>
      )}
    </nav>
  );
}

export default Navbar;