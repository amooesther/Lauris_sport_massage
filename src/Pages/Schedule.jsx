import React from "react";
import { assets } from "../assets/assets";
import { FaRegClock, FaTshirt, FaInfoCircle, FaPhoneAlt, FaEnvelope, FaCalendarCheck } from "react-icons/fa";

const Schedule = () => {
  return (
    <div className="bg-soft-neutral min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute top-12 left-12 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-12 right-12 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto mb-10 text-center space-y-3">
        <span className="inline-block px-4 py-1.5 bg-teal-50 border border-teal-200 rounded-full text-teal-700 text-xs font-bold uppercase tracking-wider">
          Appointment Booking
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-dark tracking-tight">
          Book Your <span className="text-secondary">Wellness Session</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-neutral max-w-2xl mx-auto leading-relaxed">
          Take the first step towards recovery, pain relief, and peak physical performance. Choose your preferred service and lock in your slot online.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        
        {/* Left Column: Visual Showcase & Info (5 Columns) */}
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
          {/* Visual Showcase */}
          <div className="glass-morphic p-5 rounded-2xl space-y-4">
            <h3 className="font-bold text-navy-dark text-lg px-1 border-b border-gray-100 pb-2">
              Our Premium Clinic &amp; Services
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 relative group overflow-hidden rounded-xl aspect-[16/10] shadow-sm border border-gray-100">
                <img
                  src={assets.laura_hero_clinic}
                  alt="Lauraphys Treatment Clinic Room"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex items-end p-4">
                  <span className="text-white text-xs font-bold">Private Treatment Clinic Room</span>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl aspect-square shadow-sm border border-gray-100">
                <img
                  src={assets.laura_assisted_stretch}
                  alt="Assisted Stretching Session"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-3">
                  <span className="text-white text-[11px] font-bold leading-tight">Assisted Stretching</span>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl aspect-square shadow-sm border border-gray-100">
                <img
                  src={assets.laura_dry_needling}
                  alt="Dry Needling Treatment"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-3">
                  <span className="text-white text-[11px] font-bold leading-tight">Dry Needling &amp; Rehab</span>
                </div>
              </div>
            </div>
          </div>

          {/* Useful Booking Information & Policies */}
          <div className="glass-morphic p-6 rounded-2xl space-y-6 flex-grow mt-6 lg:mt-0">
            <h3 className="font-bold text-navy-dark text-lg border-b border-gray-100 pb-3">
              Booking Information
            </h3>

            {/* Clinic hours */}
            <div className="flex gap-4">
              <div className="p-2.5 bg-teal-50 rounded-xl shrink-0 h-fit">
                <FaRegClock className="text-secondary w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-navy-dark text-sm">Clinic Hours</h4>
                <p className="text-xs text-slate-neutral leading-relaxed">
                  Monday - Friday: 9:00 AM - 7:00 PM <br />
                  Saturday: 10:00 AM - 4:00 PM <br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* What to wear */}
            <div className="flex gap-4">
              <div className="p-2.5 bg-teal-50 rounded-xl shrink-0 h-fit">
                <FaTshirt className="text-secondary w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-navy-dark text-sm">What to Wear</h4>
                <p className="text-xs text-slate-neutral leading-relaxed">
                  Please wear loose, comfortable clothing. If we are assessing or massaging the lower limbs or back, running shorts are highly recommended.
                </p>
              </div>
            </div>

            {/* Cancellation policy */}
            <div className="flex gap-4">
              <div className="p-2.5 bg-teal-50 rounded-xl shrink-0 h-fit">
                <FaInfoCircle className="text-secondary w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-navy-dark text-sm">Cancellation Policy</h4>
                <p className="text-xs text-slate-neutral leading-relaxed text-red-500 font-semibold">
                  We require 24 hours' notice for cancellations. Cancellations within 24 hours will incur a full session charge.
                </p>
              </div>
            </div>

            {/* Support contacts */}
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <p className="text-xs text-slate-neutral">Need to check schedules? Contact us:</p>
              <div className="flex flex-col gap-2 text-xs text-navy-dark font-semibold">
                <a href="tel:+447391530988" className="flex items-center gap-2 hover:text-secondary">
                  <FaPhoneAlt /> +44 7391 530988
                </a>
                <a href="mailto:info@lauraphys.com" className="flex items-center gap-2 hover:text-secondary">
                  <FaEnvelope /> info@lauraphys.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Book Now CTA Card (7 Columns) */}
        <div className="lg:col-span-7">
          <div className="bg-gradient-to-br from-navy-dark via-navy-deep to-navy-light text-white p-8 md:p-10 rounded-3xl shadow-xl border border-white/10 relative overflow-hidden space-y-8">
            {/* Ambient gold glow */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-xs font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-ping" />
                Live Availability
              </span>
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  Schedule Your Therapy
                </h2>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Ready to relieve muscle tension, recover from injury, or boost athletic performance? Access our online scheduler directly to select your service and pick your therapist.
                </p>
              </div>

              {/* Action Booking Button (Repositioned above the fold) */}
              <div className="space-y-3 pt-2">
                <a
                  href="https://LauraphysWellnessLtd.simplybook.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-secondary hover:bg-[#f3982f] text-navy-dark font-extrabold py-4 px-6 rounded-xl text-base shadow-teal-glow transition duration-300 transform hover:-translate-y-0.5 hover:scale-[1.02] cursor-pointer animate-pulse"
                >
                  <FaCalendarCheck className="w-5 h-5" />
                  Book Now
                </a>
                <p className="text-[11px] text-center text-gray-400">
                  Securely managed by SimplyBook.it scheduling engine. No account setup required.
                </p>
              </div>

              {/* How It Works Steps (Positioned below the booking action for better UX) */}
              <div className="space-y-4 pt-6 border-t border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-secondary">
                  How it works:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { step: "1", title: "Select Service", desc: "Choose from Sports Massage, Rehab, Assisted Stretching, or Dry Needling." },
                    { step: "2", title: "Choose Duration", desc: "Browse available durations and check therapist availability in real-time." },
                    { step: "3", title: "Pick Date & Time", desc: "Select a convenient morning, afternoon, or late-evening slot." },
                    { step: "4", title: "Instant Confirmation", desc: "Your booking will be finalized instantly with confirmation sent to your email." }
                  ].map((s, idx) => (
                    <div key={idx} className="flex gap-3 items-start bg-white/5 p-3 rounded-xl border border-white/5">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-secondary/20 text-secondary text-[10px] font-bold shrink-0">
                        {s.step}
                      </span>
                      <div className="space-y-0.5">
                        <h5 className="text-xs font-bold text-white">{s.title}</h5>
                        <p className="text-[10px] text-gray-400 leading-normal">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Schedule;
