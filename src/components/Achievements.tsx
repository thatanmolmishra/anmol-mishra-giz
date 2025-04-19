
import { motion } from 'framer-motion';
import { Trophy, Award, Medal } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const achievements = [
  {
    icon: <Trophy className="h-8 w-8 text-yellow-500" />,
    title: "First Achievement",
    description: "Description of your first major achievement",
    organization: "Tech Excellence Awards",
    logo: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=100&h=100",
    gallery: [
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&h=600"
    ]
  },
  {
    icon: <Award className="h-8 w-8 text-green-600" />,
    title: "Second Achievement",
    description: "Description of your second major achievement",
    organization: "Digital Innovation Hub",
    logo: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=100&h=100",
    gallery: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=600"
    ]
  },
  {
    icon: <Medal className="h-8 w-8 text-blue-500" />,
    title: "Third Achievement",
    description: "Description of your third major achievement",
    organization: "Global Tech Summit",
    logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=100&h=100",
    gallery: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=600"
    ]
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
            <Dialog key={achievement.title}>
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-green-100 cursor-pointer hover:shadow-md transition-shadow"
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
                      <h3 className="text-xl font-medium text-green-700">{achievement.title}</h3>
                      <p className="text-sm text-gray-600">{achievement.organization}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-center">{achievement.description}</p>
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
                      <p className="text-green-600">{achievement.organization}</p>
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
      </div>
    </section>
  );
};

export default Achievements;
