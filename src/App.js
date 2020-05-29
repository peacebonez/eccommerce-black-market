import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Heading from "./components/Heading";
import "./App.css";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Demo from "./components/Demo";
import { nukes } from "./utils/inventory";

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [demoOn, setDemoOn] = useState(false);
  const cartLength = cart.length;

  const handleOpenCart = () => {
    setCartOpen(true);
  };

  const handleCloseCart = () => {
    setCartOpen(false);
  };

  const handleAddToCart = (product) => {
    if (cart.includes(product)) return;
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (product) => {
    setCart(cart.filter((nuke) => nuke.name !== product.name));
  };

  const handleDecQuantity = (item) => {
    let _cart = cart;
    if (_cart.length === 1) return;
    _cart.splice(_cart.lastIndexOf(item), 1);
    setCart([..._cart]);
  };
  const handleIncQuantity = (item) => {
    setCart([...cart, item]);
  };

  const handleDemo = () => {
    setDemoOn(true);
    setTimeout(() => {
      setDemoOn(false);
    }, 1000);
  };

  console.log("cart:", cart);

  return (
    <>
      <div className="container">
        {/* <div className={cartOpen ? "noscroll container" : "container"}> */}
        <Nav handleOpenCart={handleOpenCart} cartLength={cartLength} />
        <Heading />
        <Products nukes={nukes} handleAddToCart={handleAddToCart} />
        <Cart
          cart={cart}
          cartOpen={cartOpen}
          handleCloseCart={handleCloseCart}
          handleRemoveFromCart={handleRemoveFromCart}
          handleDecQuantity={handleDecQuantity}
          handleIncQuantity={handleIncQuantity}
          handleDemo={handleDemo}
        />
        <Demo demoOn={demoOn} />
      </div>
    </>
  );
}
