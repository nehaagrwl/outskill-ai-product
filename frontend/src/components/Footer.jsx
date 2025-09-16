import React from 'react';
import { Heart, Mail, Linkedin, MapPin, Download } from 'lucide-react';
import profileData from '../mock/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleEmailClick = () => {
    window.location.href = `mailto:${profileData.email}`;
  };

  const handleLinkedInClick = () => {
    window.open('https://linkedin.com/in/neha-agrawal', '_blank');
  };

  const handleResumeDownload = () => {
    window.open(profileData.resumeLink, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-deep-blue to-charcoal text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">{profileData.name}</h3>
            <p className="text-gray-300 leading-relaxed">
              Product & Analytics Professional passionate about transforming 
              data into strategic insights and building AI-powered products that drive growth.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin size={16} />
              <span className="text-sm">{profileData.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-medium text-gray-200">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-300 hover:text-teal transition-colors text-left"
              >
                About Me
              </button>
              <button 
                onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-300 hover:text-teal transition-colors text-left"
              >
                Experience
              </button>
              <button 
                onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-300 hover:text-teal transition-colors text-left"
              >
                Skills
              </button>
              <button 
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-300 hover:text-teal transition-colors text-left"
              >
                Projects
              </button>
              <button 
                onClick={handleResumeDownload}
                className="text-gray-300 hover:text-teal transition-colors text-left flex items-center gap-1"
              >
                <Download size={14} />
                Resume
              </button>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-medium text-gray-200">Let's Connect</h4>
            <div className="space-y-3">
              <button 
                onClick={handleEmailClick}
                className="flex items-center gap-3 text-gray-300 hover:text-teal transition-colors"
              >
                <Mail size={16} />
                <span className="text-sm">{profileData.email}</span>
              </button>
              <button 
                onClick={handleLinkedInClick}
                className="flex items-center gap-3 text-gray-300 hover:text-teal transition-colors"
              >
                <Linkedin size={16} />
                <span className="text-sm">LinkedIn Profile</span>
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 pt-4">
              <button 
                onClick={handleEmailClick}
                className="p-2 bg-white/10 hover:bg-teal/20 rounded-lg transition-colors"
              >
                <Mail size={18} />
              </button>
              <button 
                onClick={handleLinkedInClick}
                className="p-2 bg-white/10 hover:bg-teal/20 rounded-lg transition-colors"
              >
                <Linkedin size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© {currentYear} {profileData.name}. Made with</span>
              <Heart size={14} className="text-coral" />
              <span>and React</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <button 
                onClick={scrollToTop}
                className="hover:text-teal transition-colors"
              >
                Back to Top
              </button>
              <span>•</span>
              <span>Product & Analytics Professional</span>
              <span>•</span> 
              <span>AI & Data Expert</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;