import React from 'react';
interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  skills?: string[];
}
const ExperienceItem = ({
  title,
  company,
  period,
  description,
  skills
}: ExperienceItemProps) => {
  return <div className="mb-12 relative">
      <div className="flex flex-col md:flex-row md:items-start gap-4">
        <div className="md:w-1/3">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-indigo-600 font-medium">{company}</p>
          <p className="text-gray-500">{period}</p>
        </div>
        <div className="md:w-2/3">
          <p className="text-gray-700 mb-4">{description}</p>
          {skills && skills.length > 0 && <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>)}
            </div>}
        </div>
      </div>
    </div>;
};
export default ExperienceItem;