import { ExternalLinkIcon, GithubIcon } from "lucide-react";

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
  liveUrl,
}: ProjectCardProps) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">

      {/* Image */}
      <div className="h-56 overflow-hidden relative">
        <img
          src={image}
          alt={`${title} project thumbnail`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay Effect */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            {title}
          </h3>

          <p className="text-gray-600 mb-5 leading-relaxed text-sm">
            {description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full border border-blue-100 hover:bg-blue-600 hover:text-white transition duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-auto">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-700 transition duration-300"
            >
              <GithubIcon size={16} />
              Code
            </a>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-gray-900 text-gray-900 text-sm rounded-lg hover:bg-gray-900 hover:text-white transition duration-300"
            >
              <ExternalLinkIcon size={16} />
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};