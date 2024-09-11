import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./styles/fonts.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </Router>
);
