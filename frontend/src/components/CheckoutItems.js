import React from "react";

const CheckoutItems = ({ item }) => {
  return (
    <div className="checkoutitem">
      <div className="checkoutitem-image">
        <img src={item.imageURL} alt={item.name} />
      </div>
      <div className="checkoutitem-box">
        <div className="checkoutitem-left">
          <div className="checkoutitem-grid">
            <p>{item.name} Booster Pack</p>
          </div>
          <div className="checkoutitem-grid">
          </div>
        </div>
        <div className="checkoutitem-right">
          <div className="checkoutitem-grid">
            <h4>Price</h4>
            <p>${item.price}</p>
          </div>
          <div className="checkoutitem-grid">
            <h4>Qty</h4>
            <p>{item.qty}</p>
          </div>
          <div className="checkoutitem-grid">
            <h4>Total</h4>
            <p>${item.price * item.qty}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItems;
