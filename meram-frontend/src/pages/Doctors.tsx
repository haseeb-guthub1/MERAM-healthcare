import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { doctorsBySpecialization } from './Dashboard';

const Doctors = () => {
  const [selectedSpecialization, setSelectedSpecialization] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Get all specializations from the doctors data
  const specializations = Object.keys(doctorsBySpecialization);

  // Filter doctors based on search term and selected specialization
  const filteredDoctors = Object.entries(doctorsBySpecialization)
    .filter(([spec]) => !selectedSpecialization || spec === selectedSpecialization)
    .flatMap(([_, doctors]) => doctors)
    .filter(doctor => 
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#2c5282] mb-4">Our Doctors</h1>
          <p className="text-gray-600">Find and connect with the best doctors in your area</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search doctors by name or specialization..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2c5282] focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2c5282] focus:border-transparent"
              value={selectedSpecialization || ''}
              onChange={(e) => setSelectedSpecialization(e.target.value || null)}
            >
              <option value="">All Specializations</option>
              {specializations.map((spec) => (
                <option key={spec} value={spec}>{spec}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Specialization Buttons */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {specializations.map((spec) => (
              <button
                key={spec}
                onClick={() => setSelectedSpecialization(spec)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedSpecialization === spec
                    ? 'bg-[#2c5282] text-white'
                    : 'bg-white text-[#2c5282] hover:bg-[#ebf8ff]'
                }`}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor) => (
            <Link
              key={doctor.id}
              to={`/doctors/${doctor.id}`}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all hover:bg-[#ebf8ff]"
            >
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2c5282]">{doctor.name}</h3>
                  <p className="text-gray-600">{doctor.specialization}</p>
                  <div className="mt-2 space-y-1">
                    <p className="text-sm text-gray-500">
                      {doctor.experience} years experience
                    </p>
                    <p className="text-sm text-gray-500">
                      {doctor.hospital}
                    </p>
                    <p className="text-sm text-gray-500">
                      {doctor.location?.city}, {doctor.location?.state}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No doctors found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Doctors; 