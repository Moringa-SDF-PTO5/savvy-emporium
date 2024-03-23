import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
  const isValidUser = localStorage.getItem('currentUser');
 
  return isValidUser === "isLogged" ? <Outlet /> : <Navigate to='/login' />;
};
export default PrivateRoute;