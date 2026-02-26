import React from "react";
import { Code, Server, Database, Wrench } from "lucide-react";

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 w-full">
      <div className="container mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Frontend */}
          <SkillCard
            icon={<Code className="text-blue-600" />}
            title="Frontend Development"
            skills={["HTML", "CSS", "JavaScript", "React", "TypeScript"]}
          />

          {/* Backend */}
          <SkillCard
            icon={<Server className="text-green-600" />}
            title="Backend Development"
            skills={["Node.js", "Express", "Python", "FastAPI"]}
          />

          {/* Database */}
          <SkillCard
            icon={<Database className="text-yellow-600" />}
            title="Database"
            skills={["MongoDB", "MySQL", "Firebase"]}
          />

          {/* Programming */}
          <SkillCard
            icon={<Code className="text-purple-600" />}
            title="Programming Languages"
            skills={["JavaScript", "Python", "Java", "C++"]}
          />

          {/* Tools */}
          <SkillCard
            icon={<Wrench className="text-red-600" />}
            title="Tools & Others"
            skills={["Git", "AWS", "Agile Methodologies", "VS Code"]}
          />

        </div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, skills }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">

      <div className="flex items-center gap-3 mb-6">
        <div className="bg-gray-100 p-3 rounded-lg">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-800">
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-1.5 text-sm bg-blue-50 text-blue-600 rounded-full border border-blue-100 hover:bg-blue-600 hover:text-white transition duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};