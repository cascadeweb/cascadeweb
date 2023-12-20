import React from 'react';

function Home({ isDarkMode }) {
  const sectionBackgroundColor = isDarkMode ? 'bg-gray-700' : 'bg-blue-200';
  const textColor = isDarkMode ? 'text-white' : 'text-black';
  const buttonBackgroundColor = isDarkMode ? 'bg-purple-600' : 'bg-purple-600';  // Adjust as needed

  return (
    <div className={`main px-4 py-16 sm:px-8 flex flex-col sm:flex-row items-center justify-between ${sectionBackgroundColor}`}>
      <div className={`left mb-12 sm:mb-0 ${textColor}`}>
        <h5 className="text-2xl sm:text-3xl font-bold mb-2">Hey, I am Cas</h5>
        <h3 className="text-3xl sm:text-5xl font-bold mb-6 whitespace-normal sm:whitespace-nowrap">
          I create <span className="text-purple-600">product design</span> and brand experience
        </h3>
        <p className={`text-lg sm:text-xl mb-8 ${textColor}`}>
          Cascade portfolio. View all of my projects and my skills.
        </p>
        <button className={`py-3 sm:py-4 px-4 sm:px-6 rounded-md cursor-pointer ${buttonBackgroundColor} ${textColor}`}>
          Get started
        </button>
      </div>
      {/* Conditionally render the logo only on larger screens */}
      <div className="right hidden sm:block w-full max-w-6xl mx-auto mt-4">
        <img
          src="/intro.png"  // Make sure the path matches the actual location and filename
          alt="Header"
          className="w-full h-auto rounded-lg object-cover"
          style={{ maxWidth: '100%' }}
        />
      </div>
    </div>
  );
}

export default Home;
