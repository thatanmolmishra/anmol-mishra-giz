
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with React, Three.js, and Tailwind CSS",
    tech: ["React", "Three.js", "Tailwind CSS"],
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    title: "Project Two",
    description: "Description for your second project goes here",
    tech: ["React", "Node.js", "MongoDB"],
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    title: "Project Three",
    description: "Description for your third project goes here",
    tech: ["TypeScript", "Next.js", "Firebase"],
    links: {
      github: "#",
      live: "#"
    }
  },
];

const Projects = () => {
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
            >
              <Card className="h-full border-green-100 hover:border-green-300 transition-all">
                <CardHeader>
                  <CardTitle className="text-green-700">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-4">
                  <a href={project.links.github} className="text-gray-600 hover:text-green-700 transition">
                    <Github size={20} />
                  </a>
                  <a href={project.links.live} className="text-gray-600 hover:text-green-700 transition">
                    <ExternalLink size={20} />
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
