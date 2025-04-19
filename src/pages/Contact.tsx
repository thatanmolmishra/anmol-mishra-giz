
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Resume from '../components/Resume';
import ContactForm from '../components/ContactForm';

const Contact = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      <div className="pt-20">
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
          <motion.div variants={sectionVariants}>
            <Resume />
          </motion.div>
          
          <motion.div variants={sectionVariants}>
            <ContactForm />
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
