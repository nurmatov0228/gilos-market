import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./navbar.scss";
import { Button } from "@mui/material";
import { LogoutOutlined } from "@mui/icons-material";
import { toast } from "react-toastify";

const Navbar = ({ count }) => {
  document.addEventListener("DOMContentLoaded", () => {
    const burgerButton = document.querySelector(".navbar__burger");
    const menu = document.querySelector(".navbar__menu");

    burgerButton.addEventListener("click", () => {
      menu.classList.toggle("navbar__menu--active");
    });
  });
  const navigate = useNavigate();

  const logout = () => {
    setTimeout(() => {
      localStorage.removeItem("token");
      navigate("/");
      toast.warning("LogOut");
    }, 800);
  };

  return (
    <div className="navbar">
      <div className="navbar__container">
        <NavLink to="/home" className="navbar__logo">
          BrandLogo
        </NavLink>
        <div className="navbar__links">
          <NavLink to="/home" className="navbar__link">
            Bosh sahifa
          </NavLink>
          <NavLink to="/about" className="navbar__link">
            Haqimizda
          </NavLink>
          <NavLink to="/contact" className="navbar__link">
            Aloqa
          </NavLink>
          <NavLink className="navbar__link navbar__carticon">
            <Button variant="text" onClick={logout}>
              <LogoutOutlined />
            </Button>
          </NavLink>
          <NavLink to="/cart" className="navbar__link navbar__carticon">
            <Button variant="text">
              <ShoppingCartOutlinedIcon />
              {count}
            </Button>
          </NavLink>
        </div>
        <div className="navbar__burger dn">
          <hr />
          <hr />
          <hr />
        </div>
        <div className="navbar__devices">
          <div className="navbar__search">
            <input type="search" placeholder="Siz nima qidiryapsiz?" />
            <SearchOutlinedIcon className="icons" />
          </div>
          <Button variant="contained" color="primary" className="navbar__btn">
            <LocalPhoneOutlinedIcon className="navbar__call" />
            <p className="navbar__btn__text">Aloqaga chiqish</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
