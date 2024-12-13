import React, { useState, useEffect } from 'react';
import { db, auth, collection, query, where, getDocs } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true); // To handle auth loading state
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    // Monitor user authentication status
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false); // Auth state loaded
      if (currentUser) {
        fetchAppointments(currentUser.uid); // Fetch appointments for logged-in user
      } else {
        setAppointments([]); // Reset appointments if no user is logged in
      }
    });

    return () => unsubscribe(); // Cleanup the subscription
  }, []);

  const fetchAppointments = async (userId) => {
    setLoading(true);
    try {
      const q = query(
        collection(db, 'appointments'),
        where('userId', '==', userId)
      );
      const querySnapshot = await getDocs(q);

      const fetchedAppointments = querySnapshot.docs.map(doc => {
        const data = doc.data();
        return { 
          id: doc.id, 
          date: data.date,
          time: data.time,
          status: data.status || "Unknown", // Handle missing status
        };
      });
      setAppointments(fetchedAppointments);
    } catch (error) {
      console.error("Error fetching appointments: ", error);
    }
    setLoading(false);
  };

  if (authLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-blue-50 mb-5 px-4 py-8">
        <p className="text-xl text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-blue-50 mb-5 px-4 py-8">
        <div className="bg-white shadow-xl rounded-lg p-6 md:p-10 w-full max-w-lg text-center">
          <p className="text-red-500 mb-4">You must be logged in to view your appointments.</p>
          <button
            onClick={() => navigate('/login')}
            className="py-2 px-4 bg-indigo-600 text-white font-bold rounded hover:bg-indigo-700 transition-all duration-300"
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Your Appointments</h2>
      {loading ? (
        <p className="text-center text-lg text-gray-500">Loading appointments...</p>
      ) : appointments.length === 0 ? (
        <p className="text-center text-lg text-gray-500">No appointments found.</p>
      ) : (
        <ul className="space-y-4">
          {appointments.map((appointment) => (
            <li key={appointment.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-between items-center">
                <p className="text-lg font-medium text-gray-800">Date: {appointment.date}</p>
                <p className="text-lg font-medium text-gray-800">Time: {appointment.time}</p>
                <p className={`text-lg font-medium ${appointment.status === 'confirmed' ? 'text-green-500' : 'text-red-500'}`}>
                  Status: {appointment.status}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AppointmentList;
