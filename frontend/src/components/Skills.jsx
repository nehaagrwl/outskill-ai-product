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
      color: "from-primary/20 to-secondary/20"
    },
    {
      title: "Technical Skills", 
      icon: Code,
      skills: profileData.skills.technical,
      color: "from-secondary/20 to-primary/20"
    },
    {
      title: "Business Skills",
      icon: TrendingUp,
      skills: profileData.skills.business,
      color: "from-primary/20 to-secondary/20"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-highly-visible max-w-2xl mx-auto font-medium">
            A comprehensive toolkit spanning product strategy, technical analysis, and business growth
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-primary/20 bg-card">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl mb-4 border-2 border-primary/30`}>
                    <category.icon size={24} className="text-primary-bright" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="grid gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg hover:bg-primary/10 transition-colors border border-border"
                    >
                      <CheckCircle size={16} className="text-primary-bright flex-shrink-0" />
                      <span className="text-readable font-semibold text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Proficiency Section */}
        <div className="mt-16 p-8 bg-card rounded-2xl shadow-lg border-2 border-primary/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Technical Proficiency
              </h3>
              <p className="text-highly-visible leading-relaxed mb-6 font-medium">
                Proficient in the full spectrum of product management and data analytics tools, 
                from strategic planning to technical implementation and performance measurement.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Python", "SQL", "Tableau", "Looker", "Power BI", "A/B Testing", "Gen AI", "LLMs"].map((tool, index) => (
                  <Badge key={index} variant="outline" className="text-sm border-primary-bright text-foreground hover:bg-primary/10 font-semibold">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-primary/10 rounded-xl border-2 border-primary/30">
                <div className="text-lg font-bold text-primary-bright mb-1">Product Strategy</div>
                <div className="text-sm text-readable font-semibold">Core Strength</div>
              </div>
              <div className="text-center p-4 bg-secondary/10 rounded-xl border-2 border-secondary/30">
                <div className="text-lg font-bold text-secondary-bright mb-1">Data Analytics</div>
                <div className="text-sm text-readable font-semibold">Expert Level</div>
              </div>
              <div className="text-center p-4 bg-primary/10 rounded-xl border-2 border-primary/30">
                <div className="text-lg font-bold text-primary-bright mb-1">Team Leadership</div>
                <div className="text-sm text-readable font-semibold">Proven Track Record</div>
              </div>
              <div className="text-center p-4 bg-secondary/10 rounded-xl border-2 border-secondary/30">
                <div className="text-lg font-bold text-secondary-bright mb-1">Gen AI Tools</div>
                <div className="text-sm text-readable font-semibold">Current Focus</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;