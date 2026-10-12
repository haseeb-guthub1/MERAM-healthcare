import React from 'react';
import { useParams } from 'react-router-dom';
import DoctorProfile from '../components/doctor/DoctorProfile';
import { doctorsBySpecialization } from './Dashboard';

const DoctorPage = () => {
  const { doctorId } = useParams();
  let doctor = null;
  for (const spec in doctorsBySpecialization) {
    doctor = doctorsBySpecialization[spec].find((d) => d.id === doctorId);
    if (doctor) break;
  }

  if (!doctor) {
    return <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow text-center text-red-600 font-bold">Doctor not found.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <DoctorProfile {...doctor} />
    </div>
  );
};

export default DoctorPage; 