import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Ensure this is the correct path
import { collection, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { useAppointments } from '../Context/AppointmentContext';
import Schedule from './Schedule';

const AdminDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [showScheduleForm, setShowScheduleForm] = useState(false);
  const { addAppointment, removeAppointment } = useAppointments();

  // Fetch appointments from Firestore on component mount
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'appointments'));
        const fetchedAppointments = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAppointments(fetchedAppointments);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []); // Empty dependency array means this runs only once when the component mounts

  const handleAddAppointmentClick = () => {
    setShowScheduleForm(true);
  };

  const handleCancelAppointment = async (appointmentId) => {
    try {
      const appointmentDoc = doc(db, 'appointments', appointmentId);
      await updateDoc(appointmentDoc, { status: 'Cancelled' });
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment.id === appointmentId
            ? { ...appointment, status: 'Cancelled' }
            : appointment
        )
      );
      alert('Appointment has been canceled');
    } catch (error) {
      console.error('Error canceling appointment:', error);
      alert('Failed to cancel appointment');
    }
  };

  const handleDeleteAppointment = async (appointmentId) => {
    try {
      const appointmentDoc = doc(db, 'appointments', appointmentId);
      await deleteDoc(appointmentDoc);
      setAppointments((prevAppointments) =>
        prevAppointments.filter((appointment) => appointment.id !== appointmentId)
      );
      alert('Appointment has been deleted');
    } catch (error) {
      console.error('Error deleting appointment:', error);
      alert('Failed to delete appointment');
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-6 hidden lg:block">
        <h2 className="text-2xl font-semibold mb-8">Admin Dashboard</h2>
        <ul>
          <li className="mb-4">
            <a href="/" className="hover:text-blue-400">Dashboard</a>
          </li>
          <li className="mb-4">
            <a href="/appointments" className="hover:text-blue-400">Appointments</a>
          </li>
          <li className="mb-4">
            <a href="/users" className="hover:text-blue-400">Users</a>
          </li>
          <li className="mb-4">
            <a href="/settings" className="hover:text-blue-400">Settings</a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">Appointments</h1>
          <button
            onClick={handleAddAppointmentClick}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Add Appointment
          </button>
        </div>

        <div className="overflow-x-auto bg-white shadow-lg rounded-lg mb-6">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Phone</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td className="px-4 py-2">{appointment.name}</td>
                  <td className="px-4 py-2">{appointment.email}</td>
                  <td className="px-4 py-2">{appointment.phone}</td>
                  <td className="px-4 py-2">{appointment.date}</td>
                  <td className="px-4 py-2 text-green-500">
                    {appointment.status === 'Cancelled' ? (
                      <span className="text-red-500">Cancelled</span>
                    ) : (
                      'Confirmed'
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {appointment.status !== 'Cancelled' && (
                      <>
                        <button
                          onClick={() => handleCancelAppointment(appointment.id)}
                          className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600 mr-2"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => handleDeleteAppointment(appointment.id)}
                          className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showScheduleForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
              <Schedule />
              <button
                onClick={() => setShowScheduleForm(false)}
                className="mt-4 text-red-500 font-semibold hover:text-red-700"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
