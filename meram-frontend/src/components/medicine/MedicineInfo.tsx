import React, { useState, useEffect } from 'react';

interface MedicineInfoProps {
  medicineName: string;
  price: number;
  fdaData?: any;
}

interface FDAData {
  report_id: string;
  seriousness: string[];
  reactions: string[];
  drug_indication: string;
}

const MedicineInfo: React.FC<MedicineInfoProps> = ({ medicineName, price, fdaData }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fdaInfo, setFdaInfo] = useState<FDAData | null>(null);

  useEffect(() => {
    const fetchFDAData = async () => {
      if (!medicineName) return;

      setLoading(true);
      setError(null);

      try {
        if (fdaData) {
          // If FDA data is already provided, use it
          setFdaInfo({
            report_id: fdaData.report_id || 'N/A',
            seriousness: fdaData.seriousness || [],
            reactions: fdaData.reactions || [],
            drug_indication: fdaData.drug_indication || 'N/A'
          });
        } else {
          // Otherwise fetch from FDA API
          const response = await fetch(
            `https://api.fda.gov/drug/event.json?search=brand_name:${medicineName}&limit=1`
          );
          const data = await response.json();

          if (data.results && data.results.length > 0) {
            const result = data.results[0];
            setFdaInfo({
              report_id: result.report_id || 'N/A',
              seriousness: result.seriousness || [],
              reactions: result.reactions || [],
              drug_indication: result.drug_indication || 'N/A'
            });
          } else {
            setError('No FDA data available for this medicine');
          }
        }
      } catch (err) {
        setError('Error fetching FDA data');
        console.error('Error fetching FDA data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFDAData();
  }, [medicineName, fdaData]);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      {/* Medicine Name and Price - Always shown */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#2c5282] mb-2">{medicineName}</h2>
        <p className="text-2xl font-semibold text-green-600">${price.toFixed(2)}</p>
      </div>

      {loading && (
        <div className="flex justify-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#2c5282]"></div>
        </div>
      )}

      {error && (
        <div className="bg-yellow-50 text-yellow-700 p-4 rounded-lg mb-4">
          <p className="font-medium">Note: {error}</p>
          <p className="mt-2">You can still view the medicine price above.</p>
        </div>
      )}

      {fdaInfo && !loading && !error && (
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-[#2c5282] mb-2">FDA Safety Information</h3>
            <div className="bg-[#ebf8ff] p-4 rounded-lg">
              <p className="mb-2"><span className="font-medium">Report ID:</span> {fdaInfo.report_id}</p>
              
              {fdaInfo.seriousness && fdaInfo.seriousness.length > 0 && (
                <div className="mb-2">
                  <p className="font-medium">Seriousness:</p>
                  <ul className="list-disc list-inside">
                    {fdaInfo.seriousness.map((item: string, index: number) => (
                      <li key={index} className="text-gray-700">{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {fdaInfo.reactions && fdaInfo.reactions.length > 0 && (
                <div className="mb-2">
                  <p className="font-medium">Reported Reactions:</p>
                  <ul className="list-disc list-inside">
                    {fdaInfo.reactions.map((reaction: string, index: number) => (
                      <li key={index} className="text-gray-700">{reaction}</li>
                    ))}
                  </ul>
                </div>
              )}

              {fdaInfo.drug_indication && (
                <div>
                  <p className="font-medium">Drug Indication:</p>
                  <p className="text-gray-700">{fdaInfo.drug_indication}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicineInfo; 