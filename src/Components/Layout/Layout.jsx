import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Router from "../../Router/Router";
import "./layout.scss";
import TopNav from "../TopNav/TopNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "../../Pages/Login";

const Layout = () => {
  const token = localStorage.getItem("token");
  const tokenjon = localStorage.getItem("tokenjon");
  const [count, setCount] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (
      token?.includes("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey") &&
      tokenjon?.includes("bahodirnurmatov")
    ) {
      navigate("/home");
    } else if (tokenjon?.includes("bahodirnurmatov")) {
      navigate("/");
    } else {
      navigate("/home");
    }
  }, []); // token o'zgarganda useEffect qayta ishga tushadi

  const location = () => {
    if (
      token?.includes("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey") &&
      tokenjon?.includes("bahodirnurmatov")
    ) {
      return (
        <>
          <TopNav />
          <Navbar count={count} />
          <div className="router">
            <Router setCount={setCount} />
          </div>
          <Footer />
        </>
      );
    } else if (tokenjon?.includes("bahodirnurmatov")) {
      return (
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      );
    } else {
      return (
        <>
          <TopNav />
          <Navbar count={count} />
          <div className="router">
            <Router setCount={setCount} />
          </div>
          <Footer />
        </>
      );
    }
  };

  return (
    <div>
      <ToastContainer className={"toastify"} />
      {location()}
    </div>
  );
};

export default Layout;
