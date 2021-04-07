import React from 'react'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductCard from "../components/ProductCard";
import { getProducts as listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
  const [search, setSearch] = useState("");
  const [filteredBoosters, setFilteredBoosters] = useState([]);

  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch]);

  useEffect(() => {
    setFilteredBoosters(
      products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, products]);

  const searchHandler = (e) => {
    setSearch(e.target.value)
    console.log(e.target.value)
  };

  return (
    <div className="homescreen">
      <div className="homescreen-upper">
        <h2 className="homescreen-title">Draft Boosters For Sale</h2>
        <div className="homescreen-search">
          <input 
            type="text"
            placeholder="Search Booster Tutor"
            onChange={searchHandler}
          />
          <i class="fas fa-search"></i>
        </div>
      </div>
      <div className="homescreen-products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <>
            {filteredBoosters.map((product) => (
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
          </>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
