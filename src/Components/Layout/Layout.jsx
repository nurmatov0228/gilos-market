import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Router from "../../Router/Router";
import "./layout.scss";
import TopNav from "../TopNav/TopNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <TopNav />
      <Navbar count={count} />
      <ToastContainer className={"toastify"} />

      <div className="router">
        <Router setCount={setCount} />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
