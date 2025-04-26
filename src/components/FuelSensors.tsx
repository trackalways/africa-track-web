
import React from 'react';
import { Droplet } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FuelSensors = () => {
  const products = [
    {
      name: 'Omnicomm Series',
      items: ['LLS5', 'LLS-EX 5', 'LLS-AF 4', 'LLS4'],
      description: 'Premium fuel level monitoring solutions'
    },
    {
      name: 'Escort Series',
      items: ['TD-150 BLE', 'TD BLE', 'TD-600'],
      description: 'Bluetooth-enabled fuel monitoring'
    },
    {
      name: 'Mercetech Series',
      items: ['SP-232', 'SP-Ble'],
      description: 'Advanced fuel level sensors'
    }
  ];

  const features = [
    "Real-time fuel level monitoring",
    "Theft detection alerts",
    "Unauthorized usage notifications",
    "Compatible with GPS trackers",
    "Telematics software integration"
  ];

  return (
    <section id="fuel-sensors" className="py-12">
      <div className="text-center mb-8">
        <Droplet size={48} className="mx-auto text-blue-700 mb-4" />
        <h2 className="text-3xl font-bold text-blue-900 mb-2">Fuel Sensors</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Optimize fuel usage, reduce costs, and prevent theft with real-time monitoring</p>
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
                <Droplet className="text-green-500 h-5 w-5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FuelSensors;
