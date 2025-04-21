
import { motion } from 'framer-motion';
import EarthModel from './EarthModel';

const About = () => {
  return (
    <section id="about" className="py-20 bg-green-50">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-800"
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-lg text-gray-700">
              I'm Anmol Mishra, a passionate developer and creator focused on building innovative solutions. My journey in technology has been driven by curiosity and a desire to make a positive impact.
            </p>
            <p className="text-lg text-gray-700">
              With expertise in various technologies, I enjoy tackling complex problems and turning ideas into reality. I believe in continuous learning and improvement.
            </p>
            <p className="text-lg text-gray-700">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the community.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {["Problem Solving", "Web Development", "UI/UX Design", "Open Source"].map((skill) => (
                <div key={skill} className="bg-white p-4 rounded-lg shadow-sm border border-green-100">
                  <h3 className="font-medium text-green-700">{skill}</h3>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center justify-center relative"
          >
            <div className="w-full max-w-md">
              <div className="relative aspect-square">
                <div className="absolute inset-0 z-0 flex items-center justify-center">
                  <div className="w-full h-full">
                    <EarthModel />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
