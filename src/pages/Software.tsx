
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MapPin, Route, Bell, Car, Shield, Activity, Eye, Lock } from 'lucide-react';

const Software = () => {
  const softwareFeatures = [
    {
      title: "Real-time Tracking",
      description: "View locations of all vehicles simultaneously on the map with real-time updates and status information.",
      icon: MapPin
    },
    {
      title: "Route Management",
      description: "View and manage routes of multiple vehicles simultaneously with deviation alerts and monitoring.",
      icon: Route
    },
    {
      title: "Smart Notifications",
      description: "Get instant alerts for geo-fence enter/exit, ignition status, over-speeding, and unauthorized vehicle use.",
      icon: Bell
    },
    {
      title: "Vehicle Status",
      description: "Monitor ignition status, AC usage, temperature, fuel levels, and door status in real-time.",
      icon: Car
    },
    {
      title: "Security Features",
      description: "Remote immobilization, wire cut alerts, and tampering detection for enhanced vehicle security.",
      icon: Shield
    },
    {
      title: "Reporting",
      description: "Comprehensive reporting for events, daily activities, position tracking, and ignition status.",
      icon: Activity
    },
    {
      title: "Geofencing",
      description: "Set up virtual boundaries and receive alerts when vehicles enter or exit defined areas.",
      icon: MapPin
    },
    {
      title: "Driver Behavior",
      description: "Monitor driving patterns, detect harsh braking, rapid acceleration, and sharp turns.",
      icon: Eye
    },
    {
      title: "Remote Control",
      description: "Remotely immobilize vehicles, lock/unlock doors, and manage other vehicle functions.",
      icon: Lock
    }
  ];

  const softwarePlatforms = [
    {
      title: "Mobile Application",
      description: "Access your fleet information on the go with our intuitive mobile application.",
      features: [
        "Real-time tracking",
        "Push notifications",
        "Driver management",
        "Trip history",
        "Mobile immobilization"
      ],
      imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Web Dashboard",
      description: "Comprehensive web interface for detailed fleet management and analytics.",
      features: [
        "Live tracking map",
        "Advanced reporting",
        "User management",
        "Geofence setup",
        "Analytics dashboard"
      ],
      imageUrl: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Powerful Software Platform</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Our comprehensive telematics software delivers real-time insights and powerful management tools for your fleet and assets.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Key Features</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {softwareFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon className="text-blue-900" />
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Platforms</h2>
        
        <div className="space-y-12">
          {softwarePlatforms.map((platform, index) => (
            <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} gap-8 items-center`}>
              <div className="md:w-1/2 rounded-lg overflow-hidden">
                <img 
                  src={platform.imageUrl} 
                  alt={platform.title} 
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{platform.title}</h3>
                <p className="mb-6 text-gray-700">{platform.description}</p>
                <ul className="space-y-2">
                  {platform.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {/* Notification Feature Highlight */}
        <div className="bg-blue-50 p-8 rounded-lg mt-16">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/3 flex justify-center">
              <Bell size={100} className="text-blue-800" />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Always Stay Connected with Smart Notifications</h3>
              <p className="mb-4">
                Throughout the website, you can access all real-time activity notifications by clicking the "BELL" icon 
                placed on the bottom-right side of the page.
              </p>
              <p>
                Notifications are available for geo-fence enter/exit, ignition status, over-speeding, and unauthorized vehicle use.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Software;
