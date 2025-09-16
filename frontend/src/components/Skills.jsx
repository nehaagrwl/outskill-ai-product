import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Brain, Code, TrendingUp, CheckCircle } from 'lucide-react';
import profileData from '../mock/data';

const Skills = () => {
  const skillCategories = [
    {
      title: "Product Management",
      icon: Brain,
      skills: profileData.skills.productManagement,
      color: "from-teal-bright/20 to-blue-bright/20",
      iconColor: "text-teal-bright"
    },
    {
      title: "Technical Skills", 
      icon: Code,
      skills: profileData.skills.technical,
      color: "from-blue-bright/20 to-teal-bright/20",
      iconColor: "text-blue-bright"
    },
    {
      title: "Business Skills",
      icon: TrendingUp,
      skills: profileData.skills.business,
      color: "from-orange-bright/20 to-teal-bright/20",
      iconColor: "text-orange-bright"
    }
  ];

  return (
    <section id="skills" className="py-20 section-bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-white-primary mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-light max-w-2xl mx-auto font-medium">
            A comprehensive toolkit spanning product strategy, technical analysis, and business growth
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-teal-bright/20 bg-card">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl mb-4 border-2 border-teal-bright/30`}>
                    <category.icon size={24} className={category.iconColor} />
                  </div>
                  <h3 className="text-xl font-semibold text-white-primary">
                    {category.title}
                  </h3>
                </div>

                <div className="grid gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg hover:bg-teal-bright/5 transition-colors border border-border"
                    >
                      <CheckCircle size={16} className="text-teal-bright flex-shrink-0" />
                      <span className="text-gray-light font-semibold text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Proficiency Section */}
        <div className="mt-16 p-8 bg-card rounded-2xl shadow-lg border-2 border-blue-bright/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white-primary mb-4">
                Technical Proficiency
              </h3>
              <p className="text-gray-light leading-relaxed mb-6 font-medium">
                Proficient in the full spectrum of product management and data analytics tools, 
                from strategic planning to technical implementation and performance measurement.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Python", "SQL", "Tableau", "Looker", "Power BI", "A/B Testing", "Gen AI", "LLMs"].map((tool, index) => (
                  <Badge key={index} variant="outline" className="text-sm border-teal-bright text-white-primary hover:bg-teal-bright/10 font-semibold">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-teal-bright/10 rounded-xl border-2 border-teal-bright/30">
                <div className="text-lg font-bold text-teal-bright mb-1">Product Strategy</div>
                <div className="text-sm text-gray-light font-semibold">Core Strength</div>
              </div>
              <div className="text-center p-4 bg-blue-bright/10 rounded-xl border-2 border-blue-bright/30">
                <div className="text-lg font-bold text-blue-bright mb-1">Data Analytics</div>
                <div className="text-sm text-gray-light font-semibold">Expert Level</div>
              </div>
              <div className="text-center p-4 bg-teal-bright/10 rounded-xl border-2 border-teal-bright/30">
                <div className="text-lg font-bold text-teal-bright mb-1">Team Leadership</div>
                <div className="text-sm text-gray-light font-semibold">Proven Track Record</div>
              </div>
              <div className="text-center p-4 bg-orange-bright/10 rounded-xl border-2 border-orange-bright/30">
                <div className="text-lg font-bold text-orange-bright mb-1">Gen AI Tools</div>
                <div className="text-sm text-gray-light font-semibold">Current Focus</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;