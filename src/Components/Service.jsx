import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Service = () => {
  return (
    <div className="mt-10 mb-10 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 py-16 px-6 md:px-16 text-gray-800">
      <h2 className="text-4xl font-extrabold text-center text-primary mb-12 tracking-wide">
        What We Do
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Sport Deep Tissue Massage */}
        <div className="text-center bg-white rounded-xl shadow-2xl p-6 hover:scale-105 hover:shadow-3xl transition-all duration-500 transform flex flex-col justify-center items-center">
          <p className="text-xl font-semibold text-primary mb-4 tracking-wide">Deep Tissue Massage</p>
          <img
            src={assets.deep_tissue}
            alt="Deep Tissue Massage"
            className="w-[250px] md:w-[300px] rounded-lg mb-4 transition-transform duration-300 transform hover:scale-110"
          />
          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            At Lauris Sport Massage Therapy, our Deep Tissue Massage helps relieve chronic tension, reduce pain, and restore your body’s natural balance.
          </p>
        </div>

        {/* Sport Foot Massage */}
        <div className="text-center bg-white rounded-xl shadow-2xl p-6 hover:scale-105 hover:shadow-3xl transition-all duration-500 transform flex flex-col justify-center items-center">
          <p className="text-xl font-semibold text-primary mb-4 tracking-wide">Sport Foot Massage</p>
          <img
            src={assets.foot_massage}
            alt="Sport Foot Massage"
            className="w-[250px] md:w-[300px] rounded-lg mb-4 transition-transform duration-300 transform hover:scale-110"
          />
          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            Relax and rejuvenate your feet with our Sport Foot Massage. Targeting pressure points and relieving tension, it’s the perfect therapy after a long day or intense physical activity.
          </p>
        </div>

        {/* Injury Rehabilitation */}
        <div className="text-center bg-white rounded-xl shadow-2xl p-6 hover:scale-105 hover:shadow-3xl transition-all duration-500 transform flex flex-col justify-center items-center">
          <p className="text-xl font-semibold text-primary mb-4 tracking-wide">Injury Rehabilitation</p>
          <img
            src={assets.injury_rehabilitation}
            alt="Injury Rehabilitation"
            className="w-[250px] md:w-[300px] rounded-lg mb-4 transition-transform duration-300 transform hover:scale-110"
          />
          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            We work to restore mobility, reduce discomfort, and get you back to your active lifestyle faster.
          </p>
        </div>

      </div>

      {/* Styled Button */}
      <div className="text-center mt-12">
     <Link to='/book'><button className="bg-primary text-secondary py-3 px-8 rounded text-lg font-semibold shadow-md hover:bg-primary-dark hover:shadow-lg transition duration-300 transform hover:scale-105"> 
          Book Now
        </button></Link>
      </div>
    </div>
  );
};

export default Service;
