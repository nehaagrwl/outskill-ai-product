import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, Award, TrendingUp, Users } from 'lucide-react';
import profileData from '../mock/data';

const Projects = () => {
  const projectIcons = [Award, TrendingUp, Users];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Key projects that demonstrate my impact in product management and analytics
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {profileData.projects.map((project, index) => {
            const IconComponent = projectIcons[index % projectIcons.length];
            
            return (
              <Card 
                key={project.id} 
                className="group shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-border bg-card"
              >
                <CardContent className="p-0">
                  {/* Project Header */}
                  <div className="p-6 bg-gradient-to-br from-primary to-secondary text-white">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                        <IconComponent size={24} />
                      </div>
                      <ExternalLink 
                        size={20} 
                        className="opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:scale-110"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="font-medium text-foreground mb-3">Key Outcomes:</h4>
                      <div className="space-y-2">
                        {project.outcomes.map((outcome, outcomeIndex) => (
                          <div key={outcomeIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                            <p className="text-sm text-muted-foreground leading-relaxed">{outcome}</p>
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
                            className="text-xs text-foreground border-primary/30 hover:bg-primary/10"
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
          <div className="p-6 bg-card rounded-xl shadow-lg border border-border">
            <div className="text-3xl font-bold text-primary mb-2">$6M+</div>
            <div className="text-muted-foreground text-sm">Funding Secured</div>
          </div>
          <div className="p-6 bg-card rounded-xl shadow-lg border border-border">
            <div className="text-3xl font-bold text-secondary mb-2">40%</div>
            <div className="text-muted-foreground text-sm">Productivity Increase</div>
          </div>
          <div className="p-6 bg-card rounded-xl shadow-lg border border-border">
            <div className="text-3xl font-bold text-primary mb-2">20+</div>
            <div className="text-muted-foreground text-sm">Global Utilities</div>
          </div>
          <div className="p-6 bg-card rounded-xl shadow-lg border border-border">
            <div className="text-3xl font-bold text-secondary mb-2">25%</div>
            <div className="text-muted-foreground text-sm">Revenue Growth</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Interested in collaboration?</h3>
            <p className="text-gray-200 mb-6 leading-relaxed">
              I'm always open to discussing new opportunities and innovative projects 
              in product management, analytics, and AI-powered solutions.
            </p>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg"
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