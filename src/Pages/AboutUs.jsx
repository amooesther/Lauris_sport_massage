import React from "react";
import { assets } from "../assets/assets";

const AboutUs = () => {
  return (
    <div className="">
      <div className="py-16 px-6 md:px-16 flex flex-col mb-10 md:flex-row items-center justify-between gap-12 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 text-gray-800">
        {/* Text Content */}
        <div className="flex flex-col items-start md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4">
   Lauris Sport Massage Therapy Center
</h2>
          
          <p className="text-lg md:text-xl leading-relaxed mb-4">
            Your trusted partner in wellness and recovery, nestled in the heart of Fox Street, Rothwell, Kettering, Northamptonshire, England.
          </p>
          
          {/* Book Now Button */}
          <button className="bg-primary text-white py-3 px-8 rounded-lg font-semibold text-lg hover:scale-105 transform transition-all duration-300">
            BOOK NOW
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={assets.about}
            alt="About Lauris Sport Massage Therapy"
            className="w-full rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
          />
        </div>
      </div>
      {/* Section 2: Mission and Vision */}
      <div className="py-16 px-6 md:px-16 text-gray-800">
  <h2 className="text-3xl font-extrabold text-center mb-8 text-primary">Our Plan</h2>

  <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
    {/* Mission */}
    <div className="text-center md:text-left md:w-full lg:w-1/2 shadow-xl bg-green-50 rounded-tl-[100px] rounded-br-[100px] p-8">
      <h3 className="text-2xl font-semibold text-primary mb-4">Our Mission</h3>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
        At Lauris Sport Massage Therapy Center, our mission is to enhance your well-being by providing tailored sports massage therapies that promote recovery, relieve pain, and restore vitality, empowering you to live an active, pain-free life.
      </p>
    </div>

    {/* Vision */}
    <div className="text-center md:text-left md:w-full lg:w-1/2 shadow-xl bg-green-50 rounded-tl-[100px] rounded-br-[100px] p-8">
      <h3 className="text-2xl font-semibold text-primary mb-4">Our Vision</h3>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
        To be the leading provider of innovative sports massage therapies, dedicated to helping individuals achieve optimal health and performance.
      </p>
    </div>
  </div>
</div>


      {/* Section 3: Business Enquiry Contact */}
      <div className="mb-10 py-16 px-6 md:px-16 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 text-gray-800">
        <h4 className="text-3xl font-extrabold text-center mb-6">Business Enquiry Contact</h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="rounded-tl-[70px] rounded-br-[70px] bg-white p-6 text-center shadow-lg">
            <img src={assets.Phone_icon} alt="Phone Icon" className="mx-auto mb-4" />
            <p className="font-semibold text-lg">Phone</p>
            <p className="text-gray-700">+44 7391 530988</p>
          </div>

          <div className="rounded-tl-[70px] rounded-br-[70px] bg-white p-6 text-center shadow-lg">
            <img src={assets.location_icon} alt="Location Icon" className="mx-auto mb-4" />
            <p className="font-semibold text-lg">Location</p>
            <p className="text-gray-700">
              38 Fox Street, Rothwell, Kettering, Northamptonshire, England, United Kingdom
            </p>
          </div>

          <div className="rounded-tl-[70px] rounded-br-[70px] bg-white p-6 text-center shadow-lg">
            <img src={assets.mail} alt="Email Icon" className="mx-auto mb-4" />
            <p className="font-semibold text-lg">Email</p>
            <p className="text-gray-700 ">info@laurissportmassagetherapy.com</p>
          </div>

          <div className="rounded-tl-[70px] rounded-br-[70px] bg-white p-6 text-center shadow-lg">
            <img src={assets.clock} alt="Clock Icon" className="mx-auto mb-4" />
            <p className="font-semibold text-lg">Operation Hours</p>
            <p className="text-gray-700">
              Monday - Friday: 9:00 AM - 7:00 PM
              <br />
              Saturday: 10:00 AM - 4:00 PM
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;