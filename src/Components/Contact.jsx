import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div id="contact" className="bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-3xl p-8 md:p-12">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-primary text-center mb-8">
          Contact Us
        </h2>

        {/* Introduction */}
        <p className="text-lg md:text-xl text-gray-700 text-center mb-10">
          We'd love to hear from you! Whether you have questions about our services, want to book an appointment, or need more information, feel free to reach out.
        </p>

        {/* Contact Details */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {/* Phone */}
          <div className="flex items-center gap-4">
            <img
              src={assets.Phone_icon}
              alt="Phone Icon"
              className="w-4 h-4 md:w-6 md:h-6"
            />
            <div>
              <p className="text-gray-800 font-medium text-lg md:text-xl">
                Phone
              </p>
              <a
                href="tel:+447391530988"
                className="text-primary hover:text-primary-dark transition-colors"
              >
                +44 7391 530988
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <img
              src={assets.mail}
              alt="Email Icon"
              className="w-4 h-3 md:w-6 md:h-4"
            />
            <div>
              <p className="text-gray-800 font-medium text-lg md:text-xl">
                Email
              </p>
              <a
                href="mailto:info@laurismassagetherapy.com"
                className="text-primary hover:text-primary-dark transition-colors"
              >
                info@laurismassagetherapy.com
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-4">
            <img
              src={assets.location_icon}
              alt="Location Icon"
              className="w-4 h-4 md:w-6 md:h-6"
            />
            <div>
              <p className="text-gray-800 font-medium text-lg md:text-xl">
                Address
              </p>
              <p className="text-gray-700">
                38 Fox Street, Rothwell, <br />
                Kettering, Northamptonshire, <br />
                England, United Kingdom
              </p>
            </div>
          </div>

          {/* Operational Hours */}
          <div className="flex items-center gap-4">
            <img
              src={assets.clock}
              alt="Clock Icon"
              className="w-4 h-4 md:w-6 md:h-6"
            />
            <div>
              <p className="text-gray-800 font-medium text-lg md:text-xl">
                Operational Hours
              </p>
              <p className="text-gray-700">
                Monday - Friday: 9:00 AM - 7:00 PM <br />
                Saturday: 10:00 AM - 4:00 PM <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Book Appointment Button */}
     <Link to='/booking'>  <button
          type="submit"
          className="w-full bg-primary text-2xl text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition-all shadow-md mt-8"
        >
          Book Now
        </button></Link> 
      </div>
    </div>
  );
};

export default Contact;
