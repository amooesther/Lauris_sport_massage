import React from 'react';

const Supports = () => {
  return (
    <div className="bg-primary rounded-full shadow-xl mt-8 text-white py-12 px-6 flex flex-col justify-center items-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">
        How We Support You
      </h2>

      {/* Paragraph */}
      <p className="text-lg md:text-xl text-center leading-loose max-w-4xl">
        As experienced and certified Sports Massage Therapists, we are committed to providing you with safe, effective, and personalized treatment plans.
        Our goal is to address your unique musculoskeletal needs, enhance your mobility, reduce pain, and improve your overall well-being. 
        Whether you’re recovering from an injury, managing chronic discomfort, or aiming to boost athletic performance, we’re here to support you every step of the way.
      </p>
    </div>
  );
};

export default Supports;
