import React from 'react';

function About({ isDarkMode }) {
  return (
    <div className={`about py-16 px-8 ${isDarkMode ? 'dark-mode bg-gray-800' : ''}`}>
      <h3 className={`text-6xl font-bold mb-12 ${isDarkMode ? 'text-white' : ''}`}>About Me</h3>
      <div className="about-content flex gap-8">
        <div className="left flex-grow">
          <p className="text-xl mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
          <p className="text-xl mb-8">
            Proin elit arcu, rutrum commodo semper sit amet, varius in odio. Integer ac urna vitae diam auctor viverra in vitae nunc. In at diam ac mauris eleifend aliquet. Phasellus sagittis, urna sed bibendum placerat, odio magna congue lectus, at fermentum sapien sapien vel justo.
          </p>
        </div>
        <div className="right w-96">
          <img
            src="https://via.placeholder.com/150"
            alt="About Me"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
