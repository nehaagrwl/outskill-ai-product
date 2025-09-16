import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, Award, TrendingUp, Users } from 'lucide-react';
import profileData from '../mock/data';

const Projects = () => {
  const projectIcons = [Award, TrendingUp, Users];
  const projectColors = ['text-orange-bright', 'text-teal-bright', 'text-blue-bright'];

  return (
    <section id="projects" className="py-20 section-bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-white-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-light max-w-2xl mx-auto font-medium">
            Key projects that demonstrate my impact in product management and analytics
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {profileData.projects.map((project, index) => {
            const IconComponent = projectIcons[index % projectIcons.length];
            const iconColor = projectColors[index % projectColors.length];
            
            return (
              <Card 
                key={project.id} 
                className="group shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-2 border-teal-bright/20 bg-card"
              >
                <CardContent className="p-0">
                  {/* Project Header */}
                  <div className="p-6 bg-gradient-to-br from-teal-bright to-blue-bright">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm border border-white/30">
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <ExternalLink 
                        size={20} 
                        className="opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:scale-110 text-white"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed font-medium">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="font-semibold text-white-primary mb-3">Key Outcomes:</h4>
                      <div className="space-y-2">
                        {project.outcomes.map((outcome, outcomeIndex) => (
                          <div key={outcomeIndex} className="flex items-start gap-2">
                            <div className={`w-1.5 h-1.5 ${iconColor.replace('text-', 'bg-')} rounded-full mt-2.5 flex-shrink-0`}></div>
                            <p className="text-sm text-gray-light leading-relaxed font-medium">{outcome}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="outline" 
                            className="text-xs text-white-primary border-teal-bright/40 hover:bg-teal-bright/10 font-semibold"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Project Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-card rounded-xl shadow-lg border-2 border-teal-bright/20">
            <div className="text-3xl font-bold text-teal-bright mb-2">$6M+</div>
            <div className="text-gray-light text-sm font-semibold">Funding Secured</div>
          </div>
          <div className="p-6 bg-card rounded-xl shadow-lg border-2 border-blue-bright/20">
            <div className="text-3xl font-bold text-blue-bright mb-2">40%</div>
            <div className="text-gray-light text-sm font-semibold">Productivity Increase</div>
          </div>
          <div className="p-6 bg-card rounded-xl shadow-lg border-2 border-orange-bright/20">
            <div className="text-3xl font-bold text-orange-bright mb-2">20+</div>
            <div className="text-gray-light text-sm font-semibold">Global Utilities</div>
          </div>
          <div className="p-6 bg-card rounded-xl shadow-lg border-2 border-teal-bright/20">
            <div className="text-3xl font-bold text-teal-bright mb-2">25%</div>
            <div className="text-gray-light text-sm font-semibold">Revenue Growth</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-teal-bright to-blue-bright text-background rounded-2xl shadow-xl border-2 border-teal-bright/30">
            <h3 className="text-2xl font-semibold mb-4">Interested in collaboration?</h3>
            <p className="text-background/90 mb-6 leading-relaxed font-medium">
              I'm always open to discussing new opportunities and innovative projects 
              in product management, analytics, and AI-powered solutions.
            </p>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-background text-teal-bright px-8 py-3 rounded-lg font-bold hover:bg-background/90 transition-colors shadow-lg"
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;