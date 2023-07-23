import React from 'react';
import mainLogo from './profile-pic.jpg'

export default function HeroSection() {
  return (
    <div className="py-16 bg-gray-900" style={{ height: "80vh" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl animate-fade-in">
            Hello, I'm Pranjal Srivastava
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-4 animate-slide-in">
           Devops Engineer, Content Creator, Life Long Learner
          </p>
        </div>
        <div className="mt-10">
          <img className="mx-auto h-48 w-48 rounded-full animate-scale-in" src={mainLogo} alt="Profile Picture" />
        </div>
      </div>
    </div>
  );
}