import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Shield } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB]">
      <header className="container mx-auto px-4 py-6 flex flex-wrap justify-between items-center">
        <div className="flex items-center space-x-2">
          <MapPin className="h-8 w-8 text-[#1E88E5]" />
          <span className="text-2xl font-bold text-[#0D47A1]">TraceIt</span>
        </div>
        <nav className="space-x-4">
          <Link to="/login" className="text-[#1565C0] hover:text-[#1E88E5] transition">Login</Link>
          <Link to="/register" className="bg-[#1976D2] text-white px-4 py-2 rounded-md hover:bg-[#1565C0] transition">Register</Link>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0D47A1] mb-4">Find What You've Lost</h1>
          <p className="text-xl text-[#1565C0] max-w-2xl mx-auto">TraceIt helps you locate and recover your lost belongings quickly and efficiently. From IDs to personal items, we've got you covered.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            { icon: <Search className="h-12 w-12 text-[#1E88E5]" />, title: "Easy Search", description: "Quickly search through our database of found items using keywords or categories." },
            { icon: <MapPin className="h-12 w-12 text-[#1E88E5]" />, title: "Nationwide Coverage", description: "We cover all regions of the country, ensuring a wide reach for your lost items." },
            { icon: <Shield className="h-12 w-12 text-[#1E88E5]" />, title: "Secure & Reliable", description: "Your information is kept confidential, and our process is designed to be secure and trustworthy." }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[#1565C0] mb-2">{feature.title}</h3>
              <p className="text-[#1976D2]">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/register" className="bg-[#1976D2] text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-[#1565C0] transition inline-block">
            Start Finding Your Items
          </Link>
        </div>
      </main>

      <footer className="bg-[#1976D2] text-[#E3F2FD] py-8">

        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">&copy; 2024 TraceIt. All rights reserved.</div>
          <div className="space-x-4">
            <Link to="/terms" className="hover:text-white transition">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
