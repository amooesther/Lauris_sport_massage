import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Ensure this is the correct path
import { collection, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { useAppointments } from '../Context/AppointmentContext';
import Schedule from './Schedule';

const AdminDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [showScheduleForm, setShowScheduleForm] = useState(false);
  const { addAppointment, removeAppointment } = useAppointments();

  // Fetch appointments when the component loads
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
  }, []);

  const handleAddAppointmentClick = () => {
    setShowScheduleForm(true);
  };

  // Fetch appointments after any update (confirm or cancel)
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

  const handleCancelAppointment = async (appointmentId) => {
    try {
      const appointmentDoc = doc(db, 'appointments', appointmentId);
      await updateDoc(appointmentDoc, { status: 'Cancelled' });
      console.log(`Appointment ${appointmentId} cancelled!`);
      fetchAppointments(); // Fetch updated appointments
    } catch (error) {
      console.error('Error canceling appointment:', error);
    }
  };

  const handleDeleteAppointment = async (appointmentId) => {
    try {
      const appointmentDoc = doc(db, 'appointments', appointmentId);
      await deleteDoc(appointmentDoc);
      setAppointments((prevAppointments) =>
        prevAppointments.filter((appointment) => appointment.id !== appointmentId)
      );
      console.log(`Appointment ${appointmentId} deleted!`);
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
  };

  const handleConfirmAppointment = async (appointmentId) => {
    try {
      const appointmentDoc = doc(db, 'appointments', appointmentId);
      await updateDoc(appointmentDoc, { status: 'Confirmed' });
      console.log(`Appointment ${appointmentId} confirmed!`);
      fetchAppointments(); // Fetch updated appointments
    } catch (error) {
      console.error('Error confirming appointment:', error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-green-100">
      {/* Sidebar */}
      <div className="w-full lg:w-44 bg-secondary text-white p-6">
        <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
        <ul>
          <li className="mb-4">
            <a href="/" className="block py-2 px-4 rounded hover:bg-gray-700">
              Dashboard
            </a>
          </li>
          <li className="mb-4">
            <a href="/appointments" className="block py-2 px-4 rounded hover:bg-gray-700">
              Appointments
            </a>
          </li>
          <li className="mb-4">
            <a href="/users" className="block py-2 px-4 rounded hover:bg-gray-700">
              Users
            </a>
          </li>
          <li className="mb-4">
            <a href="/settings" className="block py-2 px-4 rounded hover:bg-gray-700">
              Settings
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 lg:p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Appointments</h1>
          <button
            onClick={handleAddAppointmentClick}
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-300"
          >
            Add Appointment
          </button>
        </div>

        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-green-200 text-gray-600 text-sm">
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Phone</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Time</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id} className="text-sm">
                  <td className="px-4 py-2">{appointment.name}</td>
                  <td className="px-2 py-2 text-[12px]">{appointment.email}</td>
                  <td className="px-4 py-2">{appointment.phone}</td>
                  <td className="px-4 py-2">{appointment.date}</td>
                  <td className="px-4 py-2">{appointment.time}</td>
                  <td className="px-4 py-2">
                    {appointment.status === 'Cancelled' ? (
                      <span className="text-red-500">Cancelled</span>
                    ) : appointment.status === 'Confirmed' ? (
                      <span className="text-green-500">Confirmed</span>
                    ) : (
                      <span className="text-yellow-500">Pending</span>
                    )}
                  </td>
                  <td className="px-4 py-2 flex gap-2">
                    {appointment.status !== 'Cancelled' && appointment.status !== 'Confirmed' && (
                      <>
                        <button
                          onClick={() => handleCancelAppointment(appointment.id)}
                          className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => handleConfirmAppointment(appointment.id)}
                          className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                        >
                          Confirm
                        </button>
                      </>
                    )}
                    <button
                      onClick={() => handleDeleteAppointment(appointment.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showScheduleForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
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
