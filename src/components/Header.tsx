
import React from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-sm border-b border-green-100">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-bold text-xl text-green-700">Anmol Mishra</Link>
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="text-green-800 hover:text-green-600 transition-colors">Home</Link>
          <Link to="/#about" className="text-green-800 hover:text-green-600 transition-colors">About</Link>
          <Link to="/#projects" className="text-green-800 hover:text-green-600 transition-colors">Projects</Link>
          <Link to="/achievements" className="text-green-800 hover:text-green-600 transition-colors">Achievements</Link>
          <Link to="/contact" className="text-green-800 hover:text-green-600 transition-colors">Contact</Link>
        </nav>
        <button className="md:hidden p-2">
          <Menu className="h-6 w-6 text-green-700" />
        </button>
      </div>
    </header>
  );
};

export default Header;
