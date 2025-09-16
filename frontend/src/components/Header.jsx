import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="text-xl font-semibold text-gray-900 cursor-pointer hover:text-gray-700 transition-colors"
            onClick={() => scrollToSection('hero')}
          >
            Neha Agrawal
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Projects
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 transition-all duration-200"
            >
              Contact
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-gray-900 transition-colors py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-left text-gray-700 hover:text-gray-900 transition-colors py-2"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-left text-gray-700 hover:text-gray-900 transition-colors py-2"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-left text-gray-700 hover:text-gray-900 transition-colors py-2"
              >
                Projects
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gray-900 hover:bg-gray-800 text-white w-full mt-2 transition-all duration-200"
              >
                Contact
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;