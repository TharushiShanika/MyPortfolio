import React from 'react';
import ExperienceItem from '../UI/ExperienceItem';
const Experience = () => {
  const experiences = [{
    title: 'Software Engineering Intern',
    company: 'EWIS Career Training Centre',
    period: '(02/2024 -09/2024',
    description: ' Developed and customized WordPress websites,integrated WooCommerce and LearnPress, and optimized sitep erformance for various clients',
    skills: ['Skill 1', 'Skill 2', 'Skill 3']
  
  }];
  return <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Professional Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => <ExperienceItem key={index} title={exp.title} company={exp.company} period={exp.period} description={exp.description} skills={exp.skills} />)}
        </div>
      </div>
    </section>;
};
export default Experience;