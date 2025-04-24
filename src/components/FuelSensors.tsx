
import React from 'react';
import { Droplet, Shield } from 'lucide-react';

const FuelSensors = () => {
  const sensors = [
    'Omnicomm LLS5', 'Omnicomm LLS-EX 5', 'Omnicomm LLS-AF 4',
    'Omnicomm LLS4', 'Escort TD-150 BLE', 'Escort TD BLE'
  ];

  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Fuel Sensors</h2>
        <p className="text-gray-600">Optimize fuel usage, reduce costs, and prevent theft</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Droplet className="text-blue-500" />
            <h3 className="text-xl font-semibold">Real-time Fuel Monitoring</h3>
          </div>
          <div className="flex items-center space-x-4">
            <Shield className="text-green-500" />
            <h3 className="text-xl font-semibold">Theft Detection</h3>
          </div>
          <p className="text-gray-700">
            Our advanced fuel sensors provide precise monitoring for fleets, construction, and agriculture industries.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {sensors.map((sensor, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-4 text-center hover:bg-blue-50 transition">
              {sensor}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FuelSensors;
