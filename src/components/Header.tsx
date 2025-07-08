import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X, Moon, Sun } from "lucide-react";

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "programs", label: "Programs" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full shadow-lg z-50 animate-slide-in"
      style={{
        background: isDarkMode
          ? "linear-gradient(to right, #1e3a8a, #312e81)"
          : "linear-gradient(to right, #2563eb, #3b82f6)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4 relative">
        {/* Logo */}
        <Link to="home" smooth={true} duration={500} className="flex-shrink-0">
          <img
            src="logo.png"
            alt="Bloom Daycare and Academy Logo"
            className="h-12 w-auto object-contain transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              className="text-white font-medium relative group text-lg hover:text-blue-200 transition-colors duration-200"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Dark Mode Toggle and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="text-white hover:text-blue-200 focus:outline-none transition-colors duration-200"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <Sun className="h-6 w-6" />
            ) : (
              <Moon className="h-6 w-6" />
            )}
          </button>
          <button
            className="md:hidden text-white hover:text-blue-200 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-blue-600 dark:bg-gray-900 px-4 py-4 shadow-lg animate-slide-in">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              className="block py-2 text-white text-lg font-medium hover:bg-blue-500 dark:hover:bg-blue-800 rounded-md px-2 transition-colors duration-200"
              onClick={toggleMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
