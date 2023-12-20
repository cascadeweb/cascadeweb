import React from 'react';
import { FaDirections, FaPaintBrush, FaCode, FaMobileAlt } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

function Skills({ isDarkMode }) {
  const boxBackgroundColor = isDarkMode ? 'bg-gray-700' : 'bg-blue-100';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-700';

  return (
    <div id="skills-section" className={`skills py-16 px-8 ${isDarkMode ? 'dark-mode bg-gray-800' : ''}`}>
      <h3 className={`text-6xl font-bold mb-12 ${isDarkMode ? 'text-white' : ''}`}>My Expertise</h3>
      <div className="skill-items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Skill Box 1 */}
        <div className={`item rounded-lg p-8 border-b-4 border-transparent cursor-pointer transition-all duration-300 hover:border-purple-600 ${boxBackgroundColor}`}>
          <div className="icon flex items-center justify-center bg-deebee w-12 h-12 rounded-lg mb-8 shadow-md">
            <FaDirections className={`text-4xl ${isDarkMode ? 'text-teal-500' : 'text-teal-500'}`} />
          </div>
          <h4 className={`text-2xl font-bold mb-4 ${textColor}`}>Strategy & Direction</h4>
          <p className={`${textColor}`}>
            With a strong foundation in strategic planning and direction, I specialize in guiding projects with a clear vision for success. My expertise ensures that projects align with overarching business goals, providing a roadmap for achievement.
          </p>
        </div>

        {/* Skill Box 2 */}
        <div className={`item rounded-lg p-8 border-b-4 border-transparent cursor-pointer transition-all duration-300 hover:border-purple-600 ${boxBackgroundColor}`}>
          <div className="icon flex items-center justify-center bg-deebee w-12 h-12 rounded-lg mb-8 shadow-md">
            <FaPaintBrush className={`text-4xl ${isDarkMode ? 'text-blue-500' : 'text-blue-500'}`} />
          </div>
          <h4 className={`text-2xl font-bold mb-4 ${textColor}`}>Creative Design</h4>
          <p className={`${textColor}`}>
            I am passionate about creative design, dedicated to delivering visually stunning and engaging experiences. My design approach combines aesthetics with functionality, ensuring that each project stands out with a unique and compelling visual identity.
          </p>
        </div>

        {/* Skill Box 3 */}
        <div className={`item rounded-lg p-8 border-b-4 border-transparent cursor-pointer transition-all duration-300 hover:border-purple-600 ${boxBackgroundColor}`}>
          <div className="icon flex items-center justify-center bg-deebee w-12 h-12 rounded-lg mb-8 shadow-md">
            <FaCode className={`text-4xl ${isDarkMode ? 'text-purple-500' : 'text-purple-500'}`} />
          </div>
          <h4 className={`text-2xl font-bold mb-4 ${textColor}`}>Web Development</h4>
          <p className={`${textColor}`}>
            In the realm of web development, my skills shine in creating robust and responsive websites. I leverage the latest technologies and best practices to build seamless online experiences, ensuring that each website is a powerful tool for the digital landscape.
          </p>
        </div>

        {/* Skill Box 4 */}
        <div className={`item rounded-lg p-8 border-b-4 border-transparent cursor-pointer transition-all duration-300 hover:border-purple-600 ${boxBackgroundColor}`}>
          <div className="icon flex items-center justify-center bg-deebee w-12 h-12 rounded-lg mb-8 shadow-md">
            <FaMobileAlt className={`text-4xl ${isDarkMode ? 'text-orange-500' : 'text-orange-500'}`} />
          </div>
          <h4 className={`text-2xl font-bold mb-4 ${textColor}`}>Mobile App Design</h4>
          <p className={`${textColor}`}>
            Specializing in mobile app design, I focus on creating user-friendly and visually appealing mobile interfaces. My designs prioritize usability and aesthetics, ensuring that each mobile app delivers an exceptional user experience on every device.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
