import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import axios from "axios";
import Cart from "../Pages/Cart";
import { Bounce, toast } from "react-toastify";
import Item from "../Pages/Item";
import Allitems from "../Pages/Allitems";

const Router = ({ setCount }) => {
  const [base, setBase] = useState([]);
  const [cart, setCart] = useState([]);

  async function fetchData(url) {
    try {
      const res = await axios.get(url);
      setBase(res?.data);
    } catch (error) {
      console.log("Xatolik yuz berdi", error);
    }
  }
  useEffect(() => {
    fetchData("https://fakestoreapi.com/products");
  }, []);

  // AddCart
  const addGood = (id, title, price, description, category, image) => {
    const itemIndex = cart.findIndex((elem) => elem.id === id);

    if (itemIndex < 0) {
      setCount((prev) => prev + 1);
      setCart((elem) => {
        const quantity = 1;
        const newGood = {
          id: id,
          title: title,
          price: price,
          description: description,
          category: category,
          image: image,
          quantity: quantity,
        };

        return [...elem, newGood];
      });
      toast.success(title.slice(0, 20) + "added", {
        position: "top-right",
        autoClose: 1700,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } else {
      const addCount = cart.map((elem) => {
        if (elem.id === id) {
          return { ...elem, quantity: elem?.quantity + 1 };
        } else {
          return { ...elem };
        }
      });
      setCart(addCount);
    }
  };

  // RemoveCart
  const removeGood = (id, title) => {
    toast.error(title.slice(0, 20) + "added", {
      position: "top-right",
      autoClose: 1700,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    setCount((prev) => prev - 1);
    const deleteItems = cart.filter((elem) => elem?.id !== id);
    setCart(deleteItems);
  };

  return (
    <Routes>
      <Route path="/" element={<Home addGood={addGood} base={base} />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/cart"
        element={<Cart removeGood={removeGood} cart={cart} />}
      />
      <Route path="/elementitem/:id" element={<Item base={base} />} />
      <Route
        path="/allitems"
        element={<Allitems addGood={addGood} base={base} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
