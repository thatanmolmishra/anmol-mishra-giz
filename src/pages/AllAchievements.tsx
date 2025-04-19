
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Medal, Star, Clock, CheckCheck } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Header from '../components/Header';
import Footer from '../components/Footer';

// Extended achievements list
const allAchievements = [
  {
    icon: <Trophy className="h-8 w-8 text-yellow-500" />,
    title: "First Achievement",
    description: "Description of your first major achievement with extended details about the impact and significance of this recognition.",
    organization: "Tech Excellence Awards",
    date: "January 2022",
    logo: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=100&h=100",
    gallery: [
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&h=600"
    ]
  },
  {
    icon: <Award className="h-8 w-8 text-green-600" />,
    title: "Second Achievement",
    description: "Description of your second major achievement with additional context about how this accomplishment contributed to your professional development.",
    organization: "Digital Innovation Hub",
    date: "March 2022",
    logo: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=100&h=100",
    gallery: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=600"
    ]
  },
  {
    icon: <Medal className="h-8 w-8 text-blue-500" />,
    title: "Third Achievement",
    description: "Description of your third major achievement with detailed information about the challenge overcome and skills demonstrated.",
    organization: "Global Tech Summit",
    date: "June 2022",
    logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=100&h=100",
    gallery: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=600"
    ]
  },
  {
    icon: <Star className="h-8 w-8 text-purple-500" />,
    title: "Innovation Award",
    description: "Recognized for developing a groundbreaking solution that addressed significant industry challenges.",
    organization: "Industry Innovation Forum",
    date: "September 2022",
    logo: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=100&h=100",
    gallery: [
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&h=600"
    ]
  },
  {
    icon: <Clock className="h-8 w-8 text-amber-500" />,
    title: "Performance Excellence",
    description: "Achieved exceptional results by optimizing processes and implementing efficient workflows.",
    organization: "Performance Management Association",
    date: "November 2022",
    logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=100&h=100",
    gallery: [
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=600"
    ]
  },
  {
    icon: <CheckCheck className="h-8 w-8 text-teal-500" />,
    title: "Quality Assurance Award",
    description: "Recognized for maintaining exceptional standards in software development and testing procedures.",
    organization: "Quality Assurance Institute",
    date: "February 2023",
    logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=100&h=100",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=800&h=600"
    ]
  }
];

const AllAchievements = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      <section className="py-20 container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-green-800"
        >
          All Achievements
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allAchievements.map((achievement, index) => (
            <Dialog key={achievement.title}>
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md border border-green-100 hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="flex items-center justify-center mb-4">
                    {achievement.icon}
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src={achievement.logo}
                      alt={achievement.organization}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-green-700">{achievement.title}</h3>
                      <p className="text-sm text-gray-600">{achievement.organization}</p>
                      <p className="text-xs text-gray-500">{achievement.date}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{achievement.description}</p>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-3">
                    <img 
                      src={achievement.logo}
                      alt={achievement.organization}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-2xl font-semibold">{achievement.title}</h3>
                      <div className="flex items-center gap-2">
                        <p className="text-green-600">{achievement.organization}</p>
                        <span className="text-gray-400">•</span>
                        <p className="text-gray-500">{achievement.date}</p>
                      </div>
                    </div>
                  </DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                  <p className="text-gray-700 mb-6">{achievement.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {achievement.gallery.map((image, idx) => (
                      <img
                        key={idx}
                        src={image}
                        alt={`Achievement gallery ${idx + 1}`}
                        className="rounded-lg w-full h-48 object-cover"
                      />
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AllAchievements;
