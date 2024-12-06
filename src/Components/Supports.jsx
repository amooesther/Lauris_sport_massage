import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Supports = () => {
  // Framer Motion Variants
  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3, yoyo: Infinity },
    },
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 px-6 py-12 text-gray-800">
      {/* Left Content - Image */}
      <motion.div
        className="flex-1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={imageVariants}
      >
        <img
          src={assets.landing_page}
          alt="Welcome to Lauris Sport Massage Therapy Center"
          className="w-full max-w-md mx-auto rounded-lg shadow-lg rounded-tl-[50px]  rounded-br-[50px]"
        />
      </motion.div>

      {/* Right Content - Text */}
      <motion.div
        className="flex-1 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={textVariants}
      >
        <h3 className="text-2xl md:text-4xl font-bold text-primary mb-4">
          Welcome to Lauris Sport Massage Therapy Center
        </h3>
        <p className="text-base md:text-lg leading-relaxed mb-4">
          As experienced and certified Sports Massage Therapists, we are
          committed to providing you with safe, effective, and personalized
          treatment plans.
        </p>
        <p className="text-base md:text-lg leading-relaxed mb-6">
          Our goal is to address your unique musculoskeletal needs, enhance your
          mobility, reduce pain, and improve your overall well-being. Whether
          you’re recovering from an injury, managing chronic discomfort, or
          aiming to boost athletic performance, we’re here to support you every
          step of the way.
        </p>
        <motion.button
          className="px-6 py-3 bg-primary w-full text-secondary font-bold rounded-md shadow-lg hover:bg-secondary transition duration-300"
          whileHover="hover"
          variants={buttonVariants}
        >
          Learn More
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Supports;
