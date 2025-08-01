import React, { useState, useEffect } from "react";
import "./productPage.css";

import { useParams } from "react-router-dom";
import axios from "axios";
import Loder from "../Loder/Loder";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }

    fetchProduct();
  }, [id]);

  return (
    <div className="page d-flex justify-content-center align-items-start flex-column px-3 py-4 pt-5">
      {!product && (
        <div className="w-100 d-flex justify-content-center align-items-center mb-4">
          <Loder />
        </div>
      )}

      <div className="container content text-light">
        {product && (
          <div className="d-flex flex-column flex-md-row justify-content-around align-items-center">
            <div className="left m-4 w-100 w-md-50 text-center">
              <img
                src={product.image}
                alt={product.title}
                className="img-fluid"
                style={{ maxHeight: "400px", objectFit: "contain" }}
              />
            </div>

            <div className="right w-100 w-md-50 m-4">
              <h2>{product.title}</h2>
              <p className="text-primary fs-3"> {product.price} $</p>
              <p className="category">{product.category}</p>
              <p>{product.description}</p>

              <div className="d-flex flex-column gap-3 mt-4">
                <button type="button" className="btn my-btn w-100">
                  Add To Cart
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary w-100"
                  onClick={() => window.history.back()}
                >
                  Back To Products
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
