import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "../App.css";
import Footer from "../components/Reusable/Footer";
import Navbar from "../components/Reusable/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
