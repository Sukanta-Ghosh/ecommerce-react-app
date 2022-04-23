import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Footer from "../components/Reusable/Footer";
import Navbar from "../components/Reusable/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
