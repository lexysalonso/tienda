
import React from 'react'
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";


const PublicRoute = ({children}) => {
  const {loggee} = useAuth()
  return loggee ? <Navigate to="/"/> : children
}

export default PublicRoute;