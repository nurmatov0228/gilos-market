import React from "react";
import "./newgoods.scss";
import playstation from "../../../Assets/img/playstation5.png";
import ayol from "../../../Assets/img/ayol.png";
import kalonka from "../../../Assets/img/kalonka.png";
import atir from "../../../Assets/img/atir.png";
import { Button } from "@mui/material";

const NewGoods = () => {
  return (
    <div className="newgoods">
      <div className="newgoods__container">
        <div className="newgoods__top">
          <h1 className="newgoods__title1">Yangi Mahsulotlar</h1>
        </div>
        <div className="newgoods__bottom">
          <div className="newgoods__left">
            <img src={playstation} alt="" />
            <div className="newgoods__left__texts">
              <h2 className="newgoods__title2">PlayStation 5</h2>
              <p className="newgoods__text2">
                Black and White version of the PS5 coming out on sale.
              </p>
              <Button variant="text" size="medium" className="newgoods__btn">
                Shop Now
              </Button>
            </div>
          </div>
          <div className="newgoods__right">
            <div className="newgoods__right__top">
              <img src={ayol} alt="" />
              <div className="newgoods__right__top__texts">
                <h2 className="newgoods__title3">Women’s Collections</h2>
                <p className="newgoods__text3">
                  Featured woman collections that give you another vibe.
                </p>
                <Button variant="text" size="medium" className="newgoods__btn">
                  Shop Now
                </Button>
              </div>
            </div>
            <div className="newgoods__right__bottom">
              <div className="newgoods__amazon">
                <img src={kalonka} alt="" />
                <div className="newgoods__amazon__texts">
                  <h2 className="newgoods__title4">Speakers</h2>
                  <p className="newgoods__text4">Amazon wireless speakers</p>
                  <Button
                    variant="text"
                    size="medium"
                    className="newgoods__btn"
                  >
                    Shop Now
                  </Button>
                </div>
              </div>
              <div className="newgoods__amazon newgoods__gucci">
                <img src={atir} alt="" />
                <div className="newgoods__gucci__texts">
                  <h2 className="newgoods__title5">Perfume</h2>
                  <p className="newgoods__text5">GUCCI INTENSE OUD EDP</p>
                  <Button
                    variant="text"
                    size="medium"
                    className="newgoods__btn"
                  >
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewGoods;
