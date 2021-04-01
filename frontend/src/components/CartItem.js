import React from 'react'
import { Link } from "react-router-dom";
import sampleBooster from "../1.jpg";

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <div className="cartitem">
      <div className="cartitem-image">
        <Link to={`/product/${item.product}`}>    
            <img src={sampleBooster} alt={item.name} />
            {/* <img src={item.imageURL} alt={item.name} /> */}
        </Link>
      </div>
      <div className="cartitem-box">
        <div className="cartitem-grid">
            <h4>Item</h4>
            <Link to={`/product/${item.product}`} className="cartitem-name">
                <p>{item.name} Booster Pack</p>
            </Link>
        </div>
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
            <h4>Remove</h4>
            <button
                onClick={() => removeHandler(item.product)}
            >
                <i className="fas fa-trash"></i>
            </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
