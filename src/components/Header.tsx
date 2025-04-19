
import React from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-sm border-b border-green-100">
      <div className="container flex h-16 items-center justify-between">
        <div className="font-bold text-xl text-green-700">Anmol Mishra</div>
        <nav className="hidden md:flex gap-6">
          {['About', 'Projects', 'Achievements', 'Contributions', 'Resume'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-green-800 hover:text-green-600 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
        <button className="md:hidden p-2">
          <Menu className="h-6 w-6 text-green-700" />
        </button>
      </div>
    </header>
  );
};

export default Header;
