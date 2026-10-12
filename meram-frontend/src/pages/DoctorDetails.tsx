import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DoctorProfile from '../components/doctor/DoctorProfile';
import { doctorsBySpecialization } from './Dashboard';

const DoctorDetails: React.FC = () => {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  
  // Find the doctor from all specializations
  let doctor = null;
  for (const spec in doctorsBySpecialization) {
    doctor = doctorsBySpecialization[spec].find((d) => d.id === doctorId);
    if (doctor) break;
  }

  if (!doctor) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-sm max-w-md w-full text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Doctor Not Found</h2>
          <p className="text-gray-600 mb-6">The doctor you're looking for doesn't exist or has been removed.</p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-[#2c5282] text-white rounded-lg hover:bg-[#1a365d] transition-colors"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header with Back Button */}
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-[#2c5282] hover:text-[#1a365d] transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Doctors
          </button>
        </div>

        {/* Doctor's Name and Specialization */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h1 className="text-3xl font-bold text-[#2c5282]">{doctor.name}</h1>
          <p className="text-xl text-gray-600">{doctor.specialization}</p>
        </div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Profile */}
          <div className="lg:col-span-2">
            <DoctorProfile {...doctor} />
          </div>

          {/* Right Column - Additional Info */}
          <div className="space-y-6">
            {/* Quick Info Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#2c5282] mb-4">Quick Info</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Experience</p>
                  <p className="text-lg font-medium">{doctor.experience} years</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Consultation Fee</p>
                  <p className="text-lg font-medium">${doctor.consultationFee}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Languages</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {doctor.languages.map((lang: string, index: number) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-[#ebf8ff] text-[#2c5282] rounded-full text-sm"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#2c5282] mb-4">Contact</h3>
              <div className="space-y-4">
                <button className="w-full px-6 py-3 bg-[#2c5282] text-white rounded-lg hover:bg-[#1a365d] transition-colors flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Doctor
                </button>
                <button className="w-full px-6 py-3 border border-[#2c5282] text-[#2c5282] rounded-lg hover:bg-[#ebf8ff] transition-colors flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails; 