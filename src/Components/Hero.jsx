import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeInOut", delay: 0.3 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3, yoyo: Infinity },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row items-center h-[80vh] gap-8 px-6 py-5 bg-green-50 text-gray-800"
      initial="hidden"
      animate="visible"
    >
      {/* Left Content */}
      <motion.div
        className="flex-1 text-center md:text-left"
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-primary"
          variants={textVariants}
        >
          Lauraphys Wellness LTD
        </motion.h2>
        <motion.h4
          className="text-xl md:text-2xl font-semibold text-secondary mt-4"
          variants={textVariants}
        >
          Move Better. Feel Stronger.
        </motion.h4>
        <motion.p
          className="text-base md:text-lg mt-4 leading-relaxed"
          variants={textVariants}
        >
         <p>Revitalize your body and mind with expert sports massage therapy. Whether you're an athlete or seeking relief from everyday tension, Lauris Sport Massage Therapy Center is here to keep you moving at your best.</p>

        </motion.p>
        <motion.div variants={textVariants}>
          <Link to="/book">
            <motion.button
              className="mt- px-6 py-3 bg-primary lg:mt-10 text-secondary font-bold rounded-md shadow-lg hover:bg-secondary hover:text-white transition duration-300"
              variants={buttonVariants}
              whileHover="hover"
            >
              BOOK NOW
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Right Content */}
      <motion.div
        className="flex-1 text-center"
        variants={imageVariants}
      >
        <motion.img
          src={assets.hero_img}
          alt="Sports Massage Therapy"
          className="max-w-full h-auto rounded-lg shadow-2xl"
          variants={imageVariants}
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
