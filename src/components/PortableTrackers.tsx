
import React from 'react';
import { Compass, Watch, Magnet, IdCard } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PortableTrackers = () => {
  const products = [
    {
      name: 'Magnet Trackers',
      items: [
        'TA S22 - 10000mAh, 30-35 days backup',
        'TA S119U - 6000mAh, 20 days backup',
        'TA UM666 - 3-year battery life'
      ],
      icon: Magnet
    },
    {
      name: 'Personal Trackers',
      items: [
        'ID Card Tracker - Discreet tracking',
        'GPS Watch - Wearable safety device'
      ],
      icon: IdCard
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
    <section id="portable-trackers" className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="text-center mb-12">
        <Compass size={48} className="mx-auto text-blue-600 mb-4" />
        <h2 className="text-3xl font-bold text-blue-900 mb-3">Portable Trackers</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Versatile tracking solutions for various applications</p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {products.map((product, productIndex) => {
              const Icon = product.icon;
              return (
                <Card key={productIndex} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="bg-blue-50">
                    <div className="flex items-center gap-3">
                      <Icon className="text-blue-600 h-6 w-6" />
                      <CardTitle>{product.name}</CardTitle>
                    </div>
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
              );
            })}
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-blue-900 flex items-center gap-2">
              <Watch className="text-blue-600 h-5 w-5" />
              Key Features
            </h3>
            <ul className="space-y-4">
              {features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-3">
                  <span className="bg-blue-600 rounded-full p-1 flex items-center justify-center">
                    <Compass className="text-white h-4 w-4" />
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

export default PortableTrackers;
