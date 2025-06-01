import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from './Logo'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { title: "Home", url: "#home" },
    { title: "About", url: "#about" },
    { title: "Properties", url: "#properties" },
    { title: "Cities", url: "#cities" },
    { title: "Contact", url: "#contact" },
  ];

  return (
    <header className="navbar w-full py-4 px-6 transition-all duration-300 bg-white z-50">
      <div className="container-custom flex justify-between items-center">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.url} 
                  className="text-neutral-700 hover:text-primary-600 font-medium transition-colors duration-300"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* CTA Button for desktop */}
        <div className="hidden md:block">
          <a href="#contact" className="btn btn-primary">
            Get Started
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-neutral-800 focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50 transition-all duration-300">
          <nav className="container-custom py-4">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="block py-2 text-neutral-700 hover:text-primary-600 font-medium transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a 
                  href="#contact" 
                  className="btn btn-primary inline-block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;