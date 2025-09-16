import React from 'react';
import { Button } from './ui/button';
import { ArrowDown, Mail, MapPin, Sparkles } from 'lucide-react';
import profileData from '../mock/data';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${profileData.email}`;
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      
      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-charcoal text-sm">
                <MapPin size={16} />
                {profileData.location}
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-light text-deep-blue leading-tight">
                {profileData.name}
              </h1>
              
              <p className="text-xl lg:text-2xl text-teal font-light">
                {profileData.title}
              </p>
              
              <p className="text-lg text-charcoal leading-relaxed max-w-lg">
                {profileData.tagline}
              </p>

              {/* Gen AI Learning Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal/10 to-deep-blue/10 text-deep-blue px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles size={16} className="text-teal" />
                Currently upskilling in Gen AI & LLMs
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-deep-blue hover:bg-teal text-white px-8 py-3 transition-all duration-200 hover:scale-105"
              >
                View My Work
              </Button>
              <Button 
                variant="outline"
                onClick={handleEmailClick}
                className="border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-white px-8 py-3 transition-all duration-200"
              >
                <Mail size={16} className="mr-2" />
                Get in Touch
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-2xl font-semibold text-deep-blue">6+</div>
                <div className="text-sm text-charcoal">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-deep-blue">20+</div>
                <div className="text-sm text-charcoal">Projects Delivered</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-deep-blue">$6M+</div>
                <div className="text-sm text-charcoal">Funding Secured</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={profileData.profileImage}
                  alt={`${profileData.name} - Professional headshot`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-deep-blue rounded-xl flex items-center justify-center shadow-lg">
                <div className="text-white text-center">
                  <div className="text-lg font-semibold">MBA</div>
                  <div className="text-xs">UCLA</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="p-2 text-teal hover:text-deep-blue transition-colors"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;