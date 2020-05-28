import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Heading from "./components/Heading";
import "./App.css";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { nukes } from "./utils/inventory";

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
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
    console.log("remove input!", product);
    setCart(cart.filter((nuke) => nuke.name !== product.name));
  };

  const handleDecQuantity = (item) => {
    setQuantity((q) => q + 1);
    setCart([...cart, item]);
  };
  const handleIncQuantity = (item) => {
    setQuantity((q) => q - 1);
    setCart(cart.splice(cart.indexOf(item), 1));
  };

  useEffect(() => {});

  console.log("cart:", cart);

  return (
    <div className="container">
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
      />
    </div>
  );
}
