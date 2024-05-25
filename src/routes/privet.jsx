
import React, { useContext } from 'react';
import { AuthContext } from '../context/authProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  // console.log()
  const location =useLocation();

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{from: location}} replace />;
};

export default PrivetRoutes;

