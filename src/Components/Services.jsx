import React from 'react';
import { assets } from "../assets/assets";

const Services = () => {
  return (
    <div className="bg-gray-100 py-12 px-6">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Our Services
      </h2>

      {/* Services Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Service Card */}
        {[
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
              "Combines soothing techniques to reduce stress and promote overall well-being. A great option for anyone needing to unwind and rejuvenate.",
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
        ].map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6"
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
