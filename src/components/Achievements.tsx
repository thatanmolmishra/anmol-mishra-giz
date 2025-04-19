
import { motion } from 'framer-motion';
import { Trophy, Award, Medal } from 'lucide-react';

const achievements = [
  {
    icon: <Trophy className="h-8 w-8 text-yellow-500" />,
    title: "First Achievement",
    description: "Description of your first major achievement"
  },
  {
    icon: <Award className="h-8 w-8 text-green-600" />,
    title: "Second Achievement",
    description: "Description of your second major achievement"
  },
  {
    icon: <Medal className="h-8 w-8 text-blue-500" />,
    title: "Third Achievement",
    description: "Description of your third major achievement"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-green-50">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-800"
        >
          Achievements
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm border border-green-100"
            >
              <div className="flex items-center justify-center mb-4">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-medium text-green-700 text-center mb-2">{achievement.title}</h3>
              <p className="text-gray-600 text-center">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
