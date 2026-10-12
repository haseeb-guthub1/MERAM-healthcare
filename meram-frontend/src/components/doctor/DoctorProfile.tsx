import React from 'react';
import DoctorLocation from './DoctorLocation';

interface DoctorProfileProps {
  name: string;
  specialization: string;
  experience: number;
  education: string[];
  languages: string[];
  consultationFee: number;
  availability: {
    days: string[];
    time: string;
  };
  image?: string;
  location?: {
    address: string;
    city: string;
    state: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
}

const DoctorProfile: React.FC<DoctorProfileProps> = ({
  name,
  specialization,
  experience,
  education,
  languages,
  consultationFee,
  availability,
  image,
  location
}) => {
  return (
    <div className="space-y-6">
      {/* Basic Info Card */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6">
          {/* Doctor Image */}
          <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100">
            {image ? (
              <img 
                src={image} 
                alt={name} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-[#ffff] text-[#2c5282] text-4xl font-bold">
                {name.charAt(0)}
              </div>
            )}
          </div>

          {/* Doctor Info */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-[#2c5282] mb-1">{name}</h2>
            <p className="text-lg text-gray-600 mb-2">{specialization}</p>
            
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-sm text-gray-500">
                {experience} years experience
              </span>
              <span className="text-sm text-gray-500">•</span>
              <span className="text-sm text-gray-500">
                Consultation Fee: ${consultationFee}
              </span>
            </div>

            {/* Education */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-[#2c5282] mb-2">Education</h3>
              <ul className="list-disc list-inside text-gray-700">
                {education.map((edu, index) => (
                  <li key={index}>{edu}</li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-[#2c5282] mb-2">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-[#ebf8ff] text-[#2c5282] rounded-full text-sm"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-[#2c5282] mb-2">Availability</h3>
              <div className="flex flex-wrap gap-2">
                {availability.days.map((day, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm"
                  >
                    {day}
                  </span>
                ))}
              </div>
              <p className="mt-2 text-gray-700">
                <span className="font-medium">Timing:</span> {availability.time}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex space-x-4">
              <button className="px-6 py-2 bg-[#2c5282] text-white rounded-lg hover:bg-[#1a365d] transition-colors">
                Book Appointment
              </button>
              <button className="px-6 py-2 border border-[#2c5282] text-[#2c5282] rounded-lg hover:bg-[#ebf8ff] transition-colors">
                View Schedule
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Location Card */}
      {location && <DoctorLocation {...location} />}
    </div>
  );
};

export default DoctorProfile; 