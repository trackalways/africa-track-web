
import React from 'react';
import { MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const GPSTrackers = () => {
  const products = [
    {
      name: 'FMB Series',
      items: [
        'FMB920 - Compact and versatile tracker',
        'FMB125 - Cost-effective solution',
        'FMB130 - Advanced fleet management',
        'FMB140 - Premium performance'
      ]
    },
    {
      name: 'Concox Series',
      items: [
        'WeTrack-2 - Compact 2G tracker',
        'V5 - Versatile tracking solution'
      ]
    },
    {
      name: 'ProTrack Series',
      items: [
        'VT08s - Compact with geofencing',
        'VT05R - Robust monitoring solution'
      ]
    }
  ];

  const features = [
    "Real-time location tracking",
    "Geofencing capabilities",
    "Advanced GNSS technology",
    "Comprehensive fleet management",
    "Rugged design for durability"
  ];

  return (
    <section id="gps-trackers" className="py-12">
      <div className="text-center mb-8">
        <MapPin size={48} className="mx-auto text-blue-700 mb-4" />
        <h2 className="text-3xl font-bold text-blue-900 mb-2">GPS Tracking Devices</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Advanced tracking solutions for precise location monitoring and fleet management</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          {products.map((product, productIndex) => (
            <Card key={productIndex}>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  {product.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-700">{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Key Features</h3>
          <ul className="space-y-3">
            {features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center gap-2">
                <MapPin className="text-green-500 h-5 w-5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GPSTrackers;
