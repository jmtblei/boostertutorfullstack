import React, { useState } from 'react';
import AnimateForm from "../components/AnimateForm";

const CheckoutScreen = ({ history }) => {
    const [placedOrder, setPlacedOrder] = useState(false);

    const orderPush = () => {
        const push = setTimeout(() => {
            history.push(`/orderreview`)      
        }, 7000);
        return push;
    };

    const orderHandler = (event) => {
        event.preventDefault()
        setPlacedOrder(true);
        orderPush()
    };

    return (
        <div className="checkout">
            <form>
                <h2>Contact Infomation</h2>
                <div className="contact-info">
                    { !placedOrder ? 
                    <>
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
                    </>
                    :
                    <>
                        <AnimateForm text="SpikeTournamentGrinder@wizards.com"/>
                        <AnimateForm text="1-800-324-6496"/>
                    </>
                    }
                </div>
                <h2>Shipping Information</h2>
                <div className="full-name">     
                    { !placedOrder ?
                    <>
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
                    </>
                    :
                    <>
                        <AnimateForm text="Spike"/>
                        <AnimateForm text="TG"/>
                    </>
                    }
                </div>
                <div className="shipping-address">
                    { !placedOrder ?
                    <>
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
                    </>
                    :
                    <>
                        <AnimateForm text="Wizards of The Coast"/>
                        <AnimateForm text="1600 Lind Avenue, South West"/>
                        <AnimateForm text="Suite 400"/>
                        <AnimateForm text="Renton"/>
                    </>
                    }
                </div>
                <div className="shipping-country">
                    { !placedOrder ?
                    <>  
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
                    </>
                    :
                    <>
                        <div className="shipping-country-select">
                            <label>Country/Region</label>
                            <select  disabled>
                                <option>United States *</option>
                            </select>
                        </div>
                        <div className="shipping-country-select">
                            <label>State</label>
                            <select disabled>
                                <option>WA</option>
                            </select>
                        </div>
                        <AnimateForm text="98057"/>
                    </>
                    }  
                </div>
                <h2>Payment Information</h2>
                <div className="full-name">  
                    { !placedOrder ? 
                    <>
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
                    </>
                    :
                    <>
                        <AnimateForm text="Spike"/>
                        <AnimateForm text="TG"/>
                    </>
                    }
                </div>
                <div className="payment-info">  
                    { !placedOrder ? 
                    <>
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
                    </>
                    :
                    <>
                        <AnimateForm text="Renton"/>
                        <div className="payment-details">
                            <div className="expiry-select">
                                <label>Month</label>
                                <select disabled>
                                    <option>08</option>
                                </select>
                            </div>
                            <div className="expiry-select">
                                <label>Year</label>
                                <select disabled>
                                    <option>1993</option>
                                </select>
                            </div>
                            <AnimateForm text="123"/>
                        </div>
                    </>
                    }
                </div>
                <div className="form-bottom">
                    <p>
                        This forms' input is disabled by default because this website does not sell any product, nor does it collect any personal information. It's for demo purposes only, so go ahead and place your "order"!
                        <br/>
                        * denotes a required field
                    </p>
                        { !placedOrder ?
                        <button onClick={orderHandler}>Place Order</button>
                        :
                        <button disabled>Place Order</button>
                        }
                </div>
            </form>
        </div>
    )
}

export default CheckoutScreen
