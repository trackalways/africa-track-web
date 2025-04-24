
import React from 'react';
import { Compass, Watch } from 'lucide-react';

const PortableTrackers = () => {
  const trackers = [
    { 
      name: 'TA S119U', 
      description: '6000mAh battery, up to 20 days backup',
      icon: Compass
    },
    { 
      name: 'TA S22', 
      description: '10000mAh battery, 30-35 days backup',
      icon: Compass
    },
    { 
      name: 'GPS Watch', 
      description: 'Real-time tracking with SOS features',
      icon: Watch
    }
  ];

  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Portable Trackers</h2>
        <p className="text-gray-600">Stay connected, anywhere, anytime</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {trackers.map((tracker, index) => {
          const Icon = tracker.icon;
          return (
            <div 
              key={index} 
              className="bg-white border rounded-lg p-6 text-center hover:shadow-lg transition"
            >
              <Icon className="mx-auto text-blue-500 mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">{tracker.name}</h3>
              <p className="text-gray-600">{tracker.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PortableTrackers;
