import React from "react";
import "./discounts.scss";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const Discountsitem = ({
  id,
  title,
  price,
  description,
  category,
  image,
  addGood,
}) => {
  return (
    <div className="discountsitem">
      <p className="persent">-35%</p>
      <div className="discountsitem__top">
        <NavLink to={`/elementitem/${id}`}>
          <img src={image} alt="rasmbor" />
        </NavLink>
      </div>
      <div className="discountsitem__bottom">
        <h3 className="discountsitem__title">{title.slice(0, 20)}</h3>
        <div className="discountsitem__right">
          <div className="discountsitem__texts">
            <p className="cheap">${price}</p>
            <span className="discountsitem__text">
              ${String((price * 35) / 100 + price).slice(0, 5)}
            </span>
          </div>
          <Button
            className="discountsitem__btn"
            variant="contained"
            color="primary"
            onClick={() => {
              addGood(id, title, price, description, category, image);
            }}
          >
            <p>Buyurtma berish</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Discountsitem;
