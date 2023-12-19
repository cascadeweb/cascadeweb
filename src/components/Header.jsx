import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FaSun, FaMoon, FaEnvelope } from 'react-icons/fa';
import Contact from './Contact';

function Header({ isDarkMode, toggleDarkMode }) {
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  const openContactModal = () => {
    setContactModalOpen(true);
  };

  const closeContactModal = () => {
    setContactModalOpen(false);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className={`bg-white sticky top-0 px-0 ${isDarkMode ? 'dark-mode' : ''} w-full`}>
      <div className={`flex items-center justify-between h-20 ${isDarkMode ? 'bg-gray-800' : ''} mx-auto`}>
        <div className="logo flex items-center">
          <a onClick={scrollToTop} className={`font-bold text-lg cursor-pointer text-purple-600 ${isDarkMode ? 'text-white' : ''} ml-4`}>
            Cascade
          </a>
        </div>
        <div className="categories flex-grow flex items-center justify-center">
          <ul className="flex gap-8 cursor-pointer">
            <li><Link to="main" smooth={true} duration={500} className={`${isDarkMode ? 'text-white' : ''}`}>Home</Link></li>
            <li><Link to="skills" smooth={true} duration={500} className={`${isDarkMode ? 'text-white' : ''}`}>Skills</Link></li>
            <li><Link to="about" smooth={true} duration={500} className={`${isDarkMode ? 'text-white' : ''}`}>About Me</Link></li>
            <li><Link to="portfolio" smooth={true} duration={500} className={`${isDarkMode ? 'text-white' : ''}`}>Portfolio</Link></li>
            <li><Link to="feedback" smooth={true} duration={500} className={`${isDarkMode ? 'text-white' : ''}`}>Feedback</Link></li>
          </ul>
        </div>
        <div className="button-and-title flex items-center">
          <div className="mr-4">
            <button
              onClick={toggleDarkMode}
              className="text-purple-600 bg-transparent rounded-md hover:text-white hover:bg-purple-600 p-2"
            >
              {isDarkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
            </button>
          </div>
          <div className="mr-4">
            <button
              onClick={openContactModal}
              className={`text-purple-600 bg-transparent py-3 px-4 rounded-md border border-purple-600 hover:bg-purple-600 hover:text-white hover:border-transparent p-2 ${isDarkMode ? 'text-white' : ''}`}
            >
              <FaEnvelope size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-75">
          <Contact isDarkMode={isDarkMode} onClose={closeContactModal} />
        </div>
      )}
    </div>
  );
}

export default Header;
