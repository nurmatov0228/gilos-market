import React from "react";
import "./allgoods.scss";
import { NavLink } from "react-router-dom";

import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

const GoodsItem = ({ id, title, price, image, rating }) => {
  const value = rating?.rate;

  return (
    <div className="goodsitem">
      <p className="goodsitem__persent">New</p>
      <div className="goodsitem__top">
        <NavLink to={`/elementitem/${id}`}>
          <img src={image} alt="rasmbor" />
        </NavLink>
      </div>
      <div className="goodsitem__bottom">
        <h3 className="goodsitem__title">{title.slice(0, 20)}</h3>
        <div className="goodsitem__right">
          <div className="goodsitem__texts">
            <p className="cheap">${price}</p>
            <Box
              className="goodsitem__box"
              sx={{ width: 200, display: "flex", alignItems: "center" }}
            >
              <Rating
                name="text-feedback"
                value={value}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <Box className="goodsitem__box" sx={{ ml: 2 }}>
                {rating?.count}
              </Box>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodsItem;
