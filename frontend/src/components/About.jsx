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
    <section id="about" className="py-20 section-bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-light text-white-primary mb-6">
                About Me
              </h2>
              <p className="text-lg text-gray-light leading-relaxed font-medium">
                {profileData.about.summary}
              </p>
            </div>

            {/* Current Learning Highlight */}
            <div className="p-6 bg-card rounded-xl border-2 border-teal-bright/30 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal-bright/20 rounded-lg border border-teal-bright/40">
                  <Sparkles size={20} className="text-teal-bright" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white-primary mb-2">
                    {profileData.currentLearning.title}
                  </h3>
                  <p className="text-gray-light text-sm leading-relaxed mb-3 font-medium">
                    {profileData.currentLearning.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {profileData.currentLearning.areas.map((area, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-teal-bright/20 text-teal-bright px-3 py-1 rounded-full border border-teal-bright/40 font-medium"
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
              <h3 className="text-2xl font-semibold text-white-primary">Education</h3>
              {profileData.education.map((edu, index) => (
                <Card key={index} className="border-border shadow-lg hover:shadow-xl transition-shadow bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-white-primary">{edu.degree}</h4>
                      <span className="text-sm text-gray-light bg-muted px-3 py-1 rounded-full font-medium">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-gray-light font-medium mb-2">{edu.school}</p>
                    <p className="text-sm text-gray-medium mb-3">{edu.location}</p>
                    {edu.concentration && (
                      <p className="text-sm text-gray-light mb-2">
                        <span className="font-semibold">Concentration:</span> {edu.concentration}
                      </p>
                    )}
                    {edu.honors && edu.honors.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {edu.honors.map((honor, honorIndex) => (
                          <span 
                            key={honorIndex}
                            className="text-xs bg-teal-bright text-background px-2 py-1 rounded font-semibold"
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
              <h3 className="text-2xl font-semibold text-white-primary mb-6">Key Highlights</h3>
              <div className="space-y-4">
                {highlightIcons.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border">
                    <div className="p-2 bg-blue-bright/20 rounded-lg border border-blue-bright/30">
                      <item.icon size={20} className="text-blue-bright" />
                    </div>
                    <p className="text-gray-light leading-relaxed font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold text-white-primary mb-6">Certifications</h3>
              <div className="grid gap-3">
                {profileData.certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-card rounded-lg shadow-sm border-l-4 border-blue-bright hover:shadow-md transition-shadow"
                  >
                    <p className="text-gray-light font-semibold">{cert}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Approach Section */}
            <div className="p-6 bg-gradient-to-r from-teal-bright to-blue-bright text-background rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">My Approach</h3>
              <p className="text-background/90 leading-relaxed font-medium">
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