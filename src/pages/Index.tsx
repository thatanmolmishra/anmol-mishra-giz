
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import Experience from '../components/Experience';
import WhyGIZ from '../components/WhyGIZ';
import Footer from '../components/Footer';
import SustainabilityGame from '../components/SustainabilityGame';

// Animation variants for section transitions
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const Index = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax effect for background
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  return (
    <motion.div 
      ref={containerRef}
      className="min-h-screen bg-white overflow-hidden relative"
    >
      {/* Fixed background with parallax effect */}
      <motion.div 
        style={{ y: backgroundY }} 
        className="fixed inset-0 -z-10 bg-gradient-to-b from-green-50 to-white"
      />
      
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        <Header />
        
        <motion.div variants={sectionVariants}>
          <Hero />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <About />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <Experience />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <Projects />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <Achievements />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <WhyGIZ />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <SustainabilityGame />
        </motion.div>
        
        <motion.div variants={sectionVariants} className="bg-green-50 py-12 text-center">
          <div className="container">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Ready to Connect?</h2>
            <p className="text-gray-700 mb-6">Check out my resume and get in touch with me.</p>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-green-600 text-white h-10 px-4 py-2 hover:bg-green-700 transition-colors">
              Contact & Resume
            </Link>
          </div>
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <Footer />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Index;
