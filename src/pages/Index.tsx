
import React, { useRef, useEffect, useState } from 'react';
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
import SustainabilityChallenge from '../components/SustainabilityChallenge';
import { Skeleton } from '../components/ui/skeleton';

// Animation variants for section transitions
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5, // Faster transition
      ease: "easeOut"
    }
  }
};

const Index = () => {
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax effect for background
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  
  // Simulate content loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200); // Much faster loading
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center">
        <div className="container space-y-6 px-4">
          <div className="space-y-1.5">
            <Skeleton className="h-6 w-1/2 mx-auto" />
            <Skeleton className="h-3 w-1/3 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Skeleton className="h-3 w-2/3" />
              <Skeleton className="h-3 w-3/4" />
            </div>
            <Skeleton className="h-40 rounded-xl" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
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
              staggerChildren: 0.13
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
          <SustainabilityChallenge />
        </motion.div>
        
        <motion.div variants={sectionVariants} className="bg-green-50 py-8 text-center">
          <div className="container">
            <h2 className="text-xl font-bold text-green-800 mb-3">Ready to Connect?</h2>
            <p className="text-gray-700 mb-4">Check out my resume and get in touch with me.</p>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-green-600 text-white h-9 px-4 py-2 hover:bg-green-700 transition-colors">
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
