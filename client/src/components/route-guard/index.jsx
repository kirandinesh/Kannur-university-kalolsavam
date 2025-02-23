import { Navigate, useLocation } from "react-router-dom";
import { Fragment } from "react";

function RouteGuard({ authenticated, user, element }) {
  const location = useLocation();

  if (authenticated && user?.role === "admin" && location.pathname === "/") {
    return <Navigate to="/adminhome" />;
  }

  if (
    authenticated &&
    user?.role !== "admin" &&
    (location.pathname.includes("adminhome") ||
      location.pathname.includes("/adminlogin"))
  ) {
    return <Navigate to="/" />;
  }

  if (
    authenticated &&
    user?.role === "admin" &&
    !location.pathname.includes("adminhome")
  ) {
    return <Navigate to="/adminhome" />;
  }

  return <Fragment>{element}</Fragment>;
}

export default RouteGuard;
