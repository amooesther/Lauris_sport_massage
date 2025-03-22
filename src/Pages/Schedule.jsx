import React, { useState, useEffect } from "react";
import { db, collection, addDoc } from "../firebase";
import { useAppointments } from "../Context/AppointmentContext";

const Schedule = () => {
  const { addAppointment } = useAppointments();
  const [enteredName, setEnteredName] = useState(""); // User Name
  const [phone, setPhone] = useState(""); // Phone Number
  const [email, setEmail] = useState(""); // Email Address
  const [selectedDate, setSelectedDate] = useState(""); // Appointment Date
  const [selectedTime, setSelectedTime] = useState(""); // Appointment Time
  const [loading, setLoading] = useState(false); // Loading State
  const [message, setMessage] = useState(""); // Success Message
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal State

  // Auto-save appointment when both date and time are selected
  useEffect(() => {
    if (enteredName && phone && email && selectedDate && selectedTime) {
      saveAppointment();
    }
  }, [selectedDate, selectedTime]);

  // Save to Firestore
  const saveAppointment = async () => {
    if (loading) return; // Prevent multiple saves
    setLoading(true);
    setMessage("");

    const appointment = {
      name: enteredName,
      phone,
      email,
      date: selectedDate,
      time: selectedTime,
      createdAt: new Date().toISOString(),
      status: "Confirmed",
    };

    try {
      await addDoc(collection(db, "appointments"), appointment);
      addAppointment?.(appointment);
     
    } catch (error) {
      console.error("Error saving appointment:", error);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50 px-4 py-8">
      <div className="bg-white shadow-xl rounded-lg p-6 md:p-10 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Book Your Appointment
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Or call us at <span className="font-bold text-indigo-600">+44 7391 530988</span>
        </p>

        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
          <input
            type="text"
            value={enteredName}
            onChange={(e) => setEnteredName(e.target.value)}
            placeholder="Enter your full name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Phone Number Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Date Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Select Date</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Time Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Select Time</label>
          <input
            type="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Success Message */}
        {message && <p className="text-center text-green-600 font-medium">{message}</p>}

        {/* Setmore Booking Button */}
        <div className="mt-6 text-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-indigo-600 text-white px-5 py-2 rounded-lg font-medium shadow-md hover:bg-indigo-700 transition"
          >
            Book Appointment
          </button>
        </div>
      </div>

      {/* Modal for Setmore Iframe */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-semibold">Book Your Appointment</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700 text-xl">&times;</button>
            </div>
            
            {/* Setmore Iframe */}
            <iframe
              src="https://estherqu7f.setmore.com/services/524e2775-3af2-42e3-9242-585719eb828e"
              className="w-full h-[500px] border-none"
            ></iframe>

            {/* Close Button */}
            <div className="text-center mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Schedule;
