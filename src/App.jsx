import React from "react";
import "./App.scss";
import Layout from "./Components/Layout/Layout";

const App = () => {
  const naruto = `https://watchseriesstream.com/watch-movie/watch-the-last-naruto-the-movie-full-online-57164.5455603`;
  console.log(naruto);

  return (
    <div>
      <Layout />
    </div>
  );
};

export default App;
