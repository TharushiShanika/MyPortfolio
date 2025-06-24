import React from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
}
const ProjectCard = ({
  title,
  description,
  image,
  tags,
  liveLink,
  githubLink
}: ProjectCardProps) => {
  return <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => <span key={index} className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded-md text-xs">
              {tag}
            </span>)}
        </div>
        <div className="flex gap-3">
          {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors">
              <GithubIcon size={16} />
              <span className="text-sm">Code</span>
            </a>}
          {liveLink && <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors">
              <ExternalLinkIcon size={16} />
              <span className="text-sm">Live Demo</span>
            </a>}
        </div>
      </div>
    </div>;
};
export default ProjectCard;