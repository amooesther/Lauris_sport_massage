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
          <h2 className="text-3xl md:text-5xl font-heading font-light tracking-tight text-navy-dark">
            Clinical Sports & <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-navy-dark via-secondary to-navy-dark">Recovery Massages</span>
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
        <div className="text-center mt-24 mb-16 space-y-4">
          <span className="text-secondary font-semibold text-xs uppercase tracking-[0.25em] block">
            Watch Us Work
          </span>
          <h3 className="text-3xl md:text-5xl font-heading font-light tracking-tight text-navy-dark">
            Session <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-navy-dark via-secondary to-navy-dark">Demonstrations</span>
          </h3>
          <div className="w-16 h-[2px] bg-secondary mx-auto mt-6 rounded-full opacity-80" />
          <p className="text-slate-neutral text-[16px] md:text-lg leading-relaxed max-w-2xl mx-auto pt-2 font-body">
            Watch our specialists perform clinical assessments, massage work, and guided movement protocols.
          </p>
        </div>

        {/* Videos Grid - Upgraded to 2-Column layout for cinema-feel larger players */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative">
          {[
            {
              url: 'https://vimeo.com/1059641016',
              category: 'Deep Tissue Release',
              title: 'Trigger Point & Muscle Stripping',
              desc: 'Clinical soft tissue work focusing on deep muscle layers to alleviate chronic tightness and improve circulation.'
            },
            {
              url: 'https://vimeo.com/1059651884',
              category: 'Dry Needling',
              title: 'Intramuscular Stimulation Therapy',
              desc: 'Precise dry needling techniques designed to release hyperirritable trigger points and reset neural tension.'
            },
            {
              url: 'https://vimeo.com/1059652678/3b4a672817',
              category: 'Assisted Stretching',
              title: 'PNF Mobility & Joint Flex',
              desc: 'Dynamic assisted stretching protocols performed by therapists to improve immediate range of motion.'
            },
            {
              url: 'https://vimeo.com/1059653101/ffc6521aa0',
              category: 'Injury Rehabilitation',
              title: 'Orthopedic Joint Assessment',
              desc: 'Evaluating structural movement patterns and joint mechanics to isolate tension sources and map a recovery path.'
            }
          ].map((video, index) => (
            <div 
              key={index} 
              className="relative group bg-white/70 backdrop-blur-md border border-gray-100/80 rounded-[2.5rem] p-6 shadow-premium hover:shadow-premium-hover hover:border-secondary/20 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Video frame with subtle glow */}
              <div className="relative rounded-3xl overflow-hidden aspect-video shadow-lg border border-gray-100/50 bg-black/90 group-hover:scale-[1.01] transition-transform duration-500 z-10">
                {/* Inner soft border overlay */}
                <div className="absolute inset-0 border border-white/5 rounded-3xl z-20 pointer-events-none" />
                <ReactPlayer
                  url={video.url}
                  controls
                  width="100%"
                  height="100%"
                  light={true}
                  playIcon={
                    <div className="w-16 h-16 rounded-full bg-white/95 backdrop-blur-sm shadow-xl flex items-center justify-center text-secondary hover:text-white hover:bg-secondary hover:scale-110 transition-all duration-300">
                      <svg className="w-6 h-6 fill-current translate-x-0.5" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  }
                />
              </div>

              {/* Content Block */}
              <div className="mt-6 px-3 space-y-2 relative z-10">
                <span className="text-secondary font-semibold text-[10px] uppercase tracking-[0.2em] block">
                  {video.category}
                </span>
                <h4 className="text-xl font-semibold text-navy-dark tracking-wide font-heading group-hover:text-secondary transition-colors duration-300">
                  {video.title}
                </h4>
                <p className="text-[14px] text-navy-light/95 font-body leading-relaxed">
                  {video.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-20">
          <Link to="/services">
            <button className="inline-flex items-center gap-2.5 bg-gradient-to-r from-navy-dark to-navy-deep hover:from-[#c27017] hover:to-secondary text-white font-semibold py-4 px-10 rounded-2xl shadow-premium hover:shadow-[0_10px_25px_-5px_rgba(27,29,29,0.25)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 text-base font-heading">
              Explore All Services
              <FaChevronRight className="w-3 h-3 text-secondary group-hover:text-white" />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Service;
