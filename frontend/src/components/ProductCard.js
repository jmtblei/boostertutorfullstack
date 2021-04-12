import React from 'react';
import { useState } from "react"; 
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

const ProductCard = ({
    name,
    price,
    imageURL,
    logoURL,
    countInStock,
    productId,
}) => {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(addToCart(productId, qty))
        .then(setQty(qty+1))
    };

    return (
        countInStock > 0 
            ?
        <div className="product">
            <img src={logoURL} alt={name} className="product-logo"/>
            <Link to={`/product/${productId}`}>
                <img src={imageURL} alt={name} className="product-img"/>
            </Link>
            <div className="product-info">
                <p className="info-name">{name}</p>
                <p className="info-price">${price}</p>
            </div>
            <button 
                onClick={addToCartHandler}
                className="product-quickadd"
            >
                ADD TO CART
            </button>
        </div>
            :
            <div className="product-out">
            <img src={logoURL} alt={name} className="product-logo"/>
            <Link to={`/product/${productId}`}>
                <img src={imageURL} alt={name} className="product-img"/>
            </Link>
            <div className="product-info">
                <p className="info-name">{name}</p>
                <p className="info-price">${price}</p>
            </div>
            
            <div className="product-oos">
                OUT OF STOCK
            </div>
        </div>
    )
}

export default ProductCard
