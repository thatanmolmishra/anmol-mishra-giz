
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, ExternalLink } from 'lucide-react';
import ProjectDialog from './ProjectDialog';

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with React, Three.js, and Tailwind CSS",
    tech: ["React", "Three.js", "Tailwind CSS", "Framer Motion"],
    links: {
      github: "#",
      live: "#"
    },
    organization: "Personal Project",
    fullDescription: "This is a comprehensive portfolio website showcasing my skills, experience, and projects. It features interactive 3D elements built with Three.js, smooth animations powered by Framer Motion, and a responsive design implemented with Tailwind CSS. The site includes sections for about me, projects, experience, achievements, and contact information.",
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d", 
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    ]
  },
  {
    title: "E-commerce Platform",
    description: "A full-featured online store with product management and payment processing",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Express"],
    links: {
      github: "#",
      live: "#"
    },
    organization: "Tech Corp",
    fullDescription: "Designed and developed a complete e-commerce solution with user authentication, product catalog, shopping cart functionality, and secure payment processing. The platform includes an admin dashboard for managing products, orders, and customer data. Built with a React frontend, Node.js backend, and MongoDB for data storage, with Stripe integration for handling payments.",
    images: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6", 
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      "https://images.unsplash.com/photo-1518770660439-4636190af475"
    ]
  },
  {
    title: "Task Management App",
    description: "A collaborative task manager with real-time updates and team features",
    tech: ["TypeScript", "Next.js", "Firebase", "Tailwind CSS"],
    links: {
      github: "#",
      live: "#"
    },
    organization: "Innovation Labs",
    fullDescription: "Created a productivity application that allows teams to manage tasks, track progress, and collaborate in real-time. Features include customizable workspaces, task assignments, due dates, labels, attachments, and activity logs. The app is built with Next.js and TypeScript for type safety, Firebase for real-time database and authentication, and Tailwind CSS for a clean, responsive UI.",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", 
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    ]
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-800"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              <Card className="h-full border-green-100 hover:border-green-300 transition-all">
                <div className="h-40 overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-green-700">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-4">
                  <a href={project.links.github} className="text-gray-600 hover:text-green-700 transition" onClick={(e) => e.stopPropagation()}>
                    <Github size={20} />
                  </a>
                  <a href={project.links.live} className="text-gray-600 hover:text-green-700 transition" onClick={(e) => e.stopPropagation()}>
                    <ExternalLink size={20} />
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      
      {selectedProject && (
        <ProjectDialog
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </section>
  );
};

export default Projects;
