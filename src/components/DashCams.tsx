
import React from 'react';
import { Camera } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const DashCams = () => {
  const products = [
    {
      name: 'MC Series',
      items: [
        'MC402 - Advanced AI with 4 cameras',
        'MC202X - Real-time behavior monitoring',
        'MC401 - Dual built-in cameras'
      ],
      description: 'AI-powered safety solutions'
    },
    {
      name: 'Jimi Series',
      items: [
        'JC400 - AI-powered fleet management',
        'JC170 - Compact DMS camera',
        'JC261 - 4G upgradeable system'
      ],
      description: 'Advanced driver monitoring'
    }
  ];

  const features = [
    "Lane departure warning",
    "Forward collision alerts",
    "Driver behavior monitoring",
    "Fatigue detection",
    "Real-time video streaming"
  ];

  return (
    <section id="dash-cams" className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center mb-12">
        <Camera size={48} className="mx-auto text-blue-600 mb-4" />
        <h2 className="text-3xl font-bold text-blue-900 mb-3">AI Dash Cams</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Intelligent camera systems for enhanced driver and vehicle safety</p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {products.map((product, productIndex) => (
              <Card key={productIndex} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-blue-50">
                  <CardTitle>{product.name}</CardTitle>
                  {product.description && (
                    <CardDescription>{product.description}</CardDescription>
                  )}
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
              <Camera className="text-blue-600 h-5 w-5" />
              Key Features
            </h3>
            <ul className="space-y-4">
              {features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-3">
                  <span className="bg-blue-600 rounded-full p-1 flex items-center justify-center">
                    <Camera className="text-white h-4 w-4" />
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

export default DashCams;
