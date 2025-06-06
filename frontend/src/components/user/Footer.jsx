import { MapPin, Facebook, X, Instagram, Phone, Sparkles } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white w-full border-t border-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Brand Section */}
          <div className="space-y-6 lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="relative p-3 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-2xl">
                <MapPin className="h-8 w-8 text-white" />
                <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-300 animate-pulse" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
                TraceIt
              </span>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
              Bridging the gap between lost items and their owners through community-powered solutions and cutting-edge
              technology.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: X, href: "#", label: "Twitter" },
                { icon: Instagram, href: "#", label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="group p-3 rounded-xl bg-slate-800/50 hover:bg-gradient-to-br hover:from-teal-500/20 hover:to-cyan-400/20 transition-all duration-300 border border-slate-700 hover:border-teal-400/30"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5 text-slate-400 group-hover:text-teal-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-teal-400 flex items-center">
              <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
              Resources
            </h3>
            <nav className="flex flex-col space-y-3">
              {[
                { to: "/about", label: "About Us" },
                { to: "/faq", label: "FAQs" },
                { to: "/contact", label: "Contact" },
                { to: "/privacy", label: "Privacy Policy" },
                { to: "/terms", label: "Terms of Service" },
              ].map(({ to, label }) => (
                <Link
                  key={label}
                  to={to}
                  className="text-slate-300 hover:text-teal-400 transition-all duration-200 hover:translate-x-1 flex items-center group"
                >
                  <div className="w-1 h-1 bg-slate-600 rounded-full mr-3 group-hover:bg-teal-400 transition-colors"></div>
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-teal-400 flex items-center">
              <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
              Get in Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="p-2 rounded-lg bg-slate-800/50 group-hover:bg-teal-500/20 transition-colors">
                  <Phone className="h-5 w-5 text-teal-400" />
                </div>
                <a
                  href="tel:+256776509609"
                  className="text-slate-300 hover:text-teal-400 transition-colors duration-200"
                >
                  +256 776 509 609
                </a>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-2 rounded-lg bg-slate-800/50 group-hover:bg-green-500/20 transition-colors">
                  <FaWhatsapp className="h-5 w-5 text-green-400" />
                </div>
                <a
                  href="https://wa.me/+256776509609"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-green-400 transition-colors duration-200"
                >
                  WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-slate-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-500 text-center md:text-left">
              &copy; {new Date().getFullYear()} TraceIt. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-slate-500">Developed with ❤️ by</span>
              <a
                href="https://hunter-ten-woad.vercel.app/"
                className="text-teal-400 hover:text-teal-300 font-medium transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                HUNTER
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
