import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  isDark, 
  setIsDark, 
  isMenuOpen, 
  setIsMenuOpen,
  currentPage,
  setCurrentPage 
}) => {
  const menuItems = ['Models', 'Racing', 'Services', 'About', 'Contact'];

  const handleNavigation = (item: string) => {
    setCurrentPage(item.toLowerCase());
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => handleNavigation('home')}
            className="text-2xl font-bold cursor-pointer"
          >
            KTM
          </motion.h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleNavigation(item)}
                className={`cursor-pointer hover:text-orange-500 transition-colors ${
                  currentPage === item.toLowerCase() ? 'text-orange-500' : ''
                }`}
              >
                {item}
              </motion.li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isMenuOpen ? 'auto' : 0 }}
        className="md:hidden overflow-hidden"
      >
        <ul className="px-4 py-2">
          {menuItems.map((item) => (
            <li
              key={item}
              onClick={() => handleNavigation(item)}
              className={`py-3 border-b border-gray-200 dark:border-gray-700 cursor-pointer hover:text-orange-500 transition-colors ${
                currentPage === item.toLowerCase() ? 'text-orange-500' : ''
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;