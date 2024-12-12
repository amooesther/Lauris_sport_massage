import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { assets } from '../assets/assets';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const form = useRef();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_c2117lt', // Replace with your EmailJS Service ID
        'template_atpdnyi', // Replace with your EmailJS Template ID
        form.current,
        'fJjis2aAbJDSXIylL' // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          alert('Message sent successfully!');
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: '',
          });
        },
        (error) => {
          console.error('FAILED...', error.text);
          alert('Failed to send the message. Please try again.');
        }
      );
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.contact_bg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h2 className="text-4xl font-bold mb-4 animate-fadeIn">Contact Us</h2>
          <p className="text-lg mb-6 max-w-2xl">
            Need clarification? We're here to help, 24/7. Reach out to us anytime.
          </p>
          <button className="bg-primary hover:bg-hardYellow text-secondary py-3 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            Help Line
          </button>
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col lg:flex-row px-4 py-12 sm:px-6 lg:px-12 max-w-7xl gap-12">
        {/* Contact Details */}
        <div className="lg:w-7/12 space-y-8">
          <h2 className="text-3xl font-bold text-gray-800">Get In Touch</h2>
          <p className="text-gray-700">
            Stay connected with us on all our social media platforms or reach out directly.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-24 text-sm">
            {/* Contact Items */}
            {[
              {
                icon: assets.Phone_icon,
                title: "Phone",
                info: "+44 7391 530988",
              },
              {
                icon: assets.location_icon,
                title: "Address",
                info: `38 Fox Street, Rothwell,
Kettering, Northamptonshire, England, United Kingdom`,
              },
              {
                icon: assets.mail,
                title: "Email",
                info: "info@laurissportmassagetherapy.com",
              },
              {
                icon: assets.clock,
                title: "Operation Hours",
                info: `Monday - Friday: 9:00 AM - 7:00 PM
Saturday: 10:00 AM - 4:00 PM
Sunday: Closed`,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 lg:items-center lg:space-x-6 "
              >
                <img
                  src={item.icon}
                  alt={`${item.title} Icon`}
                  className="w-5 h-5 flex-shrink-0"
                />
                <div>
                  <p className="text-sm font-semibold mb-1">{item.title}</p>
                  <p className="text-gray-600 whitespace-pre-line">{item.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-5/12 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-6">
              <input
                type="text"
                id="firstName"
                name="user_firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-hardGreen"
                required
              />
              <input
                type="text"
                id="lastName"
                name="user_lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-hardGreen"
                required
              />
            </div>
            <input
              type="email"
              id="email"
              name="user_email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-hardGreen"
              required
            />
            <input
              type="text"
              id="subject"
              name="user_subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-hardGreen"
              required
            />
            <textarea
              id="message"
              name="user_message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-hardGreen h-32"
              required
            ></textarea>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-primary hover:bg-hardYellow text-secondary py-3 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Map Section */}
     <div className='mb-10' ><iframe width="100%" height="400" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=38%20Fox%20Street,%20Rothwell,%20Kettering,%20Northamptonshire,%20England,%20United%20Kingdom+(Lauris%20Sport%20Massage%20therapy%20center)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe></div>
    </div>
  );
};

export default ContactUs;
