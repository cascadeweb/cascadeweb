import { FaDirections, FaPaintBrush, FaCode, FaMobileAlt } from 'react-icons/fa';

function Skills({ isDarkMode }) {
  return (
    <div className={`skills py-16 px-8 ${isDarkMode ? 'dark-mode bg-gray-800' : ''}`}>
      <h3 className={`text-6xl font-bold mb-12 ${isDarkMode ? 'text-white' : ''}`}>My Expertise</h3>
      <div className="skill-items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Skill Box 1 */}
        <div className="item bg-blue-100 rounded-lg p-8 border-b-4 border-transparent cursor-pointer transition-all duration-300 hover:border-purple-600">
          <div className="icon flex items-center justify-center bg-deebee w-12 h-12 rounded-lg mb-8 shadow-md">
            <FaDirections className={`text-4xl ${isDarkMode ? 'text-teal-500' : 'text-teal-500'}`} />
          </div>
          <h4 className={`text-2xl font-bold mb-4`}>Strategy & Direction</h4>
          <p className={`text-gray-700`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
        </div>

        {/* Skill Box 2 */}
        <div className="item bg-blue-100 rounded-lg p-8 border-b-4 border-transparent cursor-pointer transition-all duration-300 hover:border-purple-600">
          <div className="icon flex items-center justify-center bg-deebee w-12 h-12 rounded-lg mb-8 shadow-md">
            <FaPaintBrush className={`text-4xl ${isDarkMode ? 'text-blue-500' : 'text-blue-500'}`} />
          </div>
          <h4 className={`text-2xl font-bold mb-4`}>Creative Design</h4>
          <p className={`text-gray-700`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
        </div>

        {/* Skill Box 3 */}
        <div className="item bg-blue-100 rounded-lg p-8 border-b-4 border-transparent cursor-pointer transition-all duration-300 hover:border-purple-600">
          <div className="icon flex items-center justify-center bg-deebee w-12 h-12 rounded-lg mb-8 shadow-md">
            <FaCode className={`text-4xl ${isDarkMode ? 'text-purple-500' : 'text-purple-500'}`} />
          </div>
          <h4 className={`text-2xl font-bold mb-4`}>Web Development</h4>
          <p className={`text-gray-700`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
        </div>

        {/* Skill Box 4 */}
        <div className="item bg-blue-100 rounded-lg p-8 border-b-4 border-transparent cursor-pointer transition-all duration-300 hover:border-purple-600">
          <div className="icon flex items-center justify-center bg-deebee w-12 h-12 rounded-lg mb-8 shadow-md">
            <FaMobileAlt className={`text-4xl ${isDarkMode ? 'text-orange-500' : 'text-orange-500'}`} />
          </div>
          <h4 className={`text-2xl font-bold mb-4`}>Mobile App Design</h4>
          <p className={`text-gray-700`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
