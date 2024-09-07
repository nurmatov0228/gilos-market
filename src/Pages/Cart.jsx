import "../styles/cart.scss";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import CartItem from "../Components/UI/CartItem/CartItem";

const Cart = ({ cart, removeGood }) => {
  // const [mahsulotlar, setMah] = useState(0);

  // cart?.map((elem) => setMah((prev) => elem.quantity));

  return (
    <div className="cart">
      <h1 className="cart__title">
        {cart.length ? "Savatingiz" : "Savatda mahsulotlar yo'q"}
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
              <h4 className="cart__shop__counter">Mahsulotlar (0)</h4>
              <p className="cart__shop__totalprice">0 ta</p>
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
              <p className="cart__shop__totalprice">0 $</p>
            </div>
            <Button
              variant="contained"
              color="primary"
              className="cart__shop__btn2"
            >
              <NavLink className={"cart__shop__link"} to={"/"}>
                Rasmiylashtirishga o'tish
              </NavLink>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
