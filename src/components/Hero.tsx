
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col md:flex-row items-center justify-center py-12">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-green-800">
            Hi, I'm <span className="text-green-600">Anmol Mishra</span>
          </h1>
          <p className="text-lg text-gray-700">
            I'm passionate about creating, contributing, and making a difference through technology.
          </p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex gap-4"
          >
            <a 
              href="#projects" 
              className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all hover:shadow-lg"
            >
              View Projects
            </a>
            <a 
              href="#about" 
              className="px-6 py-3 border border-green-600 text-green-600 rounded-full hover:bg-green-50 transition-all hover:shadow-lg"
            >
              About Me
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center"
        >
          <motion.div 
            className="bg-green-50 rounded-full w-64 h-64 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              initial={{ rotateZ: 0 }}
              animate={{ rotateZ: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-green-100 to-green-300 opacity-50" />
              <div className="text-6xl">🍃</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
