import React from "react";
import "../styles/allitems.scss";
import Discountsitem from "../Components/UI/Discounts/DiscountsItem";

const Allitems = ({ base, addGood }) => {
  return (
    <div className="allitems">
      <div className="allitems__container">
        {base.map((elem) => (
          <Discountsitem addGood={addGood} key={base?.id} {...elem} />
        ))}
      </div>
    </div>
  );
};

export default Allitems;
