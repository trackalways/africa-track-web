
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FuelSensors from '@/components/FuelSensors';
import GPSTrackers from '@/components/GPSTrackers';
import DashCams from '@/components/DashCams';
import PortableTrackers from '@/components/PortableTrackers';
import SoftwareFeatures from '@/components/SoftwareFeatures';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <div className="container mx-auto px-4 py-12 space-y-16">
        <SoftwareFeatures />
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
