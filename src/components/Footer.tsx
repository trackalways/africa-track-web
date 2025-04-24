
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 Trackalways Ltd. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="hover:text-blue-300">Privacy Policy</a>
          <a href="#" className="hover:text-blue-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
