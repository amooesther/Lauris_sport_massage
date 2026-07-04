import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaCalendarAlt, FaStar } from "react-icons/fa";

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, x: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 1.0, ease: "easeOut" },
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-soft-neutral via-teal-light to-white py-12 md:py-20 lg:py-24">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-teal-50/40 rounded-l-[100px] z-0 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Content Column */}
          <motion.div
            className="flex-1 text-center lg:text-left space-y-6"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Rating Tag */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-50 border border-teal-100 rounded-full text-secondary text-sm font-semibold"
            >
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span>Wellingborough's Premium Sports Recovery</span>
            </motion.div>

            {/* Main Value Proposition */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-dark leading-tight"
              variants={itemVariants}
            >
              Move Better. <br />
              <span className="text-secondary">Feel Stronger.</span>
            </motion.h1>

            <motion.p
              className="text-lg text-slate-neutral leading-relaxed max-w-xl mx-auto lg:mx-0"
              variants={itemVariants}
            >
              Revitalize your body and restore joint mobility with expert sports massage therapy. From deep tissue release to custom recovery plans, keep your body performing at its absolute peak.
            </motion.p>

            {/* CTA Actions */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              variants={itemVariants}
            >
              <Link to="/book" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent-gold hover:bg-amber-600 text-white font-bold py-2.5 px-6 rounded-xl shadow-teal-glow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-sm">
                  <FaCalendarAlt />
                  Book Appointment
                </button>
              </Link>
              <a href="tel:+447391530988" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-navy-dark text-navy-dark hover:bg-navy-dark hover:text-white font-bold py-2.5 px-6 rounded-xl transition-all duration-300 text-sm">
                  <FaPhoneAlt />
                  Call Now
                </button>
              </a>
            </motion.div>

            {/* Credibility Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-150 max-w-md mx-auto lg:mx-0 text-left"
              variants={itemVariants}
            >
              <div>
                <p className="text-xl md:text-2xl font-extrabold text-navy-dark">MSMA</p>
                <p className="text-xs md:text-sm text-slate-neutral">Certified Care</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-extrabold text-navy-dark">5★</p>
                <p className="text-xs md:text-sm text-slate-neutral">Google Reviews</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-extrabold text-navy-dark">Free</p>
                <p className="text-xs md:text-sm text-slate-neutral">On-Site Parking</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image Column */}
          <motion.div
            className="flex-grow w-full max-w-md lg:max-w-none lg:w-[45%] relative"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            {/* Soft decorative shadow circle under the image */}
            <div className="absolute inset-0 bg-secondary/10 rounded-3xl blur-3xl transform translate-x-4 translate-y-4 -z-10" />
            
            <img
              src={assets.laura_treatment_room}
              alt="Premium Sports Massage Treatment Room at Lauraphys Wellness"
              className="w-full h-auto rounded-3xl shadow-premium border-4 border-white object-cover aspect-[4/3] sm:aspect-square lg:aspect-auto"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
