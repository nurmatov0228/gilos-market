import React from "react";
import "./cartitem.scss";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { NavLink } from "react-router-dom";

const CartItem = ({
  id,
  title,
  price,
  description,
  category,
  image,
  quantity,
  removeGood,
  add,
  remove,
}) => {
  return (
    <div className="cartitem">
      <div className="cartitem__left">
        <NavLink to={`/elementitem/${id}`} className={"discountsitem__link"}>
          <img className="cartitem__img" src={image} alt="rasmbor" />
        </NavLink>
        <div className="cartitem__box">
          <h4 className="cartitem__box__title">{title.slice(0, 20)}</h4>
          <div className="cartitem__box__bottom">
            <p className="cartitem__box__name">{category}</p>
            <div className="cartitem__box__count">
              <RemoveOutlinedIcon
                onClick={() => {
                  remove(id, title, price, description, category, image);
                }}
                className="cartitem__box__icon icons"
              />
              <p className="cartitem__box__quantity">{quantity}</p>
              <AddOutlinedIcon
                onClick={() => {
                  add(id, title, price, description, category, image);
                }}
                className="cartitem__box__icon icons"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="cartitem__right">
        <div
          className="cartitem__trashbox"
          onClick={() => {
            removeGood(id, title);
          }}
        >
          <DeleteForeverOutlinedIcon />
          <span className="cartitem__delete">Yo'q qilish</span>
        </div>
        <h3 className="cartitem__cheap">{price} $</h3>
        <h5 className="cartitem__price">
          {String((price * 35) / 100 + price).slice(0, 5)} $
        </h5>
      </div>
    </div>
  );
};

export default CartItem;
