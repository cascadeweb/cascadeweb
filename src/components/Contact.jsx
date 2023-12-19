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

  const containerClassName = `bg-${isDarkMode ? 'gray-800' : 'white'} p-8 rounded-md w-full md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto flex transition-transform duration-500 ease-in-out transform ${isVisible ? 'scale-100' : 'scale-0'}`;
  const imageContainerClassName = 'w-full md:w-1/3 pr-8 flex items-center justify-center';
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
      <div className="w-full md:w-2/3">
        <div className="flex justify-end">
          <button onClick={handleClose} className={closeButtonClassName}>
            <AiOutlineClose className="text-4xl" />
          </button>
        </div>

        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <form>
          {/* Add your form fields here */}
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
