import React, { useState } from "react";
import "../styles/signin.scss";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signin = () => {
  const navigate = useNavigate();
  const tokenjon = "bahodirnurmatov";
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    lastName: "",
    firstName: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password, lastName, firstName, phoneNumber } = formData;

    if (email && password && lastName && firstName && phoneNumber) {
      localStorage.setItem("tokenjon", tokenjon);

      const username = `emilys`;
      const userpassword = `emilyspass`;
      const API = `https://dummyjson.com/auth/login`;

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
          navigate("/home");
        });
      toast.success("Xush kelibsiz");
      navigate("/home");
    } else {
      toast.warning("Barcha maydonlarni to'ldiring");
    }

    // Reset form
    setFormData({
      email: "",
      password: "",
      lastName: "",
      firstName: "",
      phoneNumber: "",
    });
  };

  return (
    <div className="sign-in">
      <div className="sign-in__container">
        <h1 className="sign-in__title">Sign In</h1>
        <form className="sign-in__form" onSubmit={handleSubmit}>
          <div className="sign-in__form-group">
            <label htmlFor="firstName" className="sign-in__label">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="sign-in__input"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="sign-in__form-group">
            <label htmlFor="lastName" className="sign-in__label">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="sign-in__input"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="sign-in__form-group">
            <label htmlFor="email" className="sign-in__label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="sign-in__input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="sign-in__form-group">
            <label htmlFor="phoneNumber" className="sign-in__label">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className="sign-in__input"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="sign-in__form-group">
            <label htmlFor="password" className="sign-in__label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="sign-in__input"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button className="sign-in__button" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
