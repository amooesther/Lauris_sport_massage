import React from 'react';
import { FaUserPlus, FaDraftingCompass, FaHandHoldingHeart, FaClipboardCheck } from 'react-icons/fa';

const TimelineProcess = () => {
  const steps = [
    {
      num: "01",
      icon: <FaUserPlus className="w-6 h-6" />,
      title: "Assessment",
      description: "We discuss your symptoms, review your athletic training, and perform a joint mobility check to isolate tension points."
    },
    {
      num: "02",
      icon: <FaDraftingCompass className="w-6 h-6" />,
      title: "Targeted Plan",
      description: "We outline a personalized recovery strategy combining deep tissue, stretching, and trigger point work."
    },
    {
      num: "03",
      icon: <FaHandHoldingHeart className="w-6 h-6" />,
      title: "Hands-on Therapy",
      description: "Receive focused sports massage therapy designed to release knots, increase circulation, and ease joint restrictions."
    },
    {
      num: "04",
      icon: <FaClipboardCheck className="w-6 h-6" />,
      title: "Rehab Guidance",
      description: "We provide targeted stretching routines and mobility advice to keep your body moving freely between sessions."
    }
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white text-gray-800">
      {/* Decorative luxury ambient glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-teal-light/40 rounded-full filter blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-secondary font-semibold text-xs uppercase tracking-[0.25em] block">
            The Journey to Recovery
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-light tracking-tight text-navy-dark">
            Our <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-navy-dark via-secondary to-navy-dark">Clinical Process</span>
          </h2>
          <div className="w-16 h-[2px] bg-secondary mx-auto mt-6 rounded-full opacity-80" />
          <p className="text-slate-neutral text-[16px] md:text-lg leading-relaxed max-w-2xl mx-auto pt-2 font-body">
            A structured, therapist-led approach designed to deliver measurable relief, restore full athletic performance, and prevent future tension.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connecting line for desktop (modern thin gradient line) */}
          <div className="absolute top-[68px] left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent hidden lg:block -z-10" />

          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center text-center p-8 bg-white/70 backdrop-blur-md rounded-[2.5rem] border border-gray-100/80 shadow-premium hover:shadow-premium-hover hover:border-secondary/20 hover:-translate-y-2 transition-all duration-500 group relative"
            >
              {/* Luxury Serif Step Number */}
              <div className="absolute top-6 right-8 text-5xl font-serif text-secondary/10 group-hover:text-secondary/20 transition-colors duration-500 select-none">
                {step.num}
              </div>

              {/* Icon Ring - Minimalist & Glassmorphic */}
              <div className="relative mb-6">
                {/* Ring Outer Soft Glow */}
                <div className="absolute inset-0 rounded-full bg-secondary/15 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Circular Frame */}
                <div className="w-20 h-20 rounded-full bg-white border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)] flex items-center justify-center text-secondary/80 group-hover:text-secondary group-hover:border-secondary/40 transition-all duration-500 relative z-10">
                  {step.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-3 relative z-10">
                <h3 className="text-xl font-semibold text-navy-dark tracking-wide font-heading group-hover:text-secondary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-[14px] text-navy-light/90 font-body leading-relaxed max-w-[260px] mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default TimelineProcess;
