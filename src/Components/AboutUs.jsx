import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <motion.div
      id="about"
      className="py-12 px-6 flex justify-center bg-blue-100 mt-5 mb-5"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        className="bg-white text-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-3xl p-8 md:p-12 max-w-4xl text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Rotating Heading */}
        <motion.h2
          className="text-2xl text-primary md:text-4xl font-bold mb-6"
          initial={{ rotate: -90, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          About Us
        </motion.h2>

        {/* Fading & Sliding Paragraph */}
        <motion.p
          className="text-lg md:text-xl leading-10 p-5"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to{" "}
          <strong className="text-primary hover:text-blue-600">
            Lauris Massage Therapy
          </strong>
          , your trusted partner in wellness and recovery. Nestled in the heart
          of Fox Street, Rothwell, Kettering, Northamptonshire, England, we
          provide a sanctuary where your health and vitality come first. Our
          mission is to empower you to live an active, pain-free life by
          offering tailored sports massage therapies that address your unique
          needs. With a team of certified professionals, a passion for
          well-being, and a focus on results, we are here to support your
          journey to optimal health.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;
