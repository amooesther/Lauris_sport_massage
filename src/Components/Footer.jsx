import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import necessary React Icons
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="bg-primary text-white py-8 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        
        {/* About Us Section */}
        <div className="space-y-6 text-center md:text-left">
          <img src={assets.logo} alt="Lauris Sport Massage Therapy Logo" className="w-24 h-24 mx-auto md:mx-0" />
          <p className="text-lg text-gray-200">
            Lauris Sport Massage Therapy offers tailored treatments to help you recover, relax, and stay active. Our experienced therapists are dedicated to your well-being.
          </p>
        </div>

        {/* Contact Info Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-center md:text-left">Contact Us</h3>
          <div className="space-y-4">
            {/* Phone */}
            <div className="flex items-center justify-center md:justify-start gap-4">
              <FaPhoneAlt className="w-5 h-5 text-white" />
              <p>
                <a href="tel:+447391530988" className="hover:text-gray-200 transition-colors">
                  +44 7391 530988
                </a>
              </p>
            </div>
            {/* Email */}
            <div className="flex items-center justify-center md:justify-start gap-4">
              <FaEnvelope className="w-5 h-5 text-white" />
              <p>
                <a href="mailto:info@laurissmassagetherapy.com" className="hover:text-gray-200 transition-colors">
                  info@laurissportmassagetherapy.com
                </a>
              </p>
            </div>
            {/* Address */}
            <div className="flex items-start justify-center md:justify-start gap-4">
              <FaMapMarkerAlt className="w-5 h-5 text-white" />
              <p className="text-center md:text-left">
                Fox Street, Rothwell, <br />
                Kettering, Northamptonshire, <br />
                England, United Kingdom
              </p>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="space-y-6 text-center">
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex justify-center gap-6">
            {/* Social Media Icons */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
              <FaTwitter className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-12 border-t border-gray-500 pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Lauris Sport Massage Therapy. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
