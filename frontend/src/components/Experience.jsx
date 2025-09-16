import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { CalendarDays, MapPin, CheckCircle } from 'lucide-react';
import profileData from '../mock/data';

const Experience = () => {
  return (
    <section id="experience" className="py-20 section-bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-white-primary mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-light max-w-2xl mx-auto font-medium">
            A journey through product management and analytics roles at innovative companies
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-teal-bright/50 transform md:-translate-x-px"></div>

          <div className="space-y-12">
            {profileData.experience.map((exp, index) => (
              <div 
                key={exp.id}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-teal-bright to-blue-bright rounded-full transform -translate-x-1/2 z-10 border-2 border-background shadow-lg"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                } ml-12 md:ml-0`}>
                  <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-card">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-semibold text-white-primary">
                            {exp.role}
                          </h3>
                          <Badge variant="outline" className="ml-2 text-xs border-orange-bright text-orange-bright bg-orange-bright/10 font-semibold">
                            Past
                          </Badge>
                        </div>
                        
                        <h4 className="text-lg font-medium text-teal-bright mb-3">
                          {exp.company}
                        </h4>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-light mb-4">
                          <div className="flex items-center gap-1 font-medium">
                            <CalendarDays size={14} className="text-teal-bright" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-1 font-medium">
                            <MapPin size={14} className="text-teal-bright" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h5 className="font-semibold text-white-primary">Key Achievements:</h5>
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <div 
                            key={achievementIndex}
                            className="flex items-start gap-3 text-gray-light"
                          >
                            <CheckCircle size={16} className="text-teal-bright mt-0.5 flex-shrink-0" />
                            <p className="text-sm leading-relaxed font-medium">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-card rounded-xl shadow-lg border-2 border-teal-bright/20">
              <div className="text-3xl font-bold text-teal-bright mb-2">6+</div>
              <div className="text-gray-light font-semibold">Years of Experience</div>
            </div>
            <div className="p-6 bg-card rounded-xl shadow-lg border-2 border-blue-bright/20">
              <div className="text-3xl font-bold text-blue-bright mb-2">4</div>
              <div className="text-gray-light font-semibold">Companies</div>
            </div>
            <div className="p-6 bg-card rounded-xl shadow-lg border-2 border-teal-bright/20">
              <div className="text-3xl font-bold text-teal-bright mb-2">25%</div>
              <div className="text-gray-light font-semibold">Avg Revenue Growth</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;