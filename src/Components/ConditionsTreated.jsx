import React from 'react';
import { FaUserShield, FaProcedures, FaWalking, FaDumbbell, FaBriefcaseMedical, FaRegCheckCircle } from 'react-icons/fa';

const ConditionsTreated = () => {
  const conditions = [
    {
      title: "Neck & Shoulder Tension",
      description: "Relieve tight traps and upper back pain caused by sitting at desks, stress, or intense upper-body athletic training.",
      icon: <FaProcedures className="w-5 h-5 text-white" />
    },
    {
      title: "Lower Back Pain & Sciatica",
      description: "Alleviate muscular lower back discomfort, reduce stiffness, and release tension in the glutes and piriformis.",
      icon: <FaUserShield className="w-5 h-5 text-white" />
    },
    {
      title: "Sports Injury Recovery",
      description: "Manage shin splints, runner's knee, calf strains, and ankle tightness to speed up tissue recovery and return to training.",
      icon: <FaDumbbell className="w-5 h-5 text-white" />
    },
    {
      title: "Joint Stiffness",
      description: "Improve overall range of motion in the hips, shoulders, and knees through passive mobilization and muscle stretching.",
      icon: <FaWalking className="w-5 h-5 text-white" />
    },
    {
      title: "Repetitive Strain (RSI)",
      description: "Target localized muscle knots and tendinopathy symptoms like Tennis/Golfer's elbow and wrist strain.",
      icon: <FaBriefcaseMedical className="w-5 h-5 text-white" />
    },
    {
      title: "Postural Fatigue",
      description: "Correct muscle imbalances and thoracic tightness using targeted myofascial release and posture realignment advice.",
      icon: <FaRegCheckCircle className="w-5 h-5 text-white" />
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-navy-dark text-white relative overflow-hidden">
      {/* Background glow spots to make glassmorphism popup */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-secondary font-bold text-sm uppercase tracking-wider">Clinical Care</span>
          <h2 className="text-3xl md:text-4xl font-heading font-light tracking-tight text-white">
            Conditions We <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-secondary to-white">Treat</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Sports massage therapy is highly effective for both athletic performance and everyday musculoskeletal discomfort.
          </p>
        </div>

        {/* Grid of frosted dark glass cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {conditions.map((item, idx) => (
            <div
              key={idx}
              className="relative group bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl transition-all duration-300 space-y-4 hover:bg-white/15 hover:border-white/20 hover:-translate-y-0.5"
            >
              {/* Individual card spot */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/10 rounded-full blur-xl pointer-events-none -z-10 group-hover:bg-secondary/20 transition-colors" />

              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/15">
                {item.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white group-hover:text-secondary transition-colors">{item.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ConditionsTreated;
