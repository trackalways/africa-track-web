
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, MapPin, Mail } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      type: "Phone",
      value: "+254 0116257285",
      secondValue: "+91 9993355666",
      icon: Phone,
      color: "text-blue-500"
    },
    {
      type: "Email",
      value: "sales@trackalwaysafrica.com",
      secondValue: "support@trackalwaysafrica.com",
      icon: Mail,
      color: "text-red-500"
    },
    {
      type: "Location",
      value: "Trackalways Ltd",
      secondValue: "Nairobi, Kenya",
      icon: MapPin,
      color: "text-green-500"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Get in touch with our team for any inquiries, support, or partnership opportunities.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                <Icon className={`mx-auto ${info.color} mb-4`} size={48} />
                <h3 className="text-xl font-semibold mb-2">{info.type}</h3>
                <p className="text-gray-700">{info.value}</p>
                {info.secondValue && <p className="text-gray-700">{info.secondValue}</p>}
              </div>
            );
          })}
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Subject of your message"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea 
                  id="message" 
                  rows={6} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Your message"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-md transition"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Follow Us</h2>
            <div className="flex justify-center space-x-6">
              <a href="https://facebook.com/trackalwaysafrica" className="text-blue-900 hover:text-blue-700">
                Facebook
              </a>
              <a href="https://twitter.com/trackalwaysafrica" className="text-blue-900 hover:text-blue-700">
                Twitter
              </a>
              <a href="https://instagram.com/trackalwaysafrica" className="text-blue-900 hover:text-blue-700">
                Instagram
              </a>
              <a href="https://linkedin.com/company/trackalwaysafrica" className="text-blue-900 hover:text-blue-700">
                LinkedIn
              </a>
            </div>
          </div>
          
          <div className="h-96 rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35853771956!2d36.68258851027431!3d-1.3028617916110456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sin!4v1650296765429!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
