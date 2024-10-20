import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const MainLayout = () => {
  const location = useLocation(); // Get current route

  // Hide Navbar on specific routes
  const hideNavbarRoutes = ["/sign-in", "/sign-up"];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="flex">
      {/* Conditionally render Navbar */}
      {shouldShowNavbar && <Navbar />}

      {/* Outlet for nested routes */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
