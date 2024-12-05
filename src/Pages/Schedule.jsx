import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { db, collection, addDoc } from '../firebase'; // Firebase import
import { useAppointments } from '../Context/AppointmentContext';

const Schedule = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const appointmentForm = useRef();
  const { addAppointment } = useAppointments();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      // Send email using emailjs
      const result = await emailjs.sendForm(
        'service_0rahifn',
        'template_hls7s9r',
        appointmentForm.current,
        'tHBP6nMQyW1EAuaxd'
      );
      console.log('SUCCESS!', result.text);

      // Save the appointment to Firestore
      const appointment = { name, email, phone, date, time };
      console.log('Sending appointment data to Firestore:', appointment);

      // Save the appointment to Firestore
      await addDoc(collection(db, 'appointments'), appointment);

      // Save appointment to context or local state (optional)
      addAppointment(appointment);

      // Clear form inputs
      setName('');
      setEmail('');
      setPhone('');
      setDate('');
      setTime('');

      alert('Your appointment has been successfully booked. Thank you for choosing Lauris Sport Massage Therapy!');
    } catch (error) {
      console.error('FAILED...', error); // More descriptive error
      alert('Failed to book appointment. Please try again later.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50 mb-5 px-4 py-8">
      <div className="bg-white shadow-xl rounded-lg p-6 md:p-10 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Book Your Appointment
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Or call us on <span className="font-bold text-indigo-600">+44 7391 530988</span>
        </p>
        <form ref={appointmentForm} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone_number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="date">
              Appointment Date
            </label>
            <input
              type="date"
              id="date"
              name="appointment_date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="time">
              Appointment Time
            </label>
            <input
              type="time"
              id="time"
              name="appointment_time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white font-medium py-2 px-4 rounded-lg hover:bg-indigo-700 transition-all duration-300"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Schedule;
