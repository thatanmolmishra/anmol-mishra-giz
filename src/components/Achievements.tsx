
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import sdg1 from "@/components/src/sdg1.png";

const achievements = [
  {
    image: sdg1,
    title: "Panelist — Chat with Purpose: Coding for SDGs",
    description: "I was featured as a youth panelist in *Chat with Purpose: Coding for SDGs*, a global session under the UN75 initiative organized by 1M1B in collaboration with AWS and SDG2030. The session garnered over 110K viewers and 15 million+ digital impressions. I shared insights on leveraging Scratch, ASCII, and unplugged coding to create tech-driven solutions aligned with the UN Sustainable Development Goals. The panel also included industry leaders like Sunil PP (Head of Education & NPOs, AWS India & South Asia) and Amit Nevatia (Education Program Lead, AWS).",
    organization: "Tech Excellence Awards",
    logo: "https://international-partnerships.ec.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2022-05/sdg-wheel-landscape-white-bg_en.png?itok=XaUGogrB",
    gallery: [
      "src/components/src/sdg1.png",
      "src/components/src/sdg2.png",
    ]
  },
  {
    image: "data:image/jpeg;base64,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",
    title: "Global 3rd Place Winner",
    description: "As part of the GRUEN initiative under the Erasmus+ Programme, I secured 3rd place globally among 100+ participants from Europe and Asia in a sustainability-focused design competition. I led research on urban environmental challenges in Indian cities and co-developed a scalable “green city” model, which was presented at the GRUEN eConference to an audience of 25+ policymakers, experts, and educators.",
    organization: "GRUEN : Green Urban Environments",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3VnLZeFYxhX6MU1O9aWa3_rN596vduEdpeQ&s",
    gallery: [
      "src/components/src/grun2.png",
      "src/components/src/grun1.png",
    ]
  },
  {
    image: "https://www.nct.ac.in/assets/images/nss/nss-3.jpg",
    title: "NSS Volunteer",
    description: "As a dedicated NSS Volunteer, I contributed to over 15 community service initiatives including health camps, sanitation drives, and awareness campaigns, positively impacting more than 500 local residents. I led a team of 10+ volunteers during a focused NSS Camp on health and hygiene, earning recognition for leadership and meaningful community engagement.",
    organization: "National Service Scheme",
    logo: "https://trinitycollegejal.com/wp-content/uploads/2020/10/nss-logo.png",
    gallery: [
      "src/components/src/nss1.jpg",
      "src/components/src/nss2.jpg",
    ]
  },
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
          className="text-3xl md:text-4xl font-bold text-center mb-6 text-green-800"
        >
          Achievements
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-gray-700 max-w-3xl mx-auto mb-12"
        >
          Highlights of my professional recognition and awards. Click on each card to see more details.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {achievements.map((achievement, index) => (
            <Dialog key={achievement.title}>
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-lg shadow-md border border-green-100 cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
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
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
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
        
        <div className="text-center">
          <Link to="/achievements">
            <Button variant="outline" className="bg-white hover:bg-green-50">
              View more Achievements
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
