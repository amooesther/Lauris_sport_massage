import React from 'react';

const AboutUs = () => {
  return (
    <div id="about"  className="py-12 px-6 flex justify-center">
      <div className="bg-white text-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-3xl p-8 md:p-12 max-w-4xl text-center">
        {/* Heading */}
        <h2 className="text-2xl text-primary md:text-4xl font-bold mb-6">
          About Us
        </h2>

        {/* Paragraph */}
        <p className="text-lg md:text-xl leading-10">
          Welcome to <strong className='text-primary hover:text-blue-600'>Lauris Massage Therapy</strong>, your trusted partner in wellness and recovery. 
          Nestled in the heart of Fox Street, Rothwell, Kettering, Northamptonshire, England, we provide a sanctuary where your health and vitality come first.
          Our mission is to empower you to live an active, pain-free life by offering tailored sports massage therapies that address your unique needs. 
          With a team of certified professionals, a passion for well-being, and a focus on results, we are here to support your journey to optimal health.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
