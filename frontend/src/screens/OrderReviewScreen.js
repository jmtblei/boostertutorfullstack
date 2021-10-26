import React from 'react';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import CheckoutItems from "../components/CheckoutItems";
import { emptyCart } from '../redux/actions/cartActions';

const OrderReviewScreen = () => {
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    useEffect(() => {}, []);

    const emptyHandler = () => {
        dispatch(emptyCart(cart));
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
        <div className="orderreview">
            <h2>Your Order In Review</h2>
            {cartItems.map((item) => (
                <CheckoutItems
                    key={item.product}
                    item={item}
                />
            ))}
            <h4>Thanks for shopping with Booster Tutor!</h4>
            <div className="orderreview-box">
                <h2>Order Summary</h2>
                <div className="orderreview-info">
                <div className="order-info">
                    <p>Number of Items:)</p>
                    <p>Subtotal:</p>
                    <p>Tax Collected:</p>
                    <p>Your Total:</p>
                </div>
                <div className="order-info">
                    <p>({getCartCount()})</p>
                    <p>${getCartSubTotal()}</p>
                    <p>${getTax()}</p>
                    <p>${getTotal()}</p>
                </div>
                </div>
                <div className="orderreview-button">
                <Link to="/products">
                    <button onClick={emptyHandler}>Back to Shop</button>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default OrderReviewScreen
