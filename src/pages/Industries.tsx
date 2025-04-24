
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Truck, Building, Factory, Car, Shield, Briefcase } from 'lucide-react';

const Industries = () => {
  const industriesList = [
    {
      name: "Transportation & Logistics",
      description: "Optimize fleet operations, reduce fuel costs, and improve delivery times with our comprehensive telematics solutions.",
      benefits: [
        "Real-time vehicle tracking and route optimization",
        "Fuel consumption monitoring and cost reduction",
        "Driver behavior analysis and safety improvement",
        "Maintenance scheduling and vehicle health monitoring",
        "Cargo security and temperature monitoring"
      ],
      icon: Truck
    },
    {
      name: "Construction & Mining",
      description: "Monitor valuable equipment, prevent theft, and optimize resource utilization on your worksites.",
      benefits: [
        "Asset utilization tracking and optimization",
        "Equipment maintenance management",
        "Fuel theft prevention",
        "Geofencing for worksite security",
        "Idle time reduction and productivity improvement"
      ],
      icon: Factory
    },
    {
      name: "Education & School Transportation",
      description: "Enhance safety and efficiency of school transportation with our dedicated school bus management solutions.",
      benefits: [
        "Real-time bus tracking for parents and administrators",
        "Student attendance and boarding verification",
        "Driver behavior monitoring for improved safety",
        "Route optimization and schedule adherence",
        "Emergency notification system"
      ],
      icon: Car
    },
    {
      name: "Public Sector & Government",
      description: "Improve public service delivery and optimize government fleet operations with transparent monitoring solutions.",
      benefits: [
        "Emergency response time improvement",
        "Resource allocation optimization",
        "Public transportation management",
        "Vehicle misuse prevention",
        "Comprehensive audit trails for transparency"
      ],
      icon: Building
    },
    {
      name: "Security & Personal Safety",
      description: "Protect valuable assets, vehicles, and individuals with our advanced tracking and security solutions.",
      benefits: [
        "Real-time tracking of valuable assets",
        "Remote vehicle immobilization",
        "SOS emergency response systems",
        "Tamper detection and alerts",
        "Historical movement data for investigations"
      ],
      icon: Shield
    },
    {
      name: "Corporate Fleets",
      description: "Optimize your corporate fleet operations, reduce costs, and improve employee safety.",
      benefits: [
        "Employee safety and security enhancements",
        "Operational cost reduction",
        "Vehicle utilization improvement",
        "Automated mileage and expense reporting",
        "Company policy compliance monitoring"
      ],
      icon: Briefcase
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Trackalways Africa delivers specialized telematics solutions across diverse industries to enhance operations, 
            security, and efficiency.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesList.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="bg-blue-50 p-6 flex justify-center">
                  <Icon size={60} className="text-blue-900" />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-blue-900 mb-3">{industry.name}</h2>
                  <p className="text-gray-700 mb-6">{industry.description}</p>
                  <h3 className="text-lg font-semibold mb-3">Key Benefits:</h3>
                  <ul className="space-y-2">
                    {industry.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Our Market Presence</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Vehicle Dealerships</h3>
              <p className="text-gray-700">
                We have partnered with major vehicle dealerships such as Hyundai, Toyota, and others across 
                Africa, providing integrated telematics solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Retail & Accessory Dealers</h3>
              <p className="text-gray-700">
                In the retail sector, we collaborate with various vehicle accessory dealers through a network 
                of distributors across the continent.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Fleet Operators</h3>
              <p className="text-gray-700">
                We serve both private and public sector clients with large fleets in taxi/cab services, 
                logistics, and government operations.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Industries;
