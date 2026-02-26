import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Healthcare Monitoring System",
      description:
        "A secure and intelligent healthcare platform integrating IoT devices, AI-powered symptom analysis, and real-time monitoring for vulnerable populations. Implemented role-based access control and smart alert filtering.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1172&q=80",
      technologies: ["React", "FastAPI", "Firebase", "Machine Learning","IOT"],
      githubUrl: "https://github.com/IT21171406/Final_Reserach.git",
      liveUrl:
        "https://drive.google.com/file/d/1IrEVEWdnaJRBrQ252Cf2fmqATWGMGPNQ/view?usp=sharing",
    },
    {
      title: "Education Management System",
      description:
        "Collaboratively developed a full-stack education management system with role-based dashboards for students and administrators, improving academic workflow efficiency.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1115&q=80",
      technologies: ["React", "Spring Boot", "MongoDB"],
      githubUrl: "https://github.com/IT21171406/ITP_PROJECT.git",
    },
    {
      title: "Corporate WordPress Web Application",
      description:
        "Designed and deployed a professional WordPress-based business website optimized for performance, SEO, and responsive user experience.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1172&q=80",
      technologies: ["WordPress", "Elementor"],
      liveUrl: "https://kantex.lk/",
    },
    {
      title: "MediDonate Mobile Application",
      description:
        "Led the development of an Android mobile application using Kotlin and Firebase for managing medical donations and user authentication.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1170&q=80",
      technologies: ["Firebase", "Kotlin", "Android Studio"],
      githubUrl: "https://github.com/IT21171406/MediDonate_MAD.git",
    },
    {
      title: "Layali E-Commerce Website",
      description:
        "Developed and customized a WordPress-based e-commerce website with responsive design and optimized product presentation.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1172&q=80",
      technologies: ["WordPress", "Elementor"],
      liveUrl: "https://layali.lk/",
    },
    {
      title: "Shoe Store Landing Page",
      description:
        "Designed and implemented a responsive UI/UX landing page using HTML and CSS, focusing on clean layout and modern styling.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1170&q=80",
      technologies: ["HTML", "CSS"],
      githubUrl: "https://github.com/TharushiShanika/WixWebsite.git",
      liveUrl: "https://tharushishanika.github.io/WixWebsite/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 w-full">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};