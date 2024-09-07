import React from "react";
import "../styles/login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="login__container">
        <form className="login__form">
          <h2 className="login__title">Login</h2>
          <input
            type="text"
            className="login__input"
            name="name"
            required
            placeholder="Ismingiz ..."
          />
          <input
            type="email"
            className="login__input"
            name="email"
            required
            placeholder="Emailingiz ..."
          />
          <input
            type="password"
            className="login__input"
            name="password"
            required
            placeholder="Parolingiz ..."
          />
          <div className="login__box">
            <input
              type="checkbox"
              className="login__check login__chinput"
              id="checked "
              name="checked"
            />
            <label htmlFor="checked">
              Ommavviy oferta bilan tanishib chiqdim
            </label>
          </div>
          <button className="login__btn" id="unsubmit">
            Yuborish
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
