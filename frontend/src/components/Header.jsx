import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Download } from 'lucide-react';
import profileData from '../mock/data';

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

  const handleResumeDownload = () => {
    window.open(profileData.resumeLink, '_blank');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-card/95 backdrop-blur-md shadow-xl border-b border-border' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="text-xl font-bold text-teal-bright cursor-pointer hover:text-blue-bright transition-colors"
            onClick={() => scrollToSection('hero')}
          >
            Neha Agrawal
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-light hover:text-teal-bright transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-gray-light hover:text-teal-bright transition-colors font-medium"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-gray-light hover:text-teal-bright transition-colors font-medium"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-light hover:text-teal-bright transition-colors font-medium"
            >
              Projects
            </button>
            <button 
              onClick={handleResumeDownload}
              className="text-gray-light hover:text-teal-bright transition-colors flex items-center gap-1 font-medium"
            >
              <Download size={16} />
              Resume
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-teal-bright hover:bg-teal-bright/90 text-background px-6 py-2 transition-all duration-200 font-semibold"
            >
              Contact
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-light hover:text-teal-bright transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-3 pt-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-light hover:text-teal-bright transition-colors py-2 font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-left text-gray-light hover:text-teal-bright transition-colors py-2 font-medium"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-left text-gray-light hover:text-teal-bright transition-colors py-2 font-medium"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-left text-gray-light hover:text-teal-bright transition-colors py-2 font-medium"
              >
                Projects
              </button>
              <button 
                onClick={handleResumeDownload}
                className="text-left text-gray-light hover:text-teal-bright transition-colors py-2 flex items-center gap-1 font-medium"
              >
                <Download size={16} />
                Resume
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-teal-bright hover:bg-teal-bright/90 text-background w-full mt-2 transition-all duration-200 font-semibold"
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