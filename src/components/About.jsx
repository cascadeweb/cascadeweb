function About({ isDarkMode }) {
  // Use different image sources for light and dark modes
  const imageSrc = isDarkMode ? '/home.png' : '/home.png';
  const sectionBackgroundColor = isDarkMode ? 'bg-gray-700' : 'bg-blue-200';

  return (
    <div className={`about py-16 px-8 flex flex-col-reverse items-center gap-16 sm:flex-row ${sectionBackgroundColor}`}>
      <div className="left bg-deebee rounded-lg overflow-hidden hidden sm:block">
        <img src={imageSrc} alt="Header" className="w-full sm:w-96" />
      </div>
      <div className="right">
        <h3 className={`text-6xl font-bold mb-6 ${isDarkMode ? 'text-white' : ''}`}>About Me</h3>
        <p className={`text-gray-700 mb-6 ${isDarkMode ? 'text-white' : ''}`}>
          Hello! I'm a passionate web developer based in Denmark, dedicated to creating engaging and user-friendly websites. My expertise lies in front-end technologies, and I specialize in React, JavaScript, HTML, CSS, and Tailwind CSS.
        </p>
        <p className={`text-gray-700 mb-6 ${isDarkMode ? 'text-white' : ''}`}>
          With a keen eye for design and a commitment to writing clean and efficient code, I bring ideas to life on the digital canvas. Im constantly exploring new technologies and best practices to stay at the forefront of web development.
        </p>
        <p className={`text-gray-700 ${isDarkMode ? 'text-white' : ''}`}>
          Whether you need a stunning portfolio, an interactive web application, or anything in between, Im here to turn your vision into reality. Lets collaborate and build something extraordinary together!
        </p>
      </div>
    </div>
  );
}

export default About;
