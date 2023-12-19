import icon from '/react.svg';

function About({ isDarkMode }) {
  return (
    <div className={`about py-16 px-8 flex flex-col-reverse items-center gap-16 sm:flex-row ${isDarkMode ? 'bg-gray-800' : 'bg-blue-200'}`}>
      <div className="left bg-deebee rounded-lg overflow-hidden">
        <img src={icon} alt="Header" className="w-full sm:w-96" />
      </div>
      <div className="right">
        <h5 className={`text-4xl mb-6 ${isDarkMode ? 'text-white' : ''}`}>About</h5>
        <h3 className={`text-6xl font-bold mb-6 ${isDarkMode ? 'text-white' : ''}`}>About Me</h3>
        <p className={`text-gray-700 mb-6 ${isDarkMode ? 'text-white' : ''}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.
        </p>
        <p className={`text-gray-700 ${isDarkMode ? 'text-white' : ''}`}>
          Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r.
        </p>
      </div>
    </div>
  );
}

export default About;
