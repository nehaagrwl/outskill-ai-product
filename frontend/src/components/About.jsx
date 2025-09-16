import React from 'react';
import { Card, CardContent } from './ui/card';
import { GraduationCap, Award, TrendingUp, Users, Sparkles } from 'lucide-react';
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
              <h2 className="text-4xl font-light text-deep-blue mb-6">
                About Me
              </h2>
              <p className="text-lg text-charcoal leading-relaxed">
                {profileData.about.summary}
              </p>
            </div>

            {/* Current Learning Highlight */}
            <div className="p-6 bg-gradient-to-r from-teal/10 to-deep-blue/10 rounded-xl border border-teal/20">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-teal/20 rounded-lg">
                  <Sparkles size={20} className="text-teal" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-deep-blue mb-2">
                    {profileData.currentLearning.title}
                  </h3>
                  <p className="text-charcoal text-sm leading-relaxed mb-3">
                    {profileData.currentLearning.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {profileData.currentLearning.areas.map((area, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-teal/20 text-deep-blue px-2 py-1 rounded"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-6">
              <h3 className="text-2xl font-medium text-deep-blue">Education</h3>
              {profileData.education.map((edu, index) => (
                <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-deep-blue">{edu.degree}</h4>
                      <span className="text-sm text-charcoal bg-gray-100 px-3 py-1 rounded-full">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-charcoal mb-2">{edu.school}</p>
                    <p className="text-sm text-gray-500 mb-3">{edu.location}</p>
                    {edu.concentration && (
                      <p className="text-sm text-charcoal mb-2">
                        <span className="font-medium">Concentration:</span> {edu.concentration}
                      </p>
                    )}
                    {edu.honors && edu.honors.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {edu.honors.map((honor, honorIndex) => (
                          <span 
                            key={honorIndex}
                            className="text-xs bg-deep-blue text-white px-2 py-1 rounded"
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
              <h3 className="text-2xl font-medium text-deep-blue mb-6">Key Highlights</h3>
              <div className="space-y-4">
                {highlightIcons.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="p-2 bg-teal/20 rounded-lg">
                      <item.icon size={20} className="text-teal" />
                    </div>
                    <p className="text-charcoal leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-medium text-deep-blue mb-6">Certifications</h3>
              <div className="grid gap-3">
                {profileData.certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-teal hover:shadow-md transition-shadow"
                  >
                    <p className="text-charcoal font-medium">{cert}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Values/Approach */}
            <div className="p-6 bg-deep-blue text-white rounded-xl">
              <h3 className="text-xl font-medium mb-4">My Unique Value Proposition</h3>
              <p className="text-gray-300 leading-relaxed">
                I combine deep technical expertise in AI/ML with strategic business acumen, 
                enabling me to bridge the gap between complex data insights and actionable 
                product decisions that drive measurable growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;