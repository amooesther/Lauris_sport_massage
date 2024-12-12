import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

// Variants for container animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Variants for each card animation
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Variants for the heading animation
const headingVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Services = () => {
  const services = [
    {
      title: "Deep Tissue Massage",
      img: assets.deep_tissue,
      description:
        "At Lauris Sport Massage Therapy, our Deep Tissue Massage is designed to target and realign the deeper layers of muscles and connective tissue. This specialized treatment helps relieve chronic tension, reduce pain, and restore your body’s natural balance.",
    },
    {
      title: "Injury Rehabilitation",
      img: assets.injury_rehabilitation,
      description:
        "We work to restore mobility, reduce discomfort, and get you back to your active lifestyle faster.",
    },
    {
      title: "Sports Performance Massage",
      img: assets.sport_performance,
      description:
        "We help enhance athletic performance by improving flexibility, circulation, and muscle function. Perfect before or after competitions to prepare your body or speed up recovery.",
    },
    {
      title: "Pre-Event Massage",
      img: assets.event,
      description:
        "Optimizes your muscles for peak performance with dynamic, targeted techniques. This service helps prevent injuries and boosts circulation for better results during events.",
    },
    {
      title: "Post-Event Massage",
      img: assets.post_event,
      description:
        "Gentle yet effective techniques to relieve tightness in connective tissues. Helps alleviate chronic pain, improve mobility, and enhance overall physical function.",
    },
    {
      title: "Trigger Point Therapy",
      img: assets.trigger,
      description:
        'Relieves pain and tension by targeting specific "knots" in the muscles. This therapy is especially effective for localized pain and restricted movement.',
    },
    {
      title: "Relaxation Massage",
      img: assets.relaxation,
      description:
        "We combine soothing techniques to reduce stress and promote overall well-being. A great option for anyone needing to unwind and rejuvenate.",
    },
    {
      title: "Joint Mobilization",
      img: assets.joint,
      description:
        "Improves range of motion and reduces stiffness in joints. Beneficial for athletes, older adults, and anyone recovering from joint injuries.",
    },
    {
      title: "Personalized Wellness Plans",
      img: assets.personalize,
      description:
        "Custom-tailored treatment plans designed to meet your unique goals and needs. We focus on your body’s specific requirements for optimal recovery and performance.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <motion.div
        className="relative bg-green-100 min-h-[90vh] py-16 px-4 sm:px-8 lg:px-16 flex flex-col justify-center items-center text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={assets.serv_img}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
        />
        <motion.div
          className="relative z-10"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Supporting a Healthy and Active You
          </h1>
          <p className="text-secondary bg-primary text-lg sm:text-xl max-w-2xl mx-auto mb-8 p-4 rounded-md shadow-md">
            With targeted therapies to optimize your recovery and performance, we’re here to help you achieve your wellness goals.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-primary text-secondary py-3 px-6 rounded-lg font-semibold text-lg shadow-lg hover:bg-secondary hover:text-primary transition-all duration-300"
          >
            BOOK NOW
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Services Section */}
      <motion.div
        id="services"
        className="py-12 px-4 sm:px-2"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          variants={headingVariants}
        >
          Our Services
        </motion.h2>
        <motion.div
          className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6"
              variants={cardVariants}
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex justify-center items-center mt-10">
          <Link to="/book">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-primary text-secondary py-3 px-8 rounded-lg font-semibold text-lg hover:scale-105 transform transition-all duration-300"
            >
              BOOK NOW
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
