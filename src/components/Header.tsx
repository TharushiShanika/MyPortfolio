import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-gray-800">
          Shanika Ekanayake
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-600 hover:text-gray-900 font-medium">
            About
          </a>
          <a href="#projects" className="text-gray-600 hover:text-gray-900 font-medium">
            Projects
          </a>
          <a href="#skills" className="text-gray-600 hover:text-gray-900 font-medium">
            Skills
          </a>
          <a href="#education" className="text-gray-600 hover:text-gray-900 font-medium">
            Education
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 font-medium">
            Contact
          </a>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-600 focus:outline-none" onClick={toggleMenu} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#about" className="text-gray-600 hover:text-gray-900 font-medium" onClick={toggleMenu}>
              About
            </a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900 font-medium" onClick={toggleMenu}>
              Projects
            </a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900 font-medium" onClick={toggleMenu}>
              Skills
            </a>
            <a href="#education" className="text-gray-600 hover:text-gray-900 font-medium" onClick={toggleMenu}>
              Education
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 font-medium" onClick={toggleMenu}>
              Contact
            </a>
          </div>
        </div>}
    </header>;
};