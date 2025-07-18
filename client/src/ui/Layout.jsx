// import React from "react";
// import Navbar from "../components/NavBar";
// import Nav from "../components/Nav";
// import Footer from "../sections/Footer";
// import Hero from "../sections/Hero";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Outlet />
    </div>
  );
};

export default Layout;
