import React from "react";
import Intro from "../Components/UI/Intro/Intro";
import Catalogs from "../Components/UI/Catalogs/Catalogs";
import Discount from "../Components/UI/Discount/Discount";
import Popular from "../Components/UI/Popular/Popular";
import NewGoods from "../Components/UI/NewGoods/NewGoods";
import AllGoods from "../Components/UI/AllGoods/AllGoods";
import Service from "../Components/UI/Service/Service";

const Home = ({ base, addGood }) => {
  return (
    <div>
      <Intro />
      <Catalogs />
      <Discount addGood={addGood} base={base} />
      <Popular addGood={addGood} base={base} />
      <NewGoods />
      <AllGoods base={base} />
      <Service />
    </div>
  );
};

export default Home;
