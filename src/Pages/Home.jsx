import React from 'react';
import Hero from '../Components/Hero';
import Supports from '../Components/Supports';
import Choose from '../Components/Choose';
import Service from '../Components/Service';
import ConditionsTreated from '../Components/ConditionsTreated';
import TimelineProcess from '../Components/TimelineProcess';
import MeetTeam from '../Components/MeetTeam';
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

      {/* 7. Meet the Therapists */}
      <MeetTeam />

      {/* 8. Success Case Studies */}
      <SuccessStories />

      {/* 9. Client Reviews & Rating Badge */}
      <Testimonials />

      {/* 10. FAQ Accordion */}
      <Faq />

      {/* 11. Final High-Impact Booking CTA Banner */}
      <section className="bg-navy-dark text-white py-16 md:py-24 relative overflow-hidden border-t border-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(13,148,136,0.15),transparent_50%)]" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <div className="space-y-4">
            <span className="text-secondary font-bold text-sm uppercase tracking-wider">Start Your Recovery Today</span>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Ready to Perform Pain-Free?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Book your customized sports massage therapy session in Wellingborough NN8 today and experience professional, clinical recovery care.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/book" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent-gold hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-base">
                <FaCalendarAlt />
                Book Your Appointment
              </button>
            </Link>
            <a href="tel:+447391530988" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-gray-600 hover:border-white hover:bg-white/10 text-white font-bold py-3.5 px-8 rounded-xl transition duration-300 text-base">
                Call +44 7391 530988
              </button>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-gray-500 pt-4">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span>5-Star Rated sports injury and recovery center in Wellingborough</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;