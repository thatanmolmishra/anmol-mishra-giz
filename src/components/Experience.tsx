
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
    <section id="experience" className="py-14 bg-gradient-to-br from-green-50 to-green-100 relative">
      <div className="container !max-w-2xl md:!max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-center mb-8 text-green-800"
        >
          Experience
        </motion.h2>
        {/* Timeline central line & circles */}
        <div className="relative flex flex-col items-center pb-4">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-green-200 h-full rounded-full z-0" style={{ top: 40, bottom: 0 }} />
          <div className="space-y-12 w-full">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.07 }}
                viewport={{ once: true }}
                className="relative z-10 group"
              >
                <div className={`flex flex-col md:flex-row ${idx%2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center md:items-stretch`}>
                  {/* Timeline dot with icon */}
                  <div className="flex-shrink-0 w-12 flex flex-col items-center">
                    <div className="w-9 h-9 rounded-full bg-white shadow ring-2 ring-green-400 flex items-center justify-center mb-3 relative z-20 group-hover:scale-105 transition-transform duration-200">
                      <img src={exp.logo} alt={`${exp.company} logo`} className="w-7 h-7 rounded-full object-cover"/>
                    </div>
                    {idx !== experiences.length-1 && (
                      <div className="flex-1 w-0.5 bg-green-200 transition-all duration-300" style={{ minHeight: 20, margin: "0 auto" }} />
                    )}
                  </div>
                  <div className="flex-1 bg-white rounded-lg shadow border border-green-100 px-5 py-4 md:px-7 md:py-5 mx-2 md:mx-6 relative hover:shadow-lg transition-shadow duration-200 max-w-full md:max-w-2xl">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-green-900 mb-0.5">{exp.title}</h3>
                        <span className="text-green-700 font-semibold">{exp.company}</span>
                        <span className="mx-2 text-gray-400">/</span>
                        <span className="text-xs text-gray-600">{exp.period}</span>
                      </div>
                      <div className="mt-1 md:mt-0 flex gap-2 text-green-500 items-center">
                        <Briefcase className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="text-gray-700 mb-1 text-sm">{exp.description}</div>
                    <ul className="list-disc pl-5 text-gray-600 text-xs space-y-0.5">
                      {exp.achievements.map((ach, ai) => (
                        <li key={ai}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
