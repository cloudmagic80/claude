import React from "react";

const WelcomeScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Welcome to TaskList Pro</h1>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Enter your email address to get started
          </label>
          <input
            type="email"
            id="email"
            placeholder="name@yourcompany.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Continue with Email
        </button>
        <div className="flex justify-center my-4">
          <span className="text-gray-500 mx-2">OR</span>
        </div>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-gray-700 py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500">
            Continue with Google
          </button>
          <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500">
            Continue with Apple
          </button>
        </div>
        <div className="mt-4 text-center">
          <a
            href="#"
            className="text-blue-500 hover:text-blue-600 focus:outline-none focus:underline"
          >
            Already have an account? Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
