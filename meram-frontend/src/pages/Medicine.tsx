import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Medicine = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-6">
                <Link to="/" className="text-2xl font-bold text-[#2c5282]">
                  Mehram
                </Link>
                <div className="flex space-x-4">
                  <button 
                    onClick={() => setIsLoginOpen(true)}
                    className="text-[#2c5282] hover:text-[#4299e1] font-medium"
                  >
                    Login
                  </button>
                  <button 
                    onClick={() => setIsSignupOpen(true)}
                    className="bg-[#2c5282] text-white px-4 py-2 rounded-lg hover:bg-[#4299e1] transition-colors"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
              <div className="hidden md:flex space-x-6">
                <Link to="/medicines" className="text-[#2c5282] hover:text-[#4299e1]">
                  Medicines
                </Link>
                <Link to="/doctors" className="text-[#2c5282] hover:text-[#4299e1]">
                  Doctors
                </Link>
                <Link to="/pharmacies" className="text-[#2c5282] hover:text-[#4299e1]">
                  Pharmacies
                </Link>
              </div>
            </div>
            <div className="flex-1 max-w-2xl mx-8">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for a medicine..."
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4299e1] focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-6">
              <Link to="/categories" className="text-[#2c5282] hover:text-[#4299e1]">
                Categories
              </Link>
              <Link to="/appointments" className="text-[#2c5282] hover:text-[#4299e1]">
                Appointments
              </Link>
              <Link to="/profile" className="text-[#2c5282] hover:text-[#4299e1]">
                Profile
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-2xl font-bold text-[#2c5282] mb-6">Login</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4299e1] focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4299e1] focus:border-transparent"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="bg-[#2c5282] text-white px-6 py-2 rounded-lg hover:bg-[#4299e1] transition-colors"
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={() => setIsLoginOpen(false)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {isSignupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-2xl font-bold text-[#2c5282] mb-6">Sign Up</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4299e1] focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4299e1] focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4299e1] focus:border-transparent"
                  placeholder="Create a password"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Confirm Password</label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4299e1] focus:border-transparent"
                  placeholder="Confirm your password"
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="bg-[#2c5282] text-white px-6 py-2 rounded-lg hover:bg-[#4299e1] transition-colors"
                >
                  Sign Up
                </button>
                <button
                  type="button"
                  onClick={() => setIsSignupOpen(false)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#2c5282] mb-8">Welcome to Mehram</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured Categories */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-[#2c5282] mb-4">Prescription Drugs</h2>
            <p className="text-gray-600">Browse our collection of prescription medications</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-[#2c5282] mb-4">Over-the-Counter</h2>
            <p className="text-gray-600">Find common OTC medications and health products</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-[#2c5282] mb-4">Health Supplements</h2>
            <p className="text-gray-600">Explore our range of vitamins and supplements</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medicine; 