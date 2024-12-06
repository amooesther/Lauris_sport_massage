import React from 'react';
import { assets } from '../assets/assets';

const Choose = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-12 bg-gradient-to-r from-green-400 via-teal-500 to-blue-600 text-white">
      {/* Left Content - Image */}
      <div className="flex-1 space-y-4">
        <img
          src={assets.choose_img}
          alt="Choose Us"
          className="w-full rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Right Content - Text */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate__animated animate__fadeIn">
          Why Choose Us
        </h2>
        <ul className="space-y-4">
          <li className="text-lg md:text-xl leading-relaxed animate__animated animate__fadeIn animate__delay-1s">
            <strong>Personalized Recovery:</strong> We prioritize your recovery, amplify your performance, and tailor every session to your unique needs.
          </li>
          <li className="text-lg md:text-xl leading-relaxed animate__animated animate__fadeIn animate__delay-2s">
            <strong>Expert Care:</strong> We bring expert care, personalized treatments, and a passion for your peak performance.
          </li>
          <li className="text-lg md:text-xl leading-relaxed animate__animated animate__fadeIn animate__delay-3s">
            <strong>Well-Being Focus:</strong> We focus on your well-being, offering customized therapies to help you move better and feel stronger.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Choose;
