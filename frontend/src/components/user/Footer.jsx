import React from 'react';
import { MapPin, Facebook, X, Instagram, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white w-full border-t border-gray-800">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold tracking-tight">TraceIt</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bridging the gap between lost items and their owners through community-powered solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Resources</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                About Us
              </Link>
              <Link to="/faq" className="text-gray-300 hover:text-white transition-colors duration-200">
                FAQs
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                Contact
              </Link>
              <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+256776509609" className="text-gray-300 hover:text-white transition-colors duration-200">
                  +256 776 509 609
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaWhatsapp className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a 
                  href="https://wa.me/+256776509609"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  WhatsApp Chat
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
                aria-label="Twitter"
              >
                <X className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} TraceIt. All rights reserved.
            <span className="mx-2">|</span>
            Developed by <a href="https://hunter-ten-woad.vercel.app/">HUNTER</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;