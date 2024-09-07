import React from "react";
import "../styles/item.scss";
import asus2 from "../Assets/img/asus2.png";
import asus3 from "../Assets/img/asus3.png";
import asus4 from "../Assets/img/asus4.png";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import LoopOutlinedIcon from "@mui/icons-material/LoopOutlined";
import { useParams } from "react-router-dom";

const Item = ({ base }) => {
  const params = useParams()?.id;

  const Item = base.filter((elem) => elem?.id === Number(params));

  const { title, price, description, image, rating } = Item[0];

  const value = rating?.rate;

  return (
    <div className="item">
      <div className="item__container">
        <div className="item__left">
          <div className="item__imageleft">
            <img src={asus2} alt="" className="item__imageleft__image" />
            <img src={asus4} alt="" className="item__imageleft__image" />
            <img src={asus3} alt="" className="item__imageleft__image" />
            <img src={asus4} alt="" className="item__imageleft__image" />
          </div>
          <div className="item__imageright">
            <img src={image} alt="" className="item__imageright__image" />
          </div>
        </div>
        <div className="item__right">
          <div className="item__top">
            <h2 className="item__top__title">{title.slice(0, 66)} </h2>
            <Box
              sx={{
                width: 200,
                display: "flex",
                alignItems: "center",
              }}
              className="item__top__box"
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
              <Box className="item__top__span" sx={{ ml: 2 }}>
                ({rating?.count} Reviews)
              </Box>
            </Box>
            <h3>${price}.00</h3>
            <p className="item__top__text">{description.slice(0, 145)} </p>
          </div>
          <hr />
          <div className="item__bottom">
            <div className="item__bottom__top">
              <LocalShippingOutlinedIcon className="item__icon icons" />
              <div className="item__bottom__texts">
                <h4>Bepul Yetkazib Berish</h4>
                <p>Yetkazib berish uchun pochta indeksingizni kiriting</p>
              </div>
            </div>
            <hr />
            <div className="item__bottom__bottom">
              <LoopOutlinedIcon className="item__icon icons" />
              <div className="item__bottom__texts">
                <h4>Qayta Yetkazib Berish</h4>
                <p>
                  30 Kun ichida mahsulot va pullaringizni qaytarib berish.
                  Tafsilotlar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
