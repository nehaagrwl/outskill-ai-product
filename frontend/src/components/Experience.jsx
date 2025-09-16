import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { CalendarDays, MapPin, CheckCircle } from 'lucide-react';
import profileData from '../mock/data';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-deep-blue mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-charcoal max-w-2xl mx-auto">
            A journey through product management and analytics roles at innovative companies
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-teal/30 transform md:-translate-x-px"></div>

          <div className="space-y-12">
            {profileData.experience.map((exp, index) => (
              <div 
                key={exp.id}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-deep-blue to-teal rounded-full transform -translate-x-1/2 z-10 border-2 border-white shadow-lg"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                } ml-12 md:ml-0`}>
                  <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-semibold text-deep-blue">
                            {exp.role}
                          </h3>
                          <Badge variant="outline" className={`ml-2 text-xs ${
                            exp.duration.split(' - ')[1] === 'January 2025' 
                              ? 'border-coral text-coral bg-coral/10' 
                              : 'border-teal text-teal bg-teal/10'
                          }`}>
                            {exp.duration.split(' - ')[1] === 'January 2025' ? 'Current' : 'Past'}
                          </Badge>
                        </div>
                        
                        <h4 className="text-lg font-medium text-charcoal mb-3">
                          {exp.company}
                        </h4>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center gap-1">
                            <CalendarDays size={14} className="text-teal" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} className="text-teal" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h5 className="font-medium text-deep-blue">Key Achievements:</h5>
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <div 
                            key={achievementIndex}
                            className="flex items-start gap-3 text-charcoal"
                          >
                            <CheckCircle size={16} className="text-teal mt-0.5 flex-shrink-0" />
                            <p className="text-sm leading-relaxed">{achievement}</p>
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
            <div className="p-6 bg-white rounded-xl shadow-lg border border-deep-blue/10">
              <div className="text-3xl font-bold text-deep-blue mb-2">6+</div>
              <div className="text-charcoal">Years of Experience</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg border border-teal/10">
              <div className="text-3xl font-bold text-teal mb-2">4</div>
              <div className="text-charcoal">Companies</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg border border-deep-blue/10">
              <div className="text-3xl font-bold text-deep-blue mb-2">25%</div>
              <div className="text-charcoal">Avg Revenue Growth</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;