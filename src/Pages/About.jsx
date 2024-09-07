import React from "react";
import "../styles/about.scss";
import macbook from "../Assets/img/macbook.png";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined"; // dollar
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined"; // sovg'a
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined"; // bank

const About = () => {
  return (
    <div className="about">
      <div className="about__container">
        <div className="about__our">
          <div className="about__texts">
            <h1 className="about__title">Biz haqimizda</h1>
            <p className="about__text">
              Lorem ipsum dolor sit amet consectetur. Pulvinar senectus elit
              diam arcu faucibus ultrices mauris cursus. Risus in eu dui luctus
              enim
            </p>
          </div>
          <div className="about__image">
            <img src={macbook} alt="" />
          </div>
        </div>
        <div className="about__cards">
          <div className="about__card icons">
            <div className="about__card__icon1">
              <div className="about__card__icon2">
                <StorefrontOutlinedIcon className="about__icon icons" />
              </div>
            </div>
            <div className="about__card__texts">
              <h2 className="about__card__title">10.5k </h2>
              <p className="about__card__text">Sallers active our site</p>
            </div>
          </div>
          <div className="about__card icons">
            <div className="about__card__icon1">
              <div className="about__card__icon2">
                <PaidOutlinedIcon className="about__icon icons" />
              </div>
            </div>
            <div className="about__card__texts">
              <h2 className="about__card__title">33k </h2>
              <p className="about__card__text">Mopnthly Produduct Sale</p>
            </div>
          </div>
          <div className="about__card icons">
            <div className="about__card__icon1">
              <div className="about__card__icon2">
                <CardGiftcardOutlinedIcon className="about__icon icons" />
              </div>
            </div>
            <div className="about__card__texts">
              <h2 className="about__card__title">45.5k</h2>
              <p className="about__card__text">Customer active in our site</p>
            </div>
          </div>
          <div className="about__card icons">
            <div className="about__card__icon1">
              <div className="about__card__icon2">
                <AccountBalanceOutlinedIcon className="about__icon icons" />
              </div>
            </div>
            <div className="about__card__texts">
              <h2 className="about__card__title">25k </h2>
              <p className="about__card__text">Anual gross sale in our site</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
