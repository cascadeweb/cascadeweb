import { Link } from 'react-scroll';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer({ isDarkMode }) {
  return (
    <footer className={`bg-${isDarkMode ? 'gray-800' : 'deebee'} text-white py-12 px-8`}>
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="logo flex items-center mb-4 lg:mb-0">
          <Link
            to="main"
            smooth={true}
            duration={500}
            className={`font-bold text-lg cursor-pointer ${
              isDarkMode ? 'text-white' : 'text-purple-600'
            }`}
          >
            Cascade
          </Link>
        </div>
        <div className="lg:flex-grow flex items-center justify-end mb-4 lg:mb-0">
          <a
            href="#"
            className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`}
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-400'} mx-4`}
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`}
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-400'} ml-4`}
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <hr className={`border-t ${isDarkMode ? 'border-gray-500' : 'border-gray-700'} my-8`} />
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div
          className={`text-gray-400 ${
            isDarkMode ? 'text-gray-500' : ''
          } mb-4 lg:mb-0`}
        >
          &copy; 2023 Cascade. All rights reserved.
        </div>
        <div
          className={`text-gray-400 ${
            isDarkMode ? 'text-gray-500' : ''
          }`}
        >
          Privacy Policy | Terms of Service | Cookies Settings
        </div>
      </div>
    </footer>
  );
}

export default Footer;
