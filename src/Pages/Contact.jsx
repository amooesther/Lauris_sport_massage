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
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url(${assets.contact_bg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg max-w-xl mx-auto">
            Need clarification? We're here to help, 24/7. Reach out to us anytime.
          </p>
          <button className="mt-6 bg-primary hover:bg-hardYellow text-secondary py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            Help Line
          </button>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Details */}
        <div className="space-y-8 ">
          <h2 className="text-4xl font-bold text-primary">Get In Touch</h2>
          <p className="text-gray-700">
            Stay connected with us on all our social media platforms or reach out directly.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-8">
            {[
              {
                icon: assets.Phone_icon,
                title: 'Phone',
                info: '+44 7391 530988',
              },
              {
                icon: assets.mail,
                title: 'Email',
                info: 'info@lauraphys.com.com',
              },
              {
                icon: assets.clock,
                title: 'Operation Hours',
                info: `Monday - Friday: 9:00 AM - 7:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed`,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 w-[350px] bg-white p-4 rounded-lg shadow-md"
              >
                <img src={item.icon} alt={item.title} className="w-10 h-10" />
                <div>
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="text-gray-600 text-[14px] whitespace-pre-line">{item.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center text-primary">Send Us a Message</h2>
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
            <button
              type="submit"
              className="w-full bg-primary hover:bg-hardYellow text-secondary py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
