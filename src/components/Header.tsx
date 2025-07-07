import { useState } from "react";
import { Link } from "react-scroll";
import { Moon, Sun } from "lucide-react";

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <header
      className="fixed top-0 left-0 w-full shadow-lg z-50 animate-wave"
      style={{
        background: isDarkMode
          ? "linear-gradient(to right, #1e3a8a, #312e81)"
          : "linear-gradient(to right, #2563eb, #1e40af)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4 relative overflow-hidden">
        {/* Logo */}
        <div className="flex-shrink-0 mr-6">
          <img
            src="/logo.png"
            alt="Bloom Daycare and Academy Logo"
            className="h-16 w-auto object-contain transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
          />
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-8">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-white font-medium relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-white font-medium relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="programs"
            smooth={true}
            duration={500}
            className="text-white font-medium relative group"
          >
            Programs
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-white font-medium relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="text-white hover:text-blue-200 focus:outline-none transition-colors duration-200"
        >
          {isDarkMode ? (
            <Sun className="h-7 w-7" />
          ) : (
            <Moon className="h-7 w-7" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
