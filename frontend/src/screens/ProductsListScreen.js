import React from 'react'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts as listProducts } from "../redux/actions/productActions";
import Pagination from "../components/Pagination";
import PaginatedProducts from "../components/PaginatedProducts";

const ProductsListScreen = () => {
  const [data, setData] = useState([]);
  const [sortBy, setSortBy] = useState("dateNewOld");

  const [search, setSearch] = useState("");
  const [filteredBoosters, setFilteredBoosters] = useState([]);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(12);

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

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredBoosters.slice(indexOfFirstProduct, indexOfLastProduct);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="products-list">
      <div className="products-list-upper">
        <div className="products-list-title">
          <p>{indexOfFirstProduct} - {indexOfLastProduct} of {filteredBoosters.length} Products</p>
          <p>Displaying {currentPage} of {Math.ceil(filteredBoosters.length / productsPerPage)} pages</p>
        </div>
        <div className="products-list-sort">  
          <p>Show: 
              <select 
                onChange={(e) => setProductsPerPage(e.target.value)} 
                value={currentProducts.length}
              >
                <option value="12">12 per page</option>
                <option value="24">24 per page</option>
                <option value="36">36 per page</option>
              </select>
          </p>
          <p>Sort By:
            <select onChange={sortHandler}> 
              <option value="dateNewOld">Newest to Oldest</option>
              <option value="dateOldNew">Oldest to Newest</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
              <option value="nameAZ">Name: A-Z</option>
              <option value="nameZA">Name: Z-A</option>
            </select>
          </p>
        </div>
      </div>
      <>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <>
            <div className="products-list-lower">
              <div className="products-list-search">
                <input 
                  type="text"
                  placeholder="Search Booster Tutor"
                  onChange={searchHandler}
                />
                <i className="fas fa-search"></i>
              </div>
              <Pagination
                productsPerPage={productsPerPage}
                totalProducts={filteredBoosters.length}
                paginate={paginate}
              />
            </div>
              <PaginatedProducts
                filteredBoosters={currentProducts}
              />
          </>
        )}
      </>
    </div>
  );
};

export default ProductsListScreen;
