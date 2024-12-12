import React, { useEffect, useState } from 'react';
import { db, auth, collection, query, where, getDocs } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Monitor user authentication status
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
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

      // Debugging: Log the data fetched from Firestore
      console.log("Fetched appointments:", querySnapshot.docs);

      const fetchedAppointments = querySnapshot.docs.map(doc => {
        const data = doc.data();
        console.log("Appointment data:", data); // Log each document's data

        // Check if 'status' is actually present
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

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Your Appointments</h2>
      {appointments.length === 0 ? (
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
