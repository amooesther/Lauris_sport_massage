import React from 'react';
import { FaUserPlus, FaDraftingCompass, FaHandHoldingHeart, FaClipboardCheck } from 'react-icons/fa';

const TimelineProcess = () => {
  const steps = [
    {
      num: "01",
      icon: <FaUserPlus className="w-5 h-5 text-white" />,
      title: "Assessment",
      description: "We discuss your symptoms, review your athletic training, and perform a joint mobility check to isolate tension points."
    },
    {
      num: "02",
      icon: <FaDraftingCompass className="w-5 h-5 text-white" />,
      title: "Targeted Plan",
      description: "We outline a personalized recovery strategy combining deep tissue, stretching, and trigger point work."
    },
    {
      num: "03",
      icon: <FaHandHoldingHeart className="w-5 h-5 text-white" />,
      title: "Hands-on Therapy",
      description: "Receive focused sports massage therapy designed to release knots, increase circulation, and ease joint restrictions."
    },
    {
      num: "04",
      icon: <FaClipboardCheck className="w-5 h-5 text-white" />,
      title: "Rehab Guidance",
      description: "We provide targeted stretching routines and mobility advice to keep your body moving freely between sessions."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-secondary font-bold text-sm uppercase tracking-wider">How We Work</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark">
            Our Recovery Process
          </h2>
          <p className="text-slate-neutral text-lg">
            We follow a structured, clinical approach to ensure your treatment is safe, effective, and tailored to your specific recovery goals.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connecting line for desktop */}
          <div className="absolute top-[35px] left-[15%] right-[15%] h-[2px] bg-gray-100 hidden lg:block -z-10" />

          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-4 group">
              {/* Icon Ring */}
              <div className="relative">
                <div className="w-16 h-16 bg-navy-dark rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-secondary transition-colors duration-300 relative z-10">
                  {step.icon}
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-teal-50 rounded-full flex items-center justify-center border border-teal-100 text-xs font-bold text-secondary shadow-sm">
                  {step.num}
                </div>
              </div>

              {/* Text */}
              <div className="space-y-2 pt-2">
                <h3 className="text-lg font-bold text-navy-dark group-hover:text-secondary transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-neutral leading-relaxed max-w-[240px] mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default TimelineProcess;
