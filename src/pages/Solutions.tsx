
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Truck, Shield, Car, Bell } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      title: "Fleet Management",
      description: "Optimize your fleet operations with real-time tracking, route management, and performance analytics.",
      icon: Truck,
      features: [
        "Real-time vehicle tracking",
        "Route optimization",
        "Driver behavior monitoring",
        "Fuel consumption analysis",
        "Maintenance scheduling"
      ]
    },
    {
      title: "School Bus Management",
      description: "Ensure the safety and efficiency of your school transportation system.",
      icon: Car,
      features: [
        "Real-time bus tracking for parents",
        "Attendance management",
        "Driver verification",
        "Route optimization",
        "Speed monitoring and alerts"
      ]
    },
    {
      title: "Asset Tracking",
      description: "Monitor and protect your valuable assets with advanced tracking solutions.",
      icon: MapPin,
      features: [
        "Real-time location updates",
        "Geofencing capabilities",
        "Tamper alerts",
        "Battery status monitoring",
        "Historical data analysis"
      ]
    },
    {
      title: "Security Solutions",
      description: "Enhance the security of your vehicles and assets with cutting-edge technology.",
      icon: Shield,
      features: [
        "Remote immobilization",
        "Tamper alerts",
        "SOS emergency button",
        "Unauthorized movement detection",
        "24/7 monitoring"
      ]
    },
    {
      title: "Smart Notifications",
      description: "Stay informed with intelligent alerts about your fleet's activities and status.",
      icon: Bell,
      features: [
        "Customizable alert settings",
        "Geofence entry/exit notifications",
        "Speeding alerts",
        "Engine status updates",
        "Battery level warnings"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-24"> {/* Added padding top for fixed navbar */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Innovative Telematics Solutions</h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Trackalways Africa provides comprehensive telematics solutions to transform how businesses track, manage, and secure their assets and fleet.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="space-y-24">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} gap-8 items-center`}>
                  <div className="md:w-1/2 bg-gradient-to-br from-blue-50 to-blue-100 p-12 rounded-lg flex justify-center items-center shadow-lg">
                    <Icon size={140} className="text-blue-600" />
                  </div>
                  <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold text-blue-900 mb-4">{solution.title}</h2>
                    <p className="text-lg text-gray-700 mb-6">{solution.description}</p>
                    <ul className="space-y-3">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="bg-green-500 text-white rounded-full p-1 flex items-center justify-center mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Solutions;
