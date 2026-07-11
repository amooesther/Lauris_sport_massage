import React from 'react';
import { assets } from '../assets/assets';
import { FaCheckCircle, FaAward, FaHeartbeat, FaRunning } from 'react-icons/fa';

const Choose = () => {
  const highlights = [
    {
      icon: <FaRunning className="w-6 h-6 text-secondary" />,
      title: "Personalized Recovery Plans",
      description: "We customize every session to fit your unique muscle tension, joints, and athletic goals, helping you get back on track faster."
    },
    {
      icon: <FaAward className="w-6 h-6 text-secondary" />,
      title: "Expert Clinical Specialists",
      description: "Our certified therapists bring deep knowledge of musculoskeletal anatomy, injury management, and high-performance recovery."
    },
    {
      icon: <FaHeartbeat className="w-6 h-6 text-secondary" />,
      title: "Holistic Wellness Focus",
      description: "We don't just treat localized pain—we focus on full-body circulation, stress reduction, and alignment to support longevity."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-transparent text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left: Professional Session Image */}
          <div className="flex-1 w-full relative">
            <div className="absolute inset-0 bg-secondary/5 rounded-3xl blur-2xl transform -translate-x-3 -translate-y-3 -z-10" />
            <img
              src={assets.laura_sports_massage}
              alt="Professional Sports Massage Treatment"
              className="w-full h-auto rounded-3xl shadow-premium border border-gray-100 object-cover aspect-[4/3] sm:aspect-[16/10] hover:scale-[1.01] transition-transform duration-500"
            />
          </div>

          {/* Right: Modern Text Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <span className="text-secondary font-bold text-sm uppercase tracking-wider">Why Choose LauraPhys</span>
              <h2 className="text-3xl md:text-4xl font-heading font-light tracking-tight text-navy-dark">
                Tailored Therapy for Your <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-navy-dark via-secondary to-navy-dark">Peak Performance</span>
              </h2>
              <p className="text-slate-neutral leading-relaxed">
                At Lauraphys Wellness, we treat every client with specialized, targeted techniques. Whether you are recovering from a hard workout, managing chronic tension, or checking in for maintenance care, we support your wellness journey.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="space-y-6">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors duration-300">
                  <div className="p-3 bg-teal-50 rounded-xl shrink-0 h-fit">
                    {item.icon}
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-navy-dark">{item.title}</h3>
                    <p className="text-sm text-slate-neutral leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Choose;
