import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const user = JSON.parse(localStorage.getItem('currentUser')); // Retrieve user data from localStorage

  // If the user is authenticated, render the protected route element
  // Otherwise, redirect to the login page
  return user ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
