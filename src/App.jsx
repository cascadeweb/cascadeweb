import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : ''}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Home isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Portfolio isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
