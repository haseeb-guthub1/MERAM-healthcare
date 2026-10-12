import React, { useState, useEffect } from 'react';
import MedicineInfo from '../components/medicine/MedicineInfo';

const MedicinePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMedicine, setSelectedMedicine] = useState<{ name: string; price: number } | null>(null);
  const [filteredMedicines, setFilteredMedicines] = useState<{ name: string; price: number }[]>([]);
  const [loading, setLoading] = useState(false);

  // Sample medicine data - in a real application, this would come from an API
  const medicines = [
    { name: 'DURAGESIC-100', price: 150.00 },
    { name: 'ASPIRIN', price: 5.99 },
    { name: 'IBUPROFEN', price: 8.99 },
    { name: 'AMOXICILLIN', price: 12.99 },
    { name: 'PARACETAMOL', price: 4.99 },
    { name: 'OMEPRAZOLE', price: 9.99 },
    { name: 'METFORMIN', price: 7.99 },
    { name: 'LISINOPRIL', price: 6.99 },
    { name: 'ATORVASTATIN', price: 11.99 },
    { name: 'LEVOTHYROXINE', price: 8.99 },
    { name: 'METOPROLOL', price: 7.99 },
    { name: 'SIMVASTATIN', price: 9.99 },
    { name: 'LOSARTAN', price: 10.99 },
    { name: 'GABAPENTIN', price: 12.99 },
    { name: 'HYDROCHLOROTHIAZIDE', price: 5.99 },
    { name: 'SERTRALINE', price: 8.99 },
    { name: 'ALPRAZOLAM', price: 6.99 },
    { name: 'PREDNISONE', price: 7.99 },
    { name: 'TRAZODONE', price: 9.99 },
    { name: 'PREGABALIN', price: 15.99 },
    { name: 'DULOXETINE', price: 14.99 },
    { name: 'CITALOPRAM', price: 8.99 },
    { name: 'BUPROPION', price: 11.99 },
    { name: 'VENLAFAXINE', price: 13.99 },
    { name: 'QUETIAPINE', price: 16.99 },
    { name: 'ARIPIPRAZOLE', price: 17.99 },
    { name: 'OLANZAPINE', price: 18.99 },
    { name: 'RISPERIDONE', price: 15.99 },
    { name: 'CLOZAPINE', price: 19.99 },
    { name: 'LAMOTRIGINE', price: 12.99 },
    { name: 'VALPROATE', price: 11.99 },
    { name: 'CARBAMAZEPINE', price: 10.99 },
    { name: 'LEVETIRACETAM', price: 13.99 },
    { name: 'TOPIRAMATE', price: 14.99 },
    { name: 'GABAPENTIN', price: 12.99 },
    { name: 'PRAMIPEXOLE', price: 16.99 },
    { name: 'ROPINIROLE', price: 15.99 },
    { name: 'SELEGILINE', price: 17.99 },
    { name: 'RASAGILINE', price: 18.99 },
    { name: 'ENTACAPONE', price: 19.99 },
    { name: 'TOLCAPONE', price: 20.99 },
    { name: 'AMANTADINE', price: 9.99 },
    { name: 'BENZTROPINE', price: 8.99 },
    { name: 'TRIHEXYPHENIDYL', price: 7.99 },
    { name: 'DIPHENHYDRAMINE', price: 6.99 },
    { name: 'PROPRANOLOL', price: 5.99 },
    { name: 'PRIMIDONE', price: 14.99 },
    { name: 'PHENOBARBITAL', price: 13.99 },
    { name: 'PHENYTOIN', price: 12.99 },
    { name: 'FOSPHENYTOIN', price: 21.99 },
    { name: 'LACOSAMIDE', price: 22.99 },
    { name: 'PERAMPANEL', price: 23.99 },
    { name: 'BRIVARACETAM', price: 24.99 },
    { name: 'CENOBAMATE', price: 25.99 },
    { name: 'ESLICARBAZEPINE', price: 26.99 },
    { name: 'EZOGABINE', price: 27.99 },
    { name: 'FELBAMATE', price: 28.99 },
    { name: 'OXCARBAZEPINE', price: 29.99 },
    { name: 'RUFINAMIDE', price: 30.99 },
    { name: 'TIAGABINE', price: 31.99 },
    { name: 'VIGABATRIN', price: 32.99 },
    { name: 'ZONISAMIDE', price: 33.99 }
  ];

  // Function to generate random price
  const generateRandomPrice = () => {
    return (Math.random() * (2000 - 100) + 100).toFixed(2);
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === '') {
      setFilteredMedicines([]);
      return;
    }

    // Filter medicines based on search term
    const filtered = medicines
      .filter(med => med.name.toLowerCase().includes(value.toLowerCase()))
      .map(med => ({
        ...med,
        price: parseFloat(generateRandomPrice()) // Generate new random price for each search
      }));

    setFilteredMedicines(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-[#2c5282]">Medicine Portal</h1>
            </div>
            <div className="flex-1 max-w-2xl mx-8">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search for a medicine..."
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4299e1] focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-4">
              
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Results */}
        {searchTerm && filteredMedicines.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-[#2c5282] mb-4">Search Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredMedicines.map((medicine) => (
                <div
                  key={medicine.name}
                  className="bg-white p-4 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow border border-gray-200"
                  onClick={() => setSelectedMedicine(medicine)}
                >
                  <h3 className="font-semibold text-[#2c5282]">{medicine.name}</h3>
                  <p className="text-green-600 font-medium">${medicine.price.toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Medicines List */}
        {!searchTerm && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-[#2c5282] mb-4">Available Medicines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {medicines.map((medicine) => (
                <div
                  key={medicine.name}
                  className="bg-white p-4 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow border border-gray-200"
                  onClick={() => setSelectedMedicine(medicine)}
                >
                  <h3 className="font-semibold text-[#2c5282]">{medicine.name}</h3>
                  <p className="text-green-600 font-medium">${medicine.price.toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Selected Medicine Info */}
        {selectedMedicine && (
          <div className="mt-8">
            <MedicineInfo
              medicineName={selectedMedicine.name}
              price={selectedMedicine.price}
            />
          </div>
        )}

        {/* No Results Message */}
        {searchTerm && filteredMedicines.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No medicines found. Try a different search term.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicinePage; 