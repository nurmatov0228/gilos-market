import React from "react";
import "./service.scss";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import HeadsetOutlinedIcon from "@mui/icons-material/HeadsetOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";

const Service = () => {
  return (
    <div className="service">
      <div className="service__container">
        <div className="service__card">
          <div className="service__card__icon1">
            <div className="service__card__icon2">
              <LocalShippingOutlinedIcon className="service__card__icon icons" />
            </div>
          </div>
          <div className="service__card__texts">
            <h2 className="service__title">BEPUL VA TEZ YETKAZIB BERISH</h2>
            <p className="service__text">
              {" "}
              Buyurtmalar uchun bepul yetkazib berish
            </p>
          </div>
        </div>
        <div className="service__card">
          <div className="service__card__icon1">
            <div className="service__card__icon2">
              <HeadsetOutlinedIcon className="service__card__icon icons" />
            </div>
          </div>
          <div className="service__card__texts">
            <h2 className="service__title">
              24/7 MIJOZLARGA XIZMAT KO'RSATISH
            </h2>
            <p className="service__text">
              {" "}
              Do'stona 24/7 mijozlarni qo'llab-quvvatlash
            </p>
          </div>
        </div>
        <div className="service__card">
          <div className="service__card__icon1">
            <div className="service__card__icon2">
              <GppGoodOutlinedIcon className="service__card__icon icons" />
            </div>
          </div>
          <div className="service__card__texts">
            <h2 className="service__title">PULNI QAYTARIB BERISH KAFOLATI</h2>
            <p className="service__text"> Biz pulni 30 kun ichida qaytaramiz</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
