import React, { useEffect } from "react"
import { Search, MapPin, Shield, ArrowRight, Sparkles, Users, CheckCircle, Zap, Globe, Lock, Star, Play } from "lucide-react"
import { Link } from "react-router-dom"
import Footer from "./user/Footer"

const LandingPage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in')
        }
      })
    })
    
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Navigation functions are handled via Link component for client-side routing
  const handleAbout = () => window.location.href = '/about'
  const handleFeatures = () => window.location.href = '/features'
  const handleSecurity = () => window.location.href = '/security'
  const handleContact = () => window.location.href = '/contact'

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Content with Background Extending to Nav */}
      <div className="w-full relative z-10 bg-gradient-to-br from-slate-100 to-indigo-100 rounded-r-[6rem] rounded-l-0 rounded-t-0 rounded-b-0 overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-96 h-96 bg-gradient-to-r from-teal-400 to-cyan-300 rounded-full blur-3xl"
              style={{
                left: `${20 + i * 30}%`,
                top: `${10 + i * 20}%`,
                animationDelay: `${i * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Navigation */}
        <nav className="container mx-auto px-4 py-6 relative z-20">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="relative p-2 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-xl shadow-lg">
                <MapPin className="h-6 w-6 text-white" />
                <Sparkles className="absolute -top-1 -right-1 h-3 w-3 text-yellow-400" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
                TraceIt
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="px-6 py-2 text-slate-700 hover:text-teal-600 font-medium transition-colors"
              >
                Log in
              </Link>
              <Link
                to="/register"
                className="px-6 py-2 bg-gradient-to-r from-teal-500 to-cyan-400 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
              >
                Sign Up Free
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="container mx-auto px-6 sm:px-8 lg:px-4 py-16 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="lg:pr-8">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
                Lost Item Recovery
                <span className="block text-transparent bg-gradient-to-r from-teal-500 to-cyan-400 bg-clip-text">
                  Done Right
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Reunite with what matters most through AI-powered search — trusted by 10,000+ users.
              </p>
              
              {/* Email Signup Form */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-6 py-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-slate-700 placeholder-slate-400"
                />
                <Link to="/register" className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-400 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap">
                  Sign up free
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                  Free to start
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                  No credit card required
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                  Secure & private
                </div>
              </div>
            </div>

            {/* Right Content - Dashboard Preview */}
            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transform scale-90 sm:scale-95 lg:scale-100">
                {/* Browser Header */}
                <div className="bg-slate-100 px-2 py-2 sm:px-4 sm:py-3 flex items-center border-b border-slate-200">
                  <div className="flex space-x-1 sm:space-x-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 mx-2 sm:mx-4">
                    <div className="bg-white rounded-md px-2 py-0.5 sm:px-3 sm:py-1 text-xs text-slate-500">
                      traceit.com/dashboard
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-3 sm:p-6 bg-gradient-to-br from-slate-50 to-white">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-3 sm:mb-6">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="p-1 sm:p-2 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-lg">
                        <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                      <span className="font-bold text-slate-800 text-sm sm:text-base">Dashboard</span>
                    </div>
                    <div className="flex space-x-1 sm:space-x-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-slate-200 rounded-full"></div>
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-slate-200 rounded-full"></div>
                    </div>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-3 sm:mb-6">
                    <div className="bg-white p-2 sm:p-4 rounded-xl shadow-sm border border-slate-100">
                      <div className="text-lg sm:text-2xl font-bold text-teal-600">12</div>
                      <div className="text-xs text-slate-500">Active searches</div>
                    </div>
                    <div className="bg-white p-2 sm:p-4 rounded-xl shadow-sm border border-slate-100">
                      <div className="text-lg sm:text-2xl font-bold text-emerald-600">3</div>
                      <div className="text-xs text-slate-500">Items found</div>
                    </div>
                    <div className="bg-white p-2 sm:p-4 rounded-xl shadow-sm border border-slate-100">
                      <div className="text-lg sm:text-2xl font-bold text-blue-600">89%</div>
                      <div className="text-xs text-slate-500">Success rate</div>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="bg-white rounded-xl p-2 sm:p-4 border border-slate-100">
                    <h3 className="font-semibold text-slate-800 mb-2 sm:mb-3 text-sm sm:text-base">Recent Activity</h3>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-teal-400 to-cyan-300 rounded-lg flex items-center justify-center">
                          <Search className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs sm:text-sm font-medium text-slate-800">iPhone 14 Pro</div>
                          <div className="text-xs text-slate-500">Lost in downtown area</div>
                        </div>
                        <div className="text-xs text-teal-600 font-medium">Active</div>
                      </div>
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-400 to-teal-300 rounded-lg flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs sm:text-sm font-medium text-slate-800">Leather Wallet</div>
                          <div className="text-xs text-slate-500">Found at Central Park</div>
                        </div>
                        <div className="text-xs text-emerald-600 font-medium">Found</div>
                      </div>
                    </div>
                  </div>

                  {/* Floating notification */}
                  <div className="absolute top-16 sm:top-20 right-2 sm:right-4 bg-white rounded-lg shadow-lg border border-slate-200 p-2 sm:p-3 animate-pulse">
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <div className="w-1 h-1 sm:w-2 sm:h-2 bg-teal-500 rounded-full"></div>
                      <div className="text-xs text-slate-700">New match found!</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-400 to-cyan-300 rounded-full opacity-20 animate-bounce"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-400 to-teal-300 rounded-full opacity-20 animate-bounce" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the page */}
      <main className="container mx-auto px-4 relative z-10">

        {/* Problem & Solution */}
        <div className="py-16 fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Lost items keeping you up at night?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Your search is packed with frustration, but are you truly finding results?
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            {/* Desktop Layout */}
            <div className="hidden md:grid md:grid-cols-2">
              <div className="p-8 border-r border-slate-200">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">The problem:</h3>
                <div className="space-y-4">
                  {[
                    "Hours of fruitless searching with no system",
                    "Emotional stress from losing precious items",
                    "No centralized recovery network exists",
                    "Scattered information across platforms",
                    "No verification for found items"
                  ].map((problem, i) => (
                    <div key={i} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      </div>
                      <span className="text-slate-600">{problem}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-teal-50 to-cyan-50">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">The TraceIt solution:</h3>
                <div className="space-y-4">
                  {[
                    "Centralized search system delivers instant matches",
                    "Real-time community alerts notify you immediately",
                    "Blockchain verification ensures authentic ownership",
                    "Centralized platform connects all recovery efforts",
                    "Secure meetup locations for safe exchanges"
                  ].map((solution, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-teal-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-slate-600">{solution}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden">
              <div className="p-6 space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">The problem:</h3>
                  <div className="flex items-start mb-4">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="text-slate-600">Hours of fruitless searching with no system</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">The TraceIt solution:</h3>
                  <div className="flex items-start mb-6">
                    <CheckCircle className="w-6 h-6 text-teal-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-600">Centralized search system delivers instant matches</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">The problem:</h3>
                  <div className="flex items-start mb-4">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="text-slate-600">Emotional stress from losing precious items</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">The TraceIt solution:</h3>
                  <div className="flex items-start mb-6">
                    <CheckCircle className="w-6 h-6 text-teal-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-600">Real-time community alerts notify you immediately</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">The problem:</h3>
                  <div className="flex items-start mb-4">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="text-slate-600">No centralized recovery network exists</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">The TraceIt solution:</h3>
                  <div className="flex items-start mb-6">
                    <CheckCircle className="w-6 h-6 text-teal-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-600">Blockchain verification ensures authentic ownership</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">The problem:</h3>
                  <div className="flex items-start mb-4">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="text-slate-600">Scattered information across platforms</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">The TraceIt solution:</h3>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-teal-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-slate-600">Centralized platform connects all recovery efforts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Powerful Features */}
        <div className="py-16 fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Powerful features, minimum effort
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Built for everyone, designed for results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Search className="h-8 w-8" />,
                title: "Smart Search",
                description: "Upload photos or describe your item. Our AI instantly matches against our community database.",
                color: "from-teal-500 to-cyan-400",
                bgColor: "from-teal-50 to-cyan-50",
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Real-Time Updates",
                description: "Get instant notifications when your item is found nearby. Location-based alerts keep you informed.",
                color: "from-emerald-500 to-teal-400",
                bgColor: "from-emerald-50 to-teal-50",
              },
              {
                icon: <Lock className="h-8 w-8" />,
                title: "Secure Recovery",
                description: "Blockchain verification ensures authentic ownership. Safe meetup locations for secure item exchange.",
                color: "from-cyan-500 to-blue-400",
                bgColor: "from-cyan-50 to-blue-50",
              },
            ].map((feature, i) => (
              <div key={i} className={`bg-gradient-to-br ${feature.bgColor} p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-slate-100`}>
                <div className={`inline-flex p-4 bg-gradient-to-br ${feature.color} rounded-xl mb-6 shadow-lg`}>
                  {React.cloneElement(feature.icon, { className: "text-white" })}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 fade-in">
          <div className="bg-gradient-to-r from-teal-500 to-cyan-400 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to find what you've lost?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join our growing community and never lose hope of recovering your precious items again.
            </p>
            <Link
              to="/register"
              className="inline-flex items-center px-10 py-4 bg-white text-teal-600 rounded-xl font-bold hover:shadow-xl transition-all duration-300 text-lg"
            >
              Get started for free
              <ArrowRight className="ml-3 w-6 h-6" />
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      <style>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .animate-fade-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  )
}

export default LandingPage
