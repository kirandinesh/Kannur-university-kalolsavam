import { Navigate, useLocation } from "react-router-dom";
import { Fragment } from "react";

function RouteGuard({ authenticated, user, element }) {
  const location = useLocation();
  console.log(
    "Authenticated:",
    authenticated,
    "User Role:",
    user?.role,
    "Path:",
    location.pathname
  );

  // If the user is not authenticated and trying to access admin pages, redirect to /adminlogin
  if (!authenticated && location.pathname.startsWith("/adminhome")) {
    return <Navigate to="/adminlogin" />;
  }

  // If an authenticated admin is on "/" and hasn't manually typed anything else, do not force redirect
  if (authenticated && user?.role === "admin" && location.pathname === "/") {
    return <Navigate to="/adminhome" />;
  }

  return <Fragment>{element}</Fragment>;
}

export default RouteGuard;
