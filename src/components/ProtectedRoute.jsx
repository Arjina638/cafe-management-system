import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  // Not logged in → redirect to login
  if (!token) return <Navigate to="/login" />;

  // Role mismatch → redirect to home
  if (role && userRole !== role) return <Navigate to="/" />;

  // Authorized → show the component
  return children;
};

export default ProtectedRoute;
