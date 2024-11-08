import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Shield, ArrowRight } from 'lucide-react';

const LandingPage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-section');
      elements.forEach(element => {
        const top = element.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          element.classList.add('opacity-100');
          element.classList.add('translate-y-0');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB] relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1E88E5_1px,transparent_1px)] [background-size:40px_40px] opacity-5"></div>
      <div className="absolute inset-0 backdrop-blur-[100px]"></div>

      <div className="container mx-auto px-4 py-6 relative z-10">
        {/* Logo */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <MapPin className="h-8 w-8 text-[#1E88E5] transform group-hover:rotate-12 transition-all duration-300" />
              <div className="absolute -inset-1 bg-blue-500/20 rounded-full blur group-hover:bg-blue-500/30 transition-all duration-300"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#0D47A1] to-[#1976D2] bg-clip-text text-transparent">
              TraceIt
            </span>
          </div>
          
          {/* Login/Register buttons */}
          <div className="space-x-6">
            <Link 
              to="/login" 
              className="text-[#1565C0] hover:text-[#1E88E5] transition-all duration-300 relative inline-block
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                after:bg-[#1E88E5] hover:after:w-full after:transition-all"
            >
              Login
            </Link>
            <Link 
              to="/register" 
              className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden 
                font-medium text-[#1976D2] transition duration-300 ease-out border-2 border-[#1976D2] 
                rounded-md shadow-md group hover:text-white"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white 
                duration-300 -translate-x-full bg-[#1976D2] group-hover:translate-x-0 ease">
                <ArrowRight className="h-5 w-5" />
              </span>
              <span className="absolute flex items-center justify-center w-full h-full transition-all 
                duration-300 transform group-hover:translate-x-full ease">Register</span>
              <span className="relative invisible">Register</span>
            </Link>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-20 fade-in-section opacity-0 translate-y-5 transition-all duration-700">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-[#0D47A1] to-[#1976D2] 
            bg-clip-text text-transparent leading-tight">
            Find What You've Lost
          </h1>
          <p className="text-xl text-[#1565C0] max-w-2xl mx-auto leading-relaxed">
            TraceIt helps you locate and recover your lost belongings quickly and efficiently. 
            From IDs to personal items, we've got you covered.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            { icon: <Search />, title: "Easy Search", description: "Quickly search through our database of found items using keywords or categories." },
            { icon: <MapPin />, title: "Nationwide Coverage", description: "We cover all regions of the country, ensuring a wide reach for your lost items." },
            { icon: <Shield />, title: "Secure & Reliable", description: "Your information is kept confidential, and our process is designed to be secure and trustworthy." }
          ].map((feature, index) => (
            <div key={index} 
              className="group fade-in-section opacity-0 translate-y-5 transition-all duration-700 
                backdrop-blur-md bg-white/40 p-8 rounded-2xl shadow-lg hover:shadow-2xl 
                hover:-translate-y-2"
            >
              <div className="flex justify-center mb-6">
                <div className="relative p-4 bg-gradient-to-br from-[#1E88E5] to-[#1976D2] rounded-2xl 
                  group-hover:scale-110 transition-transform duration-300">
                  {React.cloneElement(feature.icon, { className: "h-12 w-12 text-white" })}
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-[#1565C0] mb-4">{feature.title}</h3>
              <p className="text-[#1976D2] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center fade-in-section opacity-0 translate-y-5 transition-all duration-700">
          <Link 
            to="/register" 
            className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden 
              font-bold text-white transition-all duration-300 ease-out bg-gradient-to-r 
              from-[#1976D2] to-[#1E88E5] rounded-xl shadow-md hover:scale-105 
              hover:shadow-xl group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white 
              duration-300 transform -translate-x-full bg-[#1565C0] group-hover:translate-x-0 ease">
              Start Now <ArrowRight className="h-5 w-5 ml-2" />
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-white 
              transition-all duration-300 transform group-hover:translate-x-full ease">
              Start Finding Your Items
            </span>
            <span className="relative invisible">Start Finding Your Items</span>
          </Link>
        </div>
      </main>

      <footer className="bg-gradient-to-r from-[#1976D2] to-[#1E88E5] text-white py-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0 font-medium">&copy; 2024 TraceIt. All rights reserved.</div>
            <div className="space-x-8">
              <Link 
                to="/terms" 
                className="hover:text-[#E3F2FD] transition-colors duration-300 relative
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 
                  after:h-0.5 after:bg-[#E3F2FD] hover:after:w-full after:transition-all"
              >
                Terms of Service
              </Link>
              <Link 
                to="/privacy" 
                className="hover:text-[#E3F2FD] transition-colors duration-300 relative
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 
                  after:h-0.5 after:bg-[#E3F2FD] hover:after:w-full after:transition-all"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;