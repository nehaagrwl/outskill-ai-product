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
    <section id="hero" className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-card/30 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,hsl(var(--primary)/0.1),transparent)]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-muted-foreground text-sm font-medium">
                <MapPin size={16} className="text-primary" />
                {profileData.location}
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-light text-foreground leading-tight">
                {profileData.name}
              </h1>
              
              <p className="text-xl lg:text-2xl text-primary-bright font-medium">
                {profileData.title}
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                {profileData.tagline}
              </p>

              {/* Gen AI Learning Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-bright px-4 py-2 rounded-full text-sm font-semibold border border-primary/40">
                <Sparkles size={16} className="text-secondary-bright" />
                Currently upskilling in Gen AI & LLMs
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-primary hover:bg-primary-bright text-background px-8 py-3 transition-all duration-200 hover:scale-105 font-semibold shadow-lg"
              >
                View My Work
              </Button>
              <Button 
                variant="outline"
                onClick={handleEmailClick}
                className="border-primary text-primary-bright hover:bg-primary hover:text-background px-8 py-3 transition-all duration-200 font-semibold"
              >
                <Mail size={16} className="mr-2" />
                Get in Touch
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-primary-bright">6+</div>
                <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-bright">20+</div>
                <div className="text-sm text-muted-foreground font-medium">Projects Delivered</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-bright">$6M+</div>
                <div className="text-sm text-muted-foreground font-medium">Funding Secured</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/20">
                <img 
                  src={profileData.profileImage}
                  alt={`${profileData.name} - Professional headshot`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-xl flex items-center justify-center shadow-lg border-2 border-background">
                <div className="text-background text-center">
                  <div className="text-lg font-bold">MBA</div>
                  <div className="text-xs font-semibold">UCLA</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="p-3 text-primary-bright hover:text-secondary-bright transition-colors rounded-full bg-card/50 backdrop-blur-sm"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;