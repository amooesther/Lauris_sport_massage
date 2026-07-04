import React, { useState } from "react";
import { db, collection, addDoc } from "../firebase";
import { useAppointments } from "../Context/AppointmentContext";
import { FaRegClock, FaTshirt, FaCalendarCheck, FaInfoCircle, FaPhoneAlt, FaEnvelope, FaChevronDown } from "react-icons/fa";
import { toast } from 'react-toastify';

const Schedule = () => {
  const { addAppointment } = useAppointments();
  const [enteredName, setEnteredName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [massageType, setMassageType] = useState("Deep Tissue Massage");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!enteredName || !phone || !email || !selectedDate || !selectedTime) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    const appointment = {
      name: enteredName,
      phone,
      email,
      date: selectedDate,
      time: selectedTime,
      type: massageType,
      notes: notes,
      createdAt: new Date().toISOString(),
      status: "Pending Confirmation",
    };

    try {
      await addDoc(collection(db, "appointments"), appointment);
      addAppointment?.(appointment);
      setIsLogged(true);
      toast.success("Appointment request received successfully!");
    } catch (error) {
      console.error("Error saving appointment:", error);
      toast.error("Failed to submit request. Please try calling us directly.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setEnteredName("");
    setPhone("");
    setEmail("");
    setSelectedDate("");
    setSelectedTime("");
    setMassageType("Deep Tissue Massage");
    setNotes("");
    setIsLogged(false);
  };

  return (
    <div className="bg-soft-neutral min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute top-12 left-12 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-12 right-12 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        
        {/* Left Column: Useful Booking Information & Policies (5 Columns) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-morphic p-8 rounded-2xl space-y-6">
            <h2 className="text-2xl font-bold text-navy-dark border-b border-gray-100 pb-4">
              Booking Information
            </h2>

            {/* Clinic hours */}
            <div className="flex gap-4">
              <div className="p-2.5 bg-teal-50 rounded-xl shrink-0 h-fit">
                <FaRegClock className="text-secondary w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-navy-dark text-sm">Clinic Hours</h3>
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
                <h3 className="font-bold text-navy-dark text-sm">What to Wear</h3>
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
                <h3 className="font-bold text-navy-dark text-sm">Cancellation Policy</h3>
                <p className="text-xs text-slate-neutral leading-relaxed text-red-500 font-medium">
                  We require 24 hours' notice for cancellations. Cancellations within 24 hours will incur a full session charge.
                </p>
              </div>
            </div>

            {/* Support contacts */}
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <p className="text-xs text-slate-neutral">Need to check booking schedules? Contact us:</p>
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

        {/* Right Column: Pre-booking logging form (7 Columns) */}
        <div className="lg:col-span-7">
          <div className="glass-morphic p-8 rounded-2xl space-y-6">
            
            {isLogged ? (
              /* Success Screen */
              <div className="text-center py-10 space-y-6">
                <div className="w-16 h-16 bg-teal-50 border border-teal-100 rounded-full flex items-center justify-center mx-auto text-secondary shadow-sm">
                  <FaCalendarCheck className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-navy-dark">Request Submitted!</h2>
                  <p className="text-sm text-slate-neutral max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{enteredName}</strong>. Your request for a <strong>{massageType}</strong> on <strong>{selectedDate}</strong> at <strong>{selectedTime}</strong> has been logged.
                  </p>
                  <p className="text-xs text-slate-neutral max-w-sm mx-auto leading-relaxed pt-2">
                    Our team will contact you shortly via email ({email}) or phone ({phone}) to finalize and confirm your slot.
                  </p>
                </div>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="bg-navy-dark hover:bg-secondary text-white hover:text-navy-dark font-bold py-2.5 px-6 rounded-xl transition duration-300 text-sm shadow-sm"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              /* Booking Form */
              <>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-navy-dark">Book Your Session</h2>
                  <p className="text-xs text-slate-neutral">
                    Enter your details to request an appointment slot. We will confirm your session shortly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-navy-dark">Your Full Name</label>
                    <input
                      type="text"
                      value={enteredName}
                      onChange={(e) => setEnteredName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full border border-gray-255 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-navy-dark">Phone Number</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +44 7123 456789"
                      className="w-full border border-gray-255 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-navy-dark">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. john@example.com"
                      className="w-full border border-gray-255 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
                      required
                    />
                  </div>

                  {/* Massage Type Dropdown */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-navy-dark">Treatment Type</label>
                    <div className="relative">
                      <select
                        value={massageType}
                        onChange={(e) => setMassageType(e.target.value)}
                        className="w-full border border-gray-255 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm appearance-none bg-white"
                      >
                        <option>Deep Tissue Massage</option>
                        <option>Sport Foot Massage</option>
                        <option>Injury Rehabilitation</option>
                        <option>Sports Performance Massage</option>
                        <option>Pre-Event Massage</option>
                        <option>Post-Event Massage</option>
                        <option>Trigger Point Therapy</option>
                        <option>Relaxation Massage</option>
                        <option>Joint Mobilization</option>
                        <option>Personalized Wellness Plan</option>
                      </select>
                      <span className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-500">
                        <FaChevronDown className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Date */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-navy-dark">Select Date</label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full border border-gray-255 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
                        required
                      />
                    </div>

                    {/* Time */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-navy-dark">Select Time</label>
                      <input
                        type="time"
                        value={selectedTime}
                        className="w-full border border-gray-255 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
                        required
                        onChange={(e) => setSelectedTime(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Notes / Special Instructions */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-navy-dark">Special Instructions / Symptoms (Optional)</label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Describe any injuries, muscular tightness, or general symptoms..."
                      className="w-full border border-gray-255 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm h-24 resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-navy-dark hover:bg-secondary text-white hover:text-navy-dark font-bold py-3.5 rounded-xl shadow-md hover:shadow-lg transition duration-300 disabled:opacity-40 disabled:pointer-events-none text-[15px]"
                    >
                      {loading ? "Submitting Request..." : "Request Appointment"}
                    </button>
                  </div>
                </form>
              </>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};

export default Schedule;
