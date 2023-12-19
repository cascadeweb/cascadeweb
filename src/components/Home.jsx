import icon from '/vite.svg';

function Home() {
  return (
    <div className="main bg-deebee px-8 py-16 flex flex-col sm:flex-row items-center justify-between bg-blue-200">
      <div className="left mb-8 sm:mb-0">
        <h5 className="text-4xl font-bold mb-2">Hey, I am Cas</h5>
        <h3 className="text-6xl font-bold mb-6 whitespace-normal sm:whitespace-nowrap">
          I create <span className="text-purple-600">product design</span> and brand experience
        </h3>
        <p className="text-gray-700 text-xl mb-8">
          Cascade portfolio. View all of my projects and my skills.
        </p>
        <button className="bg-purple-600 text-white py-4 px-6 rounded-md cursor-pointer">Get In Touch</button>
      </div>
      <div className="right">
        <img src={icon} alt="Header" className="w-96" />
      </div>
    </div>
  );
}

export default Home;
