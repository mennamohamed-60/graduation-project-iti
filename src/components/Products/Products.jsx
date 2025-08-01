import React, { useState, useEffect } from "react";
import "./products.css";
import "@fontsource/marcellus";
import Loder from "../Loder/Loder";

import axios from "axios";
import ProductCard from "./../ProductCard/ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getProducts() {
    try {
      setIsLoading(true);
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  }
  function filterByCategory(category) {
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="products ">
      <div className="product-header ">
        <h1 className="text-light text-center  ">New Collections</h1>

        <div className="d-flex justify-content-center mt-4 px-2">
          <div
            className="btn-group btn-group-lg flex-column flex-md-row gap-2"
            role="group"
            aria-label="Large button group"
          >
            <button
              onClick={() => filterByCategory("all")}
              className="btn my-btn "
            >
              All
            </button>
            <button
              onClick={() => filterByCategory("men's clothing")}
              className="btn my-btn  "
            >
              Shop for men
            </button>
            <button
              onClick={() => filterByCategory("women's clothing")}
              className="btn my-btn "
            >
              Shop for women
            </button>
            <button
              onClick={() => filterByCategory("electronics")}
              className="btn my-btn "
            >
              Shop electronics
            </button>
            <button
              onClick={() => filterByCategory("jewelery")}
              className="btn my-btn "
            >
              Shop jewelry
            </button>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        {isLoading ? (
          <div className="w-100 d-flex justify-content-center align-items-center mb-4">
            <Loder />
          </div>
        ) : (
          <div className="row g-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))
            ) : (
              <p className="text-light text-center w-100">No products found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
