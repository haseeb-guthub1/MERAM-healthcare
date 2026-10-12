import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const specializations = [
  {
    name: 'Cardiology',
    doctors: [
      { id: 1, name: 'Dr. Sarah Johnson', experience: 15 },
      { id: 2, name: 'Dr. Michael Chen', experience: 12 },
    ]
  },
  {
    name: 'Neurology',
    doctors: [
      { id: 3, name: 'Dr. Emily Brown', experience: 10 },
      { id: 4, name: 'Dr. James Wilson', experience: 8 },
    ]
  },
  {
    name: 'Pediatrics',
    doctors: [
      { id: 5, name: 'Dr. Lisa Martinez', experience: 9 },
      { id: 6, name: 'Dr. Robert Taylor', experience: 11 },
    ]
  },
  {
    name: 'Dermatology',
    doctors: [
      { id: 7, name: 'Dr. David Kim', experience: 7 },
      { id: 8, name: 'Dr. Anna Lee', experience: 6 },
    ]
  },
  {
    name: 'Orthopedics',
    doctors: [
      { id: 9, name: 'Dr. Thomas White', experience: 14 },
      { id: 10, name: 'Dr. Maria Garcia', experience: 9 },
    ]
  }
];

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1a365d] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl font-bold text-white tracking-wider">
              MERAM
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block flex-1">
            <div className="ml-24 flex items-center justify-between">
              <div className="flex items-center space-x-12">
                <Link to="/" className="text-white hover:text-[#4299e1] px-4 py-2 rounded-md text-base font-medium transition-colors duration-200">
                  Home
                </Link>

                <Link to="/medicines" className="text-white hover:text-[#4299e1] px-4 py-2 rounded-md text-base font-medium transition-colors duration-200">
                  Medicines
                </Link>

                <Link to="/doctors" className="text-white hover:text-[#4299e1] px-4 py-2 rounded-md text-base font-medium transition-colors duration-200">
                  Doctors
                </Link>

                <Link to="/appointments" className="text-white hover:text-[#4299e1] px-4 py-2 rounded-md text-base font-medium transition-colors duration-200">
                  Appointments
                </Link>
              </div>

              {/* Auth Buttons */}
              <div className="flex items-center space-x-6">
                <Link 
                  to="/login" 
                  className="text-white hover:text-[#4299e1] px-5 py-2 rounded-md text-base font-medium transition-colors duration-200"
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="text-white hover:text-[#4299e1] px-5 py-2 rounded-md text-base font-medium transition-colors duration-200"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[#4299e1] focus:outline-none p-2"
            >
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-4 pb-4 space-y-3">
            <Link 
              to="/" 
              className="text-white hover:text-[#4299e1] block px-4 py-3 rounded-md text-lg font-medium transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/medicines" 
              className="text-white hover:text-[#4299e1] block px-4 py-3 rounded-md text-lg font-medium transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Medicines
            </Link>
            <Link 
              to="/doctors" 
              className="text-white hover:text-[#4299e1] block px-4 py-3 rounded-md text-lg font-medium transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Doctors
            </Link>
            <Link 
              to="/appointments" 
              className="text-white hover:text-[#4299e1] block px-4 py-3 rounded-md text-lg font-medium transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Appointments
            </Link>
            
            {/* Mobile Auth Buttons */}
            <div className="pt-6 pb-4 border-t border-gray-700 mt-4">
              <Link 
                to="/login" 
                className="text-white hover:text-[#4299e1] block px-4 py-3 rounded-md text-lg font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="bg-[#4299e1] text-white hover:bg-[#3182ce] block px-4 py-3 rounded-md text-lg font-medium mt-4 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 