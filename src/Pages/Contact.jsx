import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { assets } from '../assets/assets';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setIsSubmitting(true);

    emailjs
      .sendForm(
        'service_c2117lt', // Preserved Service ID
        'template_atpdnyi', // Preserved Template ID
        form.current,
        'fJjis2aAbJDSXIylL' // Preserved Public Key
      )
      .then(
        () => {
          toast.success('Message sent successfully!');
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: '',
          });
          setIsSubmitting(false);
        },
        (error) => {
          console.error('FAILED...', error.text);
          toast.error('Failed to send the message. Please try again.');
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="bg-soft-neutral min-h-screen">
      
      {/* Page Hero */}
      <section className="relative bg-gradient-to-br from-stone-50 via-white to-stone-100 py-16 lg:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-50/80 to-transparent pointer-events-none" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-teal-100/30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-stone-200/40 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 max-w-xl">
              <span className="inline-block px-4 py-1.5 bg-teal-50 border border-teal-200 rounded-full text-teal-700 text-xs font-bold uppercase tracking-wider mb-4">
                Get in Touch
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight mb-4">
                Contact <span className="text-teal-600">Us</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Need clarification about our treatments or booking slots? We're here to support you every step of the way.
              </p>
            </div>
            <div className="flex-1 w-full max-w-md lg:max-w-none">
              <img
                src={assets.contact_bg}
                alt="Contact Lauraphys Wellness"
                className="w-full h-auto rounded-3xl shadow-xl object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden">
        {/* Background glow blobs */}
        <div className="absolute top-12 left-12 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-12 right-12 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative z-10">
          
          {/* Column 1: Details & Operating Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-extrabold text-navy-dark">Connect With Our Specialists</h2>
              <p className="text-slate-neutral leading-relaxed">
                We are located in Wellingborough. Feel free to call us, send an email, or complete the form. If you're ready to make a booking, use our scheduler to lock in a slot.
              </p>
            </div>

            {/* Structured details cards */}
            <div className="space-y-4 max-w-md">
              {[
                {
                  icon: <FaPhoneAlt className="text-secondary w-5 h-5" />,
                  title: "Phone & WhatsApp Support",
                  info: "+44 7391 530988",
                  sub: "Mon - Sat (Hours apply). Feel free to message on WhatsApp."
                },
                {
                  icon: <FaEnvelope className="text-secondary w-5 h-5" />,
                  title: "Email Support",
                  info: "info@lauraphys.com",
                  sub: "For general, corporate or event enquiries."
                },
                {
                  icon: <FaClock className="text-secondary w-5 h-5" />,
                  title: "Operation Hours",
                  info: "Mon - Fri: 9:00 AM - 7:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed",
                  sub: "By appointment only."
                }
              ].map((item, idx) => (
                <div key={idx} className="glass-morphic flex gap-4 p-5 rounded-2xl">
                  <div className="p-3 bg-teal-50 rounded-xl shrink-0 h-fit">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-navy-dark text-base">{item.title}</h3>
                    <p className="text-sm font-semibold text-secondary whitespace-pre-line leading-relaxed">{item.info}</p>
                    <p className="text-xs text-slate-neutral">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Contact Form */}
          <div className="glass-morphic p-8 rounded-2xl space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-navy-dark">Send Us a Message</h2>
              <p className="text-xs text-slate-neutral">We typically reply within 2 hours during clinic operation schedules.</p>
            </div>

            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="firstName" className="text-xs font-bold text-navy-dark">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="user_firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full border border-gray-250 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="lastName" className="text-xs font-bold text-navy-dark">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="user_lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full border border-gray-250 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="text-xs font-bold text-navy-dark">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-250 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
                  required
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="subject" className="text-xs font-bold text-navy-dark">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="user_subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border border-gray-250 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
                  required
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-xs font-bold text-navy-dark">Message</label>
                <textarea
                  id="message"
                  name="user_message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-250 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm h-32 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-navy-dark hover:bg-secondary text-white hover:text-navy-dark font-bold py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:pointer-events-none text-[15px]"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Google Maps Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="space-y-4 mb-6">
          <h3 className="text-xl font-bold text-navy-dark flex items-center gap-2">
            <FaMapMarkerAlt className="text-secondary" />
            Clinic Location
          </h3>
          <p className="text-xs text-slate-neutral">
            Unit 4 Office 3, Booth Drive, Park Farm Industrial Estate, Wellingborough, NN8 6GR. Ample free parking available outside.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-premium border border-gray-150 h-[380px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2449.6200234125746!2d-0.6698628!3d52.3048995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487777ca226d9e5f%3A0xe54e3d640245a4a5!2sBooth%20Dr%2C%20Wellingborough%20NN8%206GR!5e0!3m2!1sen!2suk!4v1700000000000"
            className="w-full h-full border-none"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Clinic Location Map"
          ></iframe>
        </div>
      </section>

    </div>
  );
};

export default ContactUs;
