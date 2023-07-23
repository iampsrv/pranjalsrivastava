import React from 'react';
import mainLogo from './profile-pic.jpg';

export default function HeroSection() {
  return (
    <div className="py-16 bg-gray-900" style={{ minHeight: "80vh" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center text-center"> {/* Use text-center for center alignment */}
          <h2 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl animate-fade-in">
            Hello, I'm Pranjal Srivastava
          </h2>
          <div className="mt-3 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-4 animate-slide-in">
            <div className="md:flex justify-center"> {/* Use flex and justify-center to center on larger screens */}
              <div className="md:flex-shrink-0">DevOps Engineer</div>
              <div className="md:flex-shrink-0 mx-2">Content Creator</div>
              <div className="md:flex-shrink-0">Life Long Learner</div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <img
            className="mx-auto h-48 w-48 sm:h-64 sm:w-64 rounded-full animate-scale-in"
            src={mainLogo}
            alt="Profile Picture"
          />
        </div>
      </div>
    </div>
  );
}
