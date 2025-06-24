import React from 'react';
import ExperienceItem from '../UI/ExperienceItem';
const Experience = () => {
  const experiences = [{
    title: 'Senior Position',
    company: 'Company Name',
    period: 'Jan 2021 - Present',
    description: 'Describe your responsibilities and achievements in this role. Focus on quantifiable results and the impact of your work. This should be detailed enough to give a clear picture of your role but concise enough to be readable.',
    skills: ['Skill 1', 'Skill 2', 'Skill 3']
  }, {
    title: 'Mid-level Position',
    company: 'Previous Company',
    period: 'Jun 2018 - Dec 2020',
    description: 'Describe your responsibilities and achievements in this role. What projects did you work on? What teams did you lead? What problems did you solve?',
    skills: ['Skill 2', 'Skill 4', 'Skill 5']
  }, {
    title: 'Junior Position',
    company: 'First Company',
    period: 'Sep 2016 - May 2018',
    description: 'Describe your responsibilities and achievements in this role. Even for junior positions, focus on how you contributed to the team and any skills you developed.',
    skills: ['Skill 3', 'Skill 6']
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