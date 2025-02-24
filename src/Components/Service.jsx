import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

const Service = () => {
  return (
    <div className="mt-10 mb-10 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 py-16 px-6 md:px-16 text-gray-800">
      <h2 className="text-4xl font-extrabold text-center text-primary mb-12 tracking-wide">
        What We Do
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          {
            title: 'Deep Tissue Massage',
            imgSrc: assets.deep_tissue,
            description: 'At Lauris Sport Massage Therapy, our Deep Tissue Massage helps relieve chronic tension, reduce pain, and restore your body’s natural balance.',
            altText: 'Deep Tissue Massage',
          },
          {
            title: 'Sport Foot Massage',
            imgSrc: assets.foot_massage,
            description: 'Relax and rejuvenate your feet with our Sport Foot Massage. Targeting pressure points and relieving tension, it’s the perfect therapy after a long day or intense physical activity.',
            altText: 'Sport Foot Massage',
          },
          {
            title: 'Injury Rehabilitation',
            imgSrc: assets.injury_rehabilitation,
            description: 'We work to restore mobility, reduce discomfort, and get you back to your active lifestyle faster.',
            altText: 'Injury Rehabilitation',
          },
        ].map((service, index) => (
          <div
            key={index}
            className="text-center bg-white rounded-xl shadow-lg p-6 transition-all duration-500 transform hover:scale-105 hover:shadow-xl flex flex-col items-center"
          >
            <p className="text-xl font-semibold text-primary mb-4 tracking-wide">{service.title}</p>
            <img
              src={service.imgSrc}
              alt={service.altText}
              className="w-full max-w-[280px] md:max-w-[320px] rounded-lg mb-4 transition-transform duration-300 transform hover:scale-110"
            />
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Videos Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {[
          'https://vimeo.com/1059641016',
          'https://vimeo.com/1059651884',
          'https://vimeo.com/1059652678/3b4a672817',
          'https://vimeo.com/1059653101/ffc6521aa0',
        ].map((videoUrl, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <ReactPlayer url={videoUrl} controls width="100%" />
          </div>
        ))}
      </div>

      {/* Styled Button */}
      <div className="text-center mt-12">
        <Link to="/services">
          <button className="bg-primary text-white py-3 px-8 rounded-lg text-lg font-semibold shadow-md hover:bg-primary-dark hover:shadow-lg transition duration-300 transform hover:scale-105">
            VIEW MORE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
