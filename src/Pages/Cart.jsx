import "../styles/cart.scss";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CartItem from "../Components/UI/CartItem/CartItem";
import { useState, useEffect } from "react";

const Cart = ({ cart, removeGood }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const tokenjon = localStorage.getItem("tokenjon");

  const [mahsulotlar, setMah] = useState(0);

  useEffect(() => {
    setMah(cart.length); // Mahsulotlar sonini yangilash
  }, [cart]);

  // `totalPrice`ni har bir mahsulotning narxini va miqdorini hisobga olib hisoblash
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleNavLinkClick = () => {
    if (token && tokenjon && totalPrice) {
      navigate("/home");
    } else {
      navigate("/signin");
    }
  };

  return (
    <div className="cart">
      <h1 className="cart__title">
        {mahsulotlar ? "Savatingiz" : "Savatda mahsulotlar yo'q"}
      </h1>
      <div className="cart__container">
        <div className="cart__left">
          {cart?.map((elem) => (
            <CartItem removeGood={removeGood} key={elem?.id} {...elem} />
          ))}
        </div>
        <div className="cart__right">
          <div className="cart__shop">
            <h4 className="cart__shop__title">Buyurtmangiz</h4>
            <div className="cart__shop__productcount">
              <h4 className="cart__shop__counter">
                Mahsulotlar ({mahsulotlar})
              </h4>
              <p className="cart__shop__totalprice">{mahsulotlar} ta</p>
            </div>
            <Button
              variant="outlined"
              color="primary"
              className="cart__shop__btn"
            >
              Yetkazib berish ertaga
            </Button>
            <div className="cart__shop__totalprices">
              <h4 className="cart__shop__counter">Jami</h4>
              <p className="cart__shop__totalprice">
                {totalPrice.toFixed(2)} $
              </p>
            </div>
            <Button
              variant="contained"
              color="primary"
              className="cart__shop__btn2"
              onClick={handleNavLinkClick}
            >
              Rasmiylashtirishga o'tish
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
