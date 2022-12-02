import React from "react";
import useAuth  from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

//import Storage from "../hooks/Storage";

//const storage = Storage();
const PublicRoute = ({ children }) => {
  /* let userlocalStorage = storage.load(storage.Keys.auth)
    ? jwt_decode(storage.load(storage.Keys.auth))
    : { user: null }; */
  //  console.log("USER LOGUEE", userlocalStorage?)
  const { user } = useAuth();
  console.log("ver User public", user);
  return user ? <Navigate to="/" /> : children;
};

export default PublicRoute;
