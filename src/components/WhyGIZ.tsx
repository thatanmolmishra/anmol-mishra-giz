
import { motion } from 'framer-motion';

const WhyGIZ = () => {
  return (
    <section id="why-giz" className="py-12 sm:py-16 bg-green-50 overflow-hidden">
      <div className="container max-w-xl md:max-w-2xl">
        <motion.h2 
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-center mb-7 text-green-800"
        >
          Why I Want to Join GIZ
        </motion.h2>
        <div className="grid grid-cols-1 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <div className="bg-white p-4 rounded-md shadow border border-green-100 flex gap-3 items-start hover:shadow-md transition-all duration-150">
              <div className="bg-green-100 w-9 h-9 flex items-center justify-center rounded-full text-green-700 font-bold shrink-0 text-lg">🌍</div>
              <div>
                <h3 className="text-base font-semibold text-green-700 mb-1">Aligned Values & Mission</h3>
                <p className="text-gray-700 text-sm">
                  I am passionate about sustainable development and believe in GIZ's mission to shape a future worth living around the world.
                </p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-md shadow border border-green-100 flex gap-3 items-start hover:shadow-md transition-all duration-150">
              <div className="bg-green-100 w-9 h-9 flex items-center justify-center rounded-full text-green-700 font-bold shrink-0 text-lg">💻</div>
              <div>
                <h3 className="text-base font-semibold text-green-700 mb-1">Technical Expertise</h3>
                <p className="text-gray-700 text-sm">
                  My experience in building scalable web applications aligns perfectly with GIZ's digital transformation initiatives.
                </p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-md shadow border border-green-100 flex gap-3 items-start hover:shadow-md transition-all duration-150">
              <div className="bg-green-100 w-9 h-9 flex items-center justify-center rounded-full text-green-700 font-bold shrink-0 text-lg">🌐</div>
              <div>
                <h3 className="text-base font-semibold text-green-700 mb-1">Global Impact</h3>
                <p className="text-gray-700 text-sm">
                  I am excited about the opportunity to contribute to projects that have meaningful global impact.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyGIZ;
