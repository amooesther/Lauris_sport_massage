import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock, FaCheckCircle, FaStar } from "react-icons/fa";

const AboutUs = () => {
  const coreValues = [
    {
      title: "Clinical Excellence",
      desc: "We bring advanced qualifications, deep anatomical knowledge, and safe, hands-on treatment strategies to every session."
    },
    {
      title: "Compassionate Care",
      desc: "We listen to your physical symptoms, respect your comfort boundaries, and formulate treatment tailored to you."
    },
    {
      title: "Performance Focus",
      desc: "Our goal is keeping your muscles loose and joints moving freely, supporting your active athletic or daily life goals."
    }
  ];

  return (
    <div className="bg-soft-neutral min-h-screen pb-16">
      
      {/* 1. Page Header & Story */}
      <section className="py-16 md:py-24 bg-white text-gray-800 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Story text */}
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <span className="text-secondary font-bold text-sm uppercase tracking-wider">About LauraPhys</span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-navy-dark leading-tight">
                Empowering Your Journey to Wellness
              </h1>
              <p className="text-lg text-slate-neutral leading-relaxed">
                Experience clinical care, deep muscle release, and structured recovery at <strong>Lauraphys Wellness LTD</strong>. Located at Unit 4 Office 3, Booth Drive, Park Farm Industrial Estate, Wellingborough NN8 6GR.
              </p>
              <p className="text-sm text-slate-neutral leading-relaxed">
                Our practice is built on supporting athletic longevity and everyday movement. We combine evidence-backed sports massage therapy with joint mobilization and stretching to alleviate tight fibers, improve circulatory flushing, and dissolve stress tension.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link to="/book">
                  <button className="w-full sm:w-auto bg-accent-gold hover:bg-amber-600 text-white font-bold py-3.5 px-8 rounded-xl shadow-md transition duration-300 text-sm">
                    Book Treatment
                  </button>
                </Link>
                <Link to="/services">
                  <button className="w-full sm:w-auto border border-navy-dark text-navy-dark hover:bg-navy-dark hover:text-white font-bold py-3.5 px-8 rounded-xl transition duration-300 text-sm">
                    Our Services
                  </button>
                </Link>
              </div>
            </div>

            {/* Photo on right */}
            <div className="flex-grow w-full max-w-md lg:max-w-none lg:w-[45%] relative">
              <div className="absolute inset-0 bg-secondary/5 rounded-3xl blur-2xl transform translate-x-3 translate-y-3 -z-10" />
              <img
                src={assets.about}
                alt="About Lauraphys wellness LTD"
                className="w-full h-auto rounded-3xl shadow-premium border border-gray-150 object-cover aspect-[4/3] sm:aspect-square lg:aspect-auto"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="py-16 md:py-24 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold text-navy-dark">Our Mission & Vision</h2>
            <p className="text-slate-neutral text-sm">Our primary goals and focus as recovery practitioners.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-premium space-y-4">
              <h3 className="text-xl font-bold text-navy-dark border-b border-gray-100 pb-3">Our Mission</h3>
              <p className="text-sm text-slate-neutral leading-relaxed">
                At Lauraphys Wellness LTD, our mission is to enhance client well-being by providing tailored sports massage therapies that promote rapid recovery, relieve physical pain, and restore structural vitality, empowering you to live an active, pain-free life.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-premium space-y-4">
              <h3 className="text-xl font-bold text-navy-dark border-b border-gray-100 pb-3">Our Vision</h3>
              <p className="text-sm text-slate-neutral leading-relaxed">
                To be Wellingborough's leading provider of expert sports massage and musculoskeletal recovery care, recognized for clinical excellence, patient-focused compassion, and supportive guidance that gets results.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Core Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-secondary font-bold text-xs uppercase tracking-wider">What We Stand For</span>
            <h2 className="text-3xl font-extrabold text-navy-dark">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((val, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-gray-100 space-y-4 hover:bg-white hover:shadow-premium transition-all duration-300">
                <div className="w-8 h-8 bg-teal-50 rounded-full flex items-center justify-center border border-teal-100 shrink-0">
                  <FaCheckCircle className="text-secondary w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-navy-dark">{val.title}</h3>
                <p className="text-sm text-slate-neutral leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Business & Contact Information */}
      <section className="py-16 md:py-24 bg-light-gray border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold text-navy-dark">Clinic Information</h2>
            <p className="text-slate-neutral text-sm">Quick reference details for all bookings and enquiries.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Phone */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-150 flex flex-col items-center text-center space-y-3">
              <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center">
                <FaPhoneAlt className="text-secondary w-5 h-5" />
              </div>
              <h4 className="font-bold text-navy-dark text-base">Phone</h4>
              <p className="text-sm text-slate-neutral">+44 7391 530988</p>
            </div>

            {/* Location */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-150 flex flex-col items-center text-center space-y-3">
              <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center">
                <FaMapMarkerAlt className="text-secondary w-5 h-5" />
              </div>
              <h4 className="font-bold text-navy-dark text-base">Location</h4>
              <p className="text-xs text-slate-neutral leading-relaxed">
                Unit 4 Office 3, Booth Drive, <br />
                Park Farm Industrial Estate, <br />
                Wellingborough, NN8 6GR
              </p>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-150 flex flex-col items-center text-center space-y-3">
              <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center">
                <FaEnvelope className="text-secondary w-5 h-5" />
              </div>
              <h4 className="font-bold text-navy-dark text-base">Email</h4>
              <p className="text-sm text-slate-neutral break-all">info@lauraphys.com</p>
            </div>

            {/* Hours */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-150 flex flex-col items-center text-center space-y-3">
              <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center">
                <FaClock className="text-secondary w-5 h-5" />
              </div>
              <h4 className="font-bold text-navy-dark text-base">Hours</h4>
              <p className="text-xs text-slate-neutral leading-relaxed">
                Mon - Fri: 9:00 AM - 7:00 PM <br />
                Saturday: 10:00 AM - 4:00 PM <br />
                Sunday: Closed
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutUs;
