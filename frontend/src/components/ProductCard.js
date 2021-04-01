import React from 'react';
import { Link } from "react-router-dom";
import sampleBooster from "../1.jpg";

const ProductCard = ({
    name,
    price,
    imageURL,
    logoURL,
    description,
    releaseDate,
    setType,
    block,
    productId
}) => {
    return (
        <div className="product">
            <div className="product-info">
                {/* <img src={logoURL} alt={name} className="product-logo"/> */}
                <Link to={`/product/${productId}`}>
                    {/* <img src={imageURL} alt={name} /> */}
                    <img src={sampleBooster} alt={name} className="product-img"/>
                </Link>
                <div className="info-box">
                    <p className="info-name">{name}</p>
                    <p className="info-price">${price}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
