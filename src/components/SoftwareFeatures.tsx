
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MapPin, Route, Bell, Car, Shield, Activity } from 'lucide-react';

const SoftwareFeatures = () => {
  const features = [
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
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-3">Software Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Powerful telematics platform with advanced features to transform your fleet operations</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-blue-600 rounded-full">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-700">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SoftwareFeatures;
