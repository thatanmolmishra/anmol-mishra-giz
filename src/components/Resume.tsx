
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Resume = () => {
  const { toast } = useToast();

  const handleDownload = () => {
    // Create a dummy PDF download
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1xh734p7YU5fwd9q2uFD1Jn_0DWY3fOXX/view?usp=sharing';
    link.download = 'anmol_mishra_resume.pdf';
    
    toast({
      title: "Resume downloading",
      description: "Your resume will begin downloading momentarily.",
    });

    // Trigger click after a short delay to show the toast
    setTimeout(() => {
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1000);
  };

  return (
    <section id="resume" className="py-20 bg-green-50">
      <div className="container text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-green-800"
        >
          Resume
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md border border-green-100"
        >
          <h3 className="text-xl font-medium text-green-700 mb-4">My Experience & Education</h3>
          <p className="text-gray-600 mb-8">
            Download my resume to learn more about my work experience, education, skills, and qualifications.
          </p>
          <button 
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
          >
            <Download size={18} />
            Download Resume
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
