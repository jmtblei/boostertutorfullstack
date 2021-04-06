import React from 'react';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";
import sampleBooster from "../1.jpg";

const ProductScreen = ({ match, history }) => {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.getProductDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        if (product && match.params.id !== product._id) {
        dispatch(getProductDetails(match.params.id));
        }
    }, [dispatch, match, product]);

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty));
        history.push(`/cart`);
    };

    return (
        <div className="productscreen">
            {loading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <h2>{error}</h2>
            ) : (
                <>
                <div className="productscreen-left">
                    <div className="left-image">
                        {/* <img src={product.imageURL} alt={product.name} /> */}
                        <img src={sampleBooster} alt={product.name} />
                    </div>
                    <div className="left-info">
                        <img src={product.logoURL} alt={product.name}/>
                        <div className="left-subinfo">
                            <h4>Product Name:</h4>
                            <p>{product.name} Booster Pack</p>
                        </div>
                        <div className="left-subinfo">
                            <h4>Release Date:</h4>
                            <p>{product.releaseDate}</p>
                        </div>
                        <div className="left-subinfo">
                            <h4>Description:</h4>
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
                <div className="productscreen-right">
                    <div className="right-info">
                        <p>
                            Price:
                            <span>${product.price}</span>
                        </p>
                        <p>
                            Status:
                            <span>
                            {product.countInStock > 0 ? `In Stock (${product.countInStock})` : "Out of Stock"}
                            </span>
                        </p>
                        <p>
                            Select Qty
                            <select 
                                value={qty} 
                                onChange={(e) => setQty(e.target.value)}
                            >
                            {[...Array(product.countInStock).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                </option>
                            ))}
                            </select>
                        </p>
                        <div className="product-av">
                            {product.countInStock > 0 
                                ?
                                <button type="button" onClick={addToCartHandler} className="productbutton-av">
                                    ADD TO CART
                                </button>
                                :
                                <button type="button" className="productbutton-out">
                                    OUT OF STOCK
                                </button>
                            }
                        </div>
                    </div>
                </div>
                </>
            )}
    </div>
    )
}

export default ProductScreen
