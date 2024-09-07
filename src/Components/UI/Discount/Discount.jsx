import React from "react";
import "./discount.scss";
import Discounts from "../Discounts/Discounts";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const Discount = ({ base, addGood }) => {
  return (
    <div className="discount">
      <div className="discount__container">
        <h1 className="discount__title">Yangi chegirmalar</h1>
        <Discounts base={base} addGood={addGood} />
        <NavLink to={"/allitems"}>
          <Button variant="contained" className="discount__btn" size="large">
            Barchasini ko'rish
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Discount;
