import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../Context/UserContext'; // Import UserContext

const PrivateRoute = ({ children }) => {
  const { userRole } = useUser(); // Get the current user's role

  // If the user is not an admin, redirect to the home page
  if (userRole !== 'admin') {
    return <Navigate to="/" replace />;
  }

  // If the user is an admin, render the protected route
  return children;
};

export default PrivateRoute;
