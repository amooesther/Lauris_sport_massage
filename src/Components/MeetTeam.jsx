import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaAward, FaCalendarAlt } from 'react-icons/fa';

const MeetTeam = () => {
  const team = [
    {
      name: "Esther Amoo",
      role: "Founder & Lead Sports Massage Therapist",
      qualification: "BSc (Hons) Sports Therapy, MSMA",
      specialty: "Deep Tissue Release, Post-Event Recovery & Musculoskeletal Rehabilitation",
      bio: "Esther has spent years working with athletes and everyday clients to restore range of motion and accelerate muscle healing.",
      image: assets.laura_assisted_stretch
    },
    {
      name: "Laura Phys",
      role: "Senior Sports Massage Therapist",
      qualification: "Level 4 Sports Massage, MSMA",
      specialty: "Trigger Point Therapy, Joint Mobilization & Injury Assessment",
      bio: "Laura specializes in localized pain relief, myofascial release, and dynamic stretching to improve daily flexibility and performance.",
      image: assets.laura_sports_massage
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-light-gray text-gray-800 relative overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-secondary font-bold text-sm uppercase tracking-wider">Our Team</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark">
            Meet Our Certified Therapists
          </h2>
          <p className="text-slate-neutral text-lg">
            We are dedicated practitioners with advanced certifications and clinical experience in sports medicine, muscle recovery, and hands-on therapy.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto relative">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="relative group bg-white/45 backdrop-blur-lg border border-white/60 rounded-2xl overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between hover:bg-white/65 hover:-translate-y-1"
            >
              {/* Internal card spot */}
              <div className="absolute -top-12 -left-12 w-28 h-28 bg-secondary/10 rounded-full blur-2xl pointer-events-none -z-10" />

              <div>
                {/* Photo */}
                <div className="aspect-[16/10] overflow-hidden relative border-b border-white/45">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                  />
                  <div className="absolute bottom-4 left-4 bg-navy-dark/85 backdrop-blur shadow-md px-3 py-1.5 rounded-lg text-white text-xs font-semibold">
                    {member.role}
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-navy-dark">{member.name}</h3>
                    <div className="flex items-center gap-1.5 text-secondary text-sm font-semibold">
                      <FaGraduationCap className="shrink-0" />
                      <span>{member.qualification}</span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-neutral leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="space-y-2 text-xs border-t border-white/45 pt-4 text-slate-neutral">
                    <p className="flex items-center gap-2">
                      <FaAward className="text-secondary shrink-0" />
                      <span><strong>Specialty:</strong> {member.specialty}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="p-6 pt-0 mt-4">
                <Link to="/book">
                  <button className="w-full inline-flex items-center justify-center gap-2 bg-navy-dark hover:bg-secondary text-white hover:text-navy-dark font-bold py-3 px-4 rounded-xl transition-all duration-300 text-sm shadow-sm">
                    <FaCalendarAlt />
                    Book with {member.name.split(' ')[0]}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MeetTeam;
