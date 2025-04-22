import { motion } from 'framer-motion';
const About = () => {
  return <section id="about" className="bg-green-800 text-white py-12">
      <div className="container">
        <motion.h2 initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} viewport={{
        once: true
      }} className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} viewport={{
          once: true
        }} className="space-y-4">
            <p className="text-lg text-white">I’m Anmol Mishra, a driven technologist and aspiring product leader, currently pursuing dual degrees in Data Science from IIT Madras and Computer Science Engineering from LPU. </p>
            <p className="text-lg text-white"> I love working at the intersection of technology, leadership, and impact—crafting solutions, managing teams, and turning ideas into action. Whether it’s developing digital tools, exploring data for insights, or leading high-impact initiatives, I thrive in dynamic, mission-driven environments.</p>
            <p className="text-lg text-white">I believe in the power of collaboration, empathy, and innovation to solve real-world challenges. With a strong foundation in both technical and strategic thinking, I'm committed to creating meaningful change through thoughtful execution and a relentless drive to make a difference.</p>
            
            <div className="grid grid-cols-2 gap-4">
              {["Product Thinking & Execution", "Data-Driven Decision Making", "Cross-Functional Leadership", "Tech for Impact"].map(skill => <div key={skill} className="bg-white p-4 rounded-lg shadow-sm border border-green-100">
                  <h3 className="font-medium text-green-700">{skill}</h3>
                </div>)}
            </div>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} viewport={{
          once: true
        }} className="flex items-center justify-center">
            <div className="w-full max-w-md">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl shadow-xl p-8 h-full">
                <div className="space-y-6">
                  <motion.div initial={{
                  scale: 0.9,
                  opacity: 0
                }} whileInView={{
                  scale: 1,
                  opacity: 1
                }} transition={{
                  duration: 0.7
                }} viewport={{
                  once: true
                }} className="text-center">
                    <span className="text-9xl">
                    <img src="src/components/src/Anmol_formal.png" alt="Green Leaf" className="w-full h-auto" /></span>

                    <h3 className="text-xl font-bold text-green-800 mt-4">Anmol Mishra</h3>
                  </motion.div>
                  <motion.p initial={{
                  y: 20,
                  opacity: 0
                }} whileInView={{
                  y: 0,
                  opacity: 1
                }} transition={{
                  duration: 0.7,
                  delay: 0.2
                }} viewport={{
                  once: true
                }} className="text-gray-700 text-center">
                    I'm committed to environmental consciousness and sustainable development practices in all my projects and professional work.
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default About;