import React from "react";
import { motion } from "framer-motion";

const Supports = () => {
  return (
    <div className="bg-primary rounded-full shadow-xl mt-8 text-white py-12 px-6 flex flex-col justify-center items-center">
      {/* Heading */}
      <motion.h2
        className="text-2xl md:text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        How We Support You
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        className="text-lg md:text-xl p-12 text-center leading-loose max-w-4xl"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        As experienced and certified Sports Massage Therapists, we are committed to providing you with safe, effective, and personalized treatment plans.
        Our goal is to address your unique musculoskeletal needs, enhance your mobility, reduce pain, and improve your overall well-being. 
        Whether you’re recovering from an injury, managing chronic discomfort, or aiming to boost athletic performance, we’re here to support you every step of the way.
      </motion.p>
    </div>
  );
};

export default Supports;
