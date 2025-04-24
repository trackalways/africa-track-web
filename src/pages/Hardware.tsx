
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Truck, Camera, Droplet, Compass, Watch } from 'lucide-react';

const Hardware = () => {
  const hardwareCategories = [
    {
      title: "GPS Tracking Devices",
      description: "Reliable location tracking for your fleet",
      products: [
        { name: 'FMB920', description: 'Compact and versatile GPS tracker' },
        { name: 'FMB125', description: 'Cost-effective tracking solution' },
        { name: 'FMB130', description: 'Advanced fleet management' },
        { name: 'FMB140', description: 'Premium performance tracker' },
        { name: 'WeTrack-2', description: 'Compact 2G GPS tracker' },
        { name: 'Concox V5', description: 'Versatile 2G GPS tracker' },
        { name: 'Protrack VT08S', description: 'Compact tracker with geofencing' },
        { name: 'Protrack VT05R', description: 'Robust tracker for reliable monitoring' }
      ],
      icon: MapPin
    },
    {
      title: "Fuel Sensors",
      description: "Optimize fuel usage, reduce costs, and prevent theft",
      products: [
        { name: 'Omnicomm LLS5', description: 'Premium fuel level sensor' },
        { name: 'Omnicomm LLS-EX 5', description: 'Explosion-proof fuel sensor' },
        { name: 'Omnicomm LLS-AF 4', description: 'Advanced fuel monitoring' },
        { name: 'Omnicomm LLS4', description: 'Standard fuel level sensor' },
        { name: 'Escort TD-150 BLE', description: 'Bluetooth-enabled fuel sensor' },
        { name: 'Escort TD BLE', description: 'Compact BLE fuel sensor' },
        { name: 'Escort TD-600', description: 'High-capacity fuel monitoring' },
        { name: 'Mercetech Sp-232', description: 'Precision fuel level monitoring' }
      ],
      icon: Droplet
    },
    {
      title: "AI Dash Cams",
      description: "Enhance driver safety with intelligent monitoring",
      products: [
        { name: 'MC402', description: 'Advanced AI dash cam with multiple cameras' },
        { name: 'MC202X', description: 'Real-time driving behavior monitoring' },
        { name: 'MC401', description: 'Advanced dash cam with built-in cameras' },
        { name: 'JC400', description: 'AI-powered dash cam for fleet management' },
        { name: 'JC261', description: 'Upgradeable 4G dash camera system' },
        { name: 'JC170', description: 'Compact DMS camera for driver monitoring' }
      ],
      icon: Camera
    },
    {
      title: "Portable Trackers",
      description: "Stay connected, anywhere, anytime",
      products: [
        { name: 'TA S119U', description: '6000mAh battery, up to 20 days backup' },
        { name: 'TA S22', description: '10000mAh battery, 30-35 days backup' },
        { name: 'TA UM666', description: '3-year battery life GPS tracker' },
        { name: 'ID Card Tracker', description: 'Discreet tracking for school kids and employees' },
        { name: 'GPS Watch', description: 'Wearable tracker with SOS features' }
      ],
      icon: Compass
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hardware Solutions</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Explore our comprehensive range of telematics hardware designed to meet all your tracking and monitoring needs.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-16">
          {hardwareCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="py-12">
                <div className="text-center mb-12">
                  <Icon size={48} className="mx-auto text-blue-700 mb-4" />
                  <h2 className="text-3xl font-bold text-blue-900 mb-2">{category.title}</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">{category.description}</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.products.map((product, productIndex) => (
                    <div 
                      key={productIndex} 
                      className="bg-white border rounded-lg p-6 text-center hover:shadow-lg transition transform hover:-translate-y-1"
                    >
                      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                      <p className="text-gray-600">{product.description}</p>
                    </div>
                  ))}
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
