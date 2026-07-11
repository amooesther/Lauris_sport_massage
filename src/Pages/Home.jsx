import React from 'react';
import Hero from '../Components/Hero';
import Supports from '../Components/Supports';
import Choose from '../Components/Choose';
import Service from '../Components/Service';
import ConditionsTreated from '../Components/ConditionsTreated';
import TimelineProcess from '../Components/TimelineProcess';
import SuccessStories from '../Components/SuccessStories';
import Testimonials from '../Components/Testimonials';
import Faq from '../Components/Faq';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaStar } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="space-y-0">
      {/* 1. Immersive Hero Section */}
      <Hero />

      {/* 2. Welcome & Philosophy */}
      <Supports />

      {/* 3. Why Choose Us */}
      <Choose />

      {/* 4. Services Overview & Video Demos */}
      <Service />

      {/* 5. Conditions We Treat */}
      <ConditionsTreated />

      {/* 6. Step-by-Step Treatment Process */}
      <TimelineProcess />

      {/* 7. Success Case Studies */}
      <SuccessStories />

      {/* 9. Client Reviews & Rating Badge */}
      <Testimonials />

      {/* 10. FAQ Accordion */}
      <Faq />

      {/* 11. Final High-Impact Booking CTA Banner */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-white text-white">
        {/* Soft background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full filter blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Main Glowing Container Card */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-navy-dark via-navy-deep to-navy-dark border border-white/[0.08] shadow-[0_30px_100px_rgba(27,29,29,0.25)] py-16 md:py-24 px-6 md:px-12 text-center group">
            
            {/* Background luxury gradient patterns */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(217,131,30,0.12),transparent_45%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,131,30,0.08),transparent_40%)]" />
            <div className="absolute -inset-y-1/2 -inset-x-1/2 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.015),transparent_60%)] group-hover:scale-110 transition-transform duration-1000 pointer-events-none" />

            <div className="max-w-4xl mx-auto space-y-10 relative z-10">
              
              {/* Header Info */}
              <div className="space-y-4">
                <span className="text-secondary font-semibold text-xs uppercase tracking-[0.25em] block">
                  Start Your Recovery Today
                </span>
                <h2 className="text-3xl md:text-5xl font-heading font-light tracking-tight text-white leading-tight">
                  Ready to <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-secondary to-white">Perform Pain-Free?</span>
                </h2>
                <div className="w-16 h-[2px] bg-secondary mx-auto mt-6 rounded-full opacity-80" />
                <p className="text-slate-neutral text-[16px] md:text-lg leading-relaxed max-w-2xl mx-auto pt-2 font-body font-light">
                  Book your customized sports massage therapy session in Wellingborough NN8 today and experience professional, clinical recovery care.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-2">
                <Link to="/book" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-secondary to-[#e89d43] hover:from-[#c27017] hover:to-secondary text-white font-bold py-4 px-10 rounded-2xl shadow-[0_10px_25px_-5px_rgba(217,131,30,0.35)] hover:shadow-[0_15px_30px_rgba(217,131,30,0.5)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 text-base font-heading">
                    <FaCalendarAlt className="w-4 h-4" />
                    Book Your Appointment
                  </button>
                </Link>
                <a href="tel:+447391530988" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/[0.04] border border-white/10 hover:border-white/30 hover:bg-white/[0.08] text-white font-medium py-4 px-10 rounded-2xl transition duration-300 text-base font-heading shadow-md hover:-translate-y-1">
                    Call +44 7391 530988
                  </button>
                </a>
              </div>

              {/* Trust Badge */}
              <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm select-none">
                <div className="flex text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-gray-400 font-body font-light tracking-wide">
                  5-Star Rated Sports Injury & Recovery Clinic
                </span>
              </div>

            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Home;