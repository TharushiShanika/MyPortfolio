import { ProjectCard } from './ProjectCard';
export const Projects = () => {
  const projects = [{
    title: 'Project One',
    description: 'Integrated-Healthcare-System-for-Vulnerable-Populations-Leveraging-IOT-Machine-learning-',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
    technologies: ['React', 'FastAPI', 'Firebase'],
    githubUrl: 'https://github.com/IT21171406/Final_Reserach.git',
    liveUrl: 'https://drive.google.com/file/d/1IrEVEWdnaJRBrQ252Cf2fmqATWGMGPNQ/view?usp=sharing'
  }, {
    title: 'Project Two',
    description: ' A group project to develop an Education Management System',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80',
    technologies: ['React', 'Springboot', 'MongoDB'],
    githubUrl: 'https://github.com/IT21171406/ITP_PROJECT.git',
   
  }, 
  {
    title: 'Project Three',
    description: 'WordPress-based web application.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
    technologies: ['WordPress', 'Elementor'],
    liveUrl:'https://kantex.lk/',
   
  },{
    title: 'Project Four',
    description: ' Led the development of a mobile application using Firebase,Kotlin, and Android Studio.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    technologies: ['Firebase', 'Kotline', 'Android Studio'],
    githubUrl: 'https://github.com/IT21171406/MediDonate_MAD.git'
  },{
    title: 'Project Five',
    description: ' UI/UX design and front-end development Landing page of Shoe Store using HTML, CSS',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    technologies: ['Html', 'CSS'],
    githubUrl: 'https://github.com/TharushiShanika/WixWebsite.git',
        liveUrl:'https://tharushishanika.github.io/WixWebsite/',
   
  }];
  return <section id="projects" className="py-16 md:py-24 bg-gray-50 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <ProjectCard key={index} {...project} />)}
        </div>
      </div>
    </section>;
};
