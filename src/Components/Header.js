import React, { useState } from 'react';

export default function Header() {
  // State to track whether the dropdown is open or closed
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown state
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="text-xl font-bold">
          <h1>PS</h1>
        </div>
        {/* Mobile dropdown button */}
        <div className="md:hidden">
          <button
            onClick={toggleDropdown}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            ☰
          </button>
        </div>
        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-4">
          <a href="#aboutme" className="hover:text-gray-300">
            About Me
          </a>
          <a href="#workexp" className="hover:text-gray-300">
            Work Experience
          </a>
          <a href="#services" className="hover:text-gray-300">
            Services
          </a>
          <a href="#contactme" className="hover:text-gray-300">
            Contact Me
          </a>
        </div>
        {/* Mobile dropdown */}
        {isDropdownOpen && (
          <div className="md:hidden absolute top-0 right-0 mt-12 mr-4 z-10 bg-gray-800 text-white p-4">
            <div className="flex flex-col space-y-4">
              <a href="#aboutme" className="hover:text-gray-300">
                About Me
              </a>
              <a href="#workexp" className="hover:text-gray-300">
                Work Experience
              </a>
              <a href="#services" className="hover:text-gray-300">
                Services
              </a>
              <a href="#contactme" className="hover:text-gray-300">
                Contact Me
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
