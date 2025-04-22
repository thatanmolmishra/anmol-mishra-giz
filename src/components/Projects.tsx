
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, ExternalLink } from 'lucide-react';
import ProjectDialog from './ProjectDialog';

const projects = [
  {
    title: "MediVista",
    description: "MediVista is an AI-powered healthcare solution designed to predict diseases based on user-provided symptoms. It leverages machine learning models to achieve high accuracy in diagnosis, offering users a reliable preliminary health assessment tool. To ensure greater accessibility, especially for visually impaired or non-technical users, the system includes a voice-enabled interface. Additionally, it incorporates natural language processing and cross-validation techniques to improve prediction accuracy and ensure consistent, generalizable performance across diverse symptom inputs. The platform encourages early detection and awareness by providing immediate feedback and possible diagnoses. MediVista empowers users to make informed decisions about their health and seek timely medical attention.",
    tech: ["Python", "NLP", "CSV", "pandas","pyttsx3","scikit-learn"],
    links: {
      github: "#",
      live: "#"
    },
    organization: "Personal Project",
    fullDescription: "This is a comprehensive portfolio website showcasing my skills, experience, and projects. It features interactive 3D elements built with Three.js, smooth animations powered by Framer Motion, and a responsive design implemented with Tailwind CSS. The site includes sections for about me, projects, experience, achievements, and contact information.",
    images: [
      "/src/components/src/MediVista.jpg"
    ]
  },
  {
    title: "Satva",
    description: "Satva – A Step to Sustainability is an innovative project focused on promoting agricultural sustainability through eco-friendly and data-driven practices. The project aims to optimize resource usage—such as water, soil, and energy—while enhancing crop productivity and reducing the environmental footprint. By integrating organic farming methods, climate-resilient crop strategies, and technology-based solutions, Satva empowers farmers to adopt sustainable techniques that ensure long-term viability. The initiative also emphasizes community engagement and awareness, aligning with the goals of SDG 2 (Zero Hunger) and SDG 13 (Climate Action), making it a significant step toward a greener and more sustainable future in agriculture.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Express"],
    links: {
      github: "#",
      live: "#"
    },
    organization: "Satva",
    fullDescription: "Satva – A Step to Sustainability is an innovative project focused on promoting agricultural sustainability through eco-friendly and data-driven practices. The project aims to optimize resource usage—such as water, soil, and energy—while enhancing crop productivity and reducing the environmental footprint. By integrating organic farming methods, climate-resilient crop strategies, and technology-based solutions, Satva empowers farmers to adopt sustainable techniques that ensure long-term viability. The initiative also emphasizes community engagement and awareness, aligning with the goals of SDG 2 (Zero Hunger) and SDG 13 (Climate Action), making it a significant step toward a greener and more sustainable future in agriculture.",
    images: [
      "/src/components/src/Satva.jpg"
    ]
  },
  {
    title: "YogaFlix",
    description: "Yogaflix is an AI-powered virtual yoga instructor developed during the COVID-19 pandemic to help individuals practice yoga safely and effectively from home. Built using Python, TensorFlow, and OpenCV for real-time pose detection and correction, along with a React.js frontend for a seamless user experience, the platform offers personalized yoga routines tailored to user skill levels. Yogaflix also features voice-guided meditation, breathing exercises, and a unique streak-based engagement system inspired by Snapchat to motivate users and build consistent wellness habits. Designed to be accessible across devices, the platform aimed to bridge the gap between technology and well-being, making yoga more inclusive, interactive, and engaging during times of physical isolation.",
    tech: ["Python", "react.js", "OpenCV", "TensorFlow"],
    links: {
      github: "#",
      live: "#"
    },
    organization: "Innovation Labs",
    fullDescription: "Created a productivity application that allows teams to manage tasks, track progress, and collaborate in real-time. Features include customizable workspaces, task assignments, due dates, labels, attachments, and activity logs. The app is built with Next.js and TypeScript for type safety, Firebase for real-time database and authentication, and Tailwind CSS for a clean, responsive UI.",
    images: [
      "/src/components/src/Yogaflix.jpg"
    ]
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="bg-green-800 text-white py-12">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
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
