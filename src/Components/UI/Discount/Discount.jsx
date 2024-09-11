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
        <Button variant="contained" className="discount__btn" size="large">
          <NavLink className={"discount__NavLink"} to={"/allitems"}>Barchasini ko'rish</NavLink>
        </Button>
      </div>
    </div>
  );
};

export default Discount;
