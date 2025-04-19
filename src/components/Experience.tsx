
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Corp",
    period: "2021 - Present",
    description: "Led development of multiple web applications using React and Node.js"
  },
  {
    title: "Full Stack Developer",
    company: "Innovation Labs",
    period: "2019 - 2021",
    description: "Developed and maintained various web applications"
  },
  {
    title: "Junior Developer",
    company: "StartUp Inc",
    period: "2018 - 2019",
    description: "Worked on frontend development using React"
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
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-green-600" />
                <h3 className="text-xl font-semibold text-green-800">{exp.title}</h3>
              </div>
              <p className="text-green-700 font-medium mb-2">{exp.company}</p>
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
