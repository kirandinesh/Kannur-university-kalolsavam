import { Navigate, useLocation } from "react-router-dom";
import { Fragment } from "react";

function RouteGuard({ authenticated, user, element }) {
  const location = useLocation();

  // If not authenticated, redirect to login (except if already on login page)
  if (!authenticated) {
    return location.pathname === "/adminlogin" ? (
      element
    ) : (
      <Navigate to="/adminlogin" />
    );
  }

  // If an admin tries to access the root, redirect them to admin home
  if (user?.role === "admin" && location.pathname === "/") {
    return <Navigate to="/adminhome" />;
  }

  // If a non-admin tries to access admin pages, redirect them to user homepage
  if (user?.role !== "admin" && location.pathname.startsWith("/adminhome")) {
    return <Navigate to="/" />;
  }

  return <Fragment>{element}</Fragment>;
}

export default RouteGuard;
