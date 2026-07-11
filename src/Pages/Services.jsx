import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { 
  FaProcedures, FaWalking, FaRunning, FaClock, FaCalendarCheck, 
  FaCompass, FaSpa, FaSyringe, FaClinicMedical 
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Deep Tissue Massage",
      img: assets.deep_tissue,
      icon: <FaProcedures className="w-5 h-5 text-secondary" />,
      description:
        "Designed to target and realign the deeper layers of muscle fibers and connective tissue. Highly effective for breaking down stubborn scar tissue and chronic muscle knots.",
    },
    {
      title: "Injury Rehabilitation",
      img: assets.injury_rehabilitation,
      icon: <FaClinicMedical className="w-5 h-5 text-secondary" />,
      description:
        "Custom movement therapy, trigger point release, and joint mobilization designed to restore mobility, reduce swelling, and get you back to active training safely.",
    },
    {
      title: "Sports Performance Massage",
      img: assets.sport_performance,
      icon: <FaRunning className="w-5 h-5 text-secondary" />,
      description:
        "Enhance athletic capabilities by boosting muscle elasticity, improving local circulation, and flushing waste products. Perfect for high-intensity training blocks.",
    },
    {
      title: "Pre-Event Massage",
      img: assets.event,
      icon: <FaClock className="w-5 h-5 text-secondary" />,
      description:
        "Optimizes your muscles for immediate performance with dynamic, fast-paced techniques. Increases local circulation and prepares ligaments for intense exertion.",
    },
    {
      title: "Post-Event Massage",
      img: assets.post_event,
      icon: <FaCalendarCheck className="w-5 h-5 text-secondary" />,
      description:
        "Gentle, recovery-focused massage performed post-exertion. Promotes rapid lactic acid clearing, reduces muscle spasms, and accelerates natural cellular repair.",
    },
    {
      title: "Trigger Point Therapy",
      img: assets.trigger,
      icon: <FaSyringe className="w-5 h-5 text-secondary" />,
      description:
        "Relieves localized muscle spasms and referred pain by applying sustained, targeted pressure to specific hyper-irritable 'knots' in the myofascia.",
    },
    {
      title: "Relaxation Massage",
      img: assets.relaxation,
      icon: <FaSpa className="w-5 h-5 text-secondary" />,
      description:
        "Combines calming sweeping strokes and gentle pressure to down-regulate the nervous system, reduce cortisol (stress), and encourage full-body recovery.",
    },
    {
      title: "Joint Mobilization",
      img: assets.joint,
      icon: <FaWalking className="w-5 h-5 text-secondary" />,
      description:
        "Improves range of motion and eases joint stiffness through passive, small-range joint movements. Ideal for runners, lifters, and older active individuals.",
    },
    {
      title: "Personalized Recovery Plans",
      img: assets.personalize,
      icon: <FaCompass className="w-5 h-5 text-secondary" />,
      description:
        "Custom-tailored recovery programs designed around your training schedules, tissue tightness, and joint ranges for maximum consistency and safety.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-soft-neutral min-h-screen pb-24">
      
      {/* Immersive Page Hero */}
      <section className="relative bg-gradient-to-b from-white via-slate-50/50 to-white py-16 lg:py-24 overflow-hidden">
        {/* Soft background glows */}
        <div className="absolute top-20 right-32 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-teal-light/30 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 max-w-xl space-y-6">
              <span className="inline-block px-4 py-1.5 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-xs font-bold uppercase tracking-wider">
                What We Offer
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-light tracking-tight text-navy-dark leading-tight">
                Supporting a Healthy, <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-navy-dark via-secondary to-navy-dark">Active</span> and Pain-Free You
              </h1>
              <p className="text-lg text-slate-neutral font-body font-light leading-relaxed">
                From elite athletic prep to daily muscle maintenance, explore our range of clinical sports massage therapies.
              </p>
              <div className="pt-2">
                <Link to="/book">
                  <button className="inline-flex items-center gap-3 bg-gradient-to-r from-secondary to-[#e89d43] hover:from-[#c27017] hover:to-secondary text-white font-bold py-4 px-10 rounded-2xl shadow-[0_10px_25px_-5px_rgba(217,131,30,0.35)] hover:shadow-[0_15px_30px_rgba(217,131,30,0.5)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 text-base font-heading">
                    Book Treatment Now
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full max-w-md lg:max-w-none">
              <div className="relative">
                <div className="absolute inset-0 bg-secondary/5 rounded-[2.5rem] blur-2xl transform -translate-x-3 -translate-y-3 -z-10" />
                <img
                  src={assets.serv_img}
                  alt="Lauraphys Wellness Services"
                  className="w-full h-auto rounded-[2.5rem] shadow-premium border border-gray-150/50 object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* Services Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl font-heading font-light tracking-tight text-navy-dark">Our Therapy <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-navy-dark via-secondary to-navy-dark">Catalog</span></h2>
          <p className="text-slate-neutral text-sm md:text-base">
            Every session is customized by our certified therapists using one or more of these modalities to yield the best results for your body.
          </p>
        </div>
 
        <motion.div 
          className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/70 backdrop-blur-md rounded-[2.5rem] border border-gray-100/80 shadow-premium hover:shadow-premium-hover hover:border-secondary/20 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between group overflow-hidden"
              variants={cardVariants}
            >
              <div>
                {/* Image Showcase - Framed Inset */}
                <div className="p-4 pb-0">
                  <div className="aspect-[16/10] overflow-hidden relative rounded-[2rem] shadow-sm border border-gray-100/50 bg-black/5">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105"
                    />
                    {/* Floating Glass Icon Badge */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur shadow-[0_8px_25px_rgba(0,0,0,0.05)] p-3 rounded-2xl border border-white/50 flex items-center justify-center text-secondary">
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-8 space-y-3">
                  <h3 className="text-xl font-semibold text-navy-dark tracking-wide font-heading group-hover:text-secondary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-navy-light/90 leading-relaxed font-body">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Direct Booking CTA */}
              <div className="p-8 pt-0 border-t border-gray-50 flex justify-end">
                <Link to="/book" className="w-full">
                  <button className="w-full bg-gradient-to-r from-navy-dark to-secondary hover:from-secondary hover:to-navy-dark text-white font-extrabold py-3.5 px-6 rounded-2xl shadow-[0_4px_15px_-3px_rgba(27,29,29,0.25)] hover:shadow-[0_8px_25px_-4px_rgba(217,131,30,0.45)] transition-all duration-500 transform hover:-translate-y-0.5 active:translate-y-0 text-xs flex items-center justify-center gap-1.5 border border-transparent">
                    <FaCalendarCheck className="w-3.5 h-3.5" /> Book Session
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
 
    </div>
  );
};

export default Services;
