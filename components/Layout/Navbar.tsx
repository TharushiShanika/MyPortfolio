import { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };
  return <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">Shanika Ekanayake</div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-gray-900 font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-600 hover:text-gray-900 font-medium">
              Experience
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-gray-900 font-medium">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-gray-900 font-medium">
              Contact
            </button>
          </nav>
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-gray-900">
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md">
            <div className="flex flex-col space-y-4 p-4">
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-gray-900 font-medium">
                About
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-600 hover:text-gray-900 font-medium">
                Experience
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-gray-900 font-medium">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-gray-900 font-medium">
                Contact
              </button>
            </div>
          </div>}
      </div>
    </header>;
};
export default Navbar;