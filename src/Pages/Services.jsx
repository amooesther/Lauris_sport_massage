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
    <div className="bg-soft-neutral min-h-screen pb-16">
      
      {/* Immersive Page Hero */}
      <section className="relative bg-navy-dark text-white py-20 overflow-hidden">
        {/* Background image overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 select-none pointer-events-none"
          style={{ backgroundImage: `url(${assets.serv_img})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/90 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="text-secondary font-bold text-sm uppercase tracking-wider">What We Offer</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-2xl leading-tight">
            Supporting a Healthy, Active and Pain-Free You
          </h1>
          <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
            From elite athletic prep to daily muscle maintenance, explore our range of clinical sports massage therapies.
          </p>
          <div className="pt-4">
            <Link to="/book">
              <button className="bg-accent-gold hover:bg-amber-600 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0">
                Book Treatment Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl font-extrabold text-navy-dark">Our Therapy Catalog</h2>
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
              className="bg-white rounded-2xl overflow-hidden border border-gray-150 shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between group"
              variants={cardVariants}
            >
              <div>
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur shadow-sm p-2.5 rounded-xl">
                    {service.icon}
                  </div>
                </div>

                {/* Text content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-navy-dark group-hover:text-secondary transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-neutral leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Direct Booking CTA */}
              <div className="p-6 pt-0 mt-2 border-t border-gray-50 flex justify-end">
                <Link to="/book" className="w-full">
                  <button className="w-full bg-slate-50 hover:bg-secondary hover:text-navy-dark text-navy-dark font-bold py-2.5 rounded-xl transition duration-300 text-xs flex items-center justify-center gap-1.5 border border-gray-150 hover:border-secondary">
                    <FaCalendarCheck /> Book Session
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
