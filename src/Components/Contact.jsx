import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Contact = () => {
  // Container variants for fade-in animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  // Item variants for slide-in animation
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Button hover effect variants
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      id="contact"
      className="bg-blue-100 mt-5 mb-5 py-12 px-6"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.3 }} // Animation triggers when 30% of the section is in view
    >
      <motion.div
        className="max-w-6xl mx-auto bg-white shadow-lg rounded-3xl p-8 md:p-12"
        variants={itemVariants}
        whileInView="visible"
        initial="hidden"
      >
        {/* Heading */}
        <motion.h2
          className="text-2xl md:text-4xl font-bold text-primary text-center mb-8"
          variants={itemVariants}
          whileInView={{ opacity: 1, y: 0 }} // Scroll-triggered animation for heading
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Contact Us
        </motion.h2>

        {/* Introduction */}
        <motion.p
          className="text-lg md:text-xl text-gray-700 text-center mb-10"
          variants={itemVariants}
          whileInView={{ opacity: 1, y: 0 }} // Scroll-triggered animation for paragraph
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          We'd love to hear from you! Whether you have questions about our
          services, want to book an appointment, or need more information, feel
          free to reach out.
        </motion.p>

        {/* Contact Details */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
        >
          {/* Details */}
          {[{
            icon: assets.Phone_icon,
            title: "Phone",
            content: (
              <a
                href="tel:+447391530988"
                className="text-primary hover:text-primary-dark transition-colors"
              >
                +44 7391 530988
              </a>
            ),
          }, {
            icon: assets.mail,
            title: "Email",
            content: (
              <a
                href="mailto:info@laurismassagetherapy.com"
                className="text-primary hover:text-primary-dark transition-colors"
              >
                info@laurismassagetherapy.com
              </a>
            ),
          }, {
            icon: assets.location_icon,
            title: "Address",
            content: (
              <>
                38 Fox Street, Rothwell, <br />
                Kettering, Northamptonshire, <br />
                England, United Kingdom
              </>
            ),
          }, {
            icon: assets.clock,
            title: "Operational Hours",
            content: (
              <>
                Monday - Friday: 9:00 AM - 7:00 PM <br />
                Saturday: 10:00 AM - 4:00 PM <br />
                Sunday: Closed
              </>
            ),
          }].map((detail, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4"
              variants={itemVariants}
              whileInView={{ opacity: 1, y: 0 }} // Scroll-triggered animation for each contact detail
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={detail.icon}
                alt={`${detail.title} Icon`}
                className="w-4 h-4 md:w-6 md:h-6"
              />
              <div>
                <p className="text-gray-800 font-medium text-lg md:text-xl">
                  {detail.title}
                </p>
                <p className="text-gray-700">{detail.content}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Book Appointment Button */}
        <Link to="/booking">
          <motion.button
            type="submit"
            className="w-full bg-primary text-2xl text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition-all shadow-md mt-8"
            variants={buttonVariants}
            whileHover="hover"
          >
            Book Now
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
