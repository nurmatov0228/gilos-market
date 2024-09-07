import React from "react";
import "./discounts.scss";
import DiscountsItem from "./DiscountsItem";
import Slider from "react-slick";

const Discounts = ({ base, addGood }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
  };
  return (
    <div className="discounts" id="discounts">
      <div className="discounts__container">
        <div className="slider-container">
          <Slider {...settings}>
            {base.map((elem) => (
              <DiscountsItem addGood={addGood} key={base?.id} {...elem} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Discounts;
