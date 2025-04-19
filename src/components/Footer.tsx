
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Anmol Mishra</h3>
            <p className="text-green-200">
              Creating, contributing, and making a difference through technology.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Projects', 'Achievements', 'Contributions', 'Resume'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-green-200 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <Github />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <Twitter />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <Linkedin />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <Mail />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-green-700 text-center text-green-200">
          &copy; {new Date().getFullYear()} Anmol Mishra. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
