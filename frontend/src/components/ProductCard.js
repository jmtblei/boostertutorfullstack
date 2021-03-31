import React from 'react';
import { Link } from "react-router-dom";

const ProductCard = ({
    name,
    price,
    imageURL,
    logoURL,
    description,
    symbolURL,
    releaseDate,
    setType,
    block,
    productId
}) => {
    return (
        <div>
            <img src={imageURL} alt={name} />
            <div>
                <p>{name}</p>
                <p>${price}</p>
                {/* <img src={logoURL} alt={name} /> */}
                <Link to={`/product/${productId}`}>
                    View
                </Link>
            </div>
        </div>
    )
}

export default ProductCard
