
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import Contributions from '../components/Contributions';
import Resume from '../components/Resume';
import Footer from '../components/Footer';
import LeafCursor from '../components/LeafCursor';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <LeafCursor />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Achievements />
      <Contributions />
      <Resume />
      <Footer />
    </div>
  );
};

export default Index;
