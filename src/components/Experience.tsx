
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Corp",
    period: "2021 - Present",
    description: "Led development of multiple web applications using React and Node.js",
    logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=100&h=100"
  },
  {
    title: "Full Stack Developer",
    company: "Innovation Labs",
    period: "2019 - 2021",
    description: "Developed and maintained various web applications",
    logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=100&h=100"
  },
  {
    title: "Junior Developer",
    company: "StartUp Inc",
    period: "2018 - 2019",
    description: "Worked on frontend development using React",
    logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=100&h=100"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-800"
        >
          Experience
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md border border-green-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={exp.logo} 
                  alt={`${exp.company} logo`} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-green-800">{exp.title}</h3>
                  <p className="text-green-700 font-medium">{exp.company}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{exp.period}</p>
              <p className="text-gray-700">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
