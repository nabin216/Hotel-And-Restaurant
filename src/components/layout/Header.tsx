import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiMoon, FiSun, FiGlobe } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('en');
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle language
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'bn' : 'en');
    // In a real app, you would use i18n to change the language
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-gray-900 shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl font-serif font-bold text-primary-700 dark:text-primary-400">
                UTTARA
                <span className="text-accent-500"> HOTEL & RESTAURANT</span>
              </h1>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLinks />
            
            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              {/* Dark Mode Toggle */}
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? <FiSun className="text-accent-400" /> : <FiMoon className="text-primary-600" />}
              </button>
              
              {/* Language Toggle */}
              <button 
                onClick={toggleLanguage}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Change language"
              >
                <FiGlobe className="text-primary-600 dark:text-primary-400" />
                <span className="ml-1 text-xs font-medium">{language.toUpperCase()}</span>
              </button>
              
              {/* Book Now Button */}
              <Link 
                to="/reservations" 
                className="btn btn-primary"
              >
                Book Now
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white dark:bg-gray-900"
      >
        <div className="container-custom py-4 flex flex-col space-y-4">
          <NavLinks mobile setIsOpen={setIsOpen} />
          
          <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleTheme}
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isDarkMode ? (
                <>
                  <FiSun className="text-accent-400" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <FiMoon className="text-primary-600" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
            
            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <FiGlobe className="text-primary-600 dark:text-primary-400" />
              <span>{language === 'en' ? 'Bengali' : 'English'}</span>
            </button>
          </div>
          
          {/* Book Now Button */}
          <Link 
            to="/reservations" 
            className="btn btn-primary text-center"
            onClick={() => setIsOpen(false)}
          >
            Book Now
          </Link>
        </div>
      </motion.div>
    </header>
  );
};

// Navigation Links Component
interface NavLinksProps {
  mobile?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
}

const NavLinks = ({ mobile = false, setIsOpen = () => {} }: NavLinksProps) => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Accommodations', path: '/accommodations' },
    { name: 'Dining', path: '/dining' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`font-medium transition-colors ${
            mobile
              ? 'block py-2 hover:text-primary-600 dark:hover:text-primary-400'
              : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
          }`}
          onClick={() => mobile && setIsOpen(false)}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default Header; 