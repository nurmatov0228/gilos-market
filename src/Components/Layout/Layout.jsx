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
  const [count, setCount] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (token?.includes("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey")) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, []); // token o'zgarganda useEffect qayta ishga tushadi

  return (
    <div>
      <ToastContainer className={"toastify"} />
      {token ? (
        <>
          <TopNav />
          <Navbar count={count} />
          {/* <div className="router">
            <Router setCount={setCount} />
          </div> */}
          <Footer />
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      )}
    </div>
  );
};

export default Layout;
