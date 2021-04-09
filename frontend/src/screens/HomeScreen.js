import React from 'react'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductCard from "../components/ProductCard";
import { getProducts as listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [sortBy, setSortBy] = useState("dateNewOld");

  const [search, setSearch] = useState("");
  const [filteredBoosters, setFilteredBoosters] = useState([]);

  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch]);

  useEffect(() => {
    let sortArray = type => {
      let types = {
        dateNewOld: 'releaseDate',
        dateOldNew: 'releaseDate',
        priceLowHigh: 'price',
        priceHighLow: 'price',
        nameAZ: 'name',
        nameZA: 'name',
      };
      let sortProperty = types[type];
      switch (sortBy) {
        case "dateNewOld": {
          let sorted = [...products].sort((a, b) => b[sortProperty].localeCompare(a[sortProperty]));
          return setData(sorted);
        };
        case "dateOldNew": {
          let sorted = [...products].sort((a, b) => a[sortProperty].localeCompare(b[sortProperty]));
          return setData(sorted);
        };
        case "nameAZ": {
          let sorted = [...products].sort((a, b) => a[sortProperty].localeCompare(b[sortProperty]));
          return setData(sorted);
        };
        case "nameZA": {
          let sorted = [...products].sort((a, b) => b[sortProperty].localeCompare(a[sortProperty]));
          return setData(sorted);
        };
        case "priceLowHigh": {
          let sorted = [...products].sort((a, b) => a[sortProperty] - b[sortProperty]);
          return setData(sorted);
        };
        case "priceHighLow": {
          let sorted = [...products].sort((a, b) => b[sortProperty] - a[sortProperty]);
          return setData(sorted);
        };
        default: {
          return sortBy
        };
      };
  };
    sortArray(sortBy);
  }, [sortBy, products]); 

  useEffect(() => {
    setFilteredBoosters(
      data.filter((x) =>
        x.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, data]);

  const sortHandler = (e) => {
    setSortBy(e.target.value)
  };

  const searchHandler = (e) => {
    setSearch(e.target.value)
  };

  return (
    <div className="homescreen">
      <div className="homescreen-upper">
        <h4 className="homescreen-title">Displaying {filteredBoosters.length} Product(s)</h4>
        <div className="homescreen-search">
          <input 
            type="text"
            placeholder="Search Booster Tutor"
            onChange={searchHandler}
          />
          <i class="fas fa-search"></i>
        </div>
        <div className="homescreen-sort">  
          <p>Sort By:</p>
          <select onChange={sortHandler}> 
            <option value="dateNewOld">Newest to Oldest</option>
            <option value="dateOldNew">Oldest to Newest</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
            <option value="nameAZ">Name: A-Z</option>
            <option value="nameZA">Name: Z-A</option>
          </select>
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
