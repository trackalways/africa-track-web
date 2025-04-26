
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { User, Briefcase, Users } from 'lucide-react';

const AboutUs = () => {
  const teamMembers = [
    { name: 'Prateek Jain', position: 'Director & CEO', icon: Briefcase },
    { name: 'Shivam Taneja', position: 'CTO', icon: Briefcase },
    { name: 'George Ndua Nyagatumbu', position: 'Sales Executive', icon: Users },
    { name: 'Derrick Muthomi', position: 'Sales Executive', icon: Users },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-24"> {/* Added padding top for fixed navbar */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Get to know Trackalways Africa - your trusted partner for innovative telematics solutions across the continent.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12 flex-grow">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg mb-12 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-blue-900">Driven by innovation. Backed by trust.</h2>
              <p className="text-lg text-gray-700 mb-6">
                Trackalways Africa is a leading telematics solutions provider based in Nairobi, Kenya and originated from India. 
                We offer a full range of GPS tracking hardware, AI-powered dash cams, BLE fuel sensors, magnetic trackers, asset trackers, 
                and accessories—all powered by a smart, scalable telematics platform.
              </p>
              <p className="text-lg text-gray-700">
                We partner with businesses across Africa to enhance fleet visibility, asset security, and operational efficiency. 
                As a trusted local distributor and C&F agent for global brands, we provide reliable support, storage, 
                and branded infrastructure to help our partners grow in the African market.
              </p>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-blue-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Trackalways Africa, we are redefining the future of mobility and asset security across the continent. 
                Headquartered in Nairobi, Kenya and originated from India, we are a dynamic technology company offering a 
                complete suite of telematics solutions tailored for businesses, governments, and individual users.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                From cutting-edge GPS hardware to advanced AI-based dashcams, BLE fuel sensors, and magnetic/asset trackers, 
                our product portfolio is designed to deliver real-time insights, optimize operations, and enhance safety. 
                Powered by a robust and intuitive telematics platform, our solutions serve a wide range of industries including 
                logistics, transport, finance, agriculture, and personal mobility.
              </p>
              <p className="text-lg text-gray-700">
                We go beyond hardware — Trackalways Africa offers seamless system integrations, local support, and reliable distribution, 
                making us the go-to C&F and technology partner for global telematics brands seeking entry and expansion across East Africa and beyond.
                With innovation at our core and trust as our foundation, we are committed to transforming how Africa tracks, moves, and secures.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-blue-900 mb-6">Our Team</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamMembers.map((member, index) => {
                  const Icon = member.icon;
                  return (
                    <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                      <div className="bg-blue-100 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                        <Icon size={32} className="text-blue-900" />
                      </div>
                      <h3 className="text-xl font-semibold text-blue-900">{member.name}</h3>
                      <p className="text-gray-600">{member.position}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
