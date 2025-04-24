
import React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-12 bg-blue-50 rounded-lg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Contact Trackalways</h2>
          <p className="text-gray-600">Get in touch with our expert team</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Phone className="mx-auto text-blue-500 mb-4" size={48} />
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="text-gray-700">+254 01156446</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <MapPin className="mx-auto text-green-500 mb-4" size={48} />
            <h3 className="text-xl font-semibold">Location</h3>
            <p className="text-gray-700">Kenya</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Mail className="mx-auto text-red-500 mb-4" size={48} />
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-gray-700">info@trackalways.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
