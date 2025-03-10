import React, { useContext, useEffect, useState } from "react";
import { productStore } from "../store/product.store";
import Product from "../components/product";

const HomePage = () => {
  const { products, fetchProducts } = useContext(productStore);
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <Product product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
