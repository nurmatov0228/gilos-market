import axios from "axios";
import React, { useState } from "react";
import "../styles/contact.scss";
import { Button } from "@mui/material";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import { Bounce, toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState();
  const [text, setText] = useState("");

  const settingName = (e) => {
    setName({
      ...name,
      [e.target.name]: e.target.value,
    });
  };

  const settingNumber = (e) => {
    setNumber({
      ...number,
      [e.target.name]: e.target.value,
    });
  };

  const settingText = (e) => {
    setText({
      ...text,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = `7224174930:AAHfX4xYMCiylsXEZPRrKF395SLBmv3XdcU`;
    const chat_id = 1308395281;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    axios({
      url: url,
      method: "post",
      data: {
        chat_id: chat_id,
        text:
          "Ism: " +
          name.name +
          " Raqam: " +
          number.number +
          " Xabar: " +
          text.text,
      },
    })
      .then((data) => {
        toast.success("Ma'lumotlar jo'natildi", {
          position: "top-right",
          autoClose: 1700,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      })
      .catch((error) => {
        toast.error("Jo'natishda xatolik bor", {
          position: "top-right",
          autoClose: 1700,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      });
    e.target.reset();
  };

  return (
    <div className="contact">
      <div className="contact__container">
        <div className="contact__left">
          <div className="contact__top">
            <div className="contact__flex">
              <div className="contact__icon1">
                <LocalPhoneOutlinedIcon className="contact__icon icons" />
              </div>
              <h2 className="contact__flex__title">Bizga Qo'ng'iroq Qiling</h2>
            </div>
            <div className="contact__texts1">
              <p className="contact__texts__text">
                Biz 24/7 kun tartibida ishlaymiz
              </p>
              <p className="contact__texts__text">Raqam: +998917777777</p>
            </div>
          </div>
          <hr />
          <div className="contact__bottom">
            <div className="contact__flex">
              <div className="contact__icon1">
                <MailOutlineOutlinedIcon className="contact__icon icons" />
              </div>
              <h2 className="contact__flex__title">Bizga yozing</h2>
            </div>
            <div className="contact__texts1 contact__texts2">
              <p className="contact__texts__text">
                Shaklni to'ldiring va biz 24 soat ichida siz bilan bog'lanamiz.
              </p>
              <p className="contact__texts__text">
                Emai: customer@exclusive.com
              </p>
              <p className="contact__texts__text">
                Emai: customer@exclusive.com
              </p>
            </div>
          </div>
        </div>
        <form className="contact__form contact__right" onSubmit={handleSubmit}>
          <div className="contact__form__top">
            <input
              required
              className="contact__input"
              type="text"
              placeholder="     Ismingiz*"
              name="name"
              onChange={settingName}
            />
            <input
              required
              className="contact__input contact__number"
              type="number"
              placeholder="     Telefon raqamingiz*"
              name="number"
              onChange={settingNumber}
            />
          </div>
          <textarea
            type="text"
            className="contact__input contact__area"
            required
            placeholder="     Sizning xabaringiz"
            name="text"
            onChange={settingText}
          />
          <button className="contact__btn1">
            <Button
              variant="contained"
              color="primary"
              className="contact__btn"
            >
              Xabar yuborish
            </Button>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
