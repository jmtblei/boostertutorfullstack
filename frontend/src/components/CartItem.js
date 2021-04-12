import React from 'react'
import { Link } from "react-router-dom";

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <div className="cartitem">
      <div className="cartitem-image">
        <Link to={`/product/${item.product}`}>    
            <img src={item.imageURL} alt={item.name} />
        </Link>
      </div>
      <div className="cartitem-box">
        <div className="cartitem-left">
            <div className="cartitem-grid">
                <Link to={`/product/${item.product}`} className="cartitem-name">
                    <p>{item.name} Booster Pack</p>
                </Link>
            </div>
            <div className="cartitem-grid">
                <h4 className="cartitem-remove" onClick={() => removeHandler(item.product)}>Remove</h4>
            </div>
        </div>
        <div className="cartitem-right">
            <div className="cartitem-grid">
                <h4>Price</h4>
                <p>${item.price}</p>
            </div>
            <div className="cartitem-grid">
                <h4>Qty</h4>
                <select
                    value={item.qty}
                    onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
                >
                    {[...Array(item.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                        {x + 1}
                    </option>
                    ))}
                </select>
            </div>
            <div className="cartitem-grid">
                <h4>Total</h4>
                <p>${item.price * item.qty}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
