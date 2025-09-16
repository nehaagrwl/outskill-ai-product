import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Brain, Code, TrendingUp } from 'lucide-react';
import profileData from '../mock/data';

const Skills = () => {
  const skillCategories = [
    {
      title: "Product Management",
      icon: Brain,
      skills: profileData.skills.productManagement,
      color: "bg-blue-50 border-blue-200 text-blue-800"
    },
    {
      title: "Technical Skills", 
      icon: Code,
      skills: profileData.skills.technical,
      color: "bg-green-50 border-green-200 text-green-800"
    },
    {
      title: "Business Skills",
      icon: TrendingUp,
      skills: profileData.skills.business,
      color: "bg-purple-50 border-purple-200 text-purple-800"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit spanning product strategy, technical analysis, and business growth
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 text-white rounded-xl mb-4">
                    <category.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <span className="text-gray-700 font-medium">{skill}</span>
                      <div className="w-16 h-2 bg-gray-200 rounded-full">
                        <div 
                          className="h-full bg-gray-900 rounded-full"
                          style={{ width: `${85 + Math.random() * 15}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 p-8 bg-white rounded-2xl shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Technical Proficiency
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Proficient in the full spectrum of product management and data analytics tools, 
                from strategic planning to technical implementation and performance measurement.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Python", "SQL", "Tableau", "Looker", "Power BI", "A/B Testing", "Agile", "Scrum"].map((tool, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-2xl font-bold text-gray-900 mb-1">95%</div>
                <div className="text-sm text-gray-600">Product Strategy</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-2xl font-bold text-gray-900 mb-1">90%</div>
                <div className="text-sm text-gray-600">Data Analytics</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-2xl font-bold text-gray-900 mb-1">88%</div>
                <div className="text-sm text-gray-600">Team Leadership</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-2xl font-bold text-gray-900 mb-1">92%</div>
                <div className="text-sm text-gray-600">Technical Implementation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;