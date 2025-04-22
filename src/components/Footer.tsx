import { GithubIcon, TwitterIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

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
              <li><Link to="/" className="text-green-200 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/#about" className="text-green-200 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/#projects" className="text-green-200 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/achievements" className="text-green-200 hover:text-white transition-colors">Achievements</Link></li>
              <li><Link to="/contact" className="text-green-200 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/thatanmolmishra" className="text-green-200 hover:text-white transition-colors">
                <GithubIcon />
              </a>
              <a href="https://x.com/thatanmolmishra?t=uquVu6Tiu-r-uxC3orkH5g&s=08" className="text-green-200 hover:text-white transition-colors">
                <TwitterIcon />
              </a>
              <a href="https://www.linkedin.com/in/that-anmol-mishra/" className="text-green-200 hover:text-white transition-colors">
                <LinkedinIcon />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <MailIcon />
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
