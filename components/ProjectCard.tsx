import React from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}
export const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl
}: ProjectCardProps) => {
  return <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={`${title} project thumbnail`} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                {tech}
              </span>)}
          </div>
        </div>
        <div className="flex gap-4">
          {githubUrl && <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors">
              <GithubIcon size={18} />
              <span>Code</span>
            </a>}
          {liveUrl && <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors">
              <ExternalLinkIcon size={18} />
              <span>Live Demo</span>
            </a>}
        </div>
      </div>
    </div>;
};