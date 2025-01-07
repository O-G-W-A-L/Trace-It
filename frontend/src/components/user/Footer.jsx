import React from 'react';
import { MapPin, Facebook, Twitter as X, Instagram, Linkedin, Github } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <div className="flex items-center justify-center md:justify-start">
              <MapPin className="h-6 w-6 text-blue-500" />
              <span className="ml-2 text-xl font-bold">TraceIt</span>
            </div>
            <p className="text-sm text-gray-400 mt-2 text-center md:text-left">
              Reuniting people with their lost belongings.
            </p>
          </div>
          <div className="w-full md:w-auto mb-4 md:mb-0 flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <X className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaWhatsapp className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <Github className="h-5 w-5" />
            </a>
          </div>
          <div className="w-full md:w-auto">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors duration-300">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy</Link></li>
            </ul>
            <p className="text-xs text-gray-500 mt-4 text-center md:text-right">
              &copy; {new Date().getFullYear()} TraceIt. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
