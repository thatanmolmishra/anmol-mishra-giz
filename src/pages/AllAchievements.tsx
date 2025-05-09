
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Medal, Star, Clock, CheckCheck } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Import images
import sdg1 from "../components/src/sdg1.png";
import sdg2 from "../components/src/sdg2.png";
import grun1 from "../components/src/grun1.png";
import grun2 from "../components/src/grun2.png";
import nss1 from "../components/src/nss1.jpg";
import nss2 from "../components/src/nss2.jpg";
import igc1 from "../components/src/igc1.JPG";
import igc2jpg from "../components/src/igc2.jpg";
import igc2png from "../components/src/igc2.PNG";
import igc5 from "../components/src/igc5.jpg";
import red1 from "../components/src/red1.jpg";
import red2 from "../components/src/red2.jpg";
import red3 from "../components/src/red3.jpg";
import red4 from "../components/src/red4.jpg";
import ozone1 from "../components/src/ozone1.jpg";
import ozone2 from "../components/src/ozone2.jpg";
import ozone3 from "../components/src/ozone3.jpg";
import ozone4 from "../components/src/ozone4.jpg";

// Extended achievements list
const allAchievements = [
  {
    image: sdg1,
    title: "Panelist — Chat with Purpose: Coding for SDGs",
    description: "I was featured as a youth panelist in *Chat with Purpose: Coding for SDGs*, a global session under the UN75 initiative organized by 1M1B in collaboration with AWS and SDG2030. The session garnered over 110K viewers and 15 million+ digital impressions. I shared insights on leveraging Scratch, ASCII, and unplugged coding to create tech-driven solutions aligned with the UN Sustainable Development Goals. The panel also included industry leaders like Sunil PP (Head of Education & NPOs, AWS India & South Asia) and Amit Nevatia (Education Program Lead, AWS).",
    organization: "Tech Excellence Awards",
    date: "",
    logo: "https://international-partnerships.ec.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2022-05/sdg-wheel-landscape-white-bg_en.png?itok=XaUGogrB",
    gallery: [
      sdg1,
      sdg2,
    ]
  },
  {
    image: "https://i.ytimg.com/vi/p8iuc0-oPdc/sddefault.jpg",
    title: "Global 3rd Place Winner",
    description: "As part of the GRUEN initiative under the Erasmus+ Programme, I secured 3rd place globally among 100+ participants from Europe and Asia in a sustainability-focused design competition. I led research on urban environmental challenges in Indian cities and co-developed a scalable \"green city\" model, which was presented at the GRUEN eConference to an audience of 25+ policymakers, experts, and educators.",
    organization: "GRUEN : Green Urban Environments",
    date: "",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3VnLZeFYxhX6MU1O9aWa3_rN596vduEdpeQ&s",
    gallery: [
      grun2,
      grun1,
    ]
  },
  {
    image: "https://www.nct.ac.in/assets/images/nss/nss-3.jpg",
    title: "NSS Volunteer",
    description: "As a dedicated NSS Volunteer, I contributed to over 15 community service initiatives including health camps, sanitation drives, and awareness campaigns, positively impacting more than 500 local residents. I led a team of 10+ volunteers during a focused NSS Camp on health and hygiene, earning recognition for leadership and meaningful community engagement.",
    organization: "National Service Scheme",
    date: "",
    logo: "https://trinitycollegejal.com/wp-content/uploads/2020/10/nss-logo.png",
    gallery: [
      nss1,
      nss2,
    ]
  },
  {
    image: igc5,
    title: "Operations & Execution Manager",
    description: "As the Operations & Execution Manager for the International Global Conference (IGC) MUN India, I led a 40-member team, overseeing logistics, data systems, and coordination for over 150 international delegates. I worked closely with 15 departments to ensure seamless execution while embedding global policy themes and fostering meaningful discussions around SDGs, climate diplomacy, and inclusive development—ensuring each committee reflected the spirit of sustainability and international cooperation.",
    organization: "International Global Conference (IGC)",
    date: "",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnjnoTZKVjUK6mlcqrCrnJwP-QFzny-rovyg&s",
    gallery: [
      igc1,
      igc2jpg,
      igc5,
      igc2png,
    ]
  },
  {
    image: red3,
    title: "Special Guest – Independence Day at Red Fort (NITI Aayog, Govt. of India)",
    description: "Invited as a Special Guest by NITI Aayog, Government of India, for the Independence Day celebrations at the iconic Red Fort, I had the extraordinary honor of witnessing the Prime Minister's address up close and shaking hands with him—a truly unforgettable moment. This opportunity came as recognition for my project shortlisted under the Atal Innovation Mission (AIM) Marathon initiative. Being part of such a historic national celebration filled me with immense pride and deepened my resolve to contribute meaningfully to India's growth and progress.",
    organization: "Government of India",
    date: "",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg_iJUajtQMR6w_jl_rhLtkF3W6OdBHPitAA&s",
    gallery: [
      red1,
      red2,
      red3,
      red4,
    ]
  },
  {
    image: ozone1,
    title: "1st Place – Ozone Oasis: Safeguarding Tomorrow | Sustainability Innovation Challenge",
    description: "I was honored to secure 1st position in the university-wide \"Ozone Oasis: Safeguarding Tomorrow\" event—an initiative focused on promoting environmental sustainability through innovation. Recognized by Prof. Dr. Adarsh Pal Vig (Chairman, Punjab Pollution Control Board) and Ashok Kumar Mittal (Member of Parliament & Chancellor, LPU), this achievement reaffirmed my commitment to environmental responsibility and positive impact.",
    organization: "",
    date: "",
    logo: "",
    gallery: [
      ozone1,
      ozone2,
      ozone3,
      ozone4,
    ]
  },
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
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-4 mt-4">
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
                  <p className="text-gray-600 line-clamp-3">{achievement.description}</p>
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
      </section>
      <Footer />
    </div>
  );
};

export default AllAchievements;
