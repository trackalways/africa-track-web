
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Droplet, Camera, Compass, Watch, Shield, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Hardware = () => {
  const hardwareCategories = [
    {
      title: "Fuel Sensors",
      description: "Optimize fuel usage, reduce costs, and prevent theft with real-time monitoring",
      icon: Droplet,
      products: [
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
      ],
      features: [
        "Real-time fuel level monitoring",
        "Theft detection alerts",
        "Unauthorized usage notifications",
        "Compatible with GPS trackers",
        "Telematics software integration"
      ]
    },
    {
      title: "GPS Tracking Devices",
      description: "Advanced tracking solutions for precise location monitoring and fleet management",
      icon: MapPin,
      products: [
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
      ],
      features: [
        "Real-time location tracking",
        "Geofencing capabilities",
        "Advanced GNSS technology",
        "Comprehensive fleet management",
        "Rugged design for durability"
      ]
    },
    {
      title: "AI Dash Cams",
      description: "Intelligent camera systems for enhanced driver and vehicle safety",
      icon: Camera,
      products: [
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
      ],
      features: [
        "Lane departure warning",
        "Forward collision alerts",
        "Driver behavior monitoring",
        "Fatigue detection",
        "Real-time video streaming"
      ]
    },
    {
      title: "Portable Trackers",
      description: "Versatile tracking solutions for various applications",
      icon: Compass,
      products: [
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
      ],
      features: [
        "Long battery life",
        "Strong magnetic mounting",
        "Real-time tracking",
        "SOS alerts",
        "Geofencing capabilities"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hardware Solutions</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Discover our comprehensive range of telematics hardware, designed and tested to meet the unique challenges of the African market.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-16">
          {hardwareCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="rounded-lg bg-white p-8 shadow-lg">
                <div className="text-center mb-8">
                  <Icon size={48} className="mx-auto text-blue-700 mb-4" />
                  <h2 className="text-3xl font-bold text-blue-900 mb-2">{category.title}</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">{category.description}</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    {category.products.map((product, productIndex) => (
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
                      {category.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <Shield className="text-green-500 h-5 w-5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Hardware;
