import React from 'react';
import ProductCard from "./ProductCard";

const PaginatedProducts = ({ filteredBoosters }) => {

  return (
    <div className="paginated-products">
      {filteredBoosters.map(product => (
          <ProductCard
            key={product._id}
            name={product.name}
            description={product.description}
            price={product.price}
            imageURL={product.imageURL}
            logoURL={product.logoURL}
            setType={product.setType}
            block={product.block}
            releaseDate={product.releaseDate}
            countInStock={product.countInStock}
            productId={product._id}
            />
        ))}
    </div>
  );
};

export default PaginatedProducts;