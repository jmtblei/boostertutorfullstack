import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ToastContainer } from "react-toastify";

import { getProducts as listProducts } from "../redux/actions/productActions";
import ProductCard from "./ProductCard";

const FeaturedCarousel = () => {
    const dispatch = useDispatch();
    const getProducts = useSelector((state) => state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch]);

    const randomizedProducts = products.filter(x => !x.name.includes("Core")).sort(() => 0.5 - Math.random());
    let featuredProducts = randomizedProducts.slice(0, 12);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
          }
    }

  return (
    <div className="featured-carousel">
        <h2>
            FEATURED PRODUCTS 
        </h2>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            autoPlay={false}
            infinite={true}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
        >
        {featuredProducts.map(product => (
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
        </Carousel>
        )}
        <ToastContainer />
    </div>
  );
};

export default FeaturedCarousel;