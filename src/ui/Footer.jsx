// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold">Company</h2>
          <ul className="list-reset space-y-2">
            <li><button type="button" className="text-gray-400 hover:text-gray-200">About Us</button></li>
            <li><button type="button" className="text-gray-400 hover:text-gray-200">Careers</button></li>
            <li><button type="button" className="text-gray-400 hover:text-gray-200">Contact Us</button></li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold">Help</h2>
          <ul className="list-reset space-y-2">
            <li><button type="button" className="text-gray-400 hover:text-gray-200">FAQ</button></li>
            <li><button type="button" className="text-gray-400 hover:text-gray-200">Shipping</button></li>
            <li><button type="button" className="text-gray-400 hover:text-gray-200">Returns</button></li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold">Follow Us</h2>
          <ul className="list-reset space-y-2">
            <li><button type="button" className="text-gray-400 hover:text-gray-200">Facebook</button></li>
            <li><button type="button" className="text-gray-400 hover:text-gray-200">Twitter</button></li>
            <li><button type="button" className="text-gray-400 hover:text-gray-200">Instagram</button></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-600 py-4 text-center">
        <p className="text-gray-400">&copy; 2023 E-Commerce Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
