import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Faq = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      question: "What should I wear to a sports massage session?",
      answer: "We recommend wearing loose, comfortable clothing. For lower limb assessments and stretching, please bring or wear running shorts. Your comfort and modesty are maintained at all times with professional draping."
    },
    {
      question: "Will the sports massage be painful?",
      answer: "Sports massage involves deep tissue manual techniques which can feel intense or 'good-painful' as tight fibers release. However, our therapists communicate with you throughout the session to ensure pressure remains within your comfort limit."
    },
    {
      question: "How often should I book a sports massage?",
      answer: "For maintenance and injury prevention, most clients book every 2 to 4 weeks. If you are training for an event (like a marathon) or rehabilitation, weekly or bi-weekly sessions may be recommended by your therapist."
    },
    {
      question: "What is your clinic's cancellation policy?",
      answer: "We operate a strict 24-hour cancellation policy. If you need to reschedule or cancel your appointment, please let us know at least 24 hours in advance to avoid a cancellation charge."
    },
    {
      question: "Can I claim sports massage on my health insurance?",
      answer: "Many health cash plan providers (e.g. Westfield Health, Medicash) allow you to claim back sports massage costs. We provide digital invoice receipts containing all necessary therapist details and registration numbers."
    }
  ];

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-16 md:py-24 bg-light-gray text-gray-800 relative overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-secondary font-bold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-heading font-light tracking-tight text-navy-dark">
            Frequently Asked <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-navy-dark via-secondary to-navy-dark">Questions</span>
          </h2>
          <p className="text-slate-neutral">
            Have questions about your upcoming treatment? Find quick answers below.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="relative bg-white/45 backdrop-blur-lg border border-white/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Individual item glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full blur-xl pointer-events-none -z-10" />

                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none relative z-10"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-navy-dark text-base md:text-lg">
                    {faq.question}
                  </span>
                  <FaChevronDown
                    className={`w-4 h-4 text-secondary shrink-0 transition-transform duration-300 ${
                      isOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Animated collapse content */}
                <div
                  className={`transition-all duration-300 ease-in-out relative z-10 ${
                    isOpen ? "max-h-[300px] border-t border-white/45 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <p className="px-6 py-5 text-sm text-slate-neutral leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Faq;
