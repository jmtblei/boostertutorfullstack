import React from 'react';
import { Link } from "react-router-dom";

const CheckoutScreen = () => {
    return (
        <div className="checkout">
            <form>
                <h2>Contact Infomation</h2>
                <div className="contact-info">
                    <input 
                        type="email"
                        id=""
                        name=""
                        placeholder="Email *"
                        disabled
                    />
                    <input 
                        type="number"
                        id=""
                        name=""
                        placeholder="Phone"
                        disabled
                    />
                </div>
                <h2>Shipping Information</h2>
                <div className="full-name">     
                    <input 
                        type="text"
                        id=""
                        name=""
                        placeholder="First name *"
                        disabled
                    />
                    <input 
                        type="text"
                        id=""
                        name=""
                        placeholder="Last name *"
                        disabled
                    />
                </div>
                <div className="shipping-address">
                    <input 
                        type="text"
                        id=""
                        name=""
                        placeholder="Company"
                        disabled
                    />
                    <input 
                        type="text"
                        id=""
                        name=""
                        placeholder="Address *"
                        disabled
                    />
                    <input 
                        type="text"
                        id=""
                        name=""
                        placeholder="Apartment, suite, etc."
                        disabled
                    />
                    <input 
                        type="text"
                        id=""
                        name=""
                        placeholder="City *"
                        disabled
                    />
                </div>
                <div className="shipping-country">    
                    <div className="shipping-country-select">
                        <label>Country/Region</label>
                        <select disabled>
                            <option>United States *</option>
                        </select>
                    </div>
                    <div className="shipping-country-select">
                        <label>State</label>
                        <select disabled>
                            <option>State *</option>
                        </select>
                    </div>
                    <input 
                        type="number"
                        id=""
                        name=""
                        placeholder="ZIP code *"
                        disabled
                    />
                </div>
                <h2>Payment Information</h2>
                <div className="full-name">     
                    <input 
                        type="text"
                        id=""
                        name=""
                        placeholder="Cardholder's first name *"
                        disabled
                    />
                    <input 
                        type="text"
                        id=""
                        name=""
                        placeholder="Cardholder's last name *"
                        disabled
                    />
                </div>
                <div className="payment-info">    
                    <input 
                        type="number"
                        id=""
                        name=""
                        placeholder="16-Digit credit card number *"
                        disabled
                    />
                    <div className="payment-details">
                        <div className="expiry-select">
                            <label>Month</label>
                            <select disabled>
                                <option>MM *</option>
                            </select>
                        </div>
                        <div className="expiry-select">
                            <label>Year</label>
                            <select disabled>
                                <option>YYYY *</option>
                            </select>
                        </div>
                        <input 
                            type="number"
                            id=""
                            name=""
                            placeholder="CVV *"
                            disabled
                        />
                    </div>
                </div>
                <div className="form-bottom">
                    <p>
                        This forms' input is disabled by default because this website does not sell any product, nor does it collect any personal information. It's for demo purposes only, so go ahead and place your "order"!
                        <br/>
                        * denotes a required field
                    </p>
                    <Link to="/orderreview">
                        <button>Place Order</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default CheckoutScreen
