import { Button } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import hpnoutbuk from "../../../Assets/img/hpnoutbuk.png";
import orqafonnoutbuk from "../../../Assets/img/orqafonnoutbuk.png";
import "./intro.scss";

const Intro = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 6000,
    cssEase: "linear",
  };
  return (
    <div className="intro">
      <div className="intro__container">
        <div className="slider-container">
          <Slider {...settings}>
            <div className="intro__slide">
              <div className="intro__texts">
                <h3 className="intro__title">New Laptop 1</h3>
                <p className="intro__text">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <Button
                  variant="contained"
                  color="primary"
                  className="intro__btn"
                >
                  <p className="intro__btn__text">Shop naw</p>
                </Button>
              </div>
              <div className="intro__image">
                <img src={hpnoutbuk} alt="" />
              </div>
              <div className="intro__background">
                <img src={orqafonnoutbuk} alt="" />
              </div>
            </div>
            <div className="intro__slide">
              <div className="intro__texts">
                <h3 className="intro__title">New Laptop 2</h3>
                <p className="intro__text">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <Button
                  variant="contained"
                  color="primary"
                  className="intro__btn"
                >
                  <p className="intro__btn__text">Shop naw</p>
                </Button>
              </div>
              <div className="intro__image">
                <img src={hpnoutbuk} alt="" />
              </div>
              <div className="intro__background">
                <img src={orqafonnoutbuk} alt="" />
              </div>
            </div>
            <div className="intro__slide">
              <div className="intro__texts">
                <h3 className="intro__title">New Laptop 3</h3>
                <p className="intro__text">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <Button
                  variant="contained"
                  color="primary"
                  className="intro__btn"
                >
                  <p className="intro__btn__text">Shop naw</p>
                </Button>
              </div>
              <div className="intro__image">
                <img src={hpnoutbuk} alt="" />
              </div>
              <div className="intro__background">
                <img src={orqafonnoutbuk} alt="" />
              </div>
            </div>
            <div className="intro__slide">
              <div className="intro__texts">
                <h3 className="intro__title">New Laptop 4</h3>
                <p className="intro__text">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <Button
                  variant="contained"
                  color="primary"
                  className="intro__btn"
                >
                  <p className="intro__btn__text">Shop naw</p>
                </Button>
              </div>
              <div className="intro__image">
                <img src={hpnoutbuk} alt="" />
              </div>
              <div className="intro__background">
                <img src={orqafonnoutbuk} alt="" />
              </div>
            </div>
            <div className="intro__slide">
              <div className="intro__texts">
                <h3 className="intro__title">New Laptop 5</h3>
                <p className="intro__text">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <Button
                  variant="contained"
                  color="primary"
                  className="intro__btn"
                >
                  <p className="intro__btn__text">Shop naw</p>
                </Button>
              </div>
              <div className="intro__image">
                <img src={hpnoutbuk} alt="" />
              </div>
              <div className="intro__background">
                <img src={orqafonnoutbuk} alt="" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Intro;
