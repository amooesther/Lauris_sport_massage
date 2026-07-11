import React from 'react';
import { FaRunning, FaLaptop, FaDumbbell, FaArrowRight } from 'react-icons/fa';

const SuccessStories = () => {
  const cases = [
    {
      num: "CASE 01",
      icon: <FaRunning className="w-6 h-6" />,
      title: "Hamstring Strain",
      client: "Sarah, Marathon Competitor",
      symptoms: "Restricted hip flexion (45°) and localized deep ache, making running impossible.",
      treatment: "3 sessions of Deep Tissue Massage, trigger point release, and eccentric home stretches.",
      outcome: "Full mobility restored (90° range of motion), completing her marathon in 3h 45m without pain."
    },
    {
      num: "CASE 02",
      icon: <FaLaptop className="w-6 h-6" />,
      title: "Chronic Neck Tension",
      client: "Daniel, Software Engineer",
      symptoms: "Constant suboccipital headaches, shoulder stiffness, and poor rotation from desk sitting.",
      treatment: "Myofascial release on traps/neck, joint mobilization, and chest openers guidance.",
      outcome: "Headaches resolved completely within 2 weeks, normal neck rotation restored."
    },
    {
      num: "CASE 03",
      icon: <FaDumbbell className="w-6 h-6" />,
      title: "Shoulder Impingement",
      client: "Alex, CrossFit Athlete",
      symptoms: "Sharp pain during overhead snatch lifts, restricted internal rotation.",
      treatment: "Sports performance massage on rotator cuff, active release, and dynamic stretching.",
      outcome: "Overhead snatch lift restored to 100% capacity with zero joint pain."
    }
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white text-gray-800">
      {/* Decorative luxury ambient glows */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-teal-light/40 rounded-full filter blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-secondary font-semibold text-xs uppercase tracking-[0.25em] block">
            Proven Results
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-light tracking-tight text-navy-dark">
            Our Recovery <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-navy-dark via-secondary to-navy-dark">Case Studies</span>
          </h2>
          <div className="w-16 h-[2px] bg-secondary mx-auto mt-6 rounded-full opacity-80" />
          <p className="text-slate-neutral text-[16px] md:text-lg leading-relaxed max-w-2xl mx-auto pt-2 font-body">
            Real examples of how targeted sports massage and physical therapies restore mobility, resolve pain, and return athletes to peak activity.
          </p>
        </div>

        {/* Case Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((c, idx) => (
            <div
              key={idx}
              className="relative group bg-white/70 backdrop-blur-md border border-gray-100/80 rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between hover:shadow-premium-hover hover:border-secondary/20 hover:-translate-y-2 transition-all duration-500 shadow-premium"
            >
              {/* Individual card ambient glow */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-secondary/5 rounded-full blur-2xl pointer-events-none -z-10 group-hover:bg-secondary/10 transition-colors duration-500" />

              <div className="space-y-6">
                
                {/* Header Section */}
                <div className="flex items-center gap-4">
                  {/* Icon Circular Frame */}
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-secondary/15 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="w-14 h-14 rounded-full bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-center justify-center text-secondary group-hover:border-secondary/40 transition-all duration-500 relative z-10">
                      {c.icon}
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.15em] block">{c.num}</span>
                    <h3 className="font-semibold text-navy-dark text-lg leading-tight font-heading mt-0.5">{c.title}</h3>
                    <p className="text-[12px] text-slate-neutral mt-0.5">{c.client}</p>
                  </div>
                </div>

                {/* Content Block */}
                <div className="space-y-5 pt-2">
                  {/* Before / Presentation */}
                  <div className="space-y-1 border-l border-gray-200 pl-4">
                    <span className="text-[10px] font-bold text-navy-light uppercase tracking-wider block">Clinical Presentation</span>
                    <p className="text-[14px] text-navy-dark/90 leading-relaxed font-body">{c.symptoms}</p>
                  </div>

                  {/* Treatment Applied */}
                  <div className="space-y-1 border-l border-secondary/30 pl-4">
                    <span className="text-[10px] font-bold text-secondary uppercase tracking-wider block">Therapeutic Strategy</span>
                    <p className="text-[14px] text-navy-dark/90 leading-relaxed font-body">{c.treatment}</p>
                  </div>
                </div>

              </div>

              {/* Recovery Outcome */}
              <div className="bg-gradient-to-r from-secondary/5 to-transparent border-l-2 border-secondary p-4 rounded-r-2xl space-y-1 mt-6">
                <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.1em] block flex items-center gap-1.5">
                  Recovery Outcome <FaArrowRight className="w-2.5 h-2.5" />
                </span>
                <p className="text-[14px] font-semibold text-navy-dark leading-relaxed font-body">{c.outcome}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SuccessStories;
