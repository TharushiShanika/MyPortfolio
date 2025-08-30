import React from 'react';
import { CodeIcon, ServerIcon, DatabaseIcon, LayoutIcon, BrainIcon } from 'lucide-react';
export const Skills = () => {
  const skillCategories = [{
    title: 'Frontend Development',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', ],
    icon: <LayoutIcon size={24} className="text-blue-600" />
  }, {
    title: 'Backend Development',
    skills: ['Node.js', 'Express', 'Python'],
    icon: <ServerIcon size={24} className="text-green-600" />
  }, {
    title: 'Database',
    skills: ['MongoDB', 'MySQL', 'Firebase'],
    icon: <DatabaseIcon size={24} className="text-yellow-600" />
  }, {
    title: 'Programming Languages',
    skills: ['JavaScript', 'Python', 'Java', 'C++'],
    icon: <CodeIcon size={24} className="text-purple-600" />
  }, {
    title: 'Tools & Others',
    skills: ['Git',  'AWS', 'Agile Methodologies'],
    icon: <BrainIcon size={24} className="text-red-600" />
  }];
  return <section id="skills" className="py-16 md:py-24 bg-white w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-2">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => <span key={skillIndex} className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm border border-gray-200">
                    {skill}
                  </span>)}
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};