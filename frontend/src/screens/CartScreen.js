import React from 'react'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import CartItem from "../components/CartItem";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

const CartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {}, []);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  const getTax = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty * 0.08, 0)
      .toFixed(2);
  };

  const getTotal = () => {
    let subTotal = cartItems
      .reduce((price, item) => price + item.price * item.qty, 0);
    let tax = cartItems
      .reduce((price, item) => price + item.price * item.qty * 0.08, 0);
    return (subTotal + tax).toFixed(2);
  };
  

  return (
    <>
      <div className="cartscreen">
        <div className="cartscreen-left">
            <h2>Your Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <div className="cartscreen-empty">
                <h2>Is Currently Empty</h2>
                <div className="cartscreen-empty-back">
                    <Link to="/">Continue Shopping</Link>
                </div>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
              />
            ))
          )}
        </div>

        <div className="cartscreen-right">
          <div className="cartscreen-info">
              <div className="order-info">
                <p>Order Summary</p>
                <p>Subtotal ({getCartCount()}) Items</p>
                <p>${getCartSubTotal()}</p>
                <p>+${getTax()} Tax</p>
                <p>Your Total: ${getTotal()}</p>
              </div>
            <button>Place Your Order</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartScreen;
