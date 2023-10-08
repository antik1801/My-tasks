import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../pages/loader/Loader";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useAuth();
  const location = useLocation();
  // if (loading) {
  //   return <Loader></Loader>
  // }
  if (user) {
    return children;
  }
  return <Navigate to={"/login-page"} state={{ from: location }}></Navigate>;
};

export default PrivateRoute;
