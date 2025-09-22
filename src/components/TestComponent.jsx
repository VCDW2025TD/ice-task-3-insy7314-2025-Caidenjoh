import React from 'react';

const TestComponent = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Test Component
        </h1>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <p className="text-gray-800">
            If you can see this styled with Tailwind CSS classes, it's working!
          </p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Test Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestComponent;
