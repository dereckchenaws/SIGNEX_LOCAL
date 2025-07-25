import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white" style={{ backgroundColor: 'rgb(28,22,75)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="mb-4">
              <img 
                src="/Logotype_white.png" 
                alt="SIGNEX" 
                className="h-6 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Leading the future of architectural design and construction with innovative 
              solutions, sustainable practices, and uncompromising quality since 2008.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="bg-white p-3 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <Facebook size={20} className="text-[#1c164b]" />
              </a>
              <a href="#" className="bg-white p-3 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <Twitter size={20} className="text-[#1c164b]" />
              </a>
              <a href="#" className="bg-white p-3 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <Instagram size={20} className="text-[#1c164b]" />
              </a>
              <a href="#" className="bg-white p-3 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <Linkedin size={20} className="text-[#1c164b]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/#home" className="text-gray-300 hover:text-[#1c164b] transition-colors duration-300">Home</Link></li>
              <li><Link to="/#projects" className="text-gray-300 hover:text-[#1c164b] transition-colors duration-300">Projects</Link></li>
              <li><Link to="/#services" className="text-gray-300 hover:text-[#1c164b] transition-colors duration-300">Services</Link></li>
              <li><Link to="/#about" className="text-gray-300 hover:text-[#1c164b] transition-colors duration-300">About</Link></li>
              <li><Link to="/#contact" className="text-gray-300 hover:text-[#1c164b] transition-colors duration-300">Contact</Link></li>
              <li><Link to="/view-all-projects" className="text-gray-300 hover:text-[#1c164b] transition-colors duration-300">All Projects</Link></li>
              <li><Link to="/learn-more" className="text-gray-300 hover:text-[#1c164b] transition-colors duration-300">Learn More</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-white mt-1" />
                <div>
                  <p className="text-gray-300">123 Architecture Boulevard</p>
                  <p className="text-gray-300">Design District, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-white" />
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-white" />
                <p className="text-gray-300">hello@signex.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} SIGNEX. All rights reserved.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#1c164b] transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#1c164b] transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#1c164b] transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;