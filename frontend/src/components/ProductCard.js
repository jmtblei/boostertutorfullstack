import React from 'react';
import { Link } from "react-router-dom";
import sampleBooster from "../1.jpg";

const ProductCard = ({
    name,
    description,
    price,
    imageURL,
    logoURL,
    setType,
    block,
    releaseDate,
    countInStock,
    productId,
}) => {
    return (
        <div className="product">
            <img src={logoURL} alt={name} className="product-logo"/>
            <Link to={`/product/${productId}`}>
                {/* <img src={imageURL} alt={name} className="product-img"/> */}
                <img src={sampleBooster} alt={name} className="product-img"/>
            </Link>
            <div className="product-info">
                <p className="info-name">{name}</p>
                <p className="info-price">${price}</p>
            </div>
        </div>
    )
}

export default ProductCard
