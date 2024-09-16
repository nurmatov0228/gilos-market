import React, { useEffect, useState } from "react";
import "./discounts.scss";
import DiscountsItem from "./DiscountsItem";
import Slider from "react-slick";

const Discounts = ({ base, addGood }) => {
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      if (width > 1300) {
        setSlidesToShow(4);
      } else if (width < 1300 && width > 1000) {
        setSlidesToShow(3);
      } else if (width < 1000 && width > 680) {
        setSlidesToShow(2);
      } else if (width < 680 && width > 380) {
        setSlidesToShow(2);
      } else if (width < 380) {
        setSlidesToShow(1);
      }
    };

    updateSlidesToShow();

    window.addEventListener("resize", updateSlidesToShow);

    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow,
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
