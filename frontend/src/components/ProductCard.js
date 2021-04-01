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
                <p className="info-name">{name}</p>
                <Link to={`/product/${productId}`}>
                    {/* <img src={imageURL} alt={name} /> */}
                    <img src={sampleBooster} alt={name} />
                </Link>
                <p className="info-price">${price}</p>
                {/* <img src={logoURL} alt={name} /> */}
            </div>
        </div>
    )
}

export default ProductCard
