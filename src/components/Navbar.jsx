import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import searchImg from '../assets/download.png';
import profileImg from '../assets/download (1).png';
import cartImg from '../assets/download (2).png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'BLACK FRIDAY', path: '#' },
    { name: 'COOKWARE', path: '/cookware' },
    { name: 'BAKEWARE', path: '/bakeware' },
    { name: 'APPLIANCES', path: '#' },
    { name: 'TABLEWARE', path: '#' },
    { name: 'KITCHEN TOOLS', path: '#' },
    { name: 'GIFTS', path: '#' },
  ];

  return (
    <header className="bg-white border-b border-[#f0ede5] sticky top-[36px] z-40">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            className="md:hidden" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Link to="/" className="text-2xl font-bold tracking-tighter text-[#4a4a4a]">Our Place</Link>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-[12px] font-bold tracking-widest text-[#4a4a4a]">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="hover:opacity-60 transition-opacity">
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 md:gap-6">
          <button className="hover:opacity-60"><img src={searchImg} alt="Search" className="h-[22px] w-auto" /></button>
          <Link to="/login" className="hover:opacity-60"><img src={profileImg} alt="Profile" className="h-[26px] w-auto" /></Link>
          <button className="hover:opacity-60 flex items-center gap-1 group">
            <img src={cartImg} alt="Cart" className="h-[22px] w-auto" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-[#f0ede5] py-4 px-4 flex flex-col gap-4 text-[13px] font-bold tracking-widest animate-in slide-in-from-left duration-300">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={() => setIsOpen(false)}
              className="py-2 border-b border-[#f0ede5]"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
