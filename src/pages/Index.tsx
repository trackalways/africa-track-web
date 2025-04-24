
import React from 'react';
import Hero from '@/components/Hero';
import FuelSensors from '@/components/FuelSensors';
import GPSTrackers from '@/components/GPSTrackers';
import DashCams from '@/components/DashCams';
import PortableTrackers from '@/components/PortableTrackers';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <div className="container mx-auto px-4 py-12 space-y-16">
        <FuelSensors />
        <GPSTrackers />
        <DashCams />
        <PortableTrackers />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
