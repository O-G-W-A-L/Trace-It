"use client"

import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { Search, MapPin, Shield, ArrowRight, Sparkles, Users, UserPlus, Medal, Zap, Globe, Lock } from "lucide-react"

const steps = [
  {
    icon: <Search className="w-6 h-6 text-white" />,
    label: "Search",
    text: "Upload a photo or describe your item with AI-powered precision.",
  },
  {
    icon: <MapPin className="w-6 h-6 text-white" />,
    label: "Locate",
    text: "Visualize real-time matches on an interactive, intuitive map.",
  },
  {
    icon: <Shield className="w-6 h-6 text-white" />,
    label: "Recover",
    text: "Securely claim your lost item with blockchain verification.",
  },
]

const LandingPage = () => {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".fade-in-section").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
          el.classList.add("opacity-100", "translate-y-0")
          el.classList.remove("opacity-0", "translate-y-10")
        }
      })
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 md:w-48 md:h-48 bg-gradient-to-r from-teal-500/30 to-cyan-400/30 rounded-full blur-3xl animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <div className="container mx-auto px-4 py-4 md:py-6 relative z-10">
        <nav className="flex justify-between items-center backdrop-blur-xl bg-slate-900/30 rounded-2xl px-4 md:px-6 py-4 shadow-2xl border border-white/10">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative p-2 md:p-3 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-xl md:rounded-2xl transform group-hover:rotate-12 transition-all duration-500 shadow-lg">
                <MapPin className="h-5 w-5 md:h-6 md:w-6 text-white" />
                <Sparkles className="absolute -top-1 -right-1 md:-top-2 md:-right-2 h-3 w-3 md:h-4 md:w-4 text-yellow-400 animate-pulse" />
              </div>
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent tracking-tight">
                TraceIt
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center">
            <Link
              to="/login"
              className="text-center text-sm md:text-base text-slate-300 hover:text-white transition-all duration-300 hover:bg-slate-800/50 px-4 md:px-6 py-2 rounded-full border border-slate-700/50 hover:border-teal-400/30 relative group"
            >
              <span className="relative z-10">Login</span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300" />
            </Link>
            <Link
              to="/register"
              className="hidden md:inline-flex ml-3 relative items-center justify-center px-4 md:px-8 py-2 md:py-3 overflow-hidden font-medium group bg-gradient-to-br from-teal-500 to-cyan-400 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <span className="absolute right-0 w-6 h-6 md:w-8 md:h-8 -mt-8 md:-mt-12 transition-all duration-1000 transform translate-x-8 md:translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-96 ease" />
              <span className="relative text-white flex items-center space-x-1 md:space-x-2 text-sm md:text-base">
                <span>Get Started</span>
                <ArrowRight className="h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <main className="container mx-auto px-4 pt-12 md:pt-20 pb-20 md:pb-32 relative z-10">
        <div className="text-center mb-16 md:mb-20 fade-in-section opacity-0 translate-y-10 transition-all duration-700">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent leading-tight px-4">
            <span className="block">Reuniting You With</span>
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-white">What Matters Most</span>
              <div className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-0.5 md:h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full z-0"></div>
            </span>
          </h1>
          <p className="text-base md:text-xl text-slate-300 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed mb-8 md:mb-10 px-4">
            Empowering communities with AI-driven lost item recovery, secured by blockchain technology and updated in
            real-time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <Link
              to="/register"
              className="w-full sm:w-auto group relative inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium text-white bg-gradient-to-r from-teal-500 to-cyan-400 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Zap className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/about"
              className="w-full sm:w-auto group inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium text-slate-300 border border-slate-600 rounded-2xl hover:bg-slate-800/50 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Enhanced Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <Search className="h-8 w-8" />,
              title: "AI-Powered Search",
              description:
                "Advanced image recognition and natural language processing to find your lost items instantly.",
              color: "from-teal-500 to-cyan-400",
              bgColor: "from-teal-500/10 to-cyan-400/10",
            },
            {
              icon: <Globe className="h-8 w-8" />,
              title: "Real-Time Tracking",
              description:
                "Live location updates with community-powered notifications ensuring you never miss a match.",
              color: "from-emerald-500 to-teal-400",
              bgColor: "from-emerald-500/10 to-teal-400/10",
            },
            {
              icon: <Lock className="h-8 w-8" />,
              title: "Blockchain Security",
              description: "Immutable verification system with end-to-end encryption for complete peace of mind.",
              color: "from-cyan-500 to-blue-400",
              bgColor: "from-cyan-500/10 to-blue-400/10",
            },
          ].map((feature, i) => (
            <div key={i} className="w-full max-w-sm mx-auto">
              <div
                className={`fade-in-section opacity-0 translate-y-10 transition-all duration-700 backdrop-blur-xl bg-gradient-to-br ${feature.bgColor} p-8 rounded-3xl border border-white/10 hover:border-white/20 relative overflow-hidden group hover:bg-slate-800/20 cursor-pointer transform hover:scale-105`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <div className="relative z-10 text-center">
                  <div
                    className={`mb-6 p-4 w-max bg-gradient-to-br ${feature.color} rounded-2xl group-hover:scale-110 transition-transform duration-300 mx-auto shadow-lg`}
                  >
                    {React.cloneElement(feature.icon, { className: "text-white" })}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mb-20 fade-in-section opacity-0 translate-y-10 transition-all duration-700">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Trusted by Thousands</h2>
            <p className="text-slate-400 text-lg">Join our growing community of successful recoveries</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Users, value: "15K+", label: "Active Users", color: "from-teal-500 to-cyan-400" },
              { icon: UserPlus, value: "8K+", label: "Items Recovered", color: "from-emerald-500 to-teal-400" },
              { icon: Medal, value: "99.2%", label: "Success Rate", color: "from-cyan-500 to-blue-400" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-slate-800/30 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/10 hover:border-white/20 transition-all hover:scale-105"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.color} mb-4`}>
                  <stat.icon className="text-white w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mb-20 fade-in-section opacity-0 translate-y-10 transition-all duration-700">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">How Trace-It Works</h2>
            <p className="text-slate-400 text-lg">Three simple steps to recover your lost items</p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
            {steps.map((step, i) => (
              <React.Fragment key={i}>
                <div className="flex-shrink-0 w-80 bg-slate-800/30 backdrop-blur-xl p-8 rounded-3xl hover:bg-slate-800/40 transition-all border border-white/10 hover:border-white/20 transform hover:scale-105">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-2xl mb-6 mx-auto shadow-lg">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4 text-center">{step.label}</h3>
                  <p className="text-slate-300 text-center leading-relaxed">{step.text}</p>
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden md:block flex-shrink-0 text-slate-500 w-8 h-8" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center fade-in-section opacity-0 translate-y-10 transition-all duration-700">
          <div className="bg-gradient-to-r from-teal-500/20 to-cyan-400/20 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of users who have successfully recovered their lost items with TraceIt.
            </p>
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium text-white bg-gradient-to-r from-teal-500 to-cyan-400 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <span>Start Your Free Trial</span>
              <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 relative z-10 bg-slate-900/50 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-xl">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-300">TraceIt</span>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-slate-300 font-medium mb-3">Product</h4>
                <div className="space-y-2">
                  <Link to="/features" className="block text-slate-400 hover:text-teal-400 transition-colors">
                    Features
                  </Link>
                  <Link to="/security" className="block text-slate-400 hover:text-teal-400 transition-colors">
                    Security
                  </Link>
                </div>
              </div>
              <div>
                <h4 className="text-slate-300 font-medium mb-3">Company</h4>
                <div className="space-y-2">
                  <Link to="/about" className="block text-slate-400 hover:text-teal-400 transition-colors">
                    About
                  </Link>
                  <Link to="/contact" className="block text-slate-400 hover:text-teal-400 transition-colors">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700/50 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 TraceIt. All rights reserved. Built with ❤️ for the community.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
