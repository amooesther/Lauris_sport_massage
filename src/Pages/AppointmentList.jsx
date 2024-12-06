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
      const fetchedAppointments = querySnapshot.docs.map(doc => doc.data());
      setAppointments(fetchedAppointments);
    } catch (error) {
      console.error("Error fetching appointments: ", error);
    }
    setLoading(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Your Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <ul>
          {appointments.map((appointment, index) => (
            <li key={index}>
              <p>Date: {appointment.date}</p>
              <p>Time: {appointment.time}</p>
              
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AppointmentList;
