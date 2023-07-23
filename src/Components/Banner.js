import React from 'react';

export default function Banner() {
  return (
    <div className="bg-gray-700 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            {/* <span className="flex p-2 rounded-lg bg-blue-800">
              <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              </svg>
            </span> */}
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden">
                Book or join live sessions now!
              </span>
              <span className="hidden md:inline">
              Book a 1:1 call with me on topmate
              </span>
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a href="https://topmate.io/srivastava_pranjal" target="_blank" className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-blue-50">
              Book Now
            </a>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button type="button" className="-mr-1 flex p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2">
              <span className="sr-only">Dismiss</span>
              {/* <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}