import React from 'react';
import ProjectCard from '../UI/ProjectCard';
const Projects = () => {
  const projects = [{
    title: 'Project One',
    description: 'A brief description of the project, its purpose, and your role in it.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/yourusername/project-one'
  }, {
    title: 'Project Two',
    description: 'A brief description of the project, highlighting the technologies used and challenges overcome.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    tags: ['Next.js', 'Node.js', 'MongoDB'],
    liveLink: 'https://example2.com',
    githubLink: 'https://github.com/yourusername/project-two'
  }, {
    title: 'Project Three',
    description: 'A brief description of what this project does and what problem it solves.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    tags: ['React Native', 'Firebase', 'Redux'],
    liveLink: 'https://example3.com',
    githubLink: 'https://github.com/yourusername/project-three'
  }, {
    title: 'Project Four',
    description: 'A brief description of what makes this project special or challenging.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80',
    tags: ['Vue.js', 'GraphQL', 'AWS'],
    liveLink: 'https://example4.com',
    githubLink: 'https://github.com/yourusername/project-four'
  }];
  return <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <ProjectCard key={index} title={project.title} description={project.description} image={project.image} tags={project.tags} liveLink={project.liveLink} githubLink={project.githubLink} />)}
        </div>
      </div>
    </section>;
};
export default Projects;