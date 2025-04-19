
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const contributions = [
  {
    project: "Project One",
    description: "Contributed to an open-source project",
    link: "#"
  },
  {
    project: "Project Two",
    description: "Made significant improvements to documentation",
    link: "#"
  },
  {
    project: "Project Three",
    description: "Fixed critical bugs in a popular library",
    link: "#"
  }
];

const Contributions = () => {
  return (
    <section id="contributions" className="py-20">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-800"
        >
          Contributions
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {contributions.map((contribution, index) => (
            <motion.div
              key={contribution.project}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex items-center mb-8 p-4 bg-white rounded-lg shadow-sm border border-green-100"
            >
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <Github className="h-6 w-6 text-green-700" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-green-700">{contribution.project}</h3>
                <p className="text-gray-600">{contribution.description}</p>
              </div>
              <a href={contribution.link} className="text-green-600 hover:text-green-800 transition">
                View
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contributions;
