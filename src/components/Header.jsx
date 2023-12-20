// Import the useState and useEffect hooks
import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FaSun, FaMoon, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import Contact from './Contact'; // Adjust the path based on your project structure

function Header({ isDarkMode, toggleDarkMode }) {
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  // Use useEffect to get the height of the fixed header on mount
  useEffect(() => {
    const headerElement = document.getElementById('header');
    if (headerElement) {
      setHeaderHeight(headerElement.clientHeight);
    }
  }, []);

  const openContactModal = () => {
    setContactModalOpen(true);
  };

  const closeContactModal = () => {
    setContactModalOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
      smooth: true,
      duration: 500,
      offset: -headerHeight, // Adjust the offset based on your header height
    });
    closeMobileMenu(); // Close the mobile menu after clicking a link
  };

  const categories = [
    { id: 'main', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'about', label: 'About Me' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'feedback', label: 'Feedback' },
  ];

  return (
    <div id="header" className={`bg-white sticky top-0 px-0 ${isDarkMode ? 'dark-mode' : ''} w-full`}>
      <div className={`flex sm:flex-row items-center justify-between h-20 ${isDarkMode ? 'bg-gray-800' : ''} mx-auto`}>
        <div className="logo flex items-center">
          <a onClick={scrollToTop} className={`font-bold text-lg cursor-pointer text-purple-600 ${isDarkMode ? 'text-white' : ''} ml-4`}>
            CascadeWeb
          </a>
        </div>
        {/* Categories for larger screens */}
        <div className="categories hidden sm:flex gap-8 cursor-pointer">
          <ul className="flex space-x-8">
            {categories.map((category) => (
              <li key={category.id}>
                <Link to={category.id} smooth={true} duration={500} onClick={scrollToTop} offset={-headerHeight} className={`${isDarkMode ? 'text-white' : ''}`}>
                  {category.label}
                </Link>
              </li>
            ))}
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
          {/* Mobile menu toggle button */}
          <div className="sm:hidden">
            <button
              onClick={toggleMobileMenu}
              className={`text-purple-600 bg-transparent py-3 px-4 rounded-md border border-purple-600 hover:bg-purple-600 hover:text-white hover:border-transparent p-2 ${isDarkMode ? 'text-white' : ''}`}
            >
              {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 right-0 h-full bg-white w-full sm:w-64 overflow-hidden">
          <div className="flex flex-col items-center h-full p-4 pr-8">
            {/* Close button for the mobile menu */}
            <button
              onClick={closeMobileMenu}
              className="self-end mt-4 mr-4 text-purple-600 bg-transparent rounded-md hover:text-white hover:bg-purple-600 p-2"
            >
              <FaTimes size={20} />
            </button>
            <ul className="flex flex-col items-center gap-4 mt-8">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link to={category.id} smooth={true} duration={500} onClick={scrollToTop} offset={-headerHeight} className="text-purple-600">
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

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
