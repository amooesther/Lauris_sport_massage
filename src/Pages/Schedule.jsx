import React, { useState, useEffect } from 'react';
import { db, collection, addDoc, auth } from '../firebase'; // Firebase imports
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Firebase auth state
import { useNavigate } from 'react-router-dom';
import { useAppointments } from '../Context/AppointmentContext';

const Schedule = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true); // To handle auth loading state

  const { addAppointment } = useAppointments();
  const navigate = useNavigate();

  // Track authentication state using Firebase's onAuthStateChanged
  useEffect(() => {
    const firebaseAuth = getAuth();
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      setUser(currentUser); // Update user state
      setAuthLoading(false); // Auth state loaded
    });

    return unsubscribe; // Cleanup listener on unmount
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (authLoading) return; // Prevent action while auth state is loading

    if (!user) {
      alert('You must be logged in to book an appointment');
      navigate('/login');
      return;
    }

    setLoading(true);

    try {
      const appointment = {
        name,
        email,
        phone,
        date,
        time,
        userId: user.uid, // Associate appointment with logged-in user
        createdAt: new Date().toISOString(),
        status: 'Pending', // Default status
      };

      await addDoc(collection(db, 'appointments'), appointment);

      addAppointment?.(appointment);

      setName('');
      setEmail('');
      setPhone('');
      setDate('');
      setTime('');

      alert('Your appointment has been successfully booked. Thank you for choosing Lauris Sport Massage Therapy!');
    } catch (error) {
      console.error('Failed to book appointment:', error);
      alert('Failed to book appointment. Please try again.');
    } finally {
      setLoading(false);
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

        {authLoading ? (
          <p>Loading...</p>
        ) : user ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
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
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-indigo-700 transition-all duration-300"
              disabled={loading}
            >
              {loading ? 'Booking...' : 'Book Appointment'}
            </button>
          </form>
        ) : (
          <div className="text-center">
            <p className="text-red-500 mb-4">You must be logged in to book an appointment.</p>
            <button
              onClick={() => navigate('/login')}
              className="py-2 px-4 bg-indigo-600 text-white font-bold rounded hover:bg-indigo-700 transition-all duration-300"
            >
              Sign In
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Schedule;
