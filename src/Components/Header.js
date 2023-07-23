import React from 'react';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="text-xl font-bold">
          <h1>PS</h1>
        </div>
        <div className="flex space-x-4">
          <a href="#aboutme" className="hover:text-gray-300">About Me</a>
          <a href="#" className="hover:text-gray-300">Work Experience</a>
          <a href="#services" className="hover:text-gray-300">Services</a>
          <a href="#" className="hover:text-gray-300">Contact Me</a>
        </div>
      </nav>
    </header>
  );
}