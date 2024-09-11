import React from "react";
import "./allgoods.scss";
import GoodsItem from "./GoodsItem";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const AllGoods = ({ base }) => {
  const newBase = base.slice(0, 8);

  return (
    <div className="allgoods">
      <div className="allgoods__container">
        <div className="allgoods__top">
          <h1 className="allgoods__title">Barcha Mahsulotlarimiz</h1>
        </div>
        <div className="allgoods__bottom">
          {newBase.map((elem) => (
            <GoodsItem key={base?.id} {...elem} />
          ))}
        </div>

        <Button variant="contained" className="allgoods__btn" size="large">
          <NavLink className={"discount__NavLink"} to={"/allitems"}>
            Barchasini ko'rish
          </NavLink>
        </Button>
      </div>
    </div>
  );
};

export default AllGoods;
