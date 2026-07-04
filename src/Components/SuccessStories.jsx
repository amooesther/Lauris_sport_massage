import React from 'react';
import { FaRunning, FaLaptop, FaDumbbell, FaArrowRight } from 'react-icons/fa';

const SuccessStories = () => {
  const cases = [
    {
      icon: <FaRunning className="w-5 h-5 text-white" />,
      title: "Runner recovering from Hamstring Strain",
      client: "Sarah, Marathon Competitor",
      symptoms: "Restricted hip flexion (45°) and localized deep ache, making running impossible.",
      treatment: "3 sessions of Deep Tissue Massage, trigger point release, and eccentric home stretches.",
      outcome: "Full mobility restored (90° range of motion), completed marathon in 3h 45m without pain."
    },
    {
      icon: <FaLaptop className="w-5 h-5 text-white" />,
      title: "Office Worker with Chronic Neck Tension",
      client: "Daniel, Software Engineer",
      symptoms: "Constant suboccipital headaches, shoulder stiffness, and poor rotation from desk sitting.",
      treatment: "Myofascial release on traps/neck, joint mobilization, and chest openers guidance.",
      outcome: "Headaches resolved completely within 2 weeks, normal neck rotation restored."
    },
    {
      icon: <FaDumbbell className="w-5 h-5 text-white" />,
      title: "Weightlifter with Shoulder Impingement",
      client: "Alex, CrossFit Athlete",
      symptoms: "Sharp pain during overhead snatch lifts, restricted internal rotation.",
      treatment: "Sports performance massage on rotator cuff, active release, and dynamic stretching.",
      outcome: "Overhead snatch lift restored to 100% capacity with zero joint pain."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white text-gray-800 relative overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-secondary font-bold text-sm uppercase tracking-wider">Success Stories</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark">
            Our Recovery Case Studies
          </h2>
          <p className="text-slate-neutral text-lg">
            Real examples of how targeted sports massage therapies restore mobility, resolve pain, and return you to peak activity.
          </p>
        </div>

        {/* Case Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((c, idx) => (
            <div
              key={idx}
              className="relative group bg-white/45 backdrop-blur-lg border border-white/60 rounded-2xl p-6 md:p-8 space-y-6 flex flex-col justify-between hover:bg-white/65 hover:-translate-y-1 transition-all duration-300 shadow-premium"
            >
              {/* Individual card glow */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-secondary/10 rounded-full blur-2xl pointer-events-none -z-10" />

              <div className="space-y-4">
                {/* Header Badge */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-navy-dark rounded-xl flex items-center justify-center shadow-md">
                    {c.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-dark text-base leading-tight">{c.title}</h3>
                    <p className="text-xs text-slate-neutral">{c.client}</p>
                  </div>
                </div>

                <div className="space-y-3 pt-2 text-sm">
                  {/* Before */}
                  <div className="bg-red-50/40 border-l-4 border-red-500 p-3 rounded-r-lg">
                    <p className="text-xs font-semibold text-red-700 uppercase tracking-wide">Symptoms / Before:</p>
                    <p className="text-gray-700 mt-1">{c.symptoms}</p>
                  </div>

                  {/* Therapy */}
                  <div className="bg-teal-50/20 border-l-4 border-teal-500 p-3 rounded-r-lg">
                    <p className="text-xs font-semibold text-teal-700 uppercase tracking-wide">Treatment Applied:</p>
                    <p className="text-gray-700 mt-1">{c.treatment}</p>
                  </div>
                </div>
              </div>

              {/* Outcome / After */}
              <div className="bg-green-50/50 border-l-4 border-green-500 p-4 rounded-r-lg mt-4">
                <p className="text-xs font-semibold text-green-700 uppercase tracking-wide flex items-center gap-1">
                  After / Recovery Outcome: <FaArrowRight className="w-3 h-3" />
                </p>
                <p className="text-gray-800 font-medium mt-1 text-sm">{c.outcome}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SuccessStories;
