
import React from 'react';
import { Droplet, Fuel } from 'lucide-react';
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
    <section id="fuel-sensors" className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="text-center mb-12">
        <Fuel size={48} className="mx-auto text-blue-600 mb-4" />
        <h2 className="text-3xl font-bold text-blue-900 mb-3">Fuel Sensors</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Optimize fuel usage, reduce costs, and prevent theft with real-time monitoring</p>
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
              <Droplet className="text-blue-600 h-5 w-5" />
              Key Features
            </h3>
            <ul className="space-y-4">
              {features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-3">
                  <span className="bg-blue-600 rounded-full p-1 flex items-center justify-center">
                    <Droplet className="text-white h-4 w-4" />
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

export default FuelSensors;
