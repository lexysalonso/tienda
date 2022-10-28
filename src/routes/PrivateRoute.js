import React from "react";
import useAuth  from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
//import Storage from "../hooks/Storage";


//const storage = Storage();
 const PrivateRoute = ({ children }) => {
 /* let userlocalStorage = storage.load(storage.Keys.auth)
    ? jwt_decode(storage.load(storage.Keys.auth))
    : { user: null }; */
   const { userlocalStorage } = useAuth();
  console.log("ver User Private", userlocalStorage);
  return userlocalStorage?.user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
