import React, { useState, useEffect } from "react";
import "./catalogs.scss";
import VideogameAssetOutlinedIcon from "@mui/icons-material/VideogameAssetOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import CableOutlinedIcon from "@mui/icons-material/CableOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import LaptopMacOutlinedIcon from "@mui/icons-material/LaptopMacOutlined";
import WatchOutlinedIcon from "@mui/icons-material/WatchOutlined";
import SdStorageOutlinedIcon from "@mui/icons-material/SdStorageOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import Slider from "react-slick";

const Catalogs = () => {
  const [slidesToShow, setSlidesToShow] = useState(6);

  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      if (width > 1300) {
        setSlidesToShow(6);
      } else if (width < 1300 && width > 1000) {
        setSlidesToShow(4);
      } else if (width < 1000 && width > 600) {
        setSlidesToShow(3);
      } else if (width < 500) {
        setSlidesToShow(2);
      } else if (width < 420) {
        setSlidesToShow(2);
      }
    };

    updateSlidesToShow();

    window.addEventListener("resize", updateSlidesToShow);

    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    cssEase: "linear",
  };

  return (
    <div className="catalogs">
      <div className="catalogs__container">
        <div className="catalogs__top">
          <h1 className="catalogs__title">Kataloglar</h1>
        </div>
        <div className="catalogs__bottom">
          <div className="slider-container">
            <Slider {...settings} className="catalogs__cards">
              <div className="catalogs__card">
                <PhoneAndroidOutlinedIcon className="icons catalogs__icons" />
                <p className="catalogs__text">Telefon</p>
              </div>
              <div className="catalogs__card">
                <ComputerOutlinedIcon className="icons catalogs__icons" />
                <p className="catalogs__text">Kompyuter</p>
              </div>
              <div className="catalogs__card">
                <WatchOutlinedIcon className="icons catalogs__icons" />
                <p className="catalogs__text">Aqlli soatlar</p>
              </div>
              <div className="catalogs__card">
                <CameraAltOutlinedIcon className="icons catalogs__icons" />
                <p className="catalogs__text">Kamera</p>
              </div>
              <div className="catalogs__card">
                <HeadphonesOutlinedIcon className="icons catalogs__icons" />
                <p className="catalogs__text">Quloqchinlar</p>
              </div>
              <div className="catalogs__card">
                <VideogameAssetOutlinedIcon className="icons catalogs__icons" />
                <p className="catalogs__text">Aksesuarlar</p>
              </div>
              <div className="catalogs__card">
                <SdStorageOutlinedIcon className="icons catalogs__icons" />
                <p className="catalogs__text">Simkartalar</p>
              </div>
              <div className="catalogs__card">
                <LaptopMacOutlinedIcon className="icons catalogs__icons" />
                <p className="catalogs__text">Noutbuklar</p>
              </div>
              <div className="catalogs__card">
                <CableOutlinedIcon className="icons catalogs__icons" />
                <p className="catalogs__text">Usb, kabellar</p>
              </div>
              <div className="catalogs__card">
                <SportsEsportsOutlinedIcon className="icons catalogs__icons" />
                <p className="catalogs__text">Joystiklar</p>
              </div>
              <div className="catalogs__card">
                <HeadsetMicOutlinedIcon className="icons catalogs__icons" />
                <p className="catalogs__text">O'yin quloqchinlari</p>
              </div>
              <div className="catalogs__card">
                <StorageOutlinedIcon className="icons catalogs__icons" />
                <p className="catalogs__text">Qo'shimcha xotira</p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalogs;
