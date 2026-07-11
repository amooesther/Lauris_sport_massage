import React from 'react';
import { assets } from '../assets/assets';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaCalendarAlt, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <div className="bg-soft-neutral min-h-screen">
      
      {/* Page Hero */}
      <section className="relative bg-gradient-to-br from-stone-50 via-white to-teal-50/60 py-20 lg:py-24 overflow-hidden border-b border-gray-100">
        {/* Glow Effects */}
        <div className="absolute top-10 right-10 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-5 left-10 w-80 h-80 bg-stone-200/40 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 max-w-xl space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-teal-50 border border-teal-200 rounded-full text-teal-700 text-xs font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse" />
                Get in Touch
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy-dark leading-tight">
                Let's Start Your <span className="text-secondary">Recovery</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-neutral leading-relaxed">
                Have questions about our treatments, clinic slots, or corporate programs? Our expert therapists are here to guide you toward optimal physical wellness and performance.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2 justify-center lg:justify-start">
                <Link to="/book">
                  <button className="flex items-center gap-2 bg-secondary hover:bg-[#f3982f] text-white font-extrabold py-3 px-6 rounded-xl text-sm transition duration-300 shadow-md hover:scale-[1.02] cursor-pointer">
                    <FaCalendarAlt />
                    Book Online Now
                  </button>
                </Link>
                <a href="https://wa.link/ysuhmi" target="_blank" rel="noopener noreferrer">
                  <button className="flex items-center gap-2 bg-white hover:bg-stone-50 text-navy-dark border border-gray-200 font-bold py-3 px-6 rounded-xl text-sm transition duration-300 shadow-sm hover:scale-[1.02] cursor-pointer">
                    <FaWhatsapp className="text-[#25D366] w-4 h-4" />
                    Chat on WhatsApp
                  </button>
                </a>
              </div>
            </div>
            <div className="flex-grow w-full max-w-md lg:max-w-none lg:w-[45%] relative">
              <div className="absolute inset-0 bg-secondary/5 rounded-3xl blur-2xl transform translate-x-3 translate-y-3 -z-10" />
              <div className="relative group p-2 bg-white rounded-3xl border border-gray-150 shadow-premium">
                <img
                  src={assets.contact_bg}
                  alt="Lauraphys Clinic"
                  className="w-full h-auto rounded-2xl shadow-lg object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
        {/* Background glow blobs */}
        <div className="absolute top-12 left-12 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-12 right-12 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch relative z-10">
          
          {/* Column 1: Details & Operating Info (5 Columns) */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-4">
              <h2 className="text-3xl font-heading font-light tracking-tight text-navy-dark">Connect <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-navy-dark via-secondary to-navy-dark">With Us</span></h2>
              <p className="text-slate-neutral leading-relaxed text-sm">
                We are located in Wellingborough. Feel free to call us, send an email, or start a WhatsApp chat. If you're ready to secure a session, our online scheduling engine is open 24/7.
              </p>
            </div>

            {/* Structured details cards */}
            <div className="space-y-4 flex-grow my-6 lg:my-0">
              {[
                {
                  icon: <FaPhoneAlt className="text-secondary w-5 h-5" />,
                  title: "Phone & WhatsApp Support",
                  info: "+44 7391 530988",
                  sub: "Dials directly. Feel free to message on WhatsApp.",
                  href: "tel:+447391530988"
                },
                {
                  icon: <FaEnvelope className="text-secondary w-5 h-5" />,
                  title: "Email Support",
                  info: "info@lauraphys.com",
                  sub: "For general, corporate or sporting event enquiries.",
                  href: "mailto:info@lauraphys.com"
                },
                {
                  icon: <FaClock className="text-secondary w-5 h-5" />,
                  title: "Operation Hours",
                  info: "Mon - Fri: 9am - 7pm\nSaturday: 10am - 4pm\nSunday: Closed",
                  sub: "By appointment only.",
                  href: null
                }
              ].map((item, idx) => (
                <div key={idx} className="glass-morphic flex gap-4 p-5 rounded-2xl transition-all duration-300 hover:scale-[1.01] hover:border-secondary/30">
                  <div className="p-3 bg-teal-50 rounded-xl shrink-0 h-fit">
                    {item.icon}
                  </div>
                  <div className="space-y-1 flex-grow">
                    <h3 className="font-bold text-navy-dark text-base">{item.title}</h3>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-semibold text-secondary hover:text-teal-600 inline-block transition-colors leading-relaxed">
                        {item.info}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-secondary whitespace-pre-line leading-relaxed">{item.info}</p>
                    )}
                    <p className="text-xs text-slate-neutral">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Gorgeous Visual Interactive Card (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="glass-morphic p-8 rounded-3xl border border-white/50 h-full flex flex-col justify-between min-h-[480px] shadow-premium relative overflow-hidden">
              <div className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-navy-dark">Looking to Book a Treatment?</h3>
                  <p className="text-sm text-slate-neutral leading-relaxed">
                    Check out live calendar availability, choose your therapist, and book your sports massage or rehabilitation session in less than 2 minutes.
                  </p>
                </div>

                {/* Service Credentials Showcase */}
                <div className="space-y-3 pt-2">
                  {[
                    "Highly qualified & fully certified therapists",
                    "Custom treatment planning tailored to your symptoms",
                    "Modern private facility with professional clinic equipment",
                    "Convenient industrial park location with free parking"
                  ].map((text, idx) => (
                    <div key={idx} className="flex gap-3 items-center text-xs font-semibold text-navy-dark bg-teal-50/40 p-3 rounded-xl border border-teal-100/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                      {text}
                    </div>
                  ))}
                </div>
              </div>

              {/* Clinic Image with CTA button */}
              <div className="relative group overflow-hidden rounded-2xl aspect-[16/9] shadow-sm border border-gray-150 mt-6 lg:mt-0">
                <img
                  src={assets.laura_sports_massage}
                  alt="Sports massage recovery session"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/30 to-transparent flex items-end p-6 justify-between">
                  <div className="space-y-1">
                    <span className="text-white font-extrabold text-sm sm:text-base tracking-tight">Sports Therapy &amp; Massage</span>
                    <p className="text-gray-300 text-[10px] sm:text-xs">Live calendar booking online</p>
                  </div>
                  <Link to="/book" className="flex items-center gap-1.5 bg-secondary hover:bg-[#f3982f] text-navy-dark font-extrabold text-xs py-2.5 px-4 rounded-xl shadow-teal-glow transition duration-300 shrink-0">
                    Book Now
                    <FaChevronRight className="w-2.5 h-2.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Google Maps Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="glass-morphic p-6 sm:p-8 rounded-3xl shadow-premium border border-white/50 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-5">
            <div className="space-y-1.5">
              <h3 className="text-xl font-bold text-navy-dark flex items-center gap-2">
                <FaMapMarkerAlt className="text-secondary" />
                Clinic Location
              </h3>
              <p className="text-xs text-slate-neutral leading-relaxed">
                Unit 4 Office 3, Booth Drive, Park Farm Industrial Estate, Wellingborough, NN8 6GR.
              </p>
            </div>
            <a 
              href="https://maps.google.com/?q=Unit+4+Office+3,+Booth+Drive,+Park+Farm+Industrial+Estate,+Wellingborough,+NN8+6GR" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2 bg-navy-dark hover:bg-secondary hover:text-navy-dark text-white font-extrabold py-3 px-5 rounded-xl text-xs transition duration-300 shadow-md shrink-0 cursor-pointer"
            >
              Get Directions ↗
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-inner border border-gray-150 h-[380px] w-full relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2449.6200234125746!2d-0.6698628!3d52.3048995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487777ca226d9e5f%3A0xe54e3d640245a4a5!2sBooth%20Dr%2C%20Wellingborough%20NN8%206GR!5e0!3m2!1sen!2suk!4v1700000000000"
              className="w-full h-full border-0 absolute inset-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location Map"
            ></iframe>
          </div>
          
          <div className="pt-2 text-center">
            <p className="text-xs text-slate-neutral">
              🚗 Ample free parking slots are available directly in front of the clinic entrance.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactUs;
