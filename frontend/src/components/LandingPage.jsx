import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Shield } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <MapPin className="h-8 w-8 text-indigo-600" />
          <span className="text-2xl font-bold text-gray-800">TraceIt</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/login" className="text-gray-600 hover:text-indigo-600 transition">Login</Link></li>
            <li><Link to="/register" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">Register</Link></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Find What You've Lost</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">TraceIt helps you locate and recover your lost belongings quickly and efficiently. From IDs to personal items, we've got you covered.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={<Search className="h-12 w-12 text-indigo-600" />}
            title="Easy Search"
            description="Quickly search through our database of found items using keywords or categories."
          />
          <FeatureCard
            icon={<MapPin className="h-12 w-12 text-indigo-600" />}
            title="Nationwide Coverage"
            description="We cover all regions of the country, ensuring a wide reach for your lost items."
          />
          <FeatureCard
            icon={<Shield className="h-12 w-12 text-indigo-600" />}
            title="Secure & Reliable"
            description="Your information is kept confidential, and our process is designed to be secure and trustworthy."
          />
        </div>

        <div className="text-center">
          <Link to="/register" className="bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-indigo-700 transition">
            Start Finding Your Items
          </Link>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>&copy; 2024 TraceIt. All rights reserved.</div>
          <div className="flex space-x-4">
            <Link to="/terms" className="hover:text-indigo-400 transition">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-indigo-400 transition">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default LandingPage;
