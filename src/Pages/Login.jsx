import React, { useState } from "react";
import "../styles/login.scss";
import { Bounce, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [checked, setCheck] = useState(false);
  const [username, setName] = useState("");
  const [useremail, setEmail] = useState("");
  const [userpassword, setPassword] = useState("");
  const API = `https://dummyjson.com/auth/login`;

  const togglecheck = (e) => {
    setCheck(!checked);

    const submit = document.querySelector(".unsubmit");
    if (!checked) {
      submit.classList.add("submit");
    } else {
      submit.classList.remove("submit");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "username") {
      setName(value);
    } else if (name === "useremail") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (checked) {
      if (username === "emilys" && userpassword === "emilyspass") {
        fetch(API, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: username,
            password: userpassword,
            expiresInMins: 50,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            const token = data?.token;
            localStorage.setItem("token", token);

            toast.success(data?.firstName + " Xush kelibsiz");
            navigate("/home");
          });

        const submit = document.querySelector(".unsubmit");
        submit.classList.remove("submit");
        e.target.reset();
        setName();
        setEmail();
        setPassword();
      } else {
        toast.error("Email or password invialid", {
          position: "top-right",
          autoClose: 1700,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      }
    } else {
      toast.warning("Ommaviy oferta bilan tanishib chiqing", {
        position: "top-right",
        autoClose: 1700,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <form className="login__form" onSubmit={handleSubmit}>
          <h2 className="login__title">Login</h2>
          <input
            type="text"
            className="login__input"
            name="username"
            value={username}
            required
            placeholder="Ismingiz ..."
            onChange={handleChange}
          />
          <input
            type="email"
            className="login__input"
            name="useremail"
            value={useremail}
            required
            placeholder="Emailingiz ..."
            onChange={handleChange}
          />
          <input
            type="password"
            className="login__input"
            name="userpassword"
            value={userpassword}
            required
            placeholder="Parolingiz ..."
            onChange={handleChange}
          />
          <div className="login__box">
            <input
              type="checkbox"
              className="login__check login__chinput"
              id="checked"
              name="checked"
              onChange={togglecheck}
            />
            <label htmlFor="checked">
              Ommavviy oferta bilan tanishib chiqdim
            </label>
          </div>
          <button className="login__btn unsubmit">Yuborish</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
