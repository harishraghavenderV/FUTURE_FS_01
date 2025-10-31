import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Achievements", path: "/achievements" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-slate-800 shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold bg-gradient-to-r from-sky-400 to-fuchsia-500 bg-clip-text text-transparent hover:opacity-80 transition"
        >
          Harish Raghavender V
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-[17px] font-medium">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`${
                    isActive
                      ? "text-sky-400 border-b-2 border-sky-400"
                      : "text-gray-300 hover:text-sky-400"
                  } transition duration-300 pb-1`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-sky-400 text-3xl focus:outline-none transition-transform hover:scale-110"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900/90 backdrop-blur-xl py-5 border-t border-slate-800 animate-fadeIn">
          <ul className="flex flex-col items-center space-y-5 text-lg font-medium">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`${
                      isActive
                        ? "text-sky-400 border-b border-sky-400"
                        : "text-gray-300 hover:text-sky-400"
                    } transition duration-300 pb-1`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
