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
    <footer className="bg-card border-t-2 border-primary/20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">{profileData.name}</h3>
            <p className="text-readable leading-relaxed font-medium">
              Product & Analytics Professional passionate about transforming 
              data into strategic insights and building AI-powered products that drive growth.
            </p>
            <div className="flex items-center gap-2 text-readable">
              <MapPin size={16} className="text-primary-bright" />
              <span className="text-sm font-medium">{profileData.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                className="text-readable hover:text-primary-bright transition-colors text-left font-medium"
              >
                About Me
              </button>
              <button 
                onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}
                className="text-readable hover:text-primary-bright transition-colors text-left font-medium"
              >
                Experience
              </button>
              <button 
                onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}
                className="text-readable hover:text-primary-bright transition-colors text-left font-medium"
              >
                Skills
              </button>
              <button 
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="text-readable hover:text-primary-bright transition-colors text-left font-medium"
              >
                Projects
              </button>
              <button 
                onClick={handleResumeDownload}
                className="text-readable hover:text-primary-bright transition-colors text-left flex items-center gap-1 font-medium"
              >
                <Download size={14} />
                Resume
              </button>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Let's Connect</h4>
            <div className="space-y-3">
              <button 
                onClick={handleEmailClick}
                className="flex items-center gap-3 text-readable hover:text-primary-bright transition-colors"
              >
                <Mail size={16} />
                <span className="text-sm font-medium">{profileData.email}</span>
              </button>
              <button 
                onClick={handleLinkedInClick}
                className="flex items-center gap-3 text-readable hover:text-primary-bright transition-colors"
              >
                <Linkedin size={16} />
                <span className="text-sm font-medium">LinkedIn Profile</span>
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 pt-4">
              <button 
                onClick={handleEmailClick}
                className="p-2 bg-muted hover:bg-primary/20 rounded-lg transition-colors border border-primary/20"
              >
                <Mail size={18} className="text-primary-bright" />
              </button>
              <button 
                onClick={handleLinkedInClick}
                className="p-2 bg-muted hover:bg-primary/20 rounded-lg transition-colors border border-primary/20"
              >
                <Linkedin size={18} className="text-primary-bright" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-primary/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-readable text-sm">
              <span className="font-medium">© {currentYear} {profileData.name}. Made with</span>
              <Heart size={14} className="text-accent-bright" />
              <span className="font-medium">and React</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-readable">
              <button 
                onClick={scrollToTop}
                className="hover:text-primary-bright transition-colors font-medium"
              >
                Back to Top
              </button>
              <span>•</span>
              <span className="font-medium">Product & Analytics Professional</span>
              <span>•</span> 
              <span className="font-medium">AI & Data Expert</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;