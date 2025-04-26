
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Trackalways Africa</h3>
            <p className="text-blue-100 mb-4">
              Transforming how businesses track, manage, and secure their assets and fleet across Africa.
            </p>
            <div className="flex items-center gap-2 mb-2">
              <Phone className="h-4 w-4 text-orange-300" />
              <span>+254 0116257285</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Mail className="h-4 w-4 text-orange-300" />
              <span>sales@trackalwaysafrica.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-orange-300" />
              <span>Nairobi, Kenya</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link to="/hardware" className="hover:text-orange-300 transition-colors">GPS Trackers</Link></li>
              <li><Link to="/hardware" className="hover:text-orange-300 transition-colors">Fuel Sensors</Link></li>
              <li><Link to="/hardware" className="hover:text-orange-300 transition-colors">AI Dash Cams</Link></li>
              <li><Link to="/hardware" className="hover:text-orange-300 transition-colors">Portable Trackers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-orange-300 transition-colors">About Us</Link></li>
              <li><Link to="/solutions" className="hover:text-orange-300 transition-colors">Solutions</Link></li>
              <li><Link to="/career" className="hover:text-orange-300 transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-orange-300 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {year} Trackalways Ltd. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link to="/privacy" className="hover:text-orange-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-orange-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
