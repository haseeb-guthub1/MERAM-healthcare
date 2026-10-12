import React from 'react';

interface DoctorLocationProps {
  address: string;
  city: string;
  state: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

const DoctorLocation: React.FC<DoctorLocationProps> = ({
  address,
  city,
  state,
  coordinates
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-xl font-bold text-[#2c5282] mb-4">Location</h3>
      <div className="bg-[#ebf8ff] p-4 rounded-lg">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <svg className="w-6 h-6 text-[#2c5282]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <p className="text-gray-700 font-medium">{address}</p>
            <p className="text-gray-600">{city}, {state}</p>
            {coordinates && (
              <div className="mt-3">
                <a 
                  href={`https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#2c5282] hover:text-[#1a365d] transition-colors"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View on Google Maps
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorLocation; 