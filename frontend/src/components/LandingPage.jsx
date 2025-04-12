import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  MapPin,
  Shield,
  ArrowRight,
  Sparkles,
  Users,
  UserPlus,
  Medal
} from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-6 h-6 text-white" />,
    label: 'Search',
    text: 'Upload a photo or describe your item',
  },
  {
    icon: <MapPin className="w-6 h-6 text-white" />,
    label: 'Locate',
    text: 'See real‑time matches on the map',
  },
  {
    icon: <Shield className="w-6 h-6 text-white" />,
    label: 'Recover',
    text: 'Securely claim your lost item',
  },
];

const LandingPage = () => {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll('.fade-in-section').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
          el.classList.add('opacity-100');
          el.classList.remove('translate-y-10');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 md:w-48 md:h-48 bg-gradient-to-r from-blue-500/30 to-cyan-400/30 rounded-full blur-lg md:blur-3xl animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}
      </div>

      {/* NAV */}
      <div className="container mx-auto px-4 py-4 md:py-8 relative z-10">
        <nav className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 backdrop-blur-md bg-slate-900/50 rounded-2xl px-4 md:px-8 py-4 shadow-2xl">
          <div className="flex items-center space-x-3 group">
            <div className="relative p-2 md:p-3 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl md:rounded-2xl transform group-hover:rotate-[25deg] transition-all duration-500">
              <MapPin className="h-5 w-5 md:h-6 md:w-6 text-white" />
              <Sparkles className="absolute -top-1 -right-1 md:-top-2 md:-right-2 h-3 w-3 md:h-4 md:w-4 text-yellow-400 animate-pulse" />
            </div>
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent tracking-tighter">
              TraceIt
            </span>
          </div>
          <div className="flex items-center space-x-4 md:space-x-6 w-full md:w-auto justify-between">
            <Link
              to="/login"
              className="text-sm md:text-base text-slate-300 hover:text-white transition-all duration-300 hover:bg-slate-800/50 px-3 py-1.5 md:px-6 md:py-2 rounded-full border border-slate-700/50 hover:border-cyan-400/30 relative group flex-1 md:flex-none text-center"
            >
              <span className="relative z-10">Login</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300" />
            </Link>
            <Link
              to="/register"
              className="text-sm md:text-base relative inline-flex items-center justify-center px-4 py-2 md:px-8 md:py-3 overflow-hidden font-medium group bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] flex-1 md:flex-none"
            >
              <span className="absolute right-0 w-6 h-6 md:w-8 md:h-8 -mt-8 md:-mt-12 transition-all duration-1000 transform translate-x-8 md:translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-96 ease" />
              <span className="relative text-white flex items-center space-x-1.5 md:space-x-2">
                <span>Get Started</span>
                <ArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </nav>
      </div>

      <main className="container mx-auto px-4 pt-16 md:pt-32 pb-16 md:pb-48 relative z-10">
        {/* Hero */}
        <div className="text-center mb-12 md:mb-24 fade-in-section opacity-0 translate-y-10 transition-all duration-700">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent leading-tight animate-gradient-x">
            Never Lose What<br className="hidden md:block" /> Matters Most
          </h1>
          <p className="text-base md:text-xl text-slate-300 max-w-xs md:max-w-2xl mx-auto leading-relaxed mb-6 md:mb-8">
            AI-powered lost item recovery with blockchain security and real-time tracking
          </p>
        </div>

        {/* Features (equal width cards on mobile) */}
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-24">
          {[
            {
              icon: <Search className="h-6 w-6 md:h-8 md:w-8" />,
              title: 'Smart Search',
              description: 'AI-powered image recognition and natural language search',
              color: 'from-blue-500 to-cyan-400',
            },
            {
              icon: <MapPin className="h-6 w-6 md:h-8 md:w-8" />,
              title: 'Live Tracking',
              description: 'Real-time location tracking with community updates',
              color: 'from-purple-500 to-fuchsia-400',
            },
            {
              icon: <Shield className="h-6 w-6 md:h-8 md:w-8" />,
              title: 'Secure Recovery',
              description: 'Blockchain-verified transactions and encryption',
              color: 'from-green-500 to-emerald-400',
            },
          ].map((f, i) => (
            <div key={i} className="w-full max-w-sm">
              <div
                className={`fade-in-section opacity-0 translate-y-10 transition-all duration-700 backdrop-blur-md bg-slate-800/20 p-4 md:p-8 rounded-xl md:rounded-3xl border border-slate-700/30 hover:border-${f.color.split(' ')[0]}/30 relative overflow-hidden group hover:bg-slate-800/30 cursor-pointer`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${f.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <div className="relative z-10 text-center">
                  <div
                    className={`mb-4 md:mb-6 p-2 md:p-4 w-max bg-gradient-to-br ${f.color} rounded-lg md:rounded-2xl group-hover:scale-110 transition-transform duration-300 mx-auto`}
                  >
                    {f.icon}
                  </div>
                  <h3 className="text-lg md:text-2xl font-semibold text-white mb-2 md:mb-4">
                    {f.title}
                  </h3>
                  <p className="text-xs md:text-base text-slate-400 leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trusted by Many */}
        <div className="mb-12 md:mb-24 fade-in-section opacity-0 translate-y-10 transition-all duration-700">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Trusted by Many</h2>
            <p className="text-slate-400">Join thousands of satisfied users worldwide</p>
          </div>
          <div className="flex flex-row justify-center overflow-x-auto md:overflow-visible space-x-4 md:grid md:grid-cols-3 md:gap-6">
            <div className="flex-shrink-0 bg-slate-800/20 backdrop-blur-md rounded-2xl p-4 md:p-6 text-center transition-all hover:scale-105">
              <Users className="text-blue-500 w-10 h-10 mx-auto mb-3" />
              <h3 className="text-xl md:text-2xl font-bold text-white">1K+</h3>
              <p className="text-slate-400">Satisfied Users</p>
            </div>
            <div className="flex-shrink-0 bg-slate-800/20 backdrop-blur-md rounded-2xl p-4 md:p-6 text-center transition-all hover:scale-105">
              <UserPlus className="text-cyan-400 w-10 h-10 mx-auto mb-3" />
              <h3 className="text-xl md:text-2xl font-bold text-white">1K+</h3>
              <p className="text-slate-400">Recovered Items</p>
            </div>
            <div className="flex-shrink-0 bg-slate-800/20 backdrop-blur-md rounded-2xl p-4 md:p-6 text-center transition-all hover:scale-105">
              <Medal className="text-fuchsia-400 w-10 h-10 mx-auto mb-3" />
              <h3 className="text-xl md:text-2xl font-bold text-white">99.8%</h3>
              <p className="text-slate-400">Success Rate</p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-12 md:mb-24 fade-in-section opacity-0 translate-y-10 transition-all duration-700">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-slate-400">A quick, interactive guide to get you started</p>
          </div>
          <div className="flex items-center overflow-x-auto snap-x snap-mandatory px-4 space-x-4 md:justify-between md:overflow-visible">
            {steps.map((s, i) => (
              <React.Fragment key={i}>
                <div className="snap-center flex-shrink-0 w-60 bg-slate-800/20 backdrop-blur-md p-6 rounded-xl hover:bg-slate-800/30 transition-all">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full mb-4 mx-auto">
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 text-center">{s.label}</h3>
                  <p className="text-slate-300 text-sm text-center">{s.text}</p>
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight className="flex-shrink-0 text-slate-500 w-6 h-6 mx-2" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center fade-in-section opacity-0 translate-y-10 transition-all duration-700">
          <Link
            to="/register"
            className="relative inline-flex items-center justify-center px-8 py-3 md:px-14 md:py-5 overflow-hidden font-medium text-white group bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg shadow-xl hover:scale-[1.02] transition-all duration-300 hover:bg-gradient-to-bl"
          >
            <span>Start Free Trial</span>
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 relative z-10">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
            <div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-cyan-400" />
                <span className="text-base font-medium text-slate-300">TraceIt</span>
              </div>
              <p className="mt-2 text-xs text-slate-400 max-w-xs">
                Secure, decentralized item recovery solutions
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 md:gap-16">
              <div>
                <h4 className="text-sm text-slate-300 font-medium mb-2">Solutions</h4>
                <Link to="/features" className="block text-xs text-slate-400 hover:text-cyan-400 mb-1">Features</Link>
                <Link to="/security" className="block text-xs text-slate-400 hover:text-cyan-400 mb-1">Security</Link>
                <Link to="/enterprise" className="block text-xs text-slate-400 hover:text-cyan-400">Enterprise</Link>
              </div>
              <div>
                <h4 className="text-sm text-slate-300 font-medium mb-2">Company</h4>
                <Link to="/about" className="block text-xs text-slate-400 hover:text-cyan-400 mb-1">About</Link>
                <Link to="/blog" className="block text-xs text-slate-400 hover:text-cyan-400 mb-1">Blog</Link>
                <Link to="/careers" className="block text-xs text-slate-400 hover:text-cyan-400">Careers</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700/50 mt-6 pt-4 text-center text-xs text-slate-400">
            &copy; 2024 TraceIt. All rights reserved.{' '}
            <Link to="/terms" className="hover:text-white">Terms</Link> •{' '}
            <Link to="/privacy" className="hover:text-white">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
