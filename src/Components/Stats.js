import React from 'react';

export default function Stats() {
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Milestones Achieved</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-center items-center">
        <div className="text-center bg-white rounded-lg p-6 shadow-md hover:shadow-lg transform transition-transform">
          <h2 className="text-4xl font-bold text-purple-500">6+</h2>
          <p className="text-gray-600">Years of Experience</p>
        </div>
        <div className="text-center bg-white rounded-lg p-6 shadow-md hover:shadow-lg transform transition-transform">
          <h2 className="text-4xl font-bold text-blue-500">150,000+</h2>
          <p className="text-gray-600">Unique Students</p>
        </div>
        <div className="text-center bg-white rounded-lg p-6 shadow-md hover:shadow-lg transform transition-transform">
          <h2 className="text-4xl font-bold text-green-500">200,000+</h2>
          <p className="text-gray-600">Total Enrollments</p>
        </div>
        <div className="text-center bg-white rounded-lg p-6 shadow-md hover:shadow-lg transform transition-transform">
          <h2 className="text-4xl font-bold text-orange-500">189</h2>
          <p className="text-gray-600">Countries</p>
        </div>
      </div>
    </div>
  );
}
