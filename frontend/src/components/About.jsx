import React from 'react';
import { Card, CardContent } from './ui/card';
import { GraduationCap, Award, TrendingUp, Users } from 'lucide-react';
import profileData from '../mock/data';

const About = () => {
  const highlightIcons = [
    { icon: GraduationCap, text: profileData.about.highlights[0] },
    { icon: TrendingUp, text: profileData.about.highlights[1] },
    { icon: Award, text: profileData.about.highlights[2] },
    { icon: Users, text: profileData.about.highlights[3] }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-light text-gray-900 mb-6">
                About Me
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {profileData.about.summary}
              </p>
            </div>

            {/* Education */}
            <div className="space-y-6">
              <h3 className="text-2xl font-medium text-gray-900">Education</h3>
              {profileData.education.map((edu, index) => (
                <Card key={index} className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">{edu.school}</p>
                    <p className="text-sm text-gray-500 mb-3">{edu.location}</p>
                    {edu.concentration && (
                      <p className="text-sm text-gray-600 mb-2">
                        <span className="font-medium">Concentration:</span> {edu.concentration}
                      </p>
                    )}
                    {edu.honors && edu.honors.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {edu.honors.map((honor, honorIndex) => (
                          <span 
                            key={honorIndex}
                            className="text-xs bg-gray-900 text-white px-2 py-1 rounded"
                          >
                            {honor}
                          </span>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Highlights & Certifications */}
          <div className="space-y-8">
            {/* Key Highlights */}
            <div>
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Key Highlights</h3>
              <div className="space-y-4">
                {highlightIcons.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <item.icon size={20} className="text-gray-700" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Certifications</h3>
              <div className="grid gap-3">
                {profileData.certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-gray-900"
                  >
                    <p className="text-gray-700 font-medium">{cert}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Values/Approach */}
            <div className="p-6 bg-gray-900 text-white rounded-xl">
              <h3 className="text-xl font-medium mb-4">My Approach</h3>
              <p className="text-gray-300 leading-relaxed">
                I believe in the power of data-driven decision making combined with user-centric design. 
                Every product decision should be backed by insights while remaining focused on solving real user problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;