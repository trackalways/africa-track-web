
import React from 'react';
import { Camera, Eye } from 'lucide-react';

const DashCams = () => {
  const dashCams = [
    { 
      name: 'MC402', 
      description: 'Advanced AI dash cam with multiple cameras and safety features',
      icon: Camera
    },
    { 
      name: 'MC202X', 
      description: 'Real-time driving behavior monitoring',
      icon: Eye
    },
    { 
      name: 'JC400', 
      description: 'AI-powered dash cam for fleet management',
      icon: Camera
    }
  ];

  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">AI Dash Cams</h2>
        <p className="text-gray-600">Enhance driver safety with intelligent monitoring</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {dashCams.map((cam, index) => {
          const Icon = cam.icon;
          return (
            <div 
              key={index} 
              className="bg-gray-100 rounded-lg p-6 text-center hover:bg-blue-50 transition"
            >
              <Icon className="mx-auto text-blue-500 mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">{cam.name}</h3>
              <p className="text-gray-600">{cam.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DashCams;
