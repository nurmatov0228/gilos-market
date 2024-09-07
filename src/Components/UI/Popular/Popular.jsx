import React from "react";
import "./popular.scss";
import Discounts from "../Discounts/Discounts";

const Popular = ({ base, addGood }) => {
  return (
    <div className="popular">
      <div className="popular__container">
        <h1 className="popular__title">Ommabop mahsulotlar</h1>
        <Discounts base={base} addGood={addGood} />
      </div>
    </div>
  );
};

export default Popular;
