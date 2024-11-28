// AppointmentContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AppointmentContext = createContext();

export const useAppointments = () => useContext(AppointmentContext);

export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    try {
      const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
      setAppointments(storedAppointments);
    } catch (error) {
      console.error("Failed to load appointments from localStorage", error);
      setAppointments([]); // Set to empty array if there's an error
    }
  }, []);

  const addAppointment = (appointment) => {
    setAppointments((prevAppointments) => {
      const updatedAppointments = [...prevAppointments, appointment];
      // Save to local storage
      localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
      return updatedAppointments;
    });
  };

  const clearAppointments = () => {
    setAppointments([]);
    localStorage.removeItem('appointments'); // Clear appointments from local storage
  };

  return (
    <AppointmentContext.Provider value={{ appointments, addAppointment, clearAppointments }}>
      {children}
    </AppointmentContext.Provider>
  );
};
