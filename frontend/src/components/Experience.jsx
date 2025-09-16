import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { CalendarDays, MapPin, CheckCircle } from 'lucide-react';
import profileData from '../mock/data';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A journey through product management and analytics roles at innovative companies
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-px"></div>

          <div className="space-y-12">
            {profileData.experience.map((exp, index) => (
              <div 
                key={exp.id}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-gray-900 rounded-full transform -translate-x-1/2 z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                } ml-12 md:ml-0`}>
                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {exp.role}
                          </h3>
                          <Badge variant="outline" className="ml-2 text-xs">
                            {exp.duration.split(' - ')[1] === 'January 2025' ? 'Current' : 'Past'}
                          </Badge>
                        </div>
                        
                        <h4 className="text-lg font-medium text-gray-700 mb-3">
                          {exp.company}
                        </h4>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center gap-1">
                            <CalendarDays size={14} />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h5 className="font-medium text-gray-900">Key Achievements:</h5>
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <div 
                            key={achievementIndex}
                            className="flex items-start gap-3 text-gray-700"
                          >
                            <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
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
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="text-3xl font-bold text-gray-900 mb-2">7+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="text-3xl font-bold text-gray-900 mb-2">4</div>
              <div className="text-gray-600">Companies</div>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="text-3xl font-bold text-gray-900 mb-2">25%</div>
              <div className="text-gray-600">Avg Revenue Growth</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;