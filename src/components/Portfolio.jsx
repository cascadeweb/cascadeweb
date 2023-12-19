import programtools from '/programtools.png';

function Portfolio({ isDarkMode }) {
  return (
    <div className={`portfolio ${isDarkMode ? 'bg-blue-200' : 'bg-blue-200'} py-16 px-8`}>
      <div className="header flex items-center justify-between mb-12">
        <div className="info">
          
          <h3 className={`text-6xl font-bold ${isDarkMode ? 'text-black' : 'text-black'}`}>My Portfolio</h3>
        </div>
      </div>
      <div className="portfo-items flex gap-8">
        <div className={`item w-1/3 rounded-lg overflow-hidden border-b-4 border-transparent cursor-pointer transition-all duration-300 hover:border-purple-600 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <img src={programtools} alt="Project 1" className="w-full h-56 object-cover object-top rounded-t-lg" />
          <div className={`info p-8 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            <h4 className="text-2xl font-bold mb-4">Code Source Finder</h4>
            <p className={`text-gray-700 ${isDarkMode ? 'text-white' : ''}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            <a href="#" className={`text-purple-600 mt-2 flex items-center underline ${isDarkMode ? 'text-white' : 'text-black'}`}>
              View in browser <i className={`bx bx-link-external text-lg ml-1 underline ${isDarkMode ? 'text-white' : 'text-black'}`}></i>
            </a>
          </div>
        </div>

        <div className={`item w-1/3 rounded-lg overflow-hidden border-b-4 border-transparent cursor-pointer transition-all duration-300 hover:border-purple-600 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <img src={programtools} alt="Project 2" className="w-full h-56 object-cover object-top rounded-t-lg" />
          <div className={`info p-8 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            <h4 className="text-2xl font-bold mb-4">Simple Blog Page</h4>
            <p className={`text-gray-700 ${isDarkMode ? 'text-white' : ''}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            <a href="#" className={`text-purple-600 mt-2 flex items-center underline ${isDarkMode ? 'text-white' : 'text-black'}`}>
              View in browser <i className={`bx bx-link-external text-lg ml-1 underline ${isDarkMode ? 'text-white' : 'text-black'}`}></i>
            </a>
          </div>
        </div>

        <div className={`item w-1/3 rounded-lg overflow-hidden border-b-4 border-transparent cursor-pointer transition-all duration-300 hover:border-purple-600 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <img src={programtools} alt="Project 3" className="w-full h-56 object-cover object-top rounded-t-lg" />
          <div className={`info p-8 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            <h4 className="text-2xl font-bold mb-4">Animated Nav Bar</h4>
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
