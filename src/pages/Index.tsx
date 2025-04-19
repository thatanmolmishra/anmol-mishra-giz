
import React from 'react';
import { motion } from 'framer-motion';

import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import Experience from '../components/Experience';
import Resume from '../components/Resume';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Achievements />
      <Resume />
      <Footer />
    </div>
  );
};

export default Index;
