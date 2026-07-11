import React from 'react';
import { FaStar, FaQuoteLeft, FaGoogle } from 'react-icons/fa';

const Testimonials = () => {
  const reviews = [
    {
      name: "Marcus Davies",
      tag: "Marathon Runner",
      rating: 5,
      text: "The deep tissue and sports massage here is incredible. I had serious calf tightness pre-marathon, and the treatment restored my range of motion. Ran pain-free!"
    },
    {
      name: "Sarah Jenkins",
      tag: "Office Professional",
      rating: 5,
      text: "Suffered from chronic shoulder tightness due to long hours at my laptop. Regular trigger point sessions have completely eliminated the ache. I highly recommend Esther and Laura!"
    },
    {
      name: "David Croft",
      tag: "Weightlifter",
      rating: 5,
      text: "Excellent joint mobilization work. They really understand muscle anatomy and athletic loading. Best recovery session in Wellingborough by far."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white text-gray-800 relative overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse duration-[7000ms]" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse duration-[9000ms]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
          <div className="space-y-4 text-center lg:text-left">
            <span className="text-secondary font-bold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-heading font-light tracking-tight text-navy-dark">
              What Our <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-navy-dark via-secondary to-navy-dark">Clients Say</span>
            </h2>
            <p className="text-slate-neutral text-lg max-w-xl">
              Hear from local athletes, active parents, and office professionals who trust us with their muscle recovery and pain management.
            </p>
          </div>

          {/* Google badge - Glassmorphic */}
          <div className="bg-white/45 backdrop-blur-lg border border-white/60 p-6 rounded-2xl flex items-center gap-4 shrink-0 shadow-premium">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
              <FaGoogle className="w-6 h-6 text-red-500" />
            </div>
            <div className="space-y-1">
              <div className="flex text-amber-500 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm font-bold text-navy-dark">5.0 Star Rating</p>
              <p className="text-xs text-slate-neutral">Based on local client reviews</p>
            </div>
          </div>
        </div>

        {/* Reviews Grid - Glassmorphic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="relative group bg-white/45 backdrop-blur-lg border border-white/60 p-8 rounded-2xl flex flex-col justify-between hover:bg-white/65 hover:-translate-y-1 transition-all duration-300 shadow-premium"
            >
              {/* Individual card glow */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-secondary/10 rounded-full blur-2xl pointer-events-none -z-10" />

              <div className="space-y-6">
                <FaQuoteLeft className="w-8 h-8 text-secondary/20 group-hover:text-secondary/40 transition-colors" />
                <p className="text-sm text-slate-neutral leading-relaxed italic relative z-10">
                  "{rev.text}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 border-t border-white/45 mt-6 relative z-10">
                <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center text-secondary font-extrabold text-sm border border-teal-100">
                  {rev.name.split(' ')[0][0]}{rev.name.split(' ')[1][0]}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy-dark">{rev.name}</h4>
                  <p className="text-xs text-slate-neutral">{rev.tag}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
