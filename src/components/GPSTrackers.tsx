
import React from 'react';
import { MapPin, Truck } from 'lucide-react';

const GPSTrackers = () => {
  const trackers = [
    { name: 'FMB920', description: 'Compact and versatile GPS tracker' },
    { name: 'FMB125', description: 'Cost-effective tracking solution' },
    { name: 'FMB130', description: 'Advanced fleet management' },
    { name: 'FMB140', description: 'Premium performance tracker' }
  ];

  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">GPS Tracking Devices</h2>
        <p className="text-gray-600">Reliable location tracking for your fleet</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {trackers.map((tracker, index) => (
          <div 
            key={index} 
            className="bg-white border rounded-lg p-6 text-center hover:shadow-lg transition transform hover:-translate-y-2"
          >
            <MapPin className="mx-auto text-blue-500 mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">{tracker.name}</h3>
            <p className="text-gray-600">{tracker.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GPSTrackers;
