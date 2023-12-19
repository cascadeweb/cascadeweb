// Contact.jsx
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import logo from '/vite.svg';
import { AiOutlineClose } from 'react-icons/ai';

function Contact({ isDarkMode, onClose }) {
  const [isVisible, setIsVisible] = useState(false);

  // Use useEffect to handle the initial appearance with a delay
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Adjust the delay as needed

    return () => clearTimeout(timeoutId);
  }, []);

  const containerClassName = `bg-${isDarkMode ? 'gray-800 text-white' : 'white text-gray-800'} p-8 rounded-md w-full md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto flex transition-transform duration-500 ease-in-out transform ${isVisible ? 'scale-100' : 'scale-0'}`;
  const imageContainerClassName = 'w-1/2 md:w-1/3 pr-8 flex items-center justify-center';
  const closeButtonClassName = 'text-gray-500 hover:text-gray-700';
  const formClassName = 'bg-purple-600 text-white py-3 px-6 rounded-md hover:bg-purple-700 focus:outline-none hover:text-white';

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  return (
    <div className={containerClassName}>
      {/* Left Side with Image */}
      <div className={imageContainerClassName}>
        <img
          src={logo} // Replace with your image URL
          alt="Contact Image"
          className="w-full h-auto max-w-md rounded-md"
        />
      </div>

      {/* Right Side with Form */}
      <div className="w-1/2 md:w-2/3">
        <div className="flex justify-end">
          <button onClick={handleClose} className={closeButtonClassName}>
            <AiOutlineClose size={24} />
          </button>
        </div>
        <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : ''}`}>Contact Me</h2>

        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className={`mt-1 p-3 w-full border border-gray-300 rounded-md ${isDarkMode ? 'text-black' : ''}`}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className={`mt-1 p-3 w-full border border-gray-300 rounded-md ${isDarkMode ? 'text-black' : ''}`}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your Message"
              className={`mt-1 p-3 w-full border border-gray-300 rounded-md ${isDarkMode ? 'text-black' : ''}`}
            ></textarea>
          </div>
          <button type="submit" className={formClassName}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

Contact.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Contact;
