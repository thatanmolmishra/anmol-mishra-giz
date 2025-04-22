
import { motion } from 'framer-motion';

const WhyGIZ = () => {
  return (
    <section id="why-giz" className="py-12 sm:py-16 bg-green-800 overflow-hidden">
      <div className="container max-w-xl md:max-w-2xl">
        <motion.h2 
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-center mb-7 text-white"
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
                <h3 className="text-base font-semibold text-green-700 mb-1">Global Impact Through Sustainable Development</h3>
                <p className="text-gray-700 text-sm">
                GIZ's commitment to addressing global challenges such as climate change, digital transformation, and inclusive development deeply resonates with my values. I want to be part of an organization that uses innovation and cooperation to drive sustainable, scalable solutions across borders..
                </p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-md shadow border border-green-100 flex gap-3 items-start hover:shadow-md transition-all duration-150">
              <div className="bg-green-100 w-9 h-9 flex items-center justify-center rounded-full text-green-700 font-bold shrink-0 text-lg">💻</div>
              <div>
                <h3 className="text-base font-semibold text-green-700 mb-1">Technical Expertise</h3>
                <p className="text-gray-700 text-sm">
                GIZ’s collaborative and international environment offers a unique opportunity to learn from experts across diverse fields. I’m excited about the chance to engage in real-world projects, develop practical skills, and expand my perspective through hands-on experience in development cooperation.</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-md shadow border border-green-100 flex gap-3 items-start hover:shadow-md transition-all duration-150">
              <div className="bg-green-100 w-9 h-9 flex items-center justify-center rounded-full text-green-700 font-bold shrink-0 text-lg">🌐</div>
              <div>
                <h3 className="text-base font-semibold text-green-700 mb-1">Aligning My Skills with Purpose</h3>
                <p className="text-gray-700 text-sm">
                With a background in data science, product management, and technology-driven solutions, I see a perfect match between my skills and GIZ’s mission. I want to contribute meaningfully to impactful projects that create long-term change, especially in areas like digital education, sustainability, and innovation for the public good. </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyGIZ;
