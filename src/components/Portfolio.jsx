import React from 'react';
import programtools from '/programtools.png';

function Portfolio({ isDarkMode }) {
  return (
    <div className={`portfolio ${isDarkMode ? 'bg-gray-800' : 'bg-white'} py-16 px-8`}>
      <div className="header flex items-center justify-between mb-12">
        <div className="info">
          <h3 className={`text-6xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>My Portfolio</h3>
        </div>
      </div>
      <div className="portfo-items grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Portfolio Item 1 */}
        <div className={`item rounded-lg overflow-hidden border-b-4 border-transparent cursor-pointer transition-all duration-300 hover:border-purple-600 ${isDarkMode ? 'bg-gray-700' : 'bg-blue-200'}`}>
          <img src={programtools} alt="Project 1" className="w-full h-56 object-cover object-top rounded-t-lg" />
          <div className={`info p-8 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            <h4 className="text-2xl font-bold mb-4">Programming</h4>
            <p className={`text-gray-700 ${isDarkMode ? 'text-white' : ''}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            <a href="#" className={`text-purple-600 mt-2 flex items-center underline ${isDarkMode ? 'text-white' : 'text-black'}`}>
              View in browser <i className={`bx bx-link-external text-lg ml-1 underline ${isDarkMode ? 'text-white' : 'text-black'}`}></i>
            </a>
          </div>
        </div>

        {/* Portfolio Item 2 */}
        <div className={`item rounded-lg overflow-hidden border-b-4 border-transparent cursor-pointer transition-all duration-300 hover:border-purple-600 ${isDarkMode ? 'bg-gray-700' : 'bg-blue-200'}`}>
          <img src={programtools} alt="Project 2" className="w-full h-56 object-cover object-top rounded-t-lg" />
          <div className={`info p-8 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            <h4 className="text-2xl font-bold mb-4">Programming</h4>
            <p className={`text-gray-700 ${isDarkMode ? 'text-white' : ''}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            <a href="#" className={`text-purple-600 mt-2 flex items-center underline ${isDarkMode ? 'text-white' : 'text-black'}`}>
              View in browser <i className={`bx bx-link-external text-lg ml-1 underline ${isDarkMode ? 'text-white' : 'text-black'}`}></i>
            </a>
          </div>
        </div>

        {/* Portfolio Item 3 */}
        <div className={`item rounded-lg overflow-hidden border-b-4 border-transparent cursor-pointer transition-all duration-300 hover:border-purple-600 ${isDarkMode ? 'bg-gray-700' : 'bg-blue-200'}`}>
          <img src={programtools} alt="Project 3" className="w-full h-56 object-cover object-top rounded-t-lg" />
          <div className={`info p-8 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            <h4 className="text-2xl font-bold mb-4">Programming</h4>
            <p className={`text-gray-700 ${isDarkMode ? 'text-white' : ''}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            <a href="#" className={`text-purple-600 mt-2 flex items-center underline ${isDarkMode ? 'text-white' : 'text-black'}`}>
              View in browser <i className={`bx bx-link-external text-lg ml-1 underline ${isDarkMode ? 'text-white' : 'text-black'}`}></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
