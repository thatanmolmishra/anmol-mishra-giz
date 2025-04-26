
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";

interface ProjectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    tech: string[];
    links: {
      github: string;
      live: string;
    };
    organization: string;
    fullDescription: string;
    images: string[];
  };
}

const ProjectDialog = ({ isOpen, onClose, project }: ProjectDialogProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-green-800">{project.title}</DialogTitle>
          <DialogDescription className="text-gray-600">
            {project.organization}
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4 relative aspect-video bg-gray-100 rounded-md overflow-hidden">
          <img 
            src={project.images[currentImageIndex]}
            alt={`${project.title} screenshot ${currentImageIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-300"
          />
          
          {project.images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
              >
                <ChevronLeft />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
              >
                <ChevronRight />
              </Button>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                {project.images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === currentImageIndex ? "bg-green-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Description</h3>
          <p className="text-gray-700">{project.fullDescription}</p>
        </div>
        
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-6 flex gap-4 justify-end">
          {project.links.github && (
            <Button variant="outline" className="flex items-center gap-2" asChild>
              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                <Github size={18} />
                GitHub
              </a>
            </Button>
          )}
          {project.links.live && (
            <Button className="flex items-center gap-2 bg-green-700 hover:bg-green-800" asChild>
              <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={18} />
                View Live
              </a>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;
