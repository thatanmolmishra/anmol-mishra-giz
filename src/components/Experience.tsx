
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Corp",
    period: "2021 - Present",
    description: "Led development of multiple web applications using React and Node.js",
    logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=100&h=100",
    achievements: [
      "Improved application performance by 40%",
      "Led a team of 5 developers",
      "Implemented CI/CD pipelines"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Innovation Labs",
    period: "2019 - 2021",
    description: "Developed and maintained various web applications",
    logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=100&h=100",
    achievements: [
      "Built RESTful APIs using Node.js",
      "Developed front-end using React and Redux",
      "Implemented authentication system"
    ]
  },
  {
    title: "Junior Developer",
    company: "StartUp Inc",
    period: "2018 - 2019",
    description: "Worked on frontend development using React",
    logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=100&h=100",
    achievements: [
      "Contributed to UI/UX improvements",
      "Fixed critical bugs in production",
      "Participated in code reviews"
    ]
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
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200 hidden md:block" />
          
          {/* Experience items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row mb-16 md:mb-24 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="flex-1 md:pr-8 md:pl-8">
                <div className="bg-white p-6 rounded-lg shadow-md border border-green-100 relative">
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute top-6 items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-green-300 z-10 shadow-sm left-full -ml-6 transform translate-x-0">
                    <Briefcase className="h-5 w-5 text-green-600" />
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`} 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-green-800">{exp.title}</h3>
                      <p className="text-green-700 font-medium">{exp.company}</p>
                      <p className="text-gray-600">{exp.period}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{exp.description}</p>
                  
                  <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Empty div for alternating layout */}
              <div className="flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
