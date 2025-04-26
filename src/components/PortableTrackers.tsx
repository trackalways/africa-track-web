
import React from 'react';
import { Compass, Watch } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PortableTrackers = () => {
  const products = [
    {
      name: 'Magnet Trackers',
      items: [
        'TA S22 - 10000mAh, 30-35 days backup',
        'TA S119U - 6000mAh, 20 days backup',
        'TA UM666 - 3-year battery life'
      ]
    },
    {
      name: 'Personal Trackers',
      items: [
        'ID Card Tracker - Discreet tracking',
        'GPS Watch - Wearable safety device'
      ]
    }
  ];

  const features = [
    "Long battery life",
    "Strong magnetic mounting",
    "Real-time tracking",
    "SOS alerts",
    "Geofencing capabilities"
  ];

  return (
    <section id="portable-trackers" className="py-12">
      <div className="text-center mb-8">
        <Compass size={48} className="mx-auto text-blue-700 mb-4" />
        <h2 className="text-3xl font-bold text-blue-900 mb-2">Portable Trackers</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Versatile tracking solutions for various applications</p>
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
                <Compass className="text-green-500 h-5 w-5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PortableTrackers;
