import React from "react";
import "./topnav.scss";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

const TopNav = () => {
  return (
    <div className="topnav">
      <div className="topnav__container">
        <div className="topnav__left">
          <FmdGoodOutlinedIcon className="icons" />
          <p className="topnav__text">Shahar:Toshkent</p>
        </div>
        <p className="topnav__center topnav__text">
          Buyurtmalaringizni bepul yetkazib beramiz - atiga 1 kun ichida
        </p>
        {/* <select className="topnav__languages" name="uz">
          <option value="en">English</option>
          <option value="ru">Русский</option>
          <option value="uz">Uzbek</option>
        </select> */}
      </div>
    </div>
  );
};

export default TopNav;
