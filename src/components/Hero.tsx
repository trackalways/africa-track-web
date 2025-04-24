
import React from 'react';
import { Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-blue-900 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Trackalways: Empowering Africa with Smarter Telematics
          </h1>
          <p className="text-xl text-blue-100">
            Transform your fleet management with cutting-edge GPS tracking, fuel monitoring, and AI-powered safety solutions.
          </p>
          <p className="text-2xl font-semibold text-orange-300">
            Driven by innovation. Backed by trust.
          </p>
          <div className="flex space-x-4">
            <Link to="/solutions">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition">
                Explore Solutions
              </button>
            </Link>
            <Link to="/contact">
              <button className="border border-white hover:bg-white hover:text-blue-900 text-white px-6 py-3 rounded-lg transition">
                Contact Sales
              </button>
            </Link>
          </div>
        </div>
        <div className="hidden md:block md:w-1/3">
          <Truck size={300} className="text-white opacity-50" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
