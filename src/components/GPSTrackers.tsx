
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
    <section id="gps-trackers" className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center mb-12">
        <MapPin size={48} className="mx-auto text-blue-600 mb-4" />
        <h2 className="text-3xl font-bold text-blue-900 mb-3">GPS Tracking Devices</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Advanced tracking solutions for precise location monitoring and fleet management</p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {products.map((product, productIndex) => (
              <Card key={productIndex} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-blue-50">
                  <CardTitle>{product.name}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {product.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-blue-900 flex items-center gap-2">
              <MapPin className="text-blue-600 h-5 w-5" />
              Key Features
            </h3>
            <ul className="space-y-4">
              {features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-3">
                  <span className="bg-blue-600 rounded-full p-1 flex items-center justify-center">
                    <MapPin className="text-white h-4 w-4" />
                  </span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GPSTrackers;
