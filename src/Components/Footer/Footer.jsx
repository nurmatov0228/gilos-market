import React from "react";
import "./footer.scss";
import { NavLink } from "react-router-dom";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <div className="footertop">
      <div className="footer">
        <div className="footer__container">
          <div className="footer__cards">
            <div className="footer__card">
              <NavLink to={"/"}>
                <h2 className="footer__logo">Brand Logo</h2>
              </NavLink>
              <p className="footer__text">Biz ijtimoiy tarmoqlarda</p>
              <div className="footer__socials">
                <i className="icons">
                  <TelegramIcon />
                </i>
                <i className="icons">
                  <InstagramIcon />
                </i>
                <i className="icons">
                  <LinkedInIcon />
                </i>
                <i className="icons">
                  <FacebookIcon />
                </i>
              </div>
            </div>
            <div className="footer__card">
              <h3 className="footer__subtitle">Aloqa</h3>
              <p className="footer__subtext">Manzil: Toshkent sh</p>
              <p className="footer__subtext">toshmat@gmai.com</p>
              <p className="footer__subtext">
                <a href="tel:+998951884308">+998951884308</a>
              </p>
            </div>
            <div className="footer__card">
              <h3 class="footer__subtitle">Haqimizda</h3>
              <p class="footer__subtext">
                Maxfiylik Siyosati va Shaxsiy Ma'lumotlarni Himoya Qilish
              </p>
              <p class="footer__subtext">
                Mahsulotlarni va to’lovlarni qaytarish siyosati
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div class="footer__bottom__container">
          <h3 class="footer__bottom__text">
            {new Date().getFullYear()} © notebook.uz MCHJ. Tin 309376127. Barcha
            huquqlar himoyalangan
          </h3>
          <h3 class="footer__bottom__text">Hamkor: Clean coders group</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
