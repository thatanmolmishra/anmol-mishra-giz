
import { motion } from 'framer-motion';
import { Earth } from 'lucide-react';
import ThreeScene from './ThreeScene';

const WhyGIZ = () => {
  return (
    <section id="why-giz" className="py-20 bg-green-50 overflow-hidden">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-800"
        >
          Why I Want to Join GIZ
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white p-6 rounded-lg shadow-md border border-green-100">
              <h3 className="text-xl font-semibold text-green-700 mb-4">Aligned Values & Mission</h3>
              <p className="text-gray-700">
                I am passionate about sustainable development and believe in GIZ's mission to shape a future worth living around the world.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-green-100">
              <h3 className="text-xl font-semibold text-green-700 mb-4">Technical Expertise</h3>
              <p className="text-gray-700">
                My experience in building scalable web applications aligns perfectly with GIZ's digital transformation initiatives.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-green-100">
              <h3 className="text-xl font-semibold text-green-700 mb-4">Global Impact</h3>
              <p className="text-gray-700">
                I am excited about the opportunity to contribute to projects that have meaningful global impact.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="h-[400px] relative"
          >
            <ThreeScene />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyGIZ;
