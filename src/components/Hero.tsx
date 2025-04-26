
import React from 'react';
import { Truck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 space-y-7">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Trackalways: Empowering Africa with Smarter Telematics
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            Transform your fleet management with cutting-edge GPS tracking, fuel monitoring, and AI-powered safety solutions.
          </p>
          <p className="text-2xl font-semibold text-orange-300">
            Driven by innovation. Backed by trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link to="/solutions">
              <button className="group bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center">
                Explore Solutions
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link to="/contact">
              <button className="border border-white hover:bg-white hover:text-blue-900 text-white px-6 py-3 rounded-lg transition-all duration-300 w-full sm:w-auto justify-center">
                Contact Sales
              </button>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex md:w-1/3 justify-center items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
            <Truck size={280} className="text-white relative z-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
