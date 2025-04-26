
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
    <section id="dash-cams" className="py-12">
      <div className="text-center mb-8">
        <Camera size={48} className="mx-auto text-blue-700 mb-4" />
        <h2 className="text-3xl font-bold text-blue-900 mb-2">AI Dash Cams</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Intelligent camera systems for enhanced driver and vehicle safety</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          {products.map((product, productIndex) => (
            <Card key={productIndex}>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                {product.description && (
                  <CardDescription>{product.description}</CardDescription>
                )}
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
                <Camera className="text-green-500 h-5 w-5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DashCams;
