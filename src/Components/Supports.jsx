import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { FaHeartbeat, FaCalendarAlt } from "react-icons/fa";

const Supports = () => {
  // Framer Motion Variants
  const imageVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
  };

  return (
    <section className="py-16 md:py-24 bg-transparent text-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Content - Image */}
          <motion.div
            className="flex-1 w-full relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
          >
            <div className="absolute inset-0 bg-secondary/5 rounded-3xl blur-2xl transform translate-x-3 translate-y-3 -z-10" />
            <img
              src={assets.landing_page}
              alt="Welcome to Lauraphys Wellness center"
              className="w-full max-w-lg mx-auto rounded-3xl shadow-premium border border-gray-100 object-cover aspect-[4/3] sm:aspect-square lg:aspect-auto"
            />
          </motion.div>

          {/* Right Content - Text */}
          <motion.div
            className="flex-1 text-center lg:text-left space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
          >
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 text-secondary font-bold text-sm uppercase tracking-wider">
                <FaHeartbeat />
                <span>Our Philosophy</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-light tracking-tight text-navy-dark leading-tight">
                Welcome to <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-navy-dark via-secondary to-navy-dark">Lauraphys Wellness</span>
              </h2>
            </div>
            
            <p className="text-slate-neutral leading-relaxed text-base md:text-lg">
              As certified and experienced Sports Massage Therapists, we are dedicated to providing personalized recovery treatments designed to restore your vitality, alleviate pain, and optimize your movement health.
            </p>
            
            <p className="text-slate-neutral leading-relaxed text-sm md:text-base">
              Whether you are an elite athlete aiming for peak muscular efficiency, recovering from a sports injury, or looking to dissolve deep physical stress from daily work schedules, our tailored hands-on techniques will support you every single step of the way.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link to="/about" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-navy-dark hover:bg-navy-light text-white font-bold py-3.5 px-8 rounded-xl shadow-md transition duration-300 text-sm">
                  Our Story
                </button>
              </Link>
              <Link to="/book" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto border-2 border-navy-dark text-navy-dark hover:bg-navy-dark hover:text-white font-bold py-3 px-8 rounded-xl transition duration-300 text-sm">
                  Book Treatment
                </button>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Supports;
