import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaRegClock } from 'react-icons/fa';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-navy-dark text-white pt-16 pb-8 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Column 1: Brand & Logo */}
        <div className="space-y-6">
          <img src={assets.logo} alt="Lauraphys Logo" className="h-16 w-auto brightness-110" />
          <p className="text-[14px] text-gray-400 leading-relaxed">
            Lauraphys Wellness LTD provides premium sports massage therapy and musculoskeletal recovery programs tailored to athletes and active individuals. Move pain-free and perform at your peak.
          </p>
          <div className="flex gap-4">
            <a
              href="https://facebook.com/profile.php?id=61573706634976"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-navy-light rounded-full text-gray-400 hover:text-white hover:bg-secondary transition-all duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-navy-light rounded-full text-gray-400 hover:text-white hover:bg-secondary transition-all duration-300"
              aria-label="Twitter"
            >
              <FaTwitter className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-navy-light rounded-full text-gray-400 hover:text-white hover:bg-secondary transition-all duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-6">
          <h3 className="text-[16px] font-bold uppercase tracking-wider text-secondary">Quick Links</h3>
          <ul className="space-y-3 text-[14px] text-gray-400">
            <li>
              <Link to="/" className="hover:text-white transition-colors duration-200 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition-colors duration-200 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition-colors duration-200 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition-colors duration-200 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Contact
              </Link>
            </li>
            <li>
              <Link to="/book" className="hover:text-white transition-colors duration-200 flex items-center gap-2 font-semibold text-accent-gold">
                <span className="w-1.5 h-1.5 bg-accent-gold rounded-full"></span> Book Appointment
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Details */}
        <div className="space-y-6">
          <h3 className="text-[16px] font-bold uppercase tracking-wider text-secondary">Contact Info</h3>
          <div className="space-y-4 text-[14px] text-gray-400">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-secondary shrink-0" />
              <a href="tel:+447391530988" className="hover:text-white transition-colors">
                +44 7391 530988
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-secondary shrink-0" />
              <a href="mailto:info@lauraphys.com" className="hover:text-white transition-colors break-all">
                info@lauraphys.com
              </a>
            </div>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-secondary shrink-0 mt-1" />
              <p className="leading-relaxed">
                Lauraphys Wellness LTD <br />
                Unit 4 Office 3, Booth Drive, <br />
                Park Farm Industrial Estate, <br />
                Wellingborough, NN8 6GR
              </p>
            </div>
          </div>
        </div>

        {/* Column 4: Opening Hours */}
        <div className="space-y-6">
          <h3 className="text-[16px] font-bold uppercase tracking-wider text-secondary">Opening Hours</h3>
          <div className="space-y-3 text-[14px] text-gray-400">
            <div className="flex items-center gap-2">
              <FaRegClock className="text-secondary" />
              <span>Clinic Hours:</span>
            </div>
            <ul className="space-y-2 border-l border-gray-800 pl-3">
              <li className="flex justify-between">
                <span>Mon - Fri:</span>
                <span className="text-white font-medium">9:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span className="text-white font-medium">10:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-red-400 font-medium">Closed</span>
              </li>
            </ul>
            <p className="text-[12px] text-gray-500 italic mt-2">
              * By appointment only. Late evening slots available upon request.
            </p>
          </div>
        </div>

      </div>

      {/* Footer Bottom Section */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-[13px] text-gray-500 gap-4">
        <p>&copy; {new Date().getFullYear()} Lauraphys Wellness LTD. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Cancellation Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
