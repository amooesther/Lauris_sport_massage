import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { FaChevronRight, FaCalendarAlt } from 'react-icons/fa';

const Service = () => {
  const primaryServices = [
    {
      title: 'Deep Tissue Massage',
      imgSrc: assets.deep_tissue,
      description: 'Targets deep muscle fibers and connective tissues to release chronic tension, improve blood flow, and speed up soreness recovery.',
      altText: 'Deep Tissue Massage',
    },
    {
      title: 'Sport Foot Massage',
      imgSrc: assets.foot_massage,
      description: 'Focuses on pressure points and ligaments in the feet. Restores foot flexibility and relieves fatigue after long runs or intense workouts.',
      altText: 'Sport Foot Massage',
    },
    {
      title: 'Injury Rehabilitation',
      imgSrc: assets.injury_rehabilitation,
      description: 'Custom stretching and mobilization techniques to aid tissue healing, restore joint mobility, and safely guide you back to full training.',
      altText: 'Injury Rehabilitation',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-transparent text-gray-800 relative overflow-hidden">
      {/* Ambient background glows for glassmorphism */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-secondary font-bold text-sm uppercase tracking-wider">What We Do</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy-dark">
            Clinical Sports & Recovery Massages
          </h2>
          <p className="text-slate-neutral text-lg">
            We offer specialized manual therapy techniques designed to improve performance, accelerate recovery, and provide therapeutic pain relief.
          </p>
        </div>

        {/* Services Grid with glass cards overlapping glow spots */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {primaryServices.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-350 flex flex-col justify-between hover:bg-white/65 hover:border-secondary/40 hover:-translate-y-1"
            >
              {/* Individual card glow to make glass effect obvious */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-secondary/15 rounded-full blur-2xl pointer-events-none -z-10 group-hover:bg-secondary/25 transition-colors" />
              <div className="absolute -bottom-12 -left-12 w-28 h-28 bg-blue-400/15 rounded-full blur-2xl pointer-events-none -z-10 group-hover:bg-blue-400/25 transition-colors" />

              <div>
                {/* Image Wrap */}
                <div className="relative overflow-hidden aspect-[16/10] border-b border-white/40">
                  <img
                    src={service.imgSrc}
                    alt={service.altText}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-3 relative z-10">
                  <h3 className="text-xl font-bold text-navy-dark group-hover:text-secondary transition-colors duration-250">{service.title}</h3>
                  <p className="text-sm text-slate-neutral leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-white/40 mt-4 relative z-10">
                <Link to="/book" className="text-xs font-bold text-accent-gold hover:text-amber-600 flex items-center gap-1.5 transition-colors">
                  <FaCalendarAlt /> Book Now
                </Link>
                <Link to="/services" className="text-xs font-bold text-navy-dark hover:text-secondary flex items-center gap-1 transition-colors">
                  Learn More <FaChevronRight className="w-2.5 h-2.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Video Highlights Header */}
        <div className="text-center mt-24 mb-10 space-y-2">
          <h3 className="text-2xl font-bold text-navy-dark">Session Demonstrations</h3>
          <p className="text-sm text-slate-neutral">Watch our specialists perform treatments and mobility guidance.</p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            'https://vimeo.com/1059641016',
            'https://vimeo.com/1059651884',
            'https://vimeo.com/1059652678/3b4a672817',
            'https://vimeo.com/1059653101/ffc6521aa0',
          ].map((videoUrl, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-md border border-white/60 bg-white/20 backdrop-blur-md aspect-video hover:shadow-lg transition-shadow duration-300">
              <ReactPlayer
                url={videoUrl}
                controls
                width="100%"
                height="100%"
                light={true}
              />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <Link to="/services">
            <button className="bg-navy-dark hover:bg-navy-light text-white font-bold py-3.5 px-8 rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-[15px]">
              Explore All Services
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Service;
