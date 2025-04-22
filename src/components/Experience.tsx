
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: "Associate Product Manager",
    company: "Mind Inc",
    period: "May 2024 – Aug 2024",
    description: "",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQGrb5vzN7hchw/company-logo_200_200/company-logo_200_200/0/1670897624888/mindincsoftware_logo?e=2147483647&v=beta&t=TUGBqhy3KSsfUpV_NfUhonX4cVVA9PxMPgbrJEVefpw",
    achievements: [
      "Conducted 10+ SWOT analyses and market studies, uncovering key growth opportunities that shaped Go-to-Market strategies for F&B products.",
      "Designed and developed the CozyPM website front-end using React, reducing page load time by 45% and improving Core Web Vitals.",
      "Analyzed customer data and market trends using SQL and Excel, driving data-backed decisions that improved product feasibility assessments by 60%.",
      ]
  },
  {
    title: "Student Intern",
    company: "IBM",
    period: "Oct 2021 – Nov 2021",
    description: "",
    logo: "https://s3-symbol-logo.tradingview.com/international-bus-mach--600.png",
    achievements:  [
      "Spearheaded Paylo app wireframing, driving a 20% reduction in user expenses.",
      "Engineered Notification Alerts for real-time budget updates and financial insights and orchestrated a user-friendly interface, yielding a 15% increase in user engagement",
      "Completed end-to-end project lifecycle within two weeks, showcasing rapid problem-solving skills and presented the wireframe to a global panel, including IBM VP and CBSE secretaries",
      ]
  },
  {
    title: "Global 3rd Place Winner",
    company: "GRUEN: Green Urban Environments",
    period: "Mar 2021 – Nov 2021",
    description: "",
    logo: "https://i.ytimg.com/vi/p8iuc0-oPdc/maxresdefault.jpg",
    achievements: [
      " Secured 3rd place globally among 100+ participants from Europe and Asia in this Erasmus+ Programme of the European Union-funded sustainability design competition.",
      "Led research on sustainability challenges in Indian cities and co-designed a “green city” model, presented at the GRUEN eConference to 25+ policymakers, experts, and educators.",
      
      ]
  },
  {
    title: "Student Apprentice",
    company: "Intel",
    period: " Dec 2020 – Jan 2021",
    description: "",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIwWDmuwTxQJzzzDGP5hcK6m8iU-TPJJoLhg&s",
    achievements: [
      "Excelled in a two-month bootcamp as part of Intel’s AI for Youth’ program, specializing in data science, computer vision, and NLP.",
      "Engineered ”Granger,” a multilingual chatbot, achieving a 30% efficiency boost in data extraction through Beautiful Soup Library.",
      "Applied AI skills to contribute to impactful social solutions, aligning with the program’s goal of nurturing youth expertise in cutting-edge technology",
      ]
  },
  {
    title: "Operations & Execution Manager",
    company: "International Global Conference (IGC) MUN India",
    period: " September 2023 – December 2024",
    description: "",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnjnoTZKVjUK6mlcqrCrnJwP-QFzny-rovyg&s",
    achievements: [
      "Directed a 40-member team, managing logistics, data systems, and coordination for 150+ delegates.",
      "Collaborated with 15 departments to ensure smooth operations, while embedding sustainability and global policy themes across all committees",
      "Fostered meaningful dialogue on SDGs, climate diplomacy, and inclusive development, ensuring delegates upheld the spirit of sustainability and international cooperation.",
      ]
  },
  {
    title: "Panelist — Chat with Purpose: Coding for SDGs",
    company: "UN75: 2020 and Beyond — 1M1B x AWS — SDG2030",
    period: " October 2021",
    description: "",
    logo: "https://www.edf-feph.org/content/uploads/2019/09/SDG-logo.png",
    achievements: [
      "Featured as a youth panelist in a global session on coding for UN Sustainable Development Goals, with 110K+ viewers and 15 Million+ digital impressions.",
      "Discussed tech-driven social impact using Scratch, ASCII, and unplugged coding for SDG-aligned initiatives.",
      "Shared the panel with Sunil PP (Head of Education & NPOs, AWS India & South Asia) and Amit Nevatia (Education Program Lead, AWS).",
      ]
  },
  {
    title: "NSS Volunteer",
    company: "NSS : National Service Scheme",
    period: "April 2020 – July 2023",
    description: "",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsXKkz-j7h6bQteBoqkdAgEpoFMKvjW2Yrpw&s",
    achievements: [
      "Contributed to 15+ community service projects, including health camps and sanitation drives, benefiting over 500 local residents.",
      "Led a team of 10+ volunteers during an NSS Camp focused on health and hygiene, earning recognition for consistent community impact",
      ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-14 bg-gradient-to-br from-green-90 to-green-100 relative">
      <div className="container !max-w-2xl md:!max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-center mb-8 text-green-800"
        >
          Experience
        </motion.h2>
        {/* Timeline central line & circles */}
        <div className="relative flex flex-col items-center pb-4">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-green-200 h-full rounded-full z-0" style={{ top: 40, bottom: 0 }} />
          <div className="space-y-12 w-full">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.07 }}
                viewport={{ once: true }}
                className="relative z-10 group"
              >
                <div className={`flex flex-col md:flex-row ${idx%2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center md:items-stretch`}>
                  {/* Timeline dot with icon */}
                  <div className="flex-shrink-0 w-12 flex flex-col items-center">
                    <div className="w-9 h-9 rounded-full bg-white shadow ring-2 ring-green-400 flex items-center justify-center mb-3 relative z-20 group-hover:scale-105 transition-transform duration-200">
                      <img src={exp.logo} alt={`${exp.company} logo`} className="w-7 h-7 rounded-full object-cover"/>
                    </div>
                    {idx !== experiences.length-1 && (
                      <div className="flex-1 w-0.5 bg-green-200 transition-all duration-300" style={{ minHeight: 20, margin: "0 auto" }} />
                    )}
                  </div>
                  <div className="flex-1 bg-white rounded-lg shadow border border-green-100 px-5 py-4 md:px-7 md:py-5 mx-2 md:mx-6 relative hover:shadow-lg transition-shadow duration-200 max-w-full md:max-w-2xl">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-green-900 mb-0.5">{exp.title}</h3>
                        <span className="text-green-700 font-semibold">{exp.company}</span>
                        <span className="mx-2 text-gray-400">/</span>
                        <span className="text-xs text-gray-600">{exp.period}</span>
                      </div>
                      <div className="mt-1 md:mt-0 flex gap-2 text-green-500 items-center">
                        <Briefcase className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="text-gray-700 mb-1 text-sm">{exp.description}</div>
                    <ul className="list-disc pl-5 text-gray-600 text-xs space-y-0.5">
                      {exp.achievements.map((ach, ai) => (
                        <li key={ai}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
