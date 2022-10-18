import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { loggee } = useAuth();
  return loggee ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
