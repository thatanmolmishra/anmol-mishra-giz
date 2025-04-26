
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import sdg1 from "@/components/src/sdg1.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    description: "As part of the GRUEN initiative under the Erasmus+ Programme, I secured 3rd place globally among 100+ participants from Europe and Asia in a sustainability-focused design competition. I led research on urban environmental challenges in Indian cities and co-developed a scalable \"green city\" model, which was presented at the GRUEN eConference to an audience of 25+ policymakers, experts, and educators.",
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
                    <p className="text-gray-600 line-clamp-3">{achievement.description}</p>
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
                  
                  <Carousel className="w-full">
                    <CarouselContent>
                      {achievement.gallery.map((image, idx) => (
                        <CarouselItem key={idx}>
                          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                            <img
                              key={idx}
                              src={image}
                              alt={`Achievement gallery ${idx + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    {achievement.gallery.length > 1 && (
                      <>
                        <CarouselPrevious className="left-2" />
                        <CarouselNext className="right-2" />
                      </>
                    )}
                  </Carousel>
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
