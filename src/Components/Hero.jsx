import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-white">
      {/* Blurred Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-0"
        style={{ backgroundImage: `url(${assets.hero_img})` }}
      ></div>
      
      {/* Overlay for Darkening Effect */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Lauris Sport Massage Therapy
        </h1>
        <p className='text-2xl md:text-3xl  mb-4'>Move Better. Feel Stronger.</p>
        <p className="text-lg md:text-2xl mb-6">
        Supporting a healthy and active you with targeted therapies to optimize your recovery and performance.
        </p>
      <Link to='/booking'> <button className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
          Book Now
        </button></Link> 
      </div>
    </div>
  );
};

export default Hero;
