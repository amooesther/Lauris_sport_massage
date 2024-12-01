import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${assets.hero_img})` }}
      ></div>

      {/* Overlay for Darkening Effect */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Animate the h1 */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Lauris Sport Massage Therapy
        </motion.h1>

        {/* Animate the first paragraph */}
        <motion.p
          className="text-2xl md:text-3xl mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Move Better. Feel Stronger.
        </motion.p>

        {/* Animate the second paragraph */}
        <motion.p
          className="text-lg md:text-2xl mb-6"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          Supporting a healthy and active you with targeted therapies to optimize your recovery and performance.
        </motion.p>

        {/* Animate the button */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <Link to="/booking">
            <button className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
              Book Now
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
